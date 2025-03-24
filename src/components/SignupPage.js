import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use navigate instead of useHistory in React Router v6+

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    navigate('/stock-data'); 
  };


  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      {/* Left Side: Signup Form (60% width) */}
      <div
        style={{
          width: '60%',
          backgroundColor: '#E4E4E4',
          color: '#045757',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1>Create your account here</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px', marginLeft: '10px'}}>
            <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px' }}>First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{ width: '90%', padding: '12px', marginTop: '5px', borderRadius:'50px', }}
            />
          </div>
          <div style={{ marginBottom: '10px', marginLeft: '10px' }}>
            <label htmlFor="lastName"style={{ display: 'block', marginBottom: '5px' }}>Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{ width: '90%', padding: '12px', marginTop: '5px',borderRadius:'50px' }}
            />
          </div>
          <div style={{ marginBottom: '10px', marginLeft: '10px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '90%', padding: '12px', marginTop: '5px', borderRadius:'50px' }}
            />
          </div>
          <div style={{ marginBottom: '10px', marginLeft: '10px'}}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '90%', padding: '12px', marginTop: '5px', borderRadius:'50px' }}
            />
          </div>
          <div style={{ marginBottom: '10px', marginLeft: '10px' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ width: '90%', padding: '12px', marginTop: '5px', borderRadius:'50px' }}
            />
          </div>
          <button type="submit" style={{ width: '40%', padding: '25px', backgroundColor: '#045757', color: 'white', border: 'none', borderRadius:'50px', marginTop:'20px', alignContent:'center', marginLeft: '250px', cursor:'pointer', fontSize:'1.4rem' }}>
            Sign Up
          </button>
        </form>
      </div>

      {/* Right Side: Login Button (40% width) */}
      <div
        style={{
          width: '40%',
          backgroundColor: 'black',justifyContent: 'center', flex: 1,display: 'flex',
        }}
      >
        <div>
          <h1 style={{color: '#12C6C6', padding:'250px 100px 30px 100px'}}>Already have an account?</h1>
          <button onClick={goToLogin} style={{ padding: '25px', backgroundColor: '#E4E4E4', border: 'none', marginLeft:'200px', borderRadius: '50px', maxWidth: '30%', width:'40%', fontSize:'1.4rem', cursor:'pointer'}}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
