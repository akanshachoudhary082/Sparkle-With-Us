import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './css/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || { userType: 'customer' };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNo: '',
    dob: '',
    gender: '',
    address: '',
    specialization: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let registerUrl = '';

    if (userType === 'customer') {
      registerUrl = 'http://localhost:8080/customers/register';
    } else if (userType === 'stylist') {
      registerUrl = 'http://localhost:8080/stylists/register';
    } else {
      alert('Invalid user type');
      return;
    }

    axios.post(registerUrl, formData, { headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        console.log('Registration successful:', response.data);
        alert('Registration successful!');
        navigate('/login');
      })
      .catch(error => {
        console.error('Registration failed:', error.response?.data || error.message);
        alert('Registration failed! Please check your details and try again.');
      });
  };

  return (
    <div className="register-container">
      <h2>Register as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h2>
      <form onSubmit={handleRegisterSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" name="phoneNo" placeholder="Phone Number" value={formData.phoneNo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />
        </div>
        {userType === 'customer' && (
          <>
            <div className="form-group">
              <label>Gender:</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea>
            </div>
          </>
        )}
        {userType === 'stylist' && (
          <div className="form-group">
            <label>Specialization:</label>
            <select name="specialization" value={formData.specialization} onChange={handleChange} required>
              <option value="">Select Specialization</option>
              <option value="HAIRCUTS">HAIRCUTS</option>
              <option value="NAIL_ARTIST">NAIL ARTIST</option>
              <option value="WAXING_SPECIALIST">WAXING SPECIALIST</option>
              <option value="MAKEUP_ARTIST">MAKEUP ARTIST</option>
            </select>
          </div>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
