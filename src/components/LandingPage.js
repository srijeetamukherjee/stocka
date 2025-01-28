import React from 'react';
import { useNavigate } from 'react-router-dom';
import gif from './LP.gif';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#E4E4E4',
        height: '100vh',
        padding: '40px 10px 40px 40px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Left Section: Text and Button */}
      <div style={{ flex: 1 }}>
      <h3
    style={{
      fontSize: '5rem',
      marginBottom: '20px',
      color: '#045757',
      fontStyle: 'italic',
      fontWeight: '300', 
      whiteSpace: 'nowrap', 
    }}
  >
    Welcome to MoneyMate
  </h3>
        <p style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#045757', fontStyle: 'italic' }}>
          Stock analysis for investors in India.
        </p>
        <button
          onClick={() => navigate('/signup')}
          style={{
            padding: '20px 50px',
            fontSize: '1.2rem',
            backgroundColor: '#044343',
            color: '#E4E4E4',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </div>

      {/* Right Section: GIF */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src={gif}
          alt="MoneyMate Animation"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
