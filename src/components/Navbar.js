import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.png';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#E4E4E4',
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          padding: '10px 20px',
          backgroundColor: '#E4E4E4',
        }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="MoneyMate Logo"
            style={{ height: '60px', cursor: 'pointer' }}
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#222222',
          flexGrow: 1,
          borderBottomLeftRadius: '50px'
        }}
      >
        <Link
          to="/"
          style={{
            margin: '0 10px',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize:'20px',
            padding: '19px'
          }}
        >
          Home
        </Link>
        <Link
          to="/stock-data"
          style={{
            margin: '0 10px',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize:'20px',
            padding: '12px'
          }}
        >
          Stock Data
        </Link>
        <Link
          to="/about"
          style={{
            margin: '0 10px',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize:'20px',
            padding: '12px'
          }}
        >
          About
        </Link>
        <Link
          to="/login"
          style={{
            margin: '0 10px',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize:'20px',
            padding: '12px'
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
