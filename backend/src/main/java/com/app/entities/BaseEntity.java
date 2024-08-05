package com.app.entities;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

//Base class for all the entities. No correspoding table for this class. 
//will contain common attributes
@MappedSuperclass
public class BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	//ctor
	public BaseEntity() {
		// TODO Auto-generated constructor stub
	}

	//para-ctor
	public BaseEntity(Long id) {
		super();
		this.id = id;
	}

	//getter & setter
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	

	//toString
	@Override
	public String toString() {
		return "BaseEntity [id=" + id + "]";
	}
	
	
}