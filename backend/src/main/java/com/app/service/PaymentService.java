package com.app.service;

import com.app.dto.ApiResponse;
import com.app.dto.PaymentDTO;

public interface PaymentService 
{
	ApiResponse addNewPayment(PaymentDTO newPament);
	ApiResponse updatePayment(Long paymentId, PaymentDTO paymentDto);
}
