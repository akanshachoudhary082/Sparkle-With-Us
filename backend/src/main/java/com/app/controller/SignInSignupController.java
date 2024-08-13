package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SigninRequest;
import com.app.dto.SigninResponse;
import com.app.dto.Signup;
import com.app.security.JwtUtils;
import com.app.service.SignupService;

@RestController
public class SignInSignupController {

	@Autowired
	private SignupService signupService;

	@Autowired
	private AuthenticationManager authMgr;

	@Autowired
	private JwtUtils jwtUtils;

	@PostMapping("/customer/register")
	public ResponseEntity<Signup> customerRegistration(@RequestBody Signup reqDTO) throws Exception {
		Signup response = signupService.customerRegistration(reqDTO);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("/stylist/register")
	public ResponseEntity<Signup> stylistRegistration(@RequestBody Signup reqDTO) throws Exception {
		Signup response = signupService.stylistRegistration(reqDTO);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("/admin/register")
	public ResponseEntity<Signup> adminRegistration(@RequestBody Signup reqDTO) throws Exception {
		Signup response = signupService.adminRegistration(reqDTO);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody @Valid SigninRequest request) {
		System.out.println("in sign in" + request);
		// 1. create a token(implementation of Authentication i/f)
		// to store un verified user email n pwd
		UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(request.getEmail(),
				request.getPassword());
		// 2. invoke auth mgr's authenticate method;
		Authentication verifiedToken = authMgr.authenticate(token);
		// => authentication n authorization successful !
		// 3. In case of successful auth, create JWT n send it to the clnt in response
		SigninResponse resp = new SigninResponse(jwtUtils.generateJwtToken(verifiedToken), "Successful Auth!!!!");
		return ResponseEntity.status(HttpStatus.CREATED).body(resp);
	}
}