import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StockDataPage = () => {
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (companyName.trim()) {
      navigate(`/stock-details/${companyName}`);
    }
  };

  const handleComparison = () => {
    navigate("/compare-stocks");
  };

  const handleAllCompanies = () => {
    navigate("/all-companies");
  };

  const handleStockReturnCalculator = () => {
    navigate("/stock-return-calculator");
  };

  const handleSentimentAnalysis = () => {
    window.open("https://moneymatestocksapp.streamlit.app/", "_blank");
  };

  return (
    <div
      style={{
        padding: "130px 20px 20px 30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#E4E4E4",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: "#045757",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Fundamental and Sentimental Analysis Tool for Indian Stocks
      </h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Company Symbol"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          style={{
            marginRight: "10px",
            padding: "15px",
            width: "500px",
            border: "1px solid #045757",
            borderRadius: "50px",
            color: "black",
            backgroundColor: "rgba(76, 175, 80, 0.3)",
          }}
          aria-label="Company ticker input"
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px 10px",
            backgroundColor: "#044343",
            color: "#E4E4E4",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
        >
          Get Stock Data
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p
          style={{
            color: "#045757",
            fontWeight: "bold",
            marginBottom: "10px",
            fontSize: "1.3rem",
          }}
        >
          OR:
        </p>
        <div>
          <button
            onClick={handleComparison}
            style={{
              padding: "8px 30px",
              backgroundColor: "#044343",
              color: "#E4E4E4",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "1.1rem",
              marginRight: "10px",
            }}
          >
            Compare Multiple Stocks
          </button>
          <button
            onClick={handleAllCompanies}
            style={{
              padding: "8px 30px",
              backgroundColor: "#044343",
              color: "#E4E4E4",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "1.1rem",
              marginRight: "10px",
            }}
          >
            Companies with Symbols
          </button>
          <button
            onClick={handleStockReturnCalculator}
            style={{
              padding: "8px 30px",
              backgroundColor: "#044343",
              color: "#E4E4E4",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "1.1rem",
              marginRight: "10px",
            }}
          >
            Stock Return Calculator
          </button>
          <button
            onClick={handleSentimentAnalysis}
            style={{
              padding: "8px 30px",
              backgroundColor: "#044343",
              color: "#E4E4E4",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
             Different Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockDataPage;
