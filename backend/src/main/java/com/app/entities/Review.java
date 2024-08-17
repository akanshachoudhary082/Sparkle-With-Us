package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "review")
public class Review extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 20, name = "first_name")
	private String firstName;
	@Column(length = 20, name = "last_name")
	private String lastName;
	@Column(length = 100)
	private String comments;
	private int rating;

	@OneToOne
	@JoinColumn(name = "customer_id", nullable = false)
	private Customer customer;

	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Review(String firstName, String lastName, String comments, int rating, Customer customer) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.comments = comments;
		this.rating = rating;
		this.customer = customer;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "Review [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", comments=" + comments
				+ ", rating=" + rating + ", customer=" + customer + "]";
	}
}