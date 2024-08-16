import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './css/ContactUs.css';

const ContactUs = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., sending data to a backend)
        console.log('Contact Form Data:', formData);
        
        // Show popup message
        alert('Thank you for contacting us. We will reach you back!');

        // Redirect to home page after popup is dismissed
        navigate('/');
    };

    return (
        <div className="contact-us-page">
            {/* Header Image */}
            <div className="header-image">
                <img src={require('../images/contactus.jpeg')} alt="Contact Us" />
            </div>

            {/* Contact Form Section */}
            <div className="contact-section">
                {/* Left Side: Contact Form */}
                <div className="contact-form">
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Your Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                {/* Right Side: Beauty Parlor Information */}
                <div className="parlor-info">
                    <h2>Our Information</h2>
                    <p><strong>Call Us:</strong> +123 456 7890</p>
                    <p><strong>Email Us:</strong> sparklewithus@beauty.com</p>
                    <p><strong>Visit Us:</strong> 123 Beauty Street, Glamour City, NY 12345</p>
                    <p><strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
            </div>

            {/* Location Section */}
            <div className="location-section">
                <h2>Visit Us</h2>
                <p><strong>Sparkle With Us</strong></p>
                <p>Located at IACDS Pune</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.070336021569!2d73.83204401445387!3d18.516725287357505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c29f4d971a2d%3A0x80096d8858935d9b!2sIACDS%20Pune!5e0!3m2!1sen!2sin!4v1637033549072!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;





