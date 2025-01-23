import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StockDataPage from './StockDataPage';
import StockDetailsPage from './StockDetailsPage.js';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<StockDataPage />} />
      <Route path="/stock-details/:companyName" element={<StockDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
