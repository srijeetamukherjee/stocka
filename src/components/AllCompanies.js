import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllCompaniesPage = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('https://backend2-33bp.onrender.com/api/all-companies');
        setCompanies(response.data);
      } catch (err) {
        setError('Failed to fetch company data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#E4E4E4',
        minHeight: '100vh',  // Ensure the div takes full height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#045757' }}>All Companies</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {companies.length > 0 && (
        <table
          style={{
            width: '80%',
            margin: '0 auto',
            borderCollapse: 'collapse',
            backgroundColor: '#fff', // Table background color
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional: adds shadow around the table
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: '#045757', // Header background color
                color: '#fff',
              }}
            >
              <th
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  textAlign: 'center', // Center the text
                }}
              >
                Symbol
              </th>
              <th
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  textAlign: 'center', // Center the text
                }}
              >
                Full Name
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: '#f7f7f7', // Body background color
            }}
          >
            {companies.map((company) => (
              <tr key={company.Symbol} style={{ backgroundColor: '#ffffff' }}>
                <td
                  style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    textAlign: 'center', // Center the text
                  }}
                >
                  {company.Symbol}
                </td>
                <td
                  style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    textAlign: 'center', // Center the text
                  }}
                >
                  {company.Name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllCompaniesPage;
