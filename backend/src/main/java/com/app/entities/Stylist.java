package com.app.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="stylist")
public class Stylist extends BaseEntity 
{
	@Column(name="first_name", length=30, nullable = false)
	private String firstName;
	
	@Column(name="last_name", length=30, nullable = false)
	private String lastName;
	
	@Column(length = 30, unique = true) // unique constraint
	private String email;
	
	@Column(length = 20, nullable = false) // not null constraint
	private String password;
	
	private LocalDate dob;
	
	@Column(name = "phone_no", length = 14, unique = true)
	private String phoneNo;
	
	@Enumerated(EnumType.STRING) // col type : varchar(20 : store enum constant names
	@Column(length = 20)
	private Specialization specialization;
	
	private boolean availability;
	
	@OneToMany(mappedBy = "stylist", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Service> services;
	
	//ctor
	public Stylist() {
		// TODO Auto-generated constructor stub
	}
	
	//para-ctor
	public Stylist(String firstName, String lastName, String email, String password, LocalDate dob,
			String phoneNo, Specialization specialization, boolean availability) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.dob = dob;
		this.phoneNo = phoneNo;
		this.specialization = specialization;
		this.availability = availability;
	}
	

	//getter & setter
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public Specialization getSpecialization() {
		return specialization;
	}

	public void setSpecialization(Specialization specialization) {
		this.specialization = specialization;
	}

	public boolean isAvailability() {
		return availability;
	}

	public void setAvailability(boolean availability) {
		this.availability = availability;
	}
	
	//toString
	@Override
	public String toString() {
		return "Stylist [sfirstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", password=" + password + ", dob=" + dob + ", phoneNo=" + phoneNo + ", specialization="
				+ specialization + ", availability=" + availability + "]";
	}

}
