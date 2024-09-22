package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.PaymentDTO;
import com.app.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/payment")


public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ApiResponse addPayment(@RequestBody PaymentDTO paymentDTO) {
        try {
            return paymentService.addNewPayment(paymentDTO);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse(false, "Failed to process payment: " + e.getMessage());
        }
    }
}