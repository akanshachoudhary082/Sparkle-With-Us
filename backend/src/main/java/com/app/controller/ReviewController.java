package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Review;
import com.app.service.ReviewService;

@RestController
@RequestMapping("/review")
public class ReviewController {

	@Autowired
	private ReviewService reviewService;
	
	@GetMapping
	public List<Review> getAllReview(){
		return reviewService.getAllReview();
	}
	
	@GetMapping("/{id}")
	public Review getById(@PathVariable Long reviewId){
		return reviewService.getReviewDetails(reviewId);
	}
	
	@PostMapping
	public Review addNewReview(@RequestBody Review review) {
		return reviewService.addNewReview(review);
		
	}
	
	
	@PutMapping
	public Review updateReviewDetails(@RequestBody Review review)
	{
		return reviewService.updateReviewDetails(review);
	}

	
	@DeleteMapping("/{id}")
	public String deleteReviewDetails(@PathVariable Long reviewId){
		return reviewService.deleteReviewDetails(reviewId);
		
	}
}
