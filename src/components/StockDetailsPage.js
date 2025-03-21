import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const StockDetailsPage = () => {
  const { companyName } = useParams(); // This is the symbol
  const [fullName, setFullName] = useState(companyName); // Default to symbol
  const [stockDetails, setStockDetails] = useState(null);
  const [stockData, setStockData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch the full name of the company
  useEffect(() => {
    const fetchCompanyName = async () => {
      try {
        const response = await axios.get(
          `https://backend2-33bp.onrender.com/api/get_company_name?symbol=${companyName}`
        );
        setFullName(response.data.full_name);
      } catch (err) {
        console.error('Error fetching company name:', err);
      }
    };

    fetchCompanyName();
  }, [companyName]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(
          `https://backend1-696t.onrender.com/api/get_stock_data?company_name=${companyName}`
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
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [companyName]);

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#E4E4E4', // Set background color
        minHeight: '100vh', // Ensure full viewport height
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#045757' }}>
        Stock Details for {fullName||companyName}
      </h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {stockDetails && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2 style={{ color: '#045757' }}>Stock Details</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)', // Three items per row
              gap: '15px',
              marginTop: '20px',
              justifyItems: 'center',
            }}
          >
            <p><strong>Market Cap:</strong> ₹ {stockDetails['Market Cap']}</p>
            <p><strong>Current Price:</strong> ₹ {stockDetails['Current Price']}</p>
            <p><strong>High / Low:</strong> {stockDetails['High / Low']}</p>
            <p><strong>Stock P/E:</strong> {stockDetails['Stock P/E']}</p>
            <p><strong>Book Value:</strong> ₹ {stockDetails['Book Value']}</p>
            <p><strong>Dividend Yield:</strong> {stockDetails['Dividend Yield']}</p>
            <p><strong>ROCE:</strong> {stockDetails['ROCE']}</p>
            <p><strong>ROE:</strong> {stockDetails['ROE']}</p>
            <p><strong>Face Value:</strong> ₹ {stockDetails['Face Value']}</p>
          </div>
        </div>
      )}

      {stockData.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <ResponsiveContainer width="100%" height={400}>
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
        </div>
      )}
    </div>
  );
};

export default StockDetailsPage;
