import React, { useState } from 'react';
import axios from 'axios';

const StockReturnCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [company, setCompany] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      const response = await axios.post('http://127.0.0.1:5002/api/stock-return', {
        monthly_investment: monthlyInvestment,
        company,
        investment_period: investmentPeriod,
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif',backgroundColor: '#E4E4E4',minHeight: '100vh',}}>
      <h1 style={{ textAlign: 'center', color: '#045757' }}>Stock Return Calculator</h1>
      <form onSubmit={handleCalculate}>
        <div style={{ marginBottom: '10px' , color: '#045757',}}>
          <label htmlFor="monthlyInvestment" style={{ display: 'block', marginBottom: '8px',fontSize:'1rem' }}>Monthly Investment Amount</label>
          <input
            type="number"
            id="monthlyInvestment"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            required
            style={{ width: '70%', padding: '12px', marginTop: '5px',borderRadius:'50px', fontSize:'1rem' }}
          />
        </div>
        <div style={{ marginBottom: '10px',color: '#045757', }}>
          <label htmlFor="company" style={{ display: 'block', marginBottom: '8px',fontSize:'1rem' }}>Company Name (Symbol)</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            style={{ width: '70%', padding: '12px', marginTop: '5px', borderRadius:'50px',fontSize:'1rem' }}
          />
        </div>
        <div style={{ marginBottom: '10px', color: '#045757', }}>
          <label htmlFor="investmentPeriod" style={{ display: 'block', marginBottom: '8px',fontSize:'1rem' }}>Investment Period (in months)</label>
          <input
            type="number"
            id="investmentPeriod"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(e.target.value)}
            required
            style={{ width: '70%', padding: '12px', marginTop: '5px',borderRadius:'50px',fontSize:'1rem'  }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '15px',
            backgroundColor: '#045757',
            color: 'white',
            border: 'none',
            width: '40%',
            marginLeft:'20rem',
            marginTop:'30px',
            marginBottom:'30px',
            borderRadius:'50px',
            fontSize:'1.2rem'
          }}
        >
          Calculate
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h1 style={{color: '#045757' }}>Results</h1>
          <h3 style={{color: '#045757' }}>Company: {result.company}</h3>
          <h3 style={{color: '#045757' }}>Monthly Investment: ₹{result.monthly_investment}</h3>
          <h3 style={{color: '#045757' }}>Investment Period: {result.investment_period} months</h3>
          <h3 style={{color: '#045757' }}>Expected Return: {result.expected_return_percentage.toFixed(2)}%</h3>
          <h3 style={{color: '#045757' }}>Total Investment: ₹{result.total_investment.toFixed(2)}</h3>
          <h3 style={{color: '#045757' }}>Wealth Gained: ₹{result.wealth_gained.toFixed(2)}</h3>
          <h3 style={{color: '#045757' }}>Total Return: ₹{result.total_return.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default StockReturnCalculator;
