// import React from 'react';
// // import './Style.css';
// import './css/Style.css';

// const ContactUs = () => {
//   return (
//     <div className="contact-us">
//       <h1>Contact Us</h1>
//       <p>Feel free to reach out to us for any inquiries or appointments!</p>
//     </div>
//   );
// }

// export default ContactUs;




import React from 'react';
import './css/ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us-page">
            {/* Navbar */}
            {/* <div className="navbar">
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact Us</a>
                </nav>
            </div> */}

            {/* Header Image */}
            <div className="header-image">
                <img src={require('../images/contactus.jpeg')} alt="Contact Us" />
            </div>

            {/* Contact Form Section */}
            <div className="contact-section">
                {/* Left Side: Contact Form */}
                <div className="contact-form">
                    <h2>Get in Touch</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Your Phone Number</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                {/* Right Side: Beauty Parlor Information */}
                <div className="parlor-info">
                    <h2>Our Information</h2>
                    <p><strong>Call Us:</strong> +123 456 7890</p>
                    <p><strong>Email Us:</strong> info@beautylab.com</p>
                    <p><strong>Visit Us:</strong> 123 Beauty Street, Glamour City, NY 12345</p>
                    <p><strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;























// import React, { useState } from 'react';
// import './Style.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Contact Form Data:', formData);
//   };

//   return (
//     <div className="contact-us">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Message</label>
//           <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
//         </div>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;



