import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => navigate('/register')}
          className="register-button"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
