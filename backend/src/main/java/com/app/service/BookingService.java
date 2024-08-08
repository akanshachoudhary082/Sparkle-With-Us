package com.app.service;

import java.util.List;

import com.app.entities.Booking;
import com.app.entities.Customer;

public interface BookingService 
{
	List<Booking> getAllBookingDetails();
	
	String deleteBookingById(Long id);
	
	Booking addNewBookingDetails(Booking booking);
	
	Booking updateBookingDetails(Booking booking);
	
	Booking getBookingDetailsById(Long id);
	
	List<Booking> findAllByOrderByBookingDateAsc();
}
