package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Customer;
import com.app.entities.Review;
import com.app.exception.ResourceNotFoundException;
import com.app.repository.CustomerRepository;
import com.app.repository.ReviewRepository;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private CustomerRepository customerRepository;
	@Override
	public List<Review> getAllReview() {

		return reviewRepository.findAll();
	}

@Override
//	public Review addNewReview(Review newReview) {
//
//		return reviewRepository.save(newReview);
//	}


public Review addNewReview(Review review) {
    if (review.getCustomer() == null || review.getCustomer().getId() == null) {
        throw new IllegalArgumentException("Customer must not be null and must have an ID");
    }

    Long customerId = review.getCustomer().getId();
    Customer customer = customerRepository.findById(customerId)
        .orElseThrow(() -> new ResourceNotFoundException("Customer not found with ID: " + customerId));
    
    review.setCustomer(customer);
    return reviewRepository.save(review);
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
