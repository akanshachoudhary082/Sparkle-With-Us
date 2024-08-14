package com.app.entities;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.stereotype.Service;




//@Entity
//@Table(name = "booking")
//public class Booking extends BaseEntity
//{
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long id ;
//	
//	@Enumerated(EnumType.STRING)
//	@Column(name="booking_status", length = 50, nullable = false)
//	private BookStatus bookStatus;
//
//	@Column(name="booking_date_time", nullable = false)
//	private LocalDateTime bookingDate;
//	
//	@OneToMany(fetch = FetchType.EAGER)
//	@JoinColumn(name = "service_Id",nullable = false)
//	private Service service;
//	   
//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name = "customer_Id", nullable = false)
//	private Customer customers;
//   
//	public Booking() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//
//	public Booking(BookStatus bookStatus, LocalDateTime bookingDate, Customer customers) {
//		super();
//		this.bookStatus = bookStatus;
//		this.bookingDate = bookingDate;
//		this.customers = customers;
//	}
//	
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public BookStatus getBookStatus() {
//		return bookStatus;
//	}
//
//	public void setBookStatus(BookStatus bookStatus) {
//		this.bookStatus = bookStatus;
//	}
//
//	public LocalDateTime getBookingDate() {
//		return bookingDate;
//	}
//
//	public void setBookingDate(LocalDateTime bookingDate) {
//		this.bookingDate = bookingDate;
//	}
//
//	public Customer getCustomers() {
//		return customers;
//	}
//
//	public void setCustomers(Customer customers) {
//		this.customers = customers;
//	}
//
//	@Override
//	public String toString() {
//		return "Booking [id=" + id + ", bookStatus=" + bookStatus + ", bookingDate=" + bookingDate + ", customers="
//				+ customers + "]";
//	}
//}
@Entity
@Table(name = "booking")
public class Booking extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "booking_status", length = 50, nullable = false)
    private BookStatus bookStatus;

    @Column(name = "booking_date_time", nullable = false)
    private LocalDateTime bookingDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "service_Id", nullable = false)
    private Services service;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_Id", nullable = false)
    private Customer customers;

    public Booking() {
        super();
    }

  

    public Booking(Long id, BookStatus bookStatus, LocalDateTime bookingDate, Services service, Customer customers) {
		super();
		this.id = id;
		this.bookStatus = bookStatus;
		this.bookingDate = bookingDate;
		this.service = service;
		this.customers = customers;
	}



	// Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    
    public Services getService() {
		return service;
	}



	public void setService(Services service) {
		this.service = service;
	}



	@Override
	public String toString() {
		return "Booking [id=" + id + ", bookStatus=" + bookStatus + ", bookingDate=" + bookingDate + ", service="
				+ service + ", customers=" + customers + "]";
	}



	
}
