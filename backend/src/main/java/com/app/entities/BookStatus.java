package com.app.entities;

public enum BookStatus {
    PENDING,       // The appointment is pending confirmation or has not been processed yet
    CONFIRMED,     // The appointment has been confirmed by the salon
    COMPLETED,     // The appointment has been completed
    CANCELED,      // The appointment was canceled by the customer or salon
    NO_SHOW,       // The customer did not show up for the appointment
    RESCHEDULED    // The appointment has been rescheduled
}
