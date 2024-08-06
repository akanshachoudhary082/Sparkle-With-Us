package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;

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
public class Booking extends BaseEntity{

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name = "book_id")
//	private Long bookId;
//	@Column(name = "cust_id", nullable = false)
//	private Long custId;
//	@Column(name = "service_id", nullable = false)
//	private Long serviceId;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 50)
	private BookStatus bookStatus;

	private LocalDate bookingDate;
	private LocalTime timeSlot;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "customer_Id", nullable = false)
	private Customer customers;
	
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(BookStatus bookStatus, LocalDate bookingDate, LocalTime timeSlot, Customer customers) {
		super();
		this.bookStatus = bookStatus;
		this.bookingDate = bookingDate;
		this.timeSlot = timeSlot;
		this.customers = customers;
	}

	public BookStatus getBookStatus() {
		return bookStatus;
	}

	public void setBookStatus(BookStatus bookStatus) {
		this.bookStatus = bookStatus;
	}

	public LocalDate getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}

	public LocalTime getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(LocalTime timeSlot) {
		this.timeSlot = timeSlot;
	}

	public Customer getCustomers() {
		return customers;
	}

	public void setCustomers(Customer customers) {
		this.customers = customers;
	}

	@Override
	public String toString() {
		return "Booking [bookStatus=" + bookStatus + ", bookingDate=" + bookingDate + ", timeSlot=" + timeSlot
				+ ", customers=" + customers + "]";
	}
}
