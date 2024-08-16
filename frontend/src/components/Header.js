import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <span className="glitter-text">S</span>parkle
        </h1>
        <h2>with us</h2>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
