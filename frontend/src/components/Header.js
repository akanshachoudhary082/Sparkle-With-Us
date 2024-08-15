import React from 'react';
import { Link } from 'react-router-dom';
// import './Style.css';
import './css/Style.css';


const Header = () => {
  return (
    <header className="header">
      <img src={require('../images/images.png')} alt="Salon Logo" className="logo" />
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          {/* <li><Link to="/admin">Admin</Link></li> */}
          {/* <li><Link to="/signup">Sign Up</Link></li> */}
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/booking">Booking</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
