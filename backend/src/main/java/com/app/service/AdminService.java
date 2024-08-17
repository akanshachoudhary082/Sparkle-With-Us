package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.entities.Admin;
import com.app.entities.Booking;
import com.app.entities.Customer;
import com.app.entities.Services;
import com.app.entities.Specialization;
import com.app.entities.Stylist;

public interface AdminService 
{	
	Admin loginAdmin(String email, String password);
	
	
	// Customer Management
	List<Customer> getAllCustomerDetails();
	//Customer addCustomerDetails(Customer customer);
	Customer getCustomerById(Long id);
	List<Customer> getAllCustomersSortedByName();
	//String deleteCustomerById(Long id);
	//Customer updateCustomerDetails(Customer customer);

	
	// Stylist Management
	List<Stylist>getAllStylist();
	//String deleteStylistDetails(Long id);
	Stylist getStylistDetails(Long stylistId);
	//Stylist updateStylistDetail(Stylist stylist);
	//Stylist addNewStylist(Stylist stylist);
	List<Stylist> findStylistsBySpecialization(Specialization specialization);
	List<Stylist> getAllAvailableStylists();

	
	// Booking Management
	List<Booking> getAllBookingDetails();
	//String deleteBookingById(Long id);
	//Booking addNewBookingDetails(Booking booking);
	//Booking updateBookingDetails(Booking booking);
	Booking getBookingDetailsById(Long id);
	
	
	//Service Management
	Services getServiceById(Long id);
	List<Services> getAllService();
	
	
}
