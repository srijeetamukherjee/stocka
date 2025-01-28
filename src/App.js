import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import StockDataPage from './components/StockDataPage';
import AboutPage from './components/AboutPage';
import StockDetailsPage from './components/StockDetailsPage';
import CompareStocksPage from './components/CompareStocksPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Stock-related Routes */}
        <Route path="/stock-data" element={<StockDataPage />} />
        <Route path="/stock-details/:companyName" element={<StockDetailsPage />} />
        <Route path="/compare-stocks" element={<CompareStocksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
