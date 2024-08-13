package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.PaymentDTO;
import com.app.entities.Payment;
import com.app.service.PaymentService;

@RestController
@RequestMapping("/payment")
public class PaymentController 
{
	@Autowired
	private PaymentService paymentService;
	
	public PaymentController() {
		System.out.println("In Payment controller " + getClass());
	}
	
	@PostMapping
	public ApiResponse addPayment(@RequestBody PaymentDTO paymentDTO)
	{
		System.out.println("In add payment " + paymentDTO);
		return paymentService.addNewPayment(paymentDTO);
	}
	
	
	    
	    @PutMapping("/{id}")
	    public ResponseEntity<ApiResponse> updatePayment(@PathVariable Long id, @RequestBody PaymentDTO paymentDto) {
	        ApiResponse payment = paymentService.updatePayment(id, paymentDto);
	        return ResponseEntity.ok(payment);
	    }
	}

