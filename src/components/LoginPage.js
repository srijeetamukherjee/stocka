import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: '#333', color: '#fff', padding: '20px' }}>
        <h2>Login to Your Account</h2>
        <input
          type="email"
          placeholder="Email"
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '90%' }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '90%' }}
        />
        <button
          onClick={() => navigate('/stock-data')}
          style={{ padding: '8px 15px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Login
        </button>
      </div>
      <div style={{ flex: 1, backgroundColor: '#f5f5f5', padding: '20px', textAlign: 'center' }}>
        <h2>New Here?</h2>
        <p>Sign up and discover a great amount of new opportunities!</p>
        <button
          onClick={() => navigate('/signup')}
          style={{ padding: '8px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
