import React ,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';//Import Axios
import './css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
     // Make POST request to backend
     axios.post('http://localhost:8080/signin', {
      email,
      password,
    })
  

  .then(response => {
    // Handle successful login response
    console.log('Login successful:', response.data);
    // For example, you might want to store a token in localStorage or navigate to another page
    localStorage.setItem('token', response.data.token); // Adjust based on actual response
    navigate('/home'); // Redirect to a different page (e.g., home)
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
