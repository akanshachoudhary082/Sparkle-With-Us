// import React, { useState } from 'react';
// import axios from 'axios';
// import './css/Booking.css';

// const Booking = () => {
//     const [bookingDetails, setBookingDetails] = useState({
//         serviceId: '',
//         bookingDate: '',
//     });
//     const [paymentDetails, setPaymentDetails] = useState({
//         cardNumber: '',
//         expiryDate: '',
//         cvv: '',
//     });
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleBookingChange = (e) => {
//         setBookingDetails({
//             ...bookingDetails,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handlePaymentChange = (e) => {
//         setPaymentDetails({
//             ...paymentDetails,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = () => {
//         axios.post('http://localhost:8080/booking', {
//             ...bookingDetails,
//             ...paymentDetails
//         })
//         .then(response => {
//             setSuccess('Booking confirmed successfully!');
//             setError('');
//         })
//         .catch(error => {
//             setError('There was an error processing your booking.');
//             setSuccess('');
//         });
//     };

//     return (
//         <div className="booking-page">
//             <h1>Book Your Appointment</h1>

//             <div className="booking-form">
//                 <h2>Booking Details</h2>
//                 <label>
//                     Service ID:
//                     <input
//                         type="text"
//                         name="serviceId"
//                         value={bookingDetails.serviceId}
//                         onChange={handleBookingChange}
//                     />
//                 </label>
//                 <label>
//                     Booking Date:
//                     <input
//                         type="datetime-local"
//                         name="bookingDate"
//                         value={bookingDetails.bookingDate}
//                         onChange={handleBookingChange}
//                     />
//                 </label>
//             </div>

//             <div className="payment-form">
//                 <h2>Payment Details</h2>
//                 <label>
//                     Card Number:
//                     <input
//                         type="text"
//                         name="cardNumber"
//                         value={paymentDetails.cardNumber}
//                         onChange={handlePaymentChange}
//                     />
//                 </label>
//                 <label>
//                     Expiry Date:
//                     <input
//                         type="text"
//                         name="expiryDate"
//                         value={paymentDetails.expiryDate}
//                         onChange={handlePaymentChange}
//                     />
//                 </label>
//                 <label>
//                     CVV:
//                     <input
//                         type="text"
//                         name="cvv"
//                         value={paymentDetails.cvv}
//                         onChange={handlePaymentChange}
//                     />
//                 </label>
//             </div>

//             <button onClick={handleSubmit}>Book Now</button>

//             {error && <p className="error-message">{error}</p>}
//             {success && <p className="success-message">{success}</p>}
//         </div>
//     );
// };

// export default Booking;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Booking.css';

const Booking = () => {
    const [serviceId, setServiceId] = useState(null);
    const [bookingDate, setBookingDate] = useState('');
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (serviceId && bookingDate) {
            axios.get(`http://localhost:8080/timeslots/available`, {
                params: {
                    serviceId,
                    date: bookingDate
                }
            })
            .then(response => {
                setAvailableSlots(response.data);
            })
            .catch(error => {
                setError('Error fetching available slots.');
                console.error(error);
            });
        }
    }, [serviceId, bookingDate]);

    const handleBookingChange = (e) => {
        setServiceId(e.target.value);
    };

    const handleDateChange = (e) => {
        setBookingDate(e.target.value);
    };

    const handleSlotChange = (e) => {
        setSelectedSlot(e.target.value);
    };

    const handleSubmit = () => {
        // Submit booking with selected slot
        axios.post('http://localhost:8080/booking', {
            serviceId,
            bookingDate,
            selectedSlot
        })
        .then(response => {
            setSuccess('Booking confirmed successfully!');
            setError('');
        })
        .catch(error => {
            setError('Error processing your booking.');
            setSuccess('');
        });
    };

    return (
        <div className="booking-page">
            <h1>Book Your Appointment</h1>

            <div className="booking-form">
                <label>
                    Service ID:
                    <input
                        type="text"
                        value={serviceId}
                        onChange={handleBookingChange}
                    />
                </label>
                <label>
                    Booking Date:
                    <input
                        type="date"
                        value={bookingDate}
                        onChange={handleDateChange}
                    />
                </label>

                <label>
                    Time Slot:
                    <select value={selectedSlot} onChange={handleSlotChange}>
                        <option value="">Select a slot</option>
                        {availableSlots.map((slot, index) => (
                            <option key={index} value={slot.time}>{slot.time}</option>
                        ))}
                    </select>
                </label>

                <button onClick={handleSubmit}>Book Now</button>
            </div>

            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </div>
    );
};

export default Booking;
