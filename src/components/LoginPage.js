import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: '#1E1E1E', color: '#12C6C6', padding: '100px', paddingTop:'130px' }}>
      <h1 style={{fontSize: '5rem',
      marginBottom: '40px',
      color: '#12C6C6',
      fontStyle: 'italic',
      fontWeight: '500', 
      whiteSpace: 'nowrap',}}>Login to Your Account</h1>
        <input
          type="email"
          placeholder="Email"
          style={{ display: 'block', margin: '10px 0', padding: '15px', width: '70%', borderRadius:'50px', marginLeft: '60px', marginBottom: '20px',backgroundColor:'#045757', color:'white'  }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ display: 'block', margin: '10px 0', padding: '15px', width: '70%', borderRadius:'50px', marginLeft: '60px', backgroundColor:'#045757', color:'white',
 } }
        />
        <button
          onClick={() => navigate('/stock-data')}
          style={{ width: '40%', padding: '20px', backgroundColor: '#E4E4E4', color: '#222222', border: 'none', borderRadius:'50px', marginTop:'20px', alignContent:'center', marginLeft: '200px', cursor:'pointer', fontSize:'1.4rem' }}
        >
          Login
        </button>
      </div>
      <div style={{ flex: 1, backgroundColor: '#f5f5f5', padding: '200px', textAlign: 'center' }}>
        <h1 style={{color:'#044343', fontSize:'3rem'}}>New Here?</h1>
        <p style={{color:'#045757', fontSize:'2rem'}}>Sign up and discover a great amount of new opportunities!</p>
        <button
          onClick={() => navigate('/signup')}
          style={{ width: '40%', padding: '20px', backgroundColor: '#222222', color: '#E4E4E4', border: 'none', borderRadius: '50px', cursor:'pointer', fontSize:'1.4rem' }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
