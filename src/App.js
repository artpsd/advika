// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Footer from './components/Footer';
import './App.css'; // Import App styles


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Blog" element={<Blog />} />
       
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
