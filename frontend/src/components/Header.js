import React from 'react';
import "./Header.css"
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Sparkle With Us</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/admin-dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/customer-list">Customers</Nav.Link>
          <Nav.Link as={Link} to="/payment-list">Payments</Nav.Link>
          <Nav.Link as={Link} to="/booking-list">Bookings</Nav.Link>
          <Nav.Link as={Link} to="/stylist-list">Stylists</Nav.Link>
          <Nav.Link as={Link} to="/review-list">Reviews</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
