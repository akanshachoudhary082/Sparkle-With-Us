package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Review;
import com.app.exception.ResourceNotFoundException;
import com.app.repository.ReviewRepository;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	private ReviewRepository reviewRepository;

	@Override
	public List<Review> getAllReview() {

		return reviewRepository.findAll();
	}

	@Override
	public Review addNewReview(Review newReview) {

		return reviewRepository.save(newReview);
	}

	@Override
	public String deleteReviewDetails(Long reviewId) {
		if (reviewRepository.existsById(reviewId)) {
			reviewRepository.deleteById(reviewId);
			return "review details deleted";
		}
		return "deleting review details failed : Invalid review Id";
	}

	@Override
	public Review getReviewDetails(Long reviewId) {
		Optional<Review> optional = reviewRepository.findById(reviewId);

		return optional.orElseThrow(() -> new ResourceNotFoundException("Invalid Review ID!!!"));
	}

	@Override
	public Review updateReviewDetails(Review review) {

		return reviewRepository.save(review);
	}

}
