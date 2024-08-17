
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Stylist.css';

const Stylist = () => {
  const [stylists, setStylists] = useState([]);
  const [selectedStylist, setSelectedStylist] = useState(null);
  const [stylistId, setStylistId] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [stylistDetails, setStylistDetails] = useState({});

  useEffect(() => {
    fetchAllStylists();
  }, []);

  const fetchAllStylists = () => {
    axios.get('http://localhost:8080/stylists')
      .then(response => setStylists(response.data))
      .catch(error => console.error('Error fetching stylists:', error));
  };

  const fetchStylistById = () => {
    if (stylistId) {
      axios.get(`http://localhost:8080/stylists/id/${stylistId}`)
        .then(response => setSelectedStylist(response.data))
        .catch(error => console.error('Error fetching stylist by ID:', error));
    }
  };

  const fetchAvailableStylists = () => {
    axios.get('http://localhost:8080/stylists/available')
      .then(response => setStylists(response.data))
      .catch(error => console.error('Error fetching available stylists:', error));
  };

  const fetchStylistsBySpecialization = () => {
    if (specialization) {
      axios.get(`http://localhost:8080/stylists/${specialization}`)
        .then(response => setStylists(response.data))
        .catch(error => console.error('Error fetching stylists by specialization:', error));
    }
  };

  const deleteStylistById = () => {
    if (stylistId) {
      axios.delete(`http://localhost:8080/stylists/${stylistId}`)
        .then(() => {
          setStylists(stylists.filter(stylist => stylist.id !== parseInt(stylistId)));
          alert('Stylist deleted successfully');
        })
        .catch(error => console.error('Error deleting stylist:', error));
    }
  };

  const updateStylistDetails = () => {
    axios.put('http://localhost:8080/stylists', stylistDetails)
      .then(response => {
        setStylists(stylists.map(stylist => stylist.id === response.data.id ? response.data : stylist));
        alert('Stylist updated successfully');
      })
      .catch(error => console.error('Error updating stylist:', error));
  };

  const handleStylistDetailChange = (e) => {
    setStylistDetails({
      ...stylistDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="stylist-dashboard">
      <div className="sidebar">
        <h3>Stylist Management</h3>
        <button onClick={fetchAllStylists}>List of All Stylists</button>
        <div>
          <input
            type="text"
            placeholder="Enter Stylist ID"
            value={stylistId}
            onChange={(e) => setStylistId(e.target.value)}
          />
          <button onClick={fetchStylistById}>Get Stylist By ID</button>
        </div>
        <button onClick={fetchAvailableStylists}>Available Stylists</button>
        <div>
          <input
            type="text"
            placeholder="Enter Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
          <button onClick={fetchStylistsBySpecialization}>Stylist Specification</button>
        </div>
        <button onClick={deleteStylistById}>Delete Stylist By ID</button>
      </div>
      <div className="content">
        <h3>Stylist Information</h3>
        {selectedStylist && (
          <div>
            <h4>Stylist Details</h4>
            <p>ID: {selectedStylist.id}</p>
            <p>Name: {selectedStylist.firstName} {selectedStylist.lastName}</p>
            <p>Email: {selectedStylist.email}</p>
            <p>Specialization: {selectedStylist.specialization}</p>
            <p>Available: {selectedStylist.availability ? 'Yes' : 'No'}</p>
          </div>
        )}
        <div>
          <h4>Update Stylist</h4>
          <input
            type="text"
            name="id"
            placeholder="Enter Stylist ID"
            value={stylistDetails.id || ''}
            onChange={handleStylistDetailChange}
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={stylistDetails.firstName || ''}
            onChange={handleStylistDetailChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={stylistDetails.lastName || ''}
            onChange={handleStylistDetailChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={stylistDetails.email || ''}
            onChange={handleStylistDetailChange}
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={stylistDetails.specialization || ''}
            onChange={handleStylistDetailChange}
          />
          <button onClick={updateStylistDetails}>Update Stylist</button>
        </div>
        <div>
          <h4>All Stylists</h4>
          <ul>
            {stylists.map(stylist => (
              <li key={stylist.id}>
                {stylist.firstName} {stylist.lastName} - {stylist.specialization}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stylist;
