import React from 'react';
import './Style.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Sparkle With Us Salon</h1>
      <p>Your one-stop solution for all beauty needs.</p>
      <img src={require('../images/hairdresser-tools-on-black.webp')} alt="Salon Background" className="background-image" />
    </div>
  );
};

export default Home;
