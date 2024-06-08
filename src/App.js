// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Clients from './components/Clients'
import Services from './components/Services';
import MeetOurTeam from './components/MeetOurTeam';
import Gallery from './components/Gallery';
import Blog from './components/BlogSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.css'; // Import App styles


const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Banner />
      <Clients />
      <AboutUs />
      <Services/>
      <MeetOurTeam />
      <Gallery />
      <Blog /> */}
      
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blog" element={<Blog />} />
       
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
