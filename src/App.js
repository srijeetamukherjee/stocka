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
import AllCompaniesPage from './components/AllCompanies';
import StockReturnCalculator from './components/StockReturnCalculator';
import News from './components/News';

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
        <Route path="/news" element={<News />} />
        <Route path="/stock-data" element={<StockDataPage />} />
        <Route path="/stock-details/:companyName" element={<StockDetailsPage />} />
        <Route path="/compare-stocks" element={<CompareStocksPage />} />
        <Route path="/all-companies" element={<AllCompaniesPage />} />
        <Route path="/stock-return-calculator" element={<StockReturnCalculator />} />
      </Routes>
    </Router>
  );
};

export default App;
