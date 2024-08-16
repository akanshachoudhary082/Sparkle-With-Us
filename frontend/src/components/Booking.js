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


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './css/Booking.css';

// const Booking = () => {
//     const { serviceId } = useParams(); // Get serviceId from URL
//     const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
//     const [startDateTime, setStartDateTime] = useState('');
//     const [endDateTime, setEndDateTime] = useState('');
//     const [stylistId, setStylistId] = useState('');
//     const [timeSlots, setTimeSlots] = useState([]);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const fetchTimeSlots = () => {
//         if (!startDateTime || !endDateTime || !stylistId) {
//             setError('Please provide all required details.');
//             return;
//         }

//         const requestData = {
//             serviceId,
//             startDateTime,
//             endDateTime,
//             stylistId
//         };

//         axios.post('http://localhost:8080/timeslots/available', requestData)
//             .then(response => {
//                 console.log('Time slots fetched:', response.data);
//                 setTimeSlots(response.data);
//                 setError('');
//             })
//             .catch(error => {
//                 setError('Error fetching time slots.');
//                 console.error('Error fetching time slots:', error.response?.data || error.message);
//             });
//     };

//     const handleBooking = () => {
//         if (!selectedTimeSlot || !startDateTime || !endDateTime || !stylistId) {
//             setError('Please complete all fields.');
//             return;
//         }

//         const bookingData = {
//             serviceId,
//             timeSlotId: selectedTimeSlot,
//             startDateTime,
//             endDateTime,
//             stylistId
//         };

//         axios.post('http://localhost:8080/booking', bookingData)
//             .then(response => {
//                 setSuccess('Booking confirmed successfully!');
//                 setError('');
//             })
//             .catch(error => {
//                 setError('There was an error processing your booking.');
//                 setSuccess('');
//                 console.error('Error processing booking:', error.response?.data || error.message);
//             });
//     };

//     return (
//         <div className="booking-form">
//             <h2>Book a Service</h2>

//             <div>
//                 <label htmlFor="startDateTime">Start DateTime:</label>
//                 <input
//                     type="datetime-local"
//                     id="startDateTime"
//                     value={startDateTime}
//                     onChange={(e) => setStartDateTime(e.target.value)}
//                 />
//             </div>

//             <div>
//                 <label htmlFor="endDateTime">End DateTime:</label>
//                 <input
//                     type="datetime-local"
//                     id="endDateTime"
//                     value={endDateTime}
//                     onChange={(e) => setEndDateTime(e.target.value)}
//                 />
//             </div>

//             <div>
//                 <label htmlFor="stylist">Stylist:</label>
//                 <select
//                     id="stylist"
//                     value={stylistId}
//                     onChange={(e) => setStylistId(e.target.value)}
//                 >
//                     <option value="">Select a stylist</option>
//                     {/* Replace with real stylist options */}
//                     <option value="1">Stylist 1</option>
//                     <option value="2">Stylist 2</option>
//                 </select>
//             </div>

//             <button onClick={fetchTimeSlots}>Fetch Available Time Slots</button>

//             {timeSlots.length > 0 && (
//                 <div>
//                     <label htmlFor="timeSlot">Available Time Slots:</label>
//                     <select
//                         id="timeSlot"
//                         value={selectedTimeSlot}
//                         onChange={(e) => setSelectedTimeSlot(e.target.value)}
//                     >
//                         <option value="">Select a time slot</option>
//                         {timeSlots.map(slot => (
//                             <option key={slot.id} value={slot.id}>
//                                 {slot.startDateTime} - {slot.endDateTime}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             )}

//             <button onClick={handleBooking}>Book Now</button>

//             {error && <p className="error-message">{error}</p>}
//             {success && <p className="success-message">{success}</p>}
//         </div>
//     );
// };

// export default Booking;
// import React, { useState } from 'react';
// import axios from 'axios';

// const Booking = () => {
//   const [serviceId, setServiceId] = useState('');
//   const [stylistId, setStylistId] = useState('');
//   const [startDateTime, setStartDateTime] = useState('');
//   const [endDateTime, setEndDateTime] = useState('');
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [message, setMessage] = useState('');

//   const fetchTimeSlots = () => {
//     if (!serviceId || !stylistId || !startDateTime || !endDateTime) {
//       setMessage('Please fill in all fields before fetching time slots.');
//       return;
//     }

//     axios.get('http://localhost:8080/timeslots/available', {
//       params: {
//         serviceId,
//         startDateTime,
//         endDateTime,
//         stylistId,
//       },
//     })
//       .then(response => {
//         setTimeSlots(response.data);
//         if (response.data.length === 0) {
//           setMessage('No available time slots found.');
//         } else {
//           setMessage('');
//         }
//       })
//       .catch(error => {
//         setMessage('Error fetching time slots.');
//         console.error('Error:', error.response?.data || error.message);
//       });
//   };

//   const handleBooking = () => {
//     if (!selectedSlot) {
//       setMessage('Please select a time slot before booking.');
//       return;
//     }

