package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment extends BaseEntity
{

	private Long transactionId;
	private Long bookingId;
	private Double amount;
	private LocalDate paymnetDate;
	private PaymentMode paymentMode;
	@Column(length = 20)
	private PaymentStatus paymentStatus;
	
	
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Payment(Long id) {
		super(id);
		// TODO Auto-generated constructor stub
	}
	public Payment(Long transactionId, Long bookingId, Double amount, LocalDate paymnetDate, PaymentMode paymentMode,
			PaymentStatus paymentStatus) {
		super();
		this.transactionId = transactionId;
		this.bookingId = bookingId;
		this.amount = amount;
		this.paymnetDate = paymnetDate;
		this.paymentMode = paymentMode;
		this.paymentStatus = paymentStatus;
	}
	
	
	public Long getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}
	public Long getBookingId() {
		return bookingId;
	}
	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public LocalDate getPaymnetDate() {
		return paymnetDate;
	}
	public void setPaymnetDate(LocalDate paymnetDate) {
		this.paymnetDate = paymnetDate;
	}
	public PaymentMode getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(PaymentMode paymentMode) {
		this.paymentMode = paymentMode;
	}
	public PaymentStatus getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(PaymentStatus paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	
	@Override
	public String toString() {
		return "Payment [transactionId=" + transactionId + ", bookingId=" + bookingId + ", amount=" + amount
				+ ", paymnetDate=" + paymnetDate + ", paymentMode=" + paymentMode + ", paymentStatus=" + paymentStatus
				+ "]";
	}
	
	
	
}
