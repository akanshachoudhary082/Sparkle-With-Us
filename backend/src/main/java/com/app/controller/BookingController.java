package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Booking;
import com.app.entities.Customer;
import com.app.service.BookingService;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/booking")
public class BookingController 
{
	@Autowired
	private BookingService bookingService;
	@Autowired
	private CustomerService customerService;
	
	public BookingController() 
	{
		System.out.println("In Booking Controller "+ getClass());
	}
	
	@GetMapping
    public ResponseEntity<List<Booking>> getAllBookingDetails() {
        List<Booking> bookings = bookingService.getAllBookingDetails();
        return ResponseEntity.ok(bookings);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingDetailsById(@PathVariable Long id) {
        Booking booking = bookingService.getBookingDetailsById(id);
        if (booking != null) {
            return ResponseEntity.ok(booking);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBookingById(@PathVariable Long id) {
        String response = bookingService.deleteBookingById(id);
        return ResponseEntity.ok(response);
    }

//    @PostMapping
//    public ResponseEntity<Booking> addNewBooking(@RequestBody Booking newBooking) {
//        Booking booking = bookingService.addNewBookingDetails(newBooking);
//        return ResponseEntity.status(HttpStatus.CREATED).body(booking);
//    }
    
//    @PostMapping("/booking")
//    public ResponseEntity<Booking> addNewBooking(@RequestBody Booking newBooking) {
//        Customer customer = newBooking.getCustomers();
//        if (customer.getId() == null) {
//            customerService.save(customer); // Save the customer first if it's new
//        }
//        Booking savedBooking = bookingService.save(newBooking); // Then save the booking
//        return ResponseEntity.ok(savedBooking);
//    }


    @PutMapping
    public ResponseEntity<Booking> updateBookingDetails(@RequestBody Booking booking) {
        Booking updatedBooking = bookingService.updateBookingDetails(booking);
        return ResponseEntity.ok(updatedBooking);
    }

    @GetMapping("/sorted")
    public ResponseEntity<List<Booking>> getBookingSortedByDate() {
        List<Booking> sortedBookings = bookingService.findAllByOrderByBookingDateAsc();
        return ResponseEntity.ok(sortedBookings);
    }
}




