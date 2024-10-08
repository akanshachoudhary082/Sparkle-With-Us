//package com.app.service;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.app.dto.ApiResponse;
//import com.app.dto.PaymentDTO;
//import com.app.entities.Booking;
//import com.app.entities.Customer;
//import com.app.entities.Payment;
//import com.app.exception.ResourceNotFoundException;
//import com.app.repository.BookingRepository;
//import com.app.repository.CustomerRepository;
//import com.app.repository.PaymentRepository;
//
//@Service
//@Transactional
//public class PaymentServiceImpl implements PaymentService
//{
//	@Autowired 
//	private PaymentRepository paymentRepository;
//	@Autowired
//	private BookingRepository bookingRepository;
//	@Autowired 
//	private CustomerRepository customerRepository;
//	@Autowired
//	private ModelMapper modelMapper;
//	
//	@Override
//	public ApiResponse addNewPayment(PaymentDTO paymentDto) {
//	    // Get customer
//	    Customer customer = customerRepository.findById(paymentDto.getCustomerId())
//	            .orElseThrow(() -> new ResourceNotFoundException("Invalid Customer Id!!"));
//
//	    // Get booking
//	    Booking booking = bookingRepository.findById(paymentDto.getBookingId())
//	            .orElseThrow(() -> new ResourceNotFoundException("Invalid Booking Id!!"));
//
//	    // Check if the booking is associated with the customer
//	    if (!booking.getCustomers().getId().equals(customer.getId())) {
//	        throw new IllegalArgumentException("Booking does not belong to the Customer!!");
//	    }
//
//	    // Map paymentDto to entity
//	    Payment payment = modelMapper.map(paymentDto, Payment.class);
//	    payment.setCustomer(customer);
//	    payment.setBookingId(booking); // assuming booking is mapped in Payment entity as booking
//
//	    // Save the payment
//	    Payment savedPayment = paymentRepository.save(payment);
//
//	    return new ApiResponse("Payment Added successfully... Thank you!!");
//	}
//
//
//}

package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.PaymentDTO;
import com.app.entities.Booking;
import com.app.entities.Customer;
import com.app.entities.Payment;
import com.app.repository.BookingRepository;
import com.app.repository.CustomerRepository;
import com.app.repository.PaymentRepository;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public ApiResponse addNewPayment(PaymentDTO paymentDTO) {
        // Fetch the booking by ID
        Booking booking = bookingRepository.findById(paymentDTO.getBookingId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid Booking ID"));

        // Fetch the customer by ID
        Customer customer = customerRepository.findById(paymentDTO.getCustomerId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid Customer ID"));

        // Check if the booking belongs to the customer
        if (!booking.getCustomers().getId().equals(customer.getId())) {
            throw new IllegalArgumentException("Booking does not belong to the Customer!!");
        }

        // Proceed with the payment creation
        Payment payment = new Payment();
        payment.setBookingId(booking);
        payment.setCustomer(customer);
        payment.setAmount(paymentDTO.getAmount());
        payment.setPaymentMode(paymentDTO.getPaymentMode());
        payment.setPaymentDate(LocalDateTime.now());

        paymentRepository.save(payment);

        return new ApiResponse(true, "Payment successful");
    }
}
    
   
      