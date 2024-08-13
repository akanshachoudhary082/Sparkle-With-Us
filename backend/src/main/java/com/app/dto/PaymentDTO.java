package com.app.dto;

import java.time.LocalDateTime;

import com.app.entities.PaymentMode;

public class PaymentDTO 
{
	private Long paymentId;
	private Long customerId;
	private Long bookingId;
	private LocalDateTime paymentDate;
	private double amount;
	private PaymentMode paymentMode;
	
	public PaymentDTO() {
		// TODO Auto-generated constructor stub
	}

	public PaymentDTO(Long paymentId, Long customerId, Long bookingId, LocalDateTime paymentDate, double amount,
			PaymentMode paymentMode) {
		super();
		this.paymentId = paymentId;
		this.customerId = customerId;
		this.bookingId = bookingId;
		this.paymentDate = paymentDate;
		this.amount = amount;
		this.paymentMode = paymentMode;
	}

	public Long getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(Long paymentId) {
		this.paymentId = paymentId;
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

	@Override
	public String toString() {
		return "PaymentDTO [paymentId=" + paymentId + ", customerId=" + customerId + ", bookingId=" + bookingId
				+ ", paymentDate=" + paymentDate + ", amount=" + amount + ", paymentMode=" + paymentMode + "]";
	}
}
