import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'; // 
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import Booking from './components/Booking';
import Customer from './components/Customer';
import Admin from './components/Admin';
import Stylist from './components/Stylist';
import Payment from './components/Payment';
import './App.css';



function App() {
  useEffect(() => {
    // Perform a test GET request to verify Axios setup
    axios.get('/test-endpoint')
      .then(response => {
        console.log('Test request successful:', response.data);
      })
      .catch(error => {
        console.error('Test request failed:', error);
      });
  }, []);
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking/:serviceId"  element={<Booking />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/stylist" element={<Stylist />} />
        <Route path="/payment" element={<Payment />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

