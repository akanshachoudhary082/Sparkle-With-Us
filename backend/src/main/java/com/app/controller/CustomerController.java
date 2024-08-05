package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Customer;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/customer")

public class CustomerController {
	@Autowired
	private CustomerService customerService;

	 @GetMapping
	    public List<Customer> getAllCustomers() {
	        return customerService.getAllCustomers();
	    }
}
