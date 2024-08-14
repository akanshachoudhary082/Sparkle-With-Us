import React ,{ useState } from 'react';
import axios from 'axios'; // Import Axios
import './css/Login.css';

const Register = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNo: '',
    dob: '',
    gender: 'male',
    address: '',
  });
//const Register = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
   
  // Handle form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
// Determine the correct URL based on the userType
let url = '';
if (formData.userType === 'admin') {
  url = 'http://localhost:8080/register/admin';
} else if (formData.userType === 'stylist') {
  url = 'http://localhost:8080/stylist/register';
} else if (formData.userType === 'customer') {
  url = 'http://localhost:8080/customer/register';
}

// Make POST request to the correct backend endpoint
axios.post(url, formData)
  .then(response => {
    // Handle successful registration
    console.log('Registration successful:', response.data);
    // Redirect or show a success message
  })
  .catch(error => {
    // Handle registration error
    console.error('Registration failed:', error.response?.data || error.message);
    alert('Registration failed! Please try again.');
  });
};

    

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
