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


import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './css/Booking.css';

const Booking = () => {
    const { serviceId } = useParams(); // Get serviceId from URL
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [stylistId, setStylistId] = useState('');
    const [timeSlots, setTimeSlots] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const fetchTimeSlots = () => {
        if (!startDateTime || !endDateTime || !stylistId) {
            setError('Please provide all required details.');
            return;
        }

        const requestData = {
            serviceId,
            startDateTime,
            endDateTime,
            stylistId
        };

        axios.post('http://localhost:8080/timeslots/available', requestData)
            .then(response => {
                console.log('Time slots fetched:', response.data);
                setTimeSlots(response.data);
                setError('');
            })
            .catch(error => {
                setError('Error fetching time slots.');
                console.error('Error fetching time slots:', error.response?.data || error.message);
            });
    };

    const handleBooking = () => {
        if (!selectedTimeSlot || !startDateTime || !endDateTime || !stylistId) {
            setError('Please complete all fields.');
            return;
        }

        const bookingData = {
            serviceId,
            timeSlotId: selectedTimeSlot,
            startDateTime,
            endDateTime,
            stylistId
        };

        axios.post('http://localhost:8080/booking', bookingData)
            .then(response => {
                setSuccess('Booking confirmed successfully!');
                setError('');
            })
            .catch(error => {
                setError('There was an error processing your booking.');
                setSuccess('');
                console.error('Error processing booking:', error.response?.data || error.message);
            });
    };

    return (
        <div className="booking-form">
            <h2>Book a Service</h2>

            <div>
                <label htmlFor="startDateTime">Start DateTime:</label>
                <input
                    type="datetime-local"
                    id="startDateTime"
                    value={startDateTime}
                    onChange={(e) => setStartDateTime(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="endDateTime">End DateTime:</label>
                <input
                    type="datetime-local"
                    id="endDateTime"
                    value={endDateTime}
                    onChange={(e) => setEndDateTime(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="stylist">Stylist:</label>
                <select
                    id="stylist"
                    value={stylistId}
                    onChange={(e) => setStylistId(e.target.value)}
                >
                    <option value="">Select a stylist</option>
                    {/* Replace with real stylist options */}
                    <option value="1">Stylist 1</option>
                    <option value="2">Stylist 2</option>
                </select>
            </div>

            <button onClick={fetchTimeSlots}>Fetch Available Time Slots</button>

            {timeSlots.length > 0 && (
                <div>
                    <label htmlFor="timeSlot">Available Time Slots:</label>
                    <select
                        id="timeSlot"
                        value={selectedTimeSlot}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    >
                        <option value="">Select a time slot</option>
                        {timeSlots.map(slot => (
                            <option key={slot.id} value={slot.id}>
                                {slot.startDateTime} - {slot.endDateTime}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <button onClick={handleBooking}>Book Now</button>

            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </div>
    );
};

export default Booking;
