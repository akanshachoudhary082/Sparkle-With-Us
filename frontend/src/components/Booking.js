
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

//   const formatDateTimeForBackend = (dateTime) => {
//     if (!dateTime) return '';
//     // Convert format from "yyyy-MM-ddTHH:mm" to "yyyy-MM-dd HH:mm:ss"
//     return dateTime.replace('T', ' ') + ":00";
//   };

//   const fetchTimeSlots = () => {
//     if (!serviceId || !stylistId || !startDateTime || !endDateTime) {
//       setMessage('Please fill in all fields before fetching time slots.');
//       return;
//     }

//     const formattedStartDateTime = formatDateTimeForBackend(startDateTime);
//     const formattedEndDateTime = formatDateTimeForBackend(endDateTime);

//     axios.get('http://localhost:8080/timeslots/available', {
//       params: {
//         serviceId,
//         startDateTime: formattedStartDateTime,
//         endDateTime: formattedEndDateTime,
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
//           onChange={(e) => setStartDateTime(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="endDateTime">End DateTime:</label>
//         <input
//           type="datetime-local"
//           id="endDateTime"
//           value={endDateTime}
//           onChange={(e) => setEndDateTime(e.target.value)}
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
// import React, { useState, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Booking = () => {
//   const [services, setServices] = useState([]);
//   const [customers, setCustomers] = useState([]);
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [startDateTime, setStartDateTime] = useState('');
//   const [endDateTime, setEndDateTime] = useState('');
//   const [booking, setBooking] = useState({
//     bookStatus: 'PENDING',
//     bookingDate: '',
//     serviceId: '',
//     customerId: '',
//   });
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Fetch services
//     axios.get('http://localhost:8080/services')
//       .then(response => setServices(response.data))
//       .catch(error => console.error('Error fetching services:', error));

//     // Fetch customers
//     axios.get('http://localhost:8080/customers')
//       .then(response => setCustomers(response.data))
//       .catch(error => console.error('Error fetching customers:', error));
//   }, []);

//   const formatDateTimeForBackend = (dateTime) => {
//     if (!dateTime) return '';
//     return dateTime.replace('T', ' ') + ":00";
//   };

//   const fetchTimeSlots = () => {
//     if (!booking.serviceId || !booking.customerId || !startDateTime || !endDateTime) {
//       setMessage('Please fill in all fields before fetching time slots.');
//       return;
//     }

//     const formattedStartDateTime = formatDateTimeForBackend(startDateTime);
//     const formattedEndDateTime = formatDateTimeForBackend(endDateTime);

//     axios.get('http://localhost:8080/timeslots/available', {
//       params: {
//         serviceId: booking.serviceId,
//         startDateTime: formattedStartDateTime,
//         endDateTime: formattedEndDateTime,
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
//     if (!selectedSlot || !booking.customerId) {
//       setMessage('Please select a time slot and customer.');
//       return;
//     }

//     const bookingData = {
//       ...booking,
//       startDateTime: selectedSlot.start_date_time,
//       endDateTime: selectedSlot.end_date_time,
//     };

//     axios.post('http://localhost:8080/api/booking', bookingData, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => {
//       setMessage('Booking confirmed successfully!');
//       // Optionally clear the form or redirect
//       setBooking({
//         bookStatus: 'PENDING',
//         bookingDate: '',
//         serviceId: '',
//         customerId: '',
//       });
//       setSelectedSlot(null);
//     })
//     .catch(error => {
//       setMessage('Error confirming booking.');
//       console.error('Error:', error.response?.data || error.message);
//     });
//   };

//   const handleChange = (e) => {
//     setBooking({
//       ...booking,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="booking-page">
//       <h2>Book a Service</h2>

