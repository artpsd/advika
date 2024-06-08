import React from 'react';
import logo from '../Icons/logo.png';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <p>
          In the new era of technology, we look into the future with certainty and pride for our company.
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-middle">
        <h3>Pages</h3>
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> */}
      </div>
      <div className="footer-right">
        <h3>Gallery</h3>
        {/* Add images from the gallery */}
        {/* { <div className="footer-gallery">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
        </div> } */}
      </div>
    </footer>
  );
};

export default Footer;
