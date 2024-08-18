
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
        // Convert format from "yyyy-MM-ddTHH:mm" to "yyyy-MM-dd'T'HH:mm:ss"
        return dateTime.replace('T', 'T') + ":00"; // Add seconds if needed
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
            if(response.data.lenght==0)
            setMessage('no time slot'); // Clear any previous error messages
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
