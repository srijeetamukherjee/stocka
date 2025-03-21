import React, { useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CompareStocksPage = () => {
  const [company1, setCompany1] = useState("");
  const [company2, setCompany2] = useState("");
  const [company3, setCompany3] = useState("");
  const [stockData, setStockData] = useState([]);
  const [stockDetails, setStockDetails] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    setLoading(true);
    setError("");
    try {
      const tickers = [company1, company2, company3].filter((ticker) =>
        ticker.trim()
      );
      if (tickers.length < 2) {
        setError("Please enter at least two company tickers to compare.");
        setLoading(false);
        return;
      }

      const promises = tickers.map((ticker) =>
        axios.get(
          `http://127.0.0.1:5000/api/get_stock_data?company_name=${ticker}`
        )
      );

      const responses = await Promise.all(promises);

      const allData = responses.map((response, index) => {
        const { historical_data, details } = response.data;
        return {
          details,
          historicalData: historical_data.map((item) => ({
            ...item,
            Date: new Date(item.Date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
            Company: tickers[index],
          })),
        };
      });

      // Set stock details
      const stockDetailsMap = {};
      tickers.forEach((ticker, index) => {
        stockDetailsMap[ticker] = allData[index].details;
      });
      setStockDetails(stockDetailsMap);

      // Unify the dates for all companies
      const uniqueDates = Array.from(
        new Set(allData.flatMap((data) => data.historicalData.map((item) => item.Date)))
      ).sort((a, b) => new Date(a) - new Date(b));

      // Map data for unified dates
      const unifiedData = uniqueDates.map((date) => {
        const entry = { Date: date };
        tickers.forEach((ticker, index) => {
          const stock = allData[index].historicalData.find((item) => item.Date === date);
          entry[ticker] = stock ? stock.Close : null; // Use null if no data for the date
        });
        return entry;
      });

      setStockData(unifiedData);
    } catch (err) {
      setError("Error fetching data for one or more tickers.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "100px 20px 20px 30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#E4E4E4",
        display: "flex",
        flexDirection: "column",
        minHeight: '100vh',
        
      }}
    >
      <h1
        style={{
          color: "#045757",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Compare Multiple Stocks
      </h1>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Enter Ticker 1 (e.g., AAPL)"
            value={company1}
            onChange={(e) => setCompany1(e.target.value)}
            style={{
              marginRight: "10px",
              padding: "10px",
              width: "300px",
              border: "1px solid #045757",
              borderRadius: "50px",
              color: "black",
              backgroundColor: "rgba(76, 175, 80, 0.3)",
            }}
            aria-label="Company ticker 1 input"
          />
          <input
            type="text"
            placeholder="Enter Ticker 2 (e.g., TSLA)"
            value={company2}
            onChange={(e) => setCompany2(e.target.value)}
            style={{
              marginRight: "10px",
              padding: "10px",
              width: "300px",
              border: "1px solid #045757",
              borderRadius: "50px",
              color: "black",
              backgroundColor: "rgba(76, 175, 80, 0.3)",
            }}
            aria-label="Company ticker 2 input"
          />
          <input
            type="text"
            placeholder="Enter Ticker 3 (e.g., MSFT)"
            value={company3}
            onChange={(e) => setCompany3(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              border: "1px solid #045757",
              borderRadius: "50px",
              color: "black",
              backgroundColor: "rgba(76, 175, 80, 0.3)",
            }}
            aria-label="Company ticker 3 input"
          />
        </div>

        <button
          onClick={handleCompare}
          style={{
            padding: "10px 20px",
            backgroundColor: "#044343",
            color: "#E4E4E4",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "1.1rem",
            marginTop: "2rem",
          }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Compare Stocks"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {stockData.length > 0 && (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Legend />
              {company1 && <Line type="monotone" dataKey={company1} stroke="#8884d8" name={`${company1} Close`} />}
              {company2 && <Line type="monotone" dataKey={company2} stroke="#82ca9d" name={`${company2} Close`} />}
              {company3 && <Line type="monotone" dataKey={company3} stroke="#ff7300" name={`${company3} Close`} />}
            </LineChart>
          </ResponsiveContainer>

          {/* Stock Details Table */}
          <h2 style={{ textAlign: "center", marginTop: "80px", color: "#045757" }}>Stock Details</h2>
          <table
            style={{
              width: "80%",
              margin: "20px auto",
              borderCollapse: "collapse",
              backgroundColor: "#fff",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#045757", color: "#fff" }}>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Detail</th>
                {Object.keys(stockDetails).map((ticker) => (
                  <th key={ticker} style={{ padding: "10px", border: "1px solid #ddd" }}>{ticker}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["Market Cap", "Current Price", "High / Low", "Stock P/E", "Book Value", "Dividend Yield", "Face Value"].map((key) => (
                <tr key={key}>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{key}</td>
                  {Object.keys(stockDetails).map((ticker) => (
                    <td key={ticker} style={{ padding: "10px", border: "1px solid #ddd" }}>{stockDetails[ticker][key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CompareStocksPage;
