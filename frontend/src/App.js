import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // 
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
      <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
      </div>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;