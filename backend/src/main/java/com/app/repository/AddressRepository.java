package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Address;
import com.app.entities.Admin;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>
{
}