
// import React, { useState } from 'react';
// import axios from 'axios';

// const Booking = () => {
//     const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
//     const [timeSlots, setTimeSlots] = useState([]);
//     const [serviceId, setServiceId] = useState('');
//     const [startDateTime, setStartDateTime] = useState('');
//     const [endDateTime, setEndDateTime] = useState('');
//     const [customerName, setCustomerName] = useState('');
//     const [bookingDateTime, setBookingDateTime] = useState('');
//     const [message, setMessage] = useState('');

//     // Format date-time for the backend
//     const formatDateTimeForBackend = (dateTime) => {
//         if (!dateTime) return '';
//         return dateTime.replace('T', 'T') + ":00"; // Add seconds if needed
//     };

//     // Fetch available time slots
//     const fetchTimeSlots = () => {
//         const formattedStartDateTime = formatDateTimeForBackend(startDateTime);
//         const formattedEndDateTime = formatDateTimeForBackend(endDateTime);

//         axios.get('http://localhost:8080/timeslots/available', {
//             params: { serviceId, startDateTime: formattedStartDateTime, endDateTime: formattedEndDateTime }
//         })
//         .then(response => {
//             setTimeSlots(response.data);
//             if (response.data.length === 0) {
//                 setMessage('No time slots available for the selected time range.');
//             } else {
//                 setMessage('');
//             }
//         })
//         .catch(error => {
//             if (error.response) {
//                 setMessage(`Error fetching time slots: ${error.response.data}`);
//             } else {
//                 setMessage('Error fetching time slots. Please try again.');
//             }
//         });
//     };

//     // Handle booking
//     const handleBooking = () => {
//         if (!serviceId || !startDateTime || !customerName || !selectedTimeSlot || !bookingDateTime) {
//             setMessage('Please select a service, enter your name, select a time slot, and booking date-time.');
//             return;
//         }

//         const confirmBooking = window.confirm(`Do you want to confirm this booking for ${customerName}?`);
//         if (!confirmBooking) {
//             setMessage('Booking canceled.');
//             return;
//         }

//         const formattedBookingDateTime = formatDateTimeForBackend(bookingDateTime);

//         const bookingData = {
//             serviceId,
//             timeSlot: selectedTimeSlot,
//             customerName,
//             bookingDateTime: formattedBookingDateTime,
//         };

//         axios.post('http://localhost:8080/booking', bookingData)
//             .then(response => {
//                 setMessage(`Booking confirmed!\nService ID: ${serviceId}\nTime Slot: ${selectedTimeSlot}\nCustomer Name: ${customerName}\nBooking Date-Time: ${formattedBookingDateTime}`);
//                 setServiceId('');
//                 setStartDateTime('');
//                 setEndDateTime('');
//                 setTimeSlots([]);
//                 setSelectedTimeSlot('');
//                 setCustomerName('');
//                 setBookingDateTime('');
//             })
//             .catch(error => {
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

//             <div>
//                 <label htmlFor="bookingDateTime">Booking Date-Time:</label>
//                 <input
//                     type="datetime-local"
//                     id="bookingDateTime"
//                     value={bookingDateTime}
//                     onChange={(e) => setBookingDateTime(e.target.value)}
//                 />
//             </div>

//             <button onClick={fetchTimeSlots}>Fetch Available Time Slots</button>

//             {message && <p className="message">{message}</p>}

//             {timeSlots.length > 0 ? (
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
//             ) : (
//                 <p>No time slots available.</p> // Display "Not Available" message
//             )}

//             <button onClick={handleBooking}>Book Now</button>
//         </div>
//     );
// };

// export default Booking;


import React, { useState } from 'react';
import axios from 'axios';
import './css/Booking.css';

const Booking = () => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [timeSlots, setTimeSlots] = useState([]);
    const [serviceId, setServiceId] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [bookingDateTime, setBookingDateTime] = useState('');

    // Format date-time for the backend
    const formatDateTimeForBackend = (dateTime) => {
        if (!dateTime) return '';
        return dateTime.replace('T', 'T') + ":00"; // Add seconds if needed
    };

    // Fetch available time slots
    const fetchTimeSlots = () => {
        const formattedStartDateTime = formatDateTimeForBackend(startDateTime);
        const formattedEndDateTime = formatDateTimeForBackend(endDateTime);

        axios.get('http://localhost:8080/timeslots/available', {
            params: { serviceId, startDateTime: formattedStartDateTime, endDateTime: formattedEndDateTime }
        })
        .then(response => {
            setTimeSlots(response.data);
            if (response.data.length === 0) {
                alert('No time slots available for the selected time range.');
            } else {
                alert('Time slots are available!');
            }
        })
        .catch(error => {
            if (error.response) {
                alert(`Error fetching time slots: ${error.response.data}`);
            } else {
                alert('Error fetching time slots. Please try again.');
            }
        });
    };

    // Handle booking
    const handleBooking = () => {
        console.log( bookingDateTime);
        if (!serviceId || !startDateTime || !customerName || !selectedTimeSlot || !bookingDateTime) {
            alert('Please select a service, enter your name, select a time slot, and booking date-time.');
            return;
        }

        const confirmBooking = window.confirm(`Do you want to confirm this booking for ${customerName}?`);
        if (!confirmBooking) {
            alert('Booking canceled.');
            return;
        }

        const formattedBookingDateTime = formatDateTimeForBackend(bookingDateTime);

        const bookingData = {
            serviceId,
            timeslotId: selectedTimeSlot,
            customerId: customerName,
            bookingDateTime: formattedBookingDateTime,
        };

        axios.post('http://localhost:8080/booking', bookingData)
            .then(response => {
                alert(`Booking confirmed!\nService ID: ${serviceId}\nTime Slot: ${selectedTimeSlot}\nCustomer Name: ${customerName}\nBooking Date-Time: ${formattedBookingDateTime}`);
                setServiceId('');
                setStartDateTime('');
                setEndDateTime('');
                setTimeSlots([]);
                setSelectedTimeSlot('');
                setCustomerName('');
                setBookingDateTime('');
            })
            .catch(error => {
                if (error.response) {
                    alert(`Error creating booking: ${error.response.data}`);
                } else {
                    alert('Error creating booking. Please try again.');
                }
            });
    };

    return (
        <div>
            <h1>Book a Service</h1>
            <div className='booking'>
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
                    placeholder="Customer Id"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="bookingDateTime">Booking Date-Time:</label>
                <input
                    type="datetime-local"
                    id="bookingDateTime"
                    value={bookingDateTime}
                    onChange={(e) => setBookingDateTime(e.target.value)}
                />
            </div>

            <button onClick={fetchTimeSlots}>Fetch Available Time Slots</button>

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
        </div>
    );
};

export default Booking;


