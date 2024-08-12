package com.app.controller;

import com.app.dto.PaymentDTO;
import com.app.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/create_order")
    public ResponseEntity<PaymentDTO> createPaymentOrder(@RequestBody PaymentDTO paymentDTO) {
        try {
            PaymentDTO createdPaymentDTO = paymentService.savePaymentDetails(paymentDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPaymentDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

   
    @PostMapping("/update_order")
    public ResponseEntity<String> updatePaymentOrder(@RequestBody PaymentDTO paymentDTO) {
        try {
            String updateMessage = paymentService.updatePaymentDetails(paymentDTO);
            return ResponseEntity.status(HttpStatus.OK).body(updateMessage);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating payment details");
        }
    }
}
