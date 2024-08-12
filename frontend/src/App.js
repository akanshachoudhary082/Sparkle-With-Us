import logo from './logo.svg';
import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import AdminLogin from './components/AdminLogin';
// import AdminDashboard from './components/AdminDashboard';
// import CustomerList from './components/CustomerList';
// import PaymentList from './components/PaymentList';
// import BookingList from './components/BookingList';
// import StylistList from './components/StylistList';
// import ReviewList from './components/ReviewList';
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      {/* <main>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/payment-list" element={<PaymentList />} />
          <Route path="/booking-list" element={<BookingList />} />
          <Route path="/stylist-list" element={<StylistList />} />
          <Route path="/review-list" element={<ReviewList />} />
        </Routes>
      </main> */}
      <Footer />
    </Router>
  );
}

export default App;
