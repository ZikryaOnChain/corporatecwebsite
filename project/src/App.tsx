import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;