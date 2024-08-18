package com.app.dto;

import java.time.LocalDateTime;

import com.app.entities.BookStatus;

public class BookingDTO 
{
	//@JsonProperty(access = Access.READ_ONLY)
	private Long bookingId;
	private BookStatus bookingStatus;
	private LocalDateTime bookingDateTime;
	private Long customerId;
	private Long timeslotId;
	private Long serviceId;
	
	public BookingDTO() {
		// TODO Auto-generated constructor stub
	}

	
	public BookingDTO(Long bookingId, BookStatus bookingStatus, LocalDateTime bookingDateTime, Long customerId,
			Long timeslotId, Long serviceId) {
		super();
		this.bookingId = bookingId;
		this.bookingStatus = bookingStatus;
		this.bookingDateTime = bookingDateTime;
		this.customerId = customerId;
		this.timeslotId = timeslotId;
		this.serviceId = serviceId;
	}


	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public BookStatus getBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(BookStatus bookingStatus) {
		this.bookingStatus = bookingStatus;
	}

	public LocalDateTime getBookingDateTime() {
		return bookingDateTime;
	}

	public void setBookingDateTime(LocalDateTime bookingDateTime) {
		this.bookingDateTime = bookingDateTime;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	
	public Long getTimeslotId() {
		return timeslotId;
	}


	public void setTimeslotId(Long timeslotId) {
		this.timeslotId = timeslotId;
	}


	public Long getServiceId() {
		return serviceId;
	}


	public void setServiceId(Long serviceId) {
		this.serviceId = serviceId;
	}


	@Override
	public String toString() {
		return "BookingDTO [bookingId=" + bookingId + ", bookingStatus=" + bookingStatus + ", bookingDateTime="
				+ bookingDateTime + ", customerId=" + customerId + ", timeslotId=" + timeslotId + ", serviceId="
				+ serviceId + "]";
	}


	
	
}
