package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Customer;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/customer")
public class CustomerController 
{
	@Autowired
	private CustomerService customerService;
	
	public CustomerController() 
	{
		System.out.println("In Customer Controller"+ getClass());
	}
	
	@GetMapping
	public List<Customer> getAllCustomerDetails()
	{
		return customerService.getAllCustomerDetails();
	}
	
	@GetMapping("/{id}")
	public Customer getCustomerById(@PathVariable Long id)
	{
		return customerService.getCustomerById(id);
	}
	
	@PostMapping
	public Customer addNewCustomer(@RequestBody Customer customer)
	{
		return customerService.addCustomerDetails(customer);
	}
	
	@DeleteMapping("/{id}")
	public String deleteCategoryById(@PathVariable Long id)
	{
		return customerService.deleteCustomerById(id);
	}
	
	@PutMapping
	public Customer updateCustomerDetails(@RequestBody Customer customer)
	{
		return customerService.updateCustomerDetails(customer);
	}
}
