import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import Button from './Button';
import banner from '../Icons/banner.jpg';  // Import the banner image

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="banner-content">
        <h1>Best Food Consultancy</h1>
        <p>Advika.cc is a food consulting company based in Bangalore with seven years of experience and a proven track record of success in diverse food industry projects.</p>
        <div className="banner-buttons">
        <Link to="/Contact">
            <Button type="primary">Let's Talk</Button>
        </Link>
        <Button type="secondary">Services</Button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
