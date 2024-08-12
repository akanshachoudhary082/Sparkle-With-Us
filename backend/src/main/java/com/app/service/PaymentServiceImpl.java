package com.app.service;

import java.time.LocalDateTime;

import javax.transaction.Transactional;

import org.json.JSONObject;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.app.dto.PaymentDTO;
import com.app.entities.Booking;
import com.app.entities.Payment;

import com.app.repository.BookingRepository;
import com.app.repository.PaymentRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

	// Razorpay credentials
	@Value("${Razorpay.key_id}")
	private String key_id;
	@Value("${Razorpay.key_secret}")
	private String key_secret;

	@Autowired
	private PaymentRepository paymentRepository;
	@Autowired
	private BookingRepository bookingRepository;
	@Autowired
	private ModelMapper mapper;

	@Override
	public String updatePaymentDetails(PaymentDTO paymentDTO) throws Exception {
		Booking booking = bookingRepository.findById(paymentDTO.getBookingId())
				.orElseThrow(() -> new Exception("Booking Details Not Found"));

		Payment payment = booking.getPayment();
		payment.setRazorpayPaymentId(paymentDTO.getRazorpayPaymentId());
		/* payment.setRazorpaySignature(paymentDTO.getRazorpaySignature()); */
		payment.setStatus("PAID");
		return "Payment Records Updated";
	}

	@Override
	public PaymentDTO savePaymentDetails(PaymentDTO paymentDTO) throws Exception {
		// Fetch the booking using bookingId
		Booking booking = bookingRepository.findById(paymentDTO.getBookingId())
				.orElseThrow(() -> new Exception("Booking Details Not found"));

		// Initialize Razorpay client
		var client = new RazorpayClient(key_id, key_secret);

		// Create JSON object for Razorpay order request
		JSONObject ob = new JSONObject();
		double amount = paymentDTO.getAmount() * 100; // Amount in paise
		ob.put("amount", amount);
		ob.put("currency", "INR");
		ob.put("receipt", "txn_" + paymentDTO.getBookingId()); // Unique receipt ID

		// Create an order with Razorpay
		Order order;
		try {
			order = client.Orders.create(ob);
		} catch (Exception e) {
			throw new Exception("Error creating Razorpay order: " + e.getMessage());
		}

		// Update DTO with Razorpay order details
		paymentDTO.setRazorpayOrderId(order.get("id"));
		paymentDTO.setAmount_paid(Double.parseDouble(order.get("amount_paid").toString()) / 100);
		paymentDTO.setStatus(order.get("status").toString());

		// Map DTO to Payment entity and save
		Payment payment = new Payment();
		mapper.map(paymentDTO, payment);
		payment.setPaymentDate(LocalDateTime.now());
		payment.setStatus("PENDING");
		Payment persistPayment = paymentRepository.save(payment);

		// Associate payment with the booking
		booking.setPayment(persistPayment);
		bookingRepository.save(booking);

		// Return updated DTO
		return paymentDTO;
	}

	
}
