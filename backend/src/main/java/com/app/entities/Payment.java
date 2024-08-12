package com.app.entities;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "booking_id", nullable = false)
    private Booking booking;

    @Column(name = "payment_date", nullable = false)
    private LocalDateTime paymentDate;

    @Column(nullable = false)
    private double amount;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_mode", length = 50)
    private PaymentMode paymentMode;

    private String razorpayPaymentId;

    @Column(length = 20)
    private String status;

    public Payment() {
        super();
    }

    public Payment(Booking booking, LocalDateTime paymentDate, double amount, PaymentMode paymentMode,
                   String razorpayPaymentId, String status) {
        super();
        this.booking = booking;
        this.paymentDate = paymentDate;
        this.amount = amount;
        this.paymentMode = paymentMode;
        this.razorpayPaymentId = razorpayPaymentId;
        this.status = status;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
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

    public String getRazorpayPaymentId() {
        return razorpayPaymentId;
    }

    public void setRazorpayPaymentId(String razorpayPaymentId) {
        this.razorpayPaymentId = razorpayPaymentId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Payment [booking=" + booking + ", paymentDate=" + paymentDate + ", amount=" + amount + ", paymentMode=" + paymentMode +
                ", razorpayPaymentId=" + razorpayPaymentId + ", status=" + status + "]";
    }
}
