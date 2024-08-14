import React from 'react';
import './css/Login.css';

const Register = () => {
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNo" required />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
