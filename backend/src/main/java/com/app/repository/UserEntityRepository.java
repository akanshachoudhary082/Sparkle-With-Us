package com.app.repository;
//<<<<<<< HEAD
//	package com.app.repository;
//
//	import java.util.Optional;
//
//	import org.springframework.data.jpa.repository.JpaRepository;
//
//	import com.app.entities.UserEntity;
//
//	public interface UserEntityRepository extends JpaRepository<UserEntity, Long> {
//	//derived query method
//		Optional<UserEntity> findByEmail(String email);
//		//derived query metho
//		boolean existsByEmail(String email);
//
//	}


//=======
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.UserEntity;

@Repository
public interface UserEntityRepository extends JpaRepository<UserEntity, Long> {
	@Query("select u from UserEntity u where u.email=?1")
	Optional<UserEntity> findByEmail(String email);
}
//>>>>>>> 724d2718dcc95a18faae532fab541fa3fa9a0395
