package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Admin;
import com.app.entities.Customer;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>
{
	Optional<Admin> findByEmailAndPassword(String email, String password);
}
