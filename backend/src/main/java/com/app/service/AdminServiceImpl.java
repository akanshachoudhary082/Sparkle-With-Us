package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.entities.Booking;
import com.app.entities.Customer;
import com.app.entities.Stylist;
import com.app.repository.BookingRepository;
import com.app.repository.CustomerRepository;
import com.app.repository.StylistRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService 
{
    @Autowired
    private CustomerRepository customerRepository; ;

    @Autowired
	private StylistRepository stylistRepository;

    @Autowired
	private BookingRepository bookingRepository;

    
    //Customer Management

    @Override
	public Customer getCustomerById(Long id) 
	{
		Optional<Customer> cust = customerRepository.findById(id);
		return cust.orElseThrow(() -> new ResourceNotFoundException("Invalid Customer Id"));
	}

	@Override
	public List<Customer> getAllCustomerDetails() 
	{
		return customerRepository.findAll();
	}

	@Override
	public Customer addCustomerDetails(Customer nweCustomer) 
	{
		return customerRepository.save(nweCustomer);
	}
	
	@Override
	public String deleteCustomerById(Long id) 
	{
		if (customerRepository.existsById(id)) 
		{
			customerRepository.deleteById(id);
			return "Customer details deleted";
		}
		return "Deleting customer details failed : Invalid Customer ID";
	}

	@Override
	public Customer updateCustomerDetails(Customer customer) 
	{
		return customerRepository.save(customer);
	}

    // Stylist Management
	@Override
	public List<Stylist> getAllStylist() {
		return stylistRepository.findAll();
	}

	@Override
	public Stylist getStylistDetails(Long stylistId) {
		Optional<Stylist> stylist = stylistRepository.findById(stylistId);
		return stylist.orElseThrow(() -> new ResourceNotFoundException("Invalid Stylist Id"));
	}

	@Override
	public String deleteStylistDetails(Long id) {
		if (stylistRepository.existsById(id)) {
			stylistRepository.deleteById(id);
			return "Stylist details deleted";
		}
		return "Deleting stylist details failed :Invaid Stylist ID";
	}

	@Override
	public Stylist updateStylistDetail(Stylist stylist) {
		return stylistRepository.save(stylist);
	}

	@Override
	public Stylist addNewStylist(Stylist stylist) 
	{	
		return stylistRepository.save(stylist);
	}
	
	

    // Booking Management

	@Override
	public Booking addNewBookingDetails(Booking newBooking) 
	{
		if(newBooking.getCustomers() == null || newBooking.getId() == null)
		{
			throw new IllegalArgumentException("Customer must not be null and must have an ID");
		}
		Long customerId = newBooking.getCustomers().getId();
		Customer customer = customerRepository.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not found with ID: " + customerId));
		newBooking.setCustomers(customer);
		return bookingRepository.save(newBooking);
	}

	
	@Override
	public List<Booking> getAllBookingDetails() 
	{
		return bookingRepository.findAll();
	}
	
	@Override
	public String deleteBookingById(Long id) 
	{
		if (bookingRepository.existsById(id)) 
		{
			bookingRepository.deleteById(id);
			return "Booking details deleted";
		}
		return "Deleting booking datails failes : Invalid booking id";
	}


	@Override
	public Booking updateBookingDetails(Booking booking) 
	{
		return bookingRepository.save(booking);
	}

	@Override
	public Booking getBookingDetailsById(Long id) {
		Optional<Booking> booking = bookingRepository.findById(id);
		return booking.orElseThrow(() -> new ResourceNotFoundException("Invalid Booking Id!!"));
	}
	
}
