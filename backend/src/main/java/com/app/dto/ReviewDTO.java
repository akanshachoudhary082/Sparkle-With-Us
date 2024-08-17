package com.app.dto;

public class ReviewDTO {

	private String comments;
	private int rating;
	private Long id;

	public ReviewDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public ReviewDTO(String comments, int rating, Long id) {
		super();
		this.comments = comments;
		this.rating = rating;
		this.id = id;
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "ReviewDTO [comments=" + comments + ", rating=" + rating + ", id=" + id + "]";
	}

	
}