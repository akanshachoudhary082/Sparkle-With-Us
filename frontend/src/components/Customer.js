import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/CustomerDashboard.css'; // Assuming you have some styling

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [sortedCustomers, setSortedCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNo: '',
    dob: '',
    gender: '',
    address: ''
  });

  useEffect(() => {
    // Fetch all customers on component mount
    axios.get('http://localhost:8080/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  const getCustomerById = (id) => {
    axios.get(`http://localhost:8080/customers/${id}`)
      .then(response => setCustomer(response.data))
      .catch(error => console.error(`Error fetching customer with ID ${id}:`, error));
  };

  const addCustomer = () => {
    axios.post('http://localhost:8080/customers', newCustomer, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setCustomers([...customers, response.data]);
      alert('Customer added successfully!');
    })
    .catch(error => console.error('Error adding customer:', error));
  };

  const deleteCustomer = (id) => {
    axios.delete(`http://localhost:8080/customers/${id}`)
      .then(response => {
        setCustomers(customers.filter(c => c.id !== id));
        alert('Customer deleted successfully!');
      })
      .catch(error => console.error(`Error deleting customer with ID ${id}:`, error));
  };

  const updateCustomer = (updatedCustomer) => {
    axios.put('http://localhost:8080/customers', updatedCustomer, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setCustomers(customers.map(c => (c.id === updatedCustomer.id ? response.data : c)));
      alert('Customer updated successfully!');
    })
    .catch(error => console.error('Error updating customer:', error));
  };

  const getSortedCustomers = () => {
    axios.get('http://localhost:8080/customers/sorted')
      .then(response => setSortedCustomers(response.data))
      .catch(error => console.error('Error fetching sorted customers:', error));
  };

  return (
    <div className="customer-dashboard">
      <h2>Customer Dashboard</h2>
      <div className="customer-list">
        <h3>All Customers</h3>
        <ul>
          {customers.map(c => (
            <li key={c.id}>{c.firstName} {c.lastName}</li>
          ))}
        </ul>
      </div>
      <div className="customer-details">
        {customer && (
          <>
            <h3>Customer Details</h3>
            <p>Name: {customer.firstName} {customer.lastName}</p>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phoneNo}</p>
            {/* Display other customer details */}
          </>
        )}
      </div>
      <div className="new-customer-form">
        <h3>Add New Customer</h3>
        <form onSubmit={e => { e.preventDefault(); addCustomer(); }}>
          {/* Form inputs for new customer */}
          <input type="text" placeholder="First Name" value={newCustomer.firstName} onChange={e => setNewCustomer({ ...newCustomer, firstName: e.target.value })} required />
          {/* Add other inputs similarly */}
          <button type="submit">Add Customer</button>
        </form>
      </div>
      <div className="sorted-customers">
        <h3>Sorted Customers</h3>
        <button onClick={getSortedCustomers}>Fetch Sorted Customers</button>
        <ul>
          {sortedCustomers.map(c => (
            <li key={c.id}>{c.firstName} {c.lastName}</li>
          ))}
        </ul>
      </div>
      {/* Add other sections for update and delete if needed */}
    </div>
  );
};

export default Customer;
