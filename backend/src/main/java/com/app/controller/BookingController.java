//package com.app.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.app.dto.ApiResponse;
//import com.app.dto.BookingDTO;
//import com.app.entities.Booking;
//import com.app.service.BookingService;
//import com.app.service.CustomerService;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/booking")
//public class BookingController 
//{
//	@Autowired
//	private BookingService bookingService;
//	@Autowired
//	private CustomerService customerService;
//	
//	public BookingController() 
//	{
//		System.out.println("In Booking Controller "+ getClass());
//	}
//	
//	@GetMapping
//    public ResponseEntity<List<Booking>> getAllBookingDetails() {
//        List<Booking> bookings = bookingService.getAllBookingDetails();
//        return ResponseEntity.ok(bookings);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Booking> getBookingDetailsById(@PathVariable Long id) {
//        Booking booking = bookingService.getBookingDetailsById(id);
//        if (booking != null) {
//            return ResponseEntity.ok(booking);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<String> deleteBookingById(@PathVariable Long id) {
//        String response = bookingService.deleteBookingById(id);
//        return ResponseEntity.ok(response);
//    }
//
//    @PostMapping
//    public ResponseEntity<Booking> addNewBooking(@RequestBody Booking newBooking) {
//        Booking booking = bookingService.addNewBookingDetails(newBooking);
//        return ResponseEntity.status(HttpStatus.CREATED).body(booking);
//    }
//
////    @PostMapping
////	public ApiResponse addNewBooking(@RequestBody BookingDTO newBooking)
////	{
////		System.out.println("in add booking "+ newBooking);
////		return bookingService.addNewBookingDetails(newBooking);
////	}
//
//
//    @PutMapping("/{id}")
//    public ResponseEntity<Booking> updateBookingDetails(@PathVariable Long id, @RequestBody Booking booking) {
//    	booking.setId(id); // Ensure the ID is set in the review object
//    	Booking updatedBooking = bookingService.updateBookingDetails(booking);
//        if (updatedBooking != null) {
//            return ResponseEntity.ok(updatedBooking);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//        }
//    }
//
//    @GetMapping("/booking/sorted")
//    public ResponseEntity<List<Booking>> getBookingSortedByDate() {
//        List<Booking> sortedBookings = bookingService.findAllByOrderByBookingDateAsc();
//        return ResponseEntity.ok(sortedBookings);
//    }
//}
//
//
//
//
package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.BookingDTO;
import com.app.service.BookingService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    // Create a new booking
    @PostMapping
    public ResponseEntity<BookingDTO> createBooking(@RequestBody BookingDTO bookingDTO) {
        BookingDTO createdBooking = bookingService.addNewBookingDetails(bookingDTO);
        return ResponseEntity.ok(createdBooking);
    }

    // Get all bookings
    @GetMapping
    public ResponseEntity<List<BookingDTO>> getAllBookings() {
        List<BookingDTO> bookings = bookingService.getAllBookingDetails();
        return ResponseEntity.ok(bookings);
    }

    // Get a booking by ID
    @GetMapping("/{id}")
    public ResponseEntity<BookingDTO> getBookingById(@PathVariable Long id) {
        BookingDTO bookingDTO = bookingService.getBookingDetailsById(id);
        return ResponseEntity.ok(bookingDTO);
    }

    // Update a booking
    @PutMapping("/{id}")
    public ResponseEntity<BookingDTO> updateBooking(@PathVariable Long id, @RequestBody BookingDTO bookingDTO) {
        bookingDTO.setBookingId(id); // Ensure the ID is set in the DTO
        BookingDTO updatedBooking = bookingService.updateBookingDetails(bookingDTO);
        return ResponseEntity.ok(updatedBooking);
    }

    // Delete a booking by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        String responseMessage = bookingService.deleteBookingById(id);
        return ResponseEntity.ok(responseMessage);
    }

    // Get all bookings ordered by booking date ascending
    @GetMapping("/sorted")
    public ResponseEntity<List<BookingDTO>> getAllBookingsOrderedByDate() {
        List<BookingDTO> bookings = bookingService.findAllByOrderByBookingDateAsc();
        return ResponseEntity.ok(bookings);
    }
}
