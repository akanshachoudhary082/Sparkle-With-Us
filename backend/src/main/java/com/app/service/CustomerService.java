package com.app.service;

import java.util.List;

import com.app.entities.Customer;

public interface CustomerService 
{
	List<Customer> getAllCustomerDetails();
	
	Customer addCustomerDetails(Customer customer);
	
	Customer getCustomerById(Long id);
	
	String deleteCustomerById(Long id);
	
	Customer updateCustomerDetails(Customer customer);
	
}
