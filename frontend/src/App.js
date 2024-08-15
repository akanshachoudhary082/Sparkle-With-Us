// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/Header'; // 
// import Footer from './components/Footer';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
// import Login from './components/Login';
// import Register from './components/Register';
// import './App.css';
// import Services from './components/Services';
// import Cart from './components/Cart';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// function App() {
//   useEffect(() => {
//     // Perform a test GET request to verify Axios setup
//     axios.get('/test-endpoint')
//       .then(response => {
//         console.log('Test request successful:', response.data);
//       })
//       .catch(error => {
//         console.error('Test request failed:', error);
//       });
//   }, []);
//   return (
//     <Router> 
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/contactus" element={<ContactUs />} />
//         <Route path="/services" element={<Services />} />
     
//         <Route path="/login" element={<Login/>} />
//         <Route path="/register" element={<Register />} />

//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

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
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route 
          path="/services" 
          element={<Services cart={cart} setCart={setCart} />} 
        />
        <Route 
          path="/cart" 
          element={<Cart cart={cart} />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
