import React, { useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const StockDataPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [stockDetails, setStockDetails] = useState(null);
  const [stockData, setStockData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/get_stock_data?company_name=${companyName}` // API URL directly included
      );
      const { details, historical_data } = response.data;
      setStockDetails(details);
      setStockData(
        historical_data.map((item) => ({
          ...item,
          Date: new Date(item.Date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }),
        }))
      );
    } catch (err) {
      setError('Error fetching data. Please check the ticker symbol and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Stock Market Analysis</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter Company Ticker (e.g., AAPL, TSLA)"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          style={{
            marginRight: '10px',
            padding: '8px',
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
          aria-label="Company ticker input"
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '8px 15px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Stock Data'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {stockDetails && (
        <div style={{ marginTop: '20px' }}>
          <h2>Stock Details</h2>
          <p><strong>Market Cap:</strong> ₹ {stockDetails['Market Cap']}</p>
          <p><strong>Current Price:</strong> ₹ {stockDetails['Current Price']}</p>
          <p><strong>High / Low:</strong> {stockDetails['High / Low']}</p>
          <p><strong>Stock P/E:</strong> {stockDetails['Stock P/E']}</p>
          <p><strong>Book Value:</strong> ₹ {stockDetails['Book Value']}</p>
          <p><strong>Dividend Yield:</strong> {stockDetails['Dividend Yield']}</p>
          <p><strong>ROCE:</strong> {stockDetails['ROCE']}</p>
          <p><strong>Face Value:</strong> ₹ {stockDetails['Face Value']}</p>
        </div>
      )}

      {stockData.length > 0 && (
        <ResponsiveContainer width="100%" height={400} style={{ marginTop: '20px' }}>
          <LineChart data={stockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Close" stroke="#8884d8" />
            <Line type="monotone" dataKey="Open" stroke="#82ca9d" />
            <Line type="monotone" dataKey="High" stroke="#ff7300" />
            <Line type="monotone" dataKey="Low" stroke="#ff0000" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default StockDataPage;
