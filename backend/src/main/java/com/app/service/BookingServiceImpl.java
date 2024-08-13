package com.app.service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.entities.Booking;
import com.app.entities.Customer;
import com.app.repository.BookingRepository;
import com.app.repository.CustomerRepository;

@Service
@Transactional
public class BookingServiceImpl implements BookingService
{
	@Autowired
	private BookingRepository bookingRepository;

	@Autowired
	private CustomerRepository customerRepository;
	
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
	
	@Override
    public List<Booking> findAllByOrderByBookingDateAsc() 
	{
        return bookingRepository.findAll().stream()
            .sorted(Comparator.comparing(Booking::getBookingDate))
            .collect(Collectors.toList());
    }

}