//       <div>
//         <label htmlFor="serviceId">Service:</label>
//         <select
//           id="serviceId"
//           name="serviceId"
//           value={booking.serviceId}
//           onChange={handleChange}
//         >
//           <option value="">Select a service</option>
//           {services.map(service => (
//             <option key={service.id} value={service.id}>
//               {service.type} - {service.description}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label htmlFor="customerId">Customer:</label>
//         <select
//           id="customerId"
//           name="customerId"
//           value={booking.customerId}
//           onChange={handleChange}
//         >
//           <option value="">Select a customer</option>
//           {customers.map(customer => (
//             <option key={customer.id} value={customer.id}>
//               {customer.firstName} {customer.lastName}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label htmlFor="startDateTime">Start DateTime:</label>
//         <input
//           type="datetime-local"
//           id="startDateTime"
//           value={startDateTime}
//           onChange={(e) => setStartDateTime(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="endDateTime">End DateTime:</label>
//         <input
//           type="datetime-local"
//           id="endDateTime"
//           value={endDateTime}
//           onChange={(e) => setEndDateTime(e.target.value)}
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
//                   {slot.start_date_time} - {slot.end_date_time}
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
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './css/Booking.css'; // Assuming you have some styling

// const Booking = () => {
//   const [services, setServices] = useState([]);
//   const [customers, setCustomers] = useState([]);
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [startDateTime, setStartDateTime] = useState('');
//   const [endDateTime, setEndDateTime] = useState('');
//   const [selectedService, setSelectedService] = useState(''); // Assume this is set elsewhere or passed as a prop
//   const [selectedCustomer, setSelectedCustomer] = useState(''); // Assume this is set elsewhere or passed as a prop
//   const [bookingDate, setBookingDate] = useState('');
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Fetch available services
//     axios.get('http://localhost:8080/services')
//       .then(response => setServices(response.data))
//       .catch(error => console.error('Error fetching services:', error));

//     // Fetch available customers
//     axios.get('http://localhost:8080/customers')
//       .then(response => setCustomers(response.data))
//       .catch(error => console.error('Error fetching customers:', error));
//   }, []);

//   useEffect(() => {
//     if (startDateTime && endDateTime && selectedService) {
//       fetchTimeSlots();
//     }
//   }, [startDateTime, endDateTime, selectedService]);

//   const fetchTimeSlots = () => {
//     axios.get('http://localhost:8080/timeslots/available', {
//       params: {
//         serviceId: selectedService,
//         startDateTime: formatDateTimeForBackend(startDateTime),
//         endDateTime: formatDateTimeForBackend(endDateTime),
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

//   const formatDateTimeForBackend = (dateTime) => {
//     if (!dateTime) return '';
//     // Convert format from "yyyy-MM-ddTHH:mm" to "yyyy-MM-dd HH:mm:ss"
//     return dateTime.replace('T', ' ') + ":00";
//   };

//   const handleBooking = () => {
//     // Handle booking submission
//     console.log({
//       serviceId: selectedService,
//       customerId: selectedCustomer,
//       bookingDate,
//       timeSlot: selectedSlot,
//     });
//     // Implement booking logic here
//   };

//   return (
//     <div className="booking-form-container">
//       <h2>Create Booking</h2>

//       <div className="form-group">
//         <label>Service:</label>
//         <p>{services.find(service => service.id === selectedService)?.type || 'Service not selected'}</p>
//       </div>

//       <div className="form-group">
//         <label>Customer:</label>
//         <p>{customers.find(customer => customer.id === selectedCustomer)?.firstName + ' ' + customers.find(customer => customer.id === selectedCustomer)?.lastName || 'Customer not selected'}</p>
//       </div>

//       <div className="form-group">
//         <label>Booking Date:</label>
//         <input
//           type="date"
//           value={bookingDate}
//           onChange={(e) => setBookingDate(e.target.value)}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label>Start DateTime:</label>
//         <input
//           type="datetime-local"
//           value={startDateTime}
//           onChange={(e) => setStartDateTime(e.target.value)}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label>End DateTime:</label>
//         <input
//           type="datetime-local"
//           value={endDateTime}
//           onChange={(e) => setEndDateTime(e.target.value)}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label>Available Time Slots:</label>
//         {message && <p className="message">{message}</p>}
//         {timeSlots.length > 0 && (
//           <ul>
//             {timeSlots.map(slot => (
//               <li key={slot.id}>
//                 <button
//                   onClick={() => setSelectedSlot(slot)}
//                   className={selectedSlot?.id === slot.id ? 'selected-slot' : ''}
//                 >
//                   {slot.start_date_time} - {slot.end_date_time}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <button onClick={handleBooking} disabled={!selectedSlot}>
//         Confirm Booking
//       </button>
//     </div>
//   );
// };



