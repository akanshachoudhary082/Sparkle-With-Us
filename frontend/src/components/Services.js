// import React, { useEffect, useState } from 'react';

// import './css/Services.css';
// import hairImage from '../images/hair.jpg';
// import makeupImage from '../images/Makeup.jpg';
// import massageImage from '../images/Massage.jpg';
// import nailsImage from '../images/nails.jpg';
// import skinImage from '../images/Skin.jpg';
// import tanningImage from '../images/Tanning.jpg';
// import waxImage from '../images/Wax.jpg';
// import beardImage from '../images/Beard.jpg';

// const servicesData = [
//     {
//         src: hairImage,
//         description: 'Hair Styling',
//         price: '$100'
//     },
//     {
//         src: makeupImage,
//         description: 'Makeup Services',
//         price: '$150'
//     },
//     {
//         src: massageImage,
//         description: 'Massage Therapy',
//         price: '$200'
//     },
//     {
//         src: nailsImage,
//         description: 'Nail Art',
//         price: '$250'
//     },
//     {
//         src: skinImage,
//         description: 'Skin Care',
//         price: '$200'
//     },
//     {
//         src: tanningImage,
//         description: 'Tanning',
//         price: '$250'
//     },
//     {
//         src: waxImage,
//         description: 'Waxing',
//         price: '$200'
//     },
//     {
//         src: beardImage,
//         description: 'Beard Grooming',
//         price: '$250'
//     },
// ];

// const Services = () => {
//     return (
//         <div className="services-page">
//             {/* Header Image */}
//             <div className="header-image">
//                 <img src={require('../images/services.jpg')} alt="Services Header" />

//             </div>

//             {/* Services Grid */}
//             <div className="services-grid">
//                 {servicesData.map((service, index) => (
//                     <div key={index} className="service-item">
//                         <img src={service.src} alt={`Service ${index + 1}`} className="service-image" />
//                         <div className="service-info">
//                             <p>{service.description}</p>
//                             <p className="service-price">{service.price}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Services.css';
import hairImage from '../images/hair.jpg';
import makeupImage from '../images/Makeup.jpg';
import massageImage from '../images/Massage.jpg';
import nailsImage from '../images/nails.jpg';
import skinImage from '../images/Skin.jpg';
import tanningImage from '../images/Tanning.jpg';
import waxImage from '../images/Wax.jpg';
import beardImage from '../images/Beard.jpg';

// Static data as a fallback
const staticServicesData = [
    {
        src: hairImage,
        description: 'Hair Styling',
        price: '$100'
    },
    {
        src: makeupImage,
        description: 'Makeup Services',
        price: '$150'
    },
    {
        src: massageImage,
        description: 'Massage Therapy',
        price: '$200'
    },
    {
        src: nailsImage,
        description: 'Nail Art',
        price: '$250'
    },
    {
        src: skinImage,
        description: 'Skin Care',
        price: '$200'
    },
    {
        src: tanningImage,
        description: 'Tanning',
        price: '$250'
    },
    {
        src: waxImage,
        description: 'Waxing',
        price: '$200'
    },
    {
        src: beardImage,
        description: 'Beard Grooming',
        price: '$250'
    },
];

const Services = () => {
    const [services, setServices] = useState(staticServicesData); // Default to static data

    useEffect(() => {
        // Fetch service data from API
        axios.get('http://localhost:8080/services')
            .then(response => {
                // Update services with data from API
                setServices(response.data);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                // Optionally handle errors and display a message to users
                // Fallback to static data is already set as default
            });
    }, []);

    return (
        <div className="services-page">
            {/* Header Image */}
            <div className="header-image">
                <img src={require('../images/services.jpg')} alt="Services Header" />
            </div>

            {/* Services Grid */}
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <img src={service.src} alt={`Service ${index + 1}`} className="service-image" />
                        <div className="service-info">
                            <p>{service.description}</p>
                            <p className="service-price">{service.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
