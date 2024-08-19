
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Services.css';
import headerImage from '../images/services.jpg';

// Import images
import hairImage from '../images/hair.jpg';
import makeupImage from '../images/Makeup.jpg';
// import massageImage from '../images/Massage.jpg';
import nailsImage from '../images/nails.jpg';
import skinImage from '../images/Skin.jpg';
import tanningImage from '../images/Tanning.jpg';
import waxImage from '../images/Wax.jpg';
import beardImage from '../images/Beard.jpg';
import hairTreatImage from '../images/hairTreatImage.jpg';
import spaImage from '../images/spaImage.jpg';

// Create a mapping from service type to image
const imageMap = {
    NAIL_ART: nailsImage,
    SKIN_CARE: skinImage,
    HAIR_TREATMENTS: hairTreatImage,
    HAIR_SERVICES: hairImage,
    SPA_SERVICES: spaImage,
    MAKEUP_SERVICE: makeupImage,
    BEARD_GROOMING: beardImage,
    // MASSAGE_THERAPY: massageImage,
    WAXING: waxImage,
    TANNING: tanningImage
    
    
};

const Services = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/services')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, []);

    const handleBooking = (serviceId) => {
        navigate(`/booking/${serviceId}`);
    };

    return (
        <div className="services-page">
            <div className="header-image">
                <img src={headerImage} alt="Services Header" />
            </div>

            <div className="services-grid">
                {services.map(service => (
                    <div 
                        key={service.id} 
                        className="service-item"
                        onClick={() => handleBooking(service.id)}
                    >
                        <img 
                            src={imageMap[service.type]} // Use dynamic image based on service type
                            alt={`Service ${service.id}`} 
                            className="service-image" 
                        />
                        <div className="service-info">
                            <p>{service.description}</p>
                            {/* Optionally display the price if available */}
                            {service.price && <p className="service-price">{service.price}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
