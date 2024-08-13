package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Login;

public interface LoginRepository extends JpaRepository<Login, Long> {
    Login findByUsername(String username);
}