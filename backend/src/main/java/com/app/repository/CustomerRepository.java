package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> 
{
	List<Customer> findAllByOrderByFirstNameAsc();
	
	Optional<Customer> findByEmailAndPassword(String email, String password);
}
