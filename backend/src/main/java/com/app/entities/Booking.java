package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "booking")
public class Booking extends BaseEntity
{
	@Enumerated(EnumType.STRING)
	@Column(name="booking_status", length = 50, nullable = false)
	private BookStatus bookStatus;

	@Column(name="booking_date_time", nullable = false)
	private LocalDateTime bookingDate;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "customer_Id", nullable = false)
	private Customer customers;
	
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(BookStatus bookStatus, LocalDateTime bookingDate, Customer customers) {
		super();
		this.bookStatus = bookStatus;
		this.bookingDate = bookingDate;
		this.customers = customers;
	}

	public BookStatus getBookStatus() {
		return bookStatus;
	}

	public void setBookStatus(BookStatus bookStatus) {
		this.bookStatus = bookStatus;
	}

	public LocalDateTime getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDateTime bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Customer getCustomers() {
		return customers;
	}

	public void setCustomers(Customer customers) {
		this.customers = customers;
	}

	@Override
	public String toString() {
		return "Booking [bookStatus=" + bookStatus + ", bookingDate=" + bookingDate + ", customers=" + customers + "]";
	}
}
