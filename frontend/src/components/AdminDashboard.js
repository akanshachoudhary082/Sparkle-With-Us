import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/AdminDashboard.css';

const SearchModal = ({ isOpen, onClose, onSearch, placeholder }) => {
    const [searchId, setSearchId] = useState('');

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Search by ID</h2>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <div className="modal-buttons">
                    <button onClick={() => onSearch(searchId)}>Search</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

const AdminDashboard = () => {
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [data, setData] = useState(null);
    const [searchId, setSearchId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSectionClick = (section) => {
        setSelectedSection(section);
        setSelectedOption(null);
        setData(null);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        if (option === 'searchById') {
            setIsModalOpen(true);
        } else if (option === 'specifications') {
            // Manually set the data for stylist specifications
            setData([
                'HAIRCUTS',
                'NAIL_ARTIST',
                'WAXING_SPECIALIST',
                'MAKEUP_ARTIST'
            ]);
        } else {
            loadData(option);
        }
    };

    const handleSearch = (id) => {
        console.log("Searching for ID:", id);
        setSearchId(id);
        setIsModalOpen(false);
        loadData('searchById', id);
    };

    const loadData = (option, id = null) => {
        let url = '';

        switch (selectedSection) {
            case 'customers':
                switch (option) {
                    case 'all':
                        url = 'http://localhost:8080/admin/customers';
                        break;
                    case 'searchById':
                        url = `http://localhost:8080/admin/customers/${id}`;
                        break;
                    case 'sorted':
                        url = 'http://localhost:8080/admin/customers/sorted';
                        break;
                    default:
                        setData(null);
                        return;
                }
                break;

            case 'stylists':
                switch (option) {
                    case 'all':
                        url = 'http://localhost:8080/admin/stylists';
                        break;
                    case 'searchById':
                        url = `http://localhost:8080/admin/stylists/${id}`;
                        break;
                    case 'available':
                        url = 'http://localhost:8080/admin/stylist/available';
                        break;
                    default:
                        setData(null);
                        return;
                }
                break;

            case 'services':
                switch (option) {
                    case 'all':
                        url = 'http://localhost:8080/admin/services';
                        break;
                    case 'searchById':
                        url = `http://localhost:8080/admin/service/${id}`;
                        break;
                    default:
                        setData(null);
                        return;
                }
                break;

            case 'bookings':
                switch (option) {
                    case 'all':
                        url = 'http://localhost:8080/admin/booking';
                        break;
                    case 'searchById':
                        url = `http://localhost:8080/admin/booking/${id}`;
                        break;
                    case 'sortedByDate':
                        url = 'http://localhost:8080/admin/booking/sorted';
                        break;
                    default:
                        setData(null);
                        return;
                }
                break;

            default:
                setData(null);
                return;
        }

        console.log("Fetching data from URL:", url);

        axios.get(url)
            .then(response => {
                console.log("API response:", response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error.response?.data || error.message);
                setData(null);
            });
    };

    const handleLogout = () => {
        navigate('/');
    };

    const renderContent = () => {
        if (!selectedSection) {
            return <p>Please select a section to view details.</p>;
        }

        if (data === null) {
            return <p>No data available. The ID might not exist or there was an error fetching the data.</p>;
        }

        const renderSingleItem = (item) => {
            switch (selectedSection) {
                case 'customers':
                    return (
                        <div key={item.id} className="customer-card">
                            <h3>{item.firstName} {item.lastName}</h3>
                            <p>Email: {item.email}</p>
                            <p>Phone: {item.phoneNo}</p>
                            <p>Date of Birth: {item.dob}</p>
                            <p>Gender: {item.gender}</p>
                            <h4>Address:</h4>
                            <p>Address Line 1: {item.address.adrLine1}</p>
                            <p>Address Line 2: {item.address.adrLine2}</p>
                            <p>City: {item.address.city}</p>
                            <p>State: {item.address.state}</p>
                            <p>Country: {item.address.country}</p>
                            <p>Zip Code: {item.address.zipCode}</p>
                        </div>
                    );
                case 'stylists':
                    if (selectedOption === 'specifications') {
                        return (
                            <div key={item} className="specification-card">
                                <h3>{item}</h3>
                            </div>
                        );
                    } else {
                        return (
                            <div key={item.id} className="stylist-card">
                                <h3>{item.firstName} {item.lastName}</h3>
                                <p>Email: {item.email}</p>
                                <p>Phone: {item.phoneNo}</p>
                                <p>Date of Birth: {item.dob}</p>
                                <p>Specialization: {item.specialization}</p>
                                <p>Availability: {item.availability ? 'Available' : 'Not Available'}</p>
                            </div>
                        );
                    }
                case 'services':
                    return (
                        <div key={item.id} className="service-card">
                            <h3>{item.name}</h3>
                            <p>Description: {item.description}</p>
                            <p>Price: <span className="price">${item.price}</span></p>
                            <p>Type: {item.type}</p>
                            <p>Stylist: {item.stylist ? `${item.stylist.firstName} ${item.stylist.lastName}` : 'N/A'}</p>
                        </div>
                    );
                case 'bookings':
                    return (
                        <div key={item.id} className="booking-card">
                            <h3>Booking ID: {item.id}</h3>
                            <p>Customer: {item.customers ? `${item.customers.firstName} ${item.customers.lastName}` : 'N/A'}</p>
                            <p>Stylist: {item.stylist ? `${item.stylist.firstName} ${item.stylist.lastName}` : 'N/A'}</p>
                            <p>Services: {item.services ? item.services.map(service => service.type).join(', ') : 'N/A'}</p>
                            <p>Date: {item.date}</p>
                            <p>Status: {item.booking_status}</p>
                        </div>
                    );
                default:
                    return null;
            }
        };

        if (Array.isArray(data)) {
            return data.map(item => renderSingleItem(item));
        } else {
            return renderSingleItem(data);
        }
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <h2>Admin Dashboard</h2>
                <ul>
                    <li onClick={() => handleSectionClick('customers')}>Customer Management
                        {selectedSection === 'customers' && (
                            <ul className="dropdown-menu">
                                <li onClick={() => handleOptionClick('all')}>All Customers</li>
                                <li onClick={() => handleOptionClick('searchById')}>Search Customer By Id</li>
                                <li onClick={() => handleOptionClick('sorted')}>Sorted Customer By Name</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => handleSectionClick('stylists')}>Stylist Management
                        {selectedSection === 'stylists' && (
                            <ul className="dropdown-menu">
                                <li onClick={() => handleOptionClick('all')}>All Stylists</li>
                                <li onClick={() => handleOptionClick('searchById')}>Search Stylist By Id</li>
                                <li onClick={() => handleOptionClick('available')}>Available Stylist</li>
                                <li onClick={() => handleOptionClick('specifications')}>Stylist Specifications
                                    {selectedOption === 'specifications' && (
                                        <ul className="dropdown-submenu">
                                            <li onClick={() => handleOptionClick('HAIRCUTS')}>HAIRCUTS</li>
                                            <li onClick={() => handleOptionClick('NAIL_ARTIST')}>NAIL ARTIST</li>
                                            <li onClick={() => handleOptionClick('WAXING_SPECIALIST')}>WAXING SPECIALIST</li>
                                            <li onClick={() => handleOptionClick('MAKEUP_ARTIST')}>MAKEUP ARTIST</li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => handleSectionClick('services')}>Service Management
                        {selectedSection === 'services' && (
                            <ul className="dropdown-menu">
                                <li onClick={() => handleOptionClick('all')}>All Services</li>
                                <li onClick={() => handleOptionClick('searchById')}>Search Service By Id</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => handleSectionClick('bookings')}>Booking Management
                        {selectedSection === 'bookings' && (
                            <ul className="dropdown-menu">
                                <li onClick={() => handleOptionClick('all')}>All Bookings</li>
                                <li onClick={() => handleOptionClick('searchById')}>Search Booking By Id</li>
                                <li onClick={() => handleOptionClick('sortedByDate')}>Sorted Booking By Date</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>
            <div className="content">
                <h2>{selectedSection ? selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1) : 'Welcome to Admin Dashboard'}</h2>
                {renderContent()}
            </div>
            <SearchModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSearch={handleSearch}
                placeholder={selectedSection === 'customers' ? 'Enter Customer ID' : 'Enter Stylist ID'}
            />
        </div>
    );
};

export default AdminDashboard;
