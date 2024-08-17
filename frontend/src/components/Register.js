// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import './css/Register.css';

// const Register = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { userType } = location.state || { userType: 'customer' };

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     phoneNo: '',
//     dob: '',
//     gender: '',
//     address: '',
//     specialization: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleRegisterSubmit = (e) => {
//     e.preventDefault();
//     let registerUrl = '';

//     if (userType === 'customer') {
//       registerUrl = 'http://localhost:8080/customers/register';
//     } else if (userType === 'stylist') {
//       registerUrl = 'http://localhost:8080/stylist/register';
//     } else {
//       alert('Invalid user type');
//       return;
//     }

//     axios.post(registerUrl, formData, { headers: { 'Content-Type': 'application/json' } })
//       .then(response => {
//         console.log('Registration successful:', response.data);
//         alert('Registration successful!');
//         navigate('/login');
//       })
//       .catch(error => {
//         console.error('Registration failed:', error.response?.data || error.message);
//         alert('Registration failed! Please check your details and try again.');
//       });
//   };

//   return (
//     <div className="register-container">
//       <h2>Register as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h2>
//       <form onSubmit={handleRegisterSubmit}>
//         <div className="form-group">
//           <label>First Name:</label>
//           <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Last Name:</label>
//           <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone Number:</label>
//           <input type="text" name="phoneNo" placeholder="Phone Number" value={formData.phoneNo} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Date of Birth:</label>
//           <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />
//         </div>
//         {userType === 'customer' && (
//           <>
//             <div className="form-group">
//               <label>Gender:</label>
//               <select name="gender" value={formData.gender} onChange={handleChange} required>
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Address:</label>
//               <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea>
//             </div>
//           </>
//         )}
//         {userType === 'stylist' && (
//           <div className="form-group">
//             <label>Specialization:</label>
//             <select name="specialization" value={formData.specialization} onChange={handleChange} required>
//               <option value="">Select Specialization</option>
//               <option value="HAIRCUTS">HAIRCUTS</option>
//               <option value="NAIL_ARTIST">NAIL ARTIST</option>
//               <option value="WAXING_SPECIALIST">WAXING SPECIALIST</option>
//               <option value="MAKEUP_ARTIST">MAKEUP ARTIST</option>
//             </select>
//           </div>
//         )}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './css/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || { userType: 'customer' }; // Default to 'customer' if userType is not provided

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNo: '',
    dob: '',
    gender: '',
    address: {
      adrLine1: '',
      adrLine2: '',
      city: '',
      state: '',
      country: '',
      zipCode: ''
    },
    specialization: ''
  });

  const [passwordError, setPasswordError] = useState('');

  // Function to validate the password
  const validatePassword = (password) => {
    const regex = /^(?=.[A-Z])(?=.\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prevData => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData(prevData => ({ ...prevData, [name]: value }));
    }
    if (name === 'password') {
      if (!validatePassword(value)) {
        setPasswordError('Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let registerUrl = '';

    if (userType === 'customer') {
      registerUrl = 'http://localhost:8080/customers'; // Use the customer registration endpoint
    } else if (userType === 'stylist') {
      registerUrl = 'http://localhost:8080/stylist'; // Use the stylist registration endpoint
    } else {
      alert('Invalid user type');
      return;
    }

    const registrationData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      phoneNo: formData.phoneNo,
      dob: new Date(formData.dob).toISOString().split('T')[0],
      gender: formData.gender,
      address: {
        adrLine1: formData.address.adrLine1,
        adrLine2: formData.address.adrLine2,
        city: formData.address.city,
        state: formData.address.state,
        country: formData.address.country,
        zipCode: formData.address.zipCode
      },
      specialization: formData.specialization
    };

    console.log('Registration data:', registrationData); // Log data for debugging


    axios.post(registerUrl, formData, { headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        console.log('Registration successful:', response.data);
        alert('Registration successful!');
        navigate('/login'); // Redirect to the login page after successful registration
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
          {passwordError && <p className="error">{passwordError}</p>}
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
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Address Line 1:</label>
              <input type="text" name="address.adrLine1" placeholder="Address Line 1" value={formData.adrLine1} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Address Line 2:</label>
              <input type="text" name="address.adrLine2" placeholder="Address Line 2" value={formData.adrLine2} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input type="text" name="address.city" placeholder="City" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input type="text" name="address.state" placeholder="State" value={formData.state} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Country:</label>
              <input type="text" name="address.country" placeholder="Country" value={formData.country} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Zip Code:</label>
              <input type="text" name="address.zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} required />
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