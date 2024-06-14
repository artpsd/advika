import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Icons/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li> {/* Link to the blog page */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;