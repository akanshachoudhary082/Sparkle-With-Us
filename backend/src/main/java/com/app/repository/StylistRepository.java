package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Stylist;

public interface StylistRepository extends JpaRepository<Stylist,Long> {

}
