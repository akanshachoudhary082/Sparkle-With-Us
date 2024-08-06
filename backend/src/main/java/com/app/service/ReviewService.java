package com.app.service;

import java.util.List;

import com.app.entities.Review;

public interface ReviewService{
	List<Review> getAllReview();
	Review addNewReview(Review newReview);
	String deleteReviewDetails(Long reviewId);
	Review getReviewDetails(Long reviewId);
	Review updateReviewDetails(Review review);
}