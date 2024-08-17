package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Customer;
import com.app.entities.Specialization;
import com.app.entities.Stylist;

public interface StylistRepository extends JpaRepository<Stylist,Long> 
{
	List<Stylist> findBySpecialization(Specialization specialization);
	
	List<Stylist> findByAvailability(boolean availability);
	
	Optional<Stylist> findByEmailAndPassword(String email, String password);
}
