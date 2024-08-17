package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;
    
    public ReviewController() {
		System.out.println("In Review Controller "+getClass());
	}
    
    @GetMapping
    public ResponseEntity<List<Review>> getAllReview() {
        List<Review> reviews = reviewService.getAllReview();
        return ResponseEntity.ok(reviews);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Review> getById(@PathVariable Long id) {
        Review review = reviewService.getReviewDetails(id);
        if (review != null) {
            return ResponseEntity.ok(review);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    
    @PostMapping
    public ResponseEntity<Review> addNewReview(@RequestBody Review review) {
        Review createdReview = reviewService.addNewReview(review);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdReview);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Review> updateReviewDetails(@PathVariable Long id, @RequestBody Review review) {
        review.setId(id); // Ensure the ID is set in the review object
        Review updatedReview = reviewService.updateReviewDetails(review);
        if (updatedReview != null) {
            return ResponseEntity.ok(updatedReview);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReviewDetails(@PathVariable Long id) {
        String response = reviewService.deleteReviewDetails(id);
        if (response.equals("Review deleted successfully")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }
}
