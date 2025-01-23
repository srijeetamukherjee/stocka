import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StockDataPage = () => {
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (companyName.trim()) {
      navigate(`/stock-details/${companyName}`);
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
        >
          Get Stock Data
        </button>
      </div>
    </div>
  );
};

export default StockDataPage;