// import React, { useState } from 'react';
// import axios from 'axios';

// // Component definition
// const Booking = () => {
//     const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
//     const [timeSlots, setTimeSlots] = useState([]);
//     const [serviceId, setServiceId] = useState('');
//     const [startDateTime, setStartDateTime] = useState('');
//     const [endDateTime, setEndDateTime] = useState('');
//     const [customerName, setCustomerName] = useState('');
//     const [message, setMessage] = useState('');

//     // Format date-time for the backend
//     const formatDateTimeForBackend = (dateTime) => {
//         if (!dateTime) return '';
//         // Convert format from "yyyy-MM-ddTHH:mm" to "yyyy-MM-dd'T'HH:mm:ss"
//         return dateTime.replace('T', 'T') + ":00"; // Add seconds if needed
//     };

//     // Fetch available time slots
//     const fetchTimeSlots = () => {
//         const formattedStartDateTime = formatDateTimeForBackend(startDateTime);
//         const formattedEndDateTime = formatDateTimeForBackend(endDateTime);

//         console.log('Fetching time slots with:', { serviceId, startDateTime: formattedStartDateTime, endDateTime: formattedEndDateTime });

//         axios.get('http://localhost:8080/timeslots/available', {
//             params: { serviceId, startDateTime: formattedStartDateTime, endDateTime: formattedEndDateTime }
//         })
//         .then(response => {
//             console.log('Fetched time slots:', response.data);
//             setTimeSlots(response.data);
//             setMessage(''); // Clear any previous error messages
//         })
//         .catch(error => {
//             console.error('Error fetching time slots:', error);
//             if (error.response) {
//                 setMessage(`Error fetching time slots: ${error.response.data}`);
//             } else {
//                 setMessage('Error fetching time slots. Please try again.');
//             }
//         });
//     };

//     // Handle booking
//     const handleBooking = () => {
//         if (!serviceId || !startDateTime || !customerName || !selectedTimeSlot) {
//             setMessage('Please select a service, enter your name, and select a time slot and booking date.');
//             return;
//         }

//         const formattedStartDateTime = formatDateTimeForBackend(startDateTime);

//         const bookingData = {
//             serviceId,
//             timeSlot: selectedTimeSlot, // Use the selected time slot ID
//             customerName,
//             bookingDate: formattedStartDateTime, // Use the formatted start date-time as the booking date
//         };

//         axios.post('http://localhost:8080/booking', bookingData)
//             .then(response => {
//                 console.log('Booking created:', response.data);
//                 setMessage(`Booking confirmed!\n
//                 Service ID: ${serviceId}\n
//                 Time Slot: ${selectedTimeSlot}\n
//                 Customer Name: ${customerName}\n
//                 Booking Date: ${formattedStartDateTime}`);
//                 // Optionally reset form or redirect user
//                 setServiceId('');
//                 setStartDateTime('');
//                 setEndDateTime('');
//                 setTimeSlots([]);
//                 setSelectedTimeSlot('');
//                 setCustomerName('');
//             })
//             .catch(error => {
//                 console.error('Error creating booking:', error);
//                 if (error.response) {
//                     setMessage(`Error creating booking: ${error.response.data}`);
//                 } else {
//                     setMessage('Error creating booking. Please try again.');
//                 }
//             });
//     };

//     return (
//         <div>
//             <h1>Book a Service</h1>

//             <div>
//                 <label htmlFor="serviceId">Service ID:</label>
//                 <input
//                     type="text"
//                     id="serviceId"
//                     value={serviceId}
//                     onChange={(e) => setServiceId(e.target.value)}
//                 />
//             </div>

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
//                 <label htmlFor="customerName">Your Name:</label>
//                 <input
//                     type="text"
//                     id="customerName"
//                     placeholder="Your Name"
//                     value={customerName}
//                     onChange={(e) => setCustomerName(e.target.value)}
//                 />
//             </div>

