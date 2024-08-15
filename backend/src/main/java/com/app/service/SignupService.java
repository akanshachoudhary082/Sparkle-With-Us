package com.app.service;

import com.app.dto.Signup;


public interface SignupService {
	Signup userRegistration(Signup reqDTO) throws Exception;
	Signup stylistRegistration(Signup reqDTO) throws Exception;
	Signup adminRegistration(Signup reqDTO) throws Exception;
}