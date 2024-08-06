//package com.app.dto;
//
//import javax.persistence.Entity;
//
//
//public class ReviewDTO {
//    
//	private Long customerId;
//	private Long id;
//	private String comments;
//	private int rating;
//	private String firstName;
//	private String lastName;
//	
//	
//
//	public ReviewDTO() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//	
////	public ReviewDTO(String comments, int rating, Long id) {
////		super();
////		this.comments = comments;
////		this.rating = rating;
////		this.id = id;
////	}
//	
//
//	
//
//    public ReviewDTO(Long customerId, Long id, String comments, int rating, String firstName, String lastName) {
//	super();
//	this.customerId = customerId;
//	this.id = id;
//	this.comments = comments;
//	this.rating = rating;
//	this.firstName = firstName;
//	this.lastName = lastName;
//}
//
//    public Long getCustomerId() {
//        return customerId;
//    }
//	public void setCustomerId(Long customerId) {
//        this.customerId = customerId;
//    }
//	public String getComments() {
//		return comments;
//	}
//
//	public void setComments(String comments) {
//		this.comments = comments;
//	}
//
//	public int getRating() {
//		return rating;
//	}
//
//	public void setRating(int rating) {
//		this.rating = rating;
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
//	public String getFirstName() {
//		return firstName;
//	}
//
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//
//	public String getLastName() {
//		return lastName;
//	}
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//
//	@Override
//	public String toString() {
//		return "ReviewDTO [customerId=" + customerId + ", id=" + id + ", comments=" + comments + ", rating=" + rating
//				+ ", firstName=" + firstName + ", lastName=" + lastName + "]";
//	}
//
//	
//
//	
//	
//}