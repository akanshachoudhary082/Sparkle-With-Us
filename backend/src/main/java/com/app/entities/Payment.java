package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment extends BaseEntity
{
	@OneToOne
	@JoinColumn(name = "customer_id",nullable= false)
	private  Customer customer;

	@OneToOne
	@JoinColumn(name="booking_id", nullable = false)
	private Booking bookingId;
	
//	@Column(name="transaction_id", nullable = false)
//	private Long transactionId;
	
	@Column(name="payment_date_time", nullable = false)
	private LocalDateTime paymentDate;
	
	@Column(nullable = false)
	private double amount;
	
	@Enumerated(EnumType.STRING)
	@Column(name="payment_mode",length = 50)
	private PaymentMode paymentMode;
	
	//ctor
	public Payment() {
		// TODO Auto-generated constructor stub
	}

	public Payment(Customer customer, Booking bookingId, LocalDateTime paymentDate, double amount,
			PaymentMode paymentMode) {
		super();
		this.customer = customer;
		this.bookingId = bookingId;
		this.paymentDate = paymentDate;
		this.amount = amount;
		this.paymentMode = paymentMode;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Booking getBookingId() {
		return bookingId;
	}

	public void setBookingId(Booking bookingId) {
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
		return "Payment [customer=" + customer + ", bookingId=" + bookingId + ", paymentDate=" + paymentDate
				+ ", amount=" + amount + ", paymentMode=" + paymentMode + "]";
	}
}
