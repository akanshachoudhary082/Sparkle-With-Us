package com.app.dto;

import java.time.LocalDateTime;

import com.app.entities.PaymentMode;

public class PaymentDTO {

	private String orderId;
	private LocalDateTime paymentDate;
	private double amount;
	private PaymentMode paymentMode;
	private Double amount_paid;

	private String razorpayPaymentId;

	private String razorpayOrderId;

	private String razorpaySignature;

	private String status;
	private Long customerId;
	private Long bookingId;

	public PaymentDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	

	public PaymentDTO(String orderId, LocalDateTime paymentDate, double amount, PaymentMode paymentMode,
			Double amount_paid, String razorpayPaymentId, String razorpayOrderId, String razorpaySignature,
			String status, Long customerId, Long bookingId) {
		super();
		this.orderId = orderId;
		this.paymentDate = paymentDate;
		this.amount = amount;
		this.paymentMode = paymentMode;
		this.amount_paid = amount_paid;
		this.razorpayPaymentId = razorpayPaymentId;
		this.razorpayOrderId = razorpayOrderId;
		this.razorpaySignature = razorpaySignature;
		this.status = status;
		this.customerId = customerId;
		this.bookingId = bookingId;
	}




	public LocalDateTime getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDateTime paymentDate) {
		this.paymentDate = paymentDate;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public PaymentMode getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(PaymentMode paymentMode) {
		this.paymentMode = paymentMode;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public Double getAmount_paid() {
		return amount_paid;
	}

	public void setAmount_paid(Double amount_paid) {
		this.amount_paid = amount_paid;
	}

	public String getRazorpayPaymentId() {
		return razorpayPaymentId;
	}

	public void setRazorpayPaymentId(String razorpayPaymentId) {
		this.razorpayPaymentId = razorpayPaymentId;
	}

	

	public String getRazorpaySignature() {
		return razorpaySignature;
	}

	public void setRazorpaySignature(String razorpaySignature) {
		this.razorpaySignature = razorpaySignature;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
	public String getOrderId() {
		return orderId;
	}


	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}


	public String getRazorpayOrderId() {
		return razorpayOrderId;
	}




	public void setRazorpayOrderId(String razorpayOrderId) {
		this.razorpayOrderId = razorpayOrderId;
	}




	@Override
	public String toString() {
		return "PaymentDTO [orderId=" + orderId + ", paymentDate=" + paymentDate + ", amount=" + amount
				+ ", paymentMode=" + paymentMode + ", amount_paid=" + amount_paid + ", razorpayPaymentId="
				+ razorpayPaymentId + ", razorpayOrderId=" + razorpayOrderId + ", razorpaySignature="
				+ razorpaySignature + ", status=" + status + ", customerId=" + customerId + ", bookingId=" + bookingId
				+ "]";
	}




	

	
}
