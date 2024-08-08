package com.app.service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.Customer;
import com.app.exception.ResourceNotFoundException;

import com.app.repository.CustomerRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService
{
	@Autowired
	private CustomerRepository customerRepository; 
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public Customer getCustomerById(Long id) 
	{
		Optional<Customer> cust = customerRepository.findById(id);
		return cust.orElseThrow(() -> new ResourceNotFoundException("Invalid Customer Id"));
	}

	@Override
	public List<Customer> getAllCustomerDetails() 
	{
		return customerRepository.findAll();
	}

	@Override
	public Customer addCustomerDetails(Customer newCustomer) 
	{
		return customerRepository.save(newCustomer);
	}
	
	@Override
	public String deleteCustomerById(Long id) 
	{
		if (customerRepository.existsById(id)) 
		{
			customerRepository.deleteById(id);
			return "Customer details deleted";
		}
		return "Deleting customer details failed : Invalid Customer ID";
	}

	@Override
	public Customer updateCustomerDetails(Customer customer) 
	{
		return customerRepository.save(customer);
	}

	@Override
    public List<Customer> getAllCustomersSortedByName() {
        Comparator<Customer> byFirstName = new Comparator<Customer>() {
            @Override
            public int compare(Customer c1, Customer c2) {
                return c1.getFirstName().compareToIgnoreCase(c2.getFirstName());
            }
        };

        return customerRepository.findAll().stream()
            .sorted(byFirstName)
            .collect(Collectors.toList());
    }

}
