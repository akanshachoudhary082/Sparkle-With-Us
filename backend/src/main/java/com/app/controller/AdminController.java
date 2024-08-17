package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Admin;
import com.app.entities.Booking;
import com.app.entities.Customer;
import com.app.entities.Login;
import com.app.entities.Services;
import com.app.entities.Specialization;
import com.app.entities.Stylist;
import com.app.service.AdminService;
import com.app.service.BookingService;
import com.app.service.CustomerService;
import com.app.service.ServiceService;
import com.app.service.StylistService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController 
{
	@Autowired
	private AdminService adminService;
	
    @Autowired
    private CustomerService customerService;

    @Autowired
    private StylistService stylistService;

    @Autowired
    private BookingService bookingService;
    
    @Autowired
    private ServiceService serviceService;
    
    
    public AdminController() {
		System.out.println("In Admin Controller " + getClass());
	}
    
    
    @PostMapping("/login")
    public ResponseEntity<Admin> loginAdmin(@RequestBody Login login) {
        try {
            Admin admin = adminService.loginAdmin(login.getEmail(), login.getPassword());
            return ResponseEntity.ok(admin); // HTTP 200 with the admin details
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null); // HTTP 401 Unauthorized
        }
    }

    // Customer Management

//    @PostMapping("/customers")
//    public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
//        Customer createdCustomer = customerService.addCustomerDetails(customer);
//        return new ResponseEntity<>(createdCustomer, HttpStatus.CREATED);
//    }
//
//    @PutMapping("/customers/{id}")
//    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customerDetails) {
//        Customer updatedCustomer = customerService.updateCustomerDetails(customerDetails);
//        return ResponseEntity.ok(updatedCustomer);
//    }
//
//    @DeleteMapping("/customers/{id}")
//    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
//        customerService.deleteCustomerById(id);
//        return ResponseEntity.noContent().build();
//    }

    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        Customer customer = customerService.getCustomerById(id);
        return ResponseEntity.ok(customer);
    }

    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        List<Customer> customers = customerService.getAllCustomerDetails();
        return ResponseEntity.ok(customers);
    }
    
    
    @GetMapping("/customers/sorted")
    public ResponseEntity<List<Customer>> getAllCustomersSortedByName() {
        List<Customer> sortedCustomers = customerService.getAllCustomersSortedByName();
        return ResponseEntity.ok(sortedCustomers);
    }
    // Stylist Management

//    @PostMapping("/stylists")
//    public ResponseEntity<Stylist> addStylist(@RequestBody Stylist stylist) {
//        Stylist createdStylist = stylistService.addNewStylist(stylist);
//        return new ResponseEntity<>(createdStylist, HttpStatus.CREATED);
//    }
//
//    @PutMapping("/stylists/{id}")
//    public ResponseEntity<Stylist> updateStylist(@RequestBody Stylist stylistDetails) {
//        Stylist updatedStylist = stylistService.updateStylistDetail(stylistDetails);
//        return ResponseEntity.ok(updatedStylist);
//    }
//
//    @DeleteMapping("/stylists/{id}")
//    public ResponseEntity<Void> deleteStylist(@PathVariable Long id) {
//        stylistService.deleteStylistDetails(id);
//        return ResponseEntity.noContent().build();
//    }

    @GetMapping("/stylists/{id}")
    public ResponseEntity<Stylist> getStylistById(@PathVariable Long id) {
        Stylist stylist = stylistService.getStylistDetails(id);
        return ResponseEntity.ok(stylist);
    }

    @GetMapping("/stylists")
    public ResponseEntity<List<Stylist>> getAllStylists() {
        List<Stylist> stylists = stylistService.getAllStylist();
        return ResponseEntity.ok(stylists);
    }
    @GetMapping("/stylists/available")
    public ResponseEntity<List<Stylist>> getAvailableStylists() {
        List<Stylist> stylists = stylistService.getAllAvailableStylists();
        return ResponseEntity.ok(stylists);
    }
        
    // Appointment Management

//    @PostMapping("/booking")
//    public ResponseEntity<Booking> addBooking(@RequestBody Booking booking) {
//        Booking createdAppointment = bookingService.addNewBookingDetails(booking); 
//        		return new ResponseEntity<>(createdAppointment, HttpStatus.CREATED);
//    }
//
//    @PutMapping("/booking/{id}")
//    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking) {
//    	Booking updatedAppointment = bookingService.updateBookingDetails(booking);
//        return ResponseEntity.ok(updatedAppointment);
//    }
//
//    @DeleteMapping("/booking/{id}")
//    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
//    	bookingService.deleteBookingById(id);
//        return ResponseEntity.noContent().build();
//    }

    @GetMapping("/booking/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
    	Booking appointment = bookingService.getBookingDetailsById(id);
        return ResponseEntity.ok(appointment);
    }

    @GetMapping("/booking")
    public ResponseEntity<List<Booking>> getAllBooking() {
        List<Booking> appointments = bookingService.getAllBookingDetails();
        return ResponseEntity.ok(appointments);
    }
    @GetMapping("/booking/sorted")
    public ResponseEntity<List<Booking>> getBookingSortedByDate() {
        List<Booking> sortedBookings = bookingService.findAllByOrderByBookingDateAsc();
        return ResponseEntity.ok(sortedBookings);
    }
    
    //Service Management
    @GetMapping("/services")
    public ResponseEntity<List<Services>> getAllService()
    {
        List<Services> services = serviceService.getAllService();
        return ResponseEntity.ok(services);
    }
    
    @GetMapping("/services/{id}")
    public ResponseEntity<Services> getServiceById(@PathVariable Long id)
    {
        Services service = serviceService.getServiceById(id);
        if(service != null) {
            return ResponseEntity.ok(service);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
