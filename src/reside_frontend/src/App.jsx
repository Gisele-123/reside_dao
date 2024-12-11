import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Residence from './Pages/Residence';
import Apartment from './Pages/Apartment';
import Council from './Pages/Council';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residence" element={<Residence />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/council" element={<Council />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;