//     axios.post('http://localhost:8080/booking', {
//       serviceId: selectedSlot.service_id,
//       stylistId: selectedSlot.stylist_id,
//       startDateTime: selectedSlot.start_date_time,
//       endDateTime: selectedSlot.end_date_time,
//     })
//       .then(response => {
//         setMessage('Booking confirmed successfully!');
//         setTimeSlots([]);
//         setSelectedSlot(null);
//       })
//       .catch(error => {
//         setMessage('Error processing your booking.');
//         console.error('Error:', error.response?.data || error.message);
//       });
//   };

//   return (
//     <div className="booking-page">
//       <h2>Book a Service</h2>

//       <div>
//         <label htmlFor="serviceId">Service ID:</label>
//         <input
//           type="text"
//           id="serviceId"
//           value={serviceId}
//           onChange={(e) => setServiceId(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="stylist">Stylist ID:</label>
//         <input
//           type="text"
//           id="stylist"
//           value={stylistId}
//           onChange={(e) => setStylistId(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="startDateTime">Start DateTime:</label>
//         <input
//           type="datetime-local"
//           id="startDateTime"
//           value={startDateTime}
//           onChange={(e) => setStartDateTime(e.target.value + ":00")} // Add seconds
//         />
//       </div>

//       <div>
//         <label htmlFor="endDateTime">End DateTime:</label>
//         <input
//           type="datetime-local"
//           id="endDateTime"
//           value={endDateTime}
//           onChange={(e) => setEndDateTime(e.target.value + ":00")} // Add seconds
//         />
//       </div>

//       <button onClick={fetchTimeSlots}>Fetch Available Time Slots</button>

//       {message && <p className="message">{message}</p>}

//       {timeSlots.length > 0 && (
//         <div>
//           <h3>Available Time Slots</h3>
//           <ul>
//             {timeSlots.map(slot => (
//               <li key={slot.id}>
//                 <button
//                   onClick={() => setSelectedSlot(slot)}
//                   className={selectedSlot?.id === slot.id ? 'selected-slot' : ''}
//                 >
//                   {slot.start_date_time} - {slot.end_date_time} (Stylist ID: {slot.stylist_id})
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <button onClick={handleBooking} disabled={!selectedSlot}>
//         Confirm Booking
//       </button>
//     </div>
//   );
// };

// export default Booking;
import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [serviceId, setServiceId] = useState('');
  const [stylistId, setStylistId] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [message, setMessage] = useState('');

  const formatDateTimeForBackend = (dateTime) => {
    if (!dateTime) return '';
    // Convert format from "yyyy-MM-ddTHH:mm" to "yyyy-MM-dd HH:mm:ss"
    return dateTime.replace('T', ' ') + ":00";
  };

  const fetchTimeSlots = () => {
    if (!serviceId || !stylistId || !startDateTime || !endDateTime) {
      setMessage('Please fill in all fields before fetching time slots.');
      return;
    }

    axios.get('http://localhost:8080/timeslots/available', {
      params: {
        serviceId,
        startDateTime: formatDateTimeForBackend(startDateTime),
        endDateTime: formatDateTimeForBackend(endDateTime),
        stylistId,
      },
    })
      .then(response => {
        setTimeSlots(response.data);
        if (response.data.length === 0) {
          setMessage('No available time slots found.');
        } else {
          setMessage('');
        }
      })
      .catch(error => {
        setMessage('Error fetching time slots.');
        console.error('Error:', error.response?.data || error.message);
      });
  };

  const handleBooking = () => {
    if (!selectedSlot) {
      setMessage('Please select a time slot before booking.');
      return;
    }

    axios.post('http://localhost:8080/booking', {
      serviceId: selectedSlot.service_id,
      stylistId: selectedSlot.stylist_id,
      startDateTime: selectedSlot.start_date_time,
      endDateTime: selectedSlot.end_date_time,
    })
      .then(response => {
        setMessage('Booking confirmed successfully!');
        setTimeSlots([]);
        setSelectedSlot(null);
      })
      .catch(error => {
        setMessage('Error processing your booking.');
        console.error('Error:', error.response?.data || error.message);
      });
  };

  return (
    <div className="booking-page">
      <h2>Book a Service</h2>

      <div>
        <label htmlFor="serviceId">Service ID:</label>
        <input
          type="text"
          id="serviceId"
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="stylist">Stylist ID:</label>
        <input
          type="text"
          id="stylist"
          value={stylistId}
          onChange={(e) => setStylistId(e.target.value)}
        />
      </div>

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

      <button onClick={fetchTimeSlots}>Fetch Available Time Slots</button>

      {message && <p className="message">{message}</p>}

      {timeSlots.length > 0 && (
        <div>
          <h3>Available Time Slots</h3>
          <ul>
            {timeSlots.map(slot => (
              <li key={slot.id}>
                <button
                  onClick={() => setSelectedSlot(slot)}
                  className={selectedSlot?.id === slot.id ? 'selected-slot' : ''}
                >
                  {slot.start_date_time} - {slot.end_date_time} (Stylist ID: {slot.stylist_id})
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleBooking} disabled={!selectedSlot}>
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