//             <button onClick={fetchTimeSlots}>Fetch Available Time Slots</button>

//             {message && <p className="message">{message}</p>}

//             {timeSlots.length > 0 && (
//                 <div>
//                     <h3>Available Time Slots</h3>
//                     <ul>
//                         {timeSlots.map(slot => (
//                             <li key={slot.id}>
//                                 <button
//                                     onClick={() => setSelectedTimeSlot(slot.id)}
//                                     className={selectedTimeSlot === slot.id ? 'selected-slot' : ''}
//                                 >
//                                     {slot.startDateTime} - {slot.endDateTime}
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}

//             <button onClick={handleBooking}>Book Now</button>
//         </div>
//     );
// };

// export default Booking;
import React, { useState } from 'react';
import axios from 'axios';

// Component definition
const Booking = () => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [timeSlots, setTimeSlots] = useState([]);
    const [serviceId, setServiceId] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [message, setMessage] = useState('');

    // Format date-time for the backend
    const formatDateTimeForBackend = (dateTime) => {
        if (!dateTime) return '';
        const date = new Date(dateTime);
        const formattedDate = date.toISOString().slice(0, 19); // Trim to "YYYY-MM-DDTHH:mm:ss"
        return formattedDate;
    };

    // Fetch available time slots
    const fetchTimeSlots = () => {
        const formattedStartDateTime = formatDateTimeForBackend(startDateTime);
        const formattedEndDateTime = formatDateTimeForBackend(endDateTime);

        console.log('Fetching time slots with:', { serviceId, startDateTime: formattedStartDateTime, endDateTime: formattedEndDateTime });

        axios.get('http://localhost:8080/timeslots/available', {
            params: { serviceId, startDateTime: formattedStartDateTime, endDateTime: formattedEndDateTime }
        })
        .then(response => {
            console.log('Fetched time slots:', response.data);
            setTimeSlots(response.data);
            setMessage(''); // Clear any previous error messages
        })
        .catch(error => {
            console.error('Error fetching time slots:', error);
            if (error.response) {
                setMessage(`Error fetching time slots: ${error.response.data}`);
            } else {
                setMessage('Error fetching time slots. Please try again.');
            }
        });
    };

    // Handle booking
    const handleBooking = () => {
        if (!serviceId || !startDateTime || !customerName || !selectedTimeSlot) {
            setMessage('Please select a service, enter your name, and select a time slot and booking date.');
            return;
        }

        const formattedStartDateTime = formatDateTimeForBackend(startDateTime);

        const bookingData = {
            serviceId,
            timeSlot: selectedTimeSlot, // Use the selected time slot ID
            customerName,
            bookingDate: formattedStartDateTime, // Use the formatted start date-time as the booking date
        };

        axios.post('http://localhost:8080/booking', bookingData)
            .then(response => {
                console.log('Booking created:', response.data);
                setMessage(`Booking confirmed!\n
                Service ID: ${serviceId}\n
                Time Slot: ${selectedTimeSlot}\n
                Customer Name: ${customerName}\n
                Booking Date: ${formattedStartDateTime}`);
                // Optionally reset form or redirect user
                setServiceId('');
                setStartDateTime('');
                setEndDateTime('');
                setTimeSlots([]);
                setSelectedTimeSlot('');
                setCustomerName('');
            })
            .catch(error => {
                console.error('Error creating booking:', error);
                if (error.response) {
                    setMessage(`Error creating booking: ${error.response.data}`);
                } else {
                    setMessage('Error creating booking. Please try again.');
                }
            });
    };

    return (
        <div>
            <h1>Book a Service</h1>

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
                <label htmlFor="customerName">Your Name:</label>
                <input
                    type="text"
                    id="customerName"
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
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
                                    onClick={() => setSelectedTimeSlot(slot.id)}
                                    className={selectedTimeSlot === slot.id ? 'selected-slot' : ''}
                                >
                                    {slot.startDateTime} - {slot.endDateTime}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <button onClick={handleBooking}>Book Now</button>
        </div>
    );
};

export default Booking;
