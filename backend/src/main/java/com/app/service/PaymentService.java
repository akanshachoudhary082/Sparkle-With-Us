
package com.app.service;

import com.app.dto.PaymentDTO;
import com.app.exception.ResourceNotFoundException;

public interface PaymentService {
	PaymentDTO savePaymentDetails(PaymentDTO paymentDTO) throws Exception;
	String updatePaymentDetails(PaymentDTO paymentDTO) throws  Exception;

}