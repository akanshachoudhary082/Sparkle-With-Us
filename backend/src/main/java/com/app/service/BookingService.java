package com.app.service;

//import java.util.List;
//
//import com.app.dto.ApiResponse;
//import com.app.dto.BookingDTO;
//import com.app.entities.Booking;
//
//public interface BookingService 
//{
//	List<Booking> getAllBookingDetails();
//	
//	String deleteBookingById(Long id);
//	
//	Booking addNewBookingDetails(Booking booking);
//	//ApiResponse addNewBookingDetails(BookingDTO bookingDto);
//	
//	Booking updateBookingDetails(Booking booking);
//	
//	Booking getBookingDetailsById(Long id);
//	
//	List<Booking> findAllByOrderByBookingDateAsc();
//}


import java.util.List;
import com.app.dto.BookingDTO;

public interface BookingService {

    List<BookingDTO> getAllBookingDetails();

    String deleteBookingById(Long id);

    BookingDTO addNewBookingDetails(BookingDTO bookingDTO);

    BookingDTO updateBookingDetails(BookingDTO bookingDTO);

    BookingDTO getBookingDetailsById(Long id);

    List<BookingDTO> findAllByOrderByBookingDateAsc();
}
