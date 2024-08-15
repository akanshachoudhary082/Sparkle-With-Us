// import React ,{useState} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';//Import Axios
// import './css/Login.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//      // Make POST request to backend
     
//      axios.post('http://localhost:8080/customers/login', {
//       username: 'user',
//       password: 'pass'
//     }, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
    
    

//   .then(response => {
//     // Handle successful login response
//     console.log('Login successful:', response.data);
//     // For example, you might want to store a token in localStorage or navigate to another page
//     localStorage.setItem('token', response.data.token); // Adjust based on actual response
//     navigate('/home'); // Redirect to a different page (e.g., home)
//   })
//   .catch(error => {
//     // Handle login error
//     console.error('Login failed:', error.response?.data || error.message);
//     alert('Login failed! Please check your credentials and try again.');
//   });
// };
//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLoginSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//         <button
//           type="button"
//           onClick={() => navigate('/register')}
//           className="register-button"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer'); // Default user type

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let loginUrl = '';

    // Determine the login URL based on user type
    switch (userType) {
      case 'admin':
        loginUrl = 'http://localhost:8080/admin/login';
        break;
      case 'stylist':
        loginUrl = 'http://localhost:8080/stylist/login';
        break;
      default:
        loginUrl = 'http://localhost:8080/customers/login';
    }

    // Make POST request to backend
    axios.post(loginUrl, {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      // Handle successful login response
      console.log('Login successful:', response.data);
      // Store token or other relevant data
      localStorage.setItem('token', response.data.token); // Adjust based on actual response

      // Redirect based on user type
      switch (userType) {
        case 'admin':
          navigate('/admin');
          break;
        case 'stylist':
          navigate('/stylist');
          break;
        default:
          navigate('/customer');
      }
    })
    .catch(error => {
      // Handle login error
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed! Please check your credentials and try again.');
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>User Type:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
            <option value="customer">Customer</option>
            <option value="stylist">Stylist</option>
            <option value="admin">Admin</option>
          </select>
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

