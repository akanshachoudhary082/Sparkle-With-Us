package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.BookingDTO;
import com.app.entities.BookStatus;
import com.app.entities.Booking;
import com.app.entities.Customer;
import com.app.entities.Services;
import com.app.entities.TimeSlot;
import com.app.repository.BookingRepository;
import com.app.repository.CustomerRepository;
import com.app.repository.ServiceRepository;
import com.app.repository.TimeSlotRepository;

//import java.util.Comparator;
//import java.util.List;
//import java.util.Optional;
//import java.util.stream.Collectors;
//
//import javax.transaction.Transactional;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.app.dto.ApiResponse;
//import com.app.dto.BookingDTO;
//import com.app.entities.Booking;
//import com.app.entities.Customer;
//import com.app.exception.ResourceNotFoundException;
//import com.app.repository.BookingRepository;
//import com.app.repository.CustomerRepository;
//
//@Service
//@Transactional
//public class BookingServiceImpl implements BookingService
//{
//	@Autowired
//	private BookingRepository bookingRepository;
//
//	@Autowired
//	private CustomerRepository customerRepository;
//	
//	@Autowired
//	private ModelMapper mapper;
//
//	@Override
//	public Booking addNewBookingDetails(Booking newBooking) 
//	{
//		if(newBooking.getCustomers() == null || newBooking.getId() == null)
//		{
//			throw new IllegalArgumentException("Customer must not be null and must have an ID");
//		}
//		Long customerId = newBooking.getCustomers().getId();
//		Customer customer = customerRepository.findById(customerId)
//				.orElseThrow(() -> new ResourceNotFoundException("Customer not found with ID: " + customerId));
//		newBooking.setCustomers(customer);
//		return bookingRepository.save(newBooking);
//	}
//	
////	@Override
////	public ApiResponse addNewBookingDetails(BookingDTO dto) 
////	{
////		Customer customer = customerRepository.findById(dto.getCustomerId())
////				.orElseThrow(() -> new ResourceNotFoundException("Customer not found with ID: " + dto.getCustomerId()));
////		//map dto --> entity
////		Booking booking = mapper.map(dto, Booking.class);
////		// establish the associations
////		// booking--> customer
////		booking.setCustomers(customer);
////		// save the booking entity to the database
////        bookingRepository.save(booking);
////		return new ApiResponse("New Booking added successfully!!");
////	}
//
//
//	@Override
//	public List<Booking> getAllBookingDetails() 
//	{
//		return bookingRepository.findAll();
//	}
//	
//	@Override
//	public String deleteBookingById(Long id) 
//	{
//		if (bookingRepository.existsById(id)) 
//		{
//			bookingRepository.deleteById(id);
//			return "Booking details deleted";
//		}
//		return "Deleting booking datails failes : Invalid booking id";
//	}
//
//
//	@Override
//	public Booking updateBookingDetails(Booking booking) 
//	{
//		return bookingRepository.save(booking);
//	}
//
//	@Override
//	public Booking getBookingDetailsById(Long id) {
//		Optional<Booking> booking = bookingRepository.findById(id);
//		return booking.orElseThrow(() -> new ResourceNotFoundException("Invalid Booking Id!!"));
//	}
//	
//	@Override
//    public List<Booking> findAllByOrderByBookingDateAsc() 
//	{
//        return bookingRepository.findAll().stream()
//            .sorted(Comparator.comparing(Booking::getBookingDate))
//            .collect(Collectors.toList());
//    }
//
//}


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.BookingDTO;
import com.app.entities.Booking;
import com.app.entities.Customer;
import com.app.entities.Services;
import com.app.entities.TimeSlot;
import com.app.repository.BookingRepository;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private TimeSlotRepository timeSlotRepository;
    @Autowired
    private ServiceRepository serviceRepository;
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<BookingDTO> getAllBookingDetails() {
        return bookingRepository.findAll()
                                .stream()
                                .map(this::mapToDTO)
                                .collect(Collectors.toList());
    }

    @Override
    public String deleteBookingById(Long id) {
        if (bookingRepository.existsById(id)) {
            bookingRepository.deleteById(id);
            return "Booking deleted successfully.";
        } else {
            return "Booking not found.";
        }
    }

    @Override
    public BookingDTO addNewBookingDetails(BookingDTO bookingDTO) {
        Booking booking = mapToEntity(bookingDTO);
        var timeSlot = timeSlotRepository.findById(bookingDTO.getTimeslotId()).orElseThrow();
        var serviceId = serviceRepository.findById(bookingDTO.getServiceId()).orElseThrow();
        var customerId = customerRepository.findById(bookingDTO.getCustomerId()).orElseThrow();
        booking.setService(serviceId);
        booking.setTimeSlot(timeSlot);
        booking.setCustomers(customerId);
        booking.setBookStatus(BookStatus.CONFIRMED);
        Booking savedBooking = bookingRepository.save(booking);
        return mapToDTO(savedBooking);
    }

    @Override
    public BookingDTO updateBookingDetails(BookingDTO bookingDTO) {
        Booking booking = mapToEntity(bookingDTO);
        if (bookingRepository.existsById(booking.getId())) { // Ensure getId() matches the entity's ID field
            Booking updatedBooking = bookingRepository.save(booking);
            return mapToDTO(updatedBooking);
        } else {
            throw new RuntimeException("Booking not found");
        }
    }

    @Override
    public BookingDTO getBookingDetailsById(Long id) {
        Booking booking = bookingRepository.findById(id)
                                           .orElseThrow(() -> new RuntimeException("Booking not found"));
        return mapToDTO(booking);
    }

    @Override
    public List<BookingDTO> findAllByOrderByBookingDateAsc() {
        return bookingRepository.findAllByOrderByBookingDateAsc()
                                .stream()
                                .map(this::mapToDTO)
                                .collect(Collectors.toList());
    }

    private BookingDTO mapToDTO(Booking booking) {
        if (booking == null) return null; // Null check

        return new BookingDTO(
            booking.getId(),
            booking.getBookStatus(),
            booking.getBookingDate(),
            booking.getCustomers() != null ? booking.getCustomers().getId() : null, // Handle null relationship
            booking.getTimeSlot() != null ? booking.getTimeSlot().getId() : null, // Handle null relationship
            booking.getService() != null ? booking.getService().getId() : null // Handle null relationship
        );
    }

    private Booking mapToEntity(BookingDTO bookingDTO) {
        if (bookingDTO == null) return null; // Null check

        Booking booking = new Booking();
        booking.setId(bookingDTO.getBookingId());
        booking.setBookStatus(bookingDTO.getBookingStatus());
        booking.setBookingDate(bookingDTO.getBookingDateTime());

        // Setting relationships
        if (bookingDTO.getCustomerId() != null) {
            booking.setCustomers(new Customer());
        }
        if (bookingDTO.getTimeslotId() != null) {
            booking.setTimeSlot(new TimeSlot());
        }
        if (bookingDTO.getServiceId() != null) {
            booking.setService(new Services());
        }

        return booking;
    }
}
