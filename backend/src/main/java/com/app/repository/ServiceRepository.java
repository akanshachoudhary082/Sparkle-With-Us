package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Services;

public interface ServiceRepository extends JpaRepository<Services, Long> 
{
	
}
