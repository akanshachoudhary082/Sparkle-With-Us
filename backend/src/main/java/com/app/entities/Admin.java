package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name="admin")
public class Admin extends BaseEntity 
{
	@Column(name="first_name", length=30, nullable = false)
	private String firstName;
	
	@Column(name="last_name", length=30, nullable = false)
	private String lastName;
	
	@Column(length = 30, unique = true, nullable = false) 
	@Email
    @Size(max = 30)
	private String email;
	
	@Column(nullable = false, unique = true) // not null constraint
	@Size(min = 8, max = 20)
	@Pattern(regexp = "^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\\d).{8,20}$")
	private String password;
	
	@Column(name = "phone_no", unique = true)
	@Pattern(regexp = "^\\+?[0-9. ()-]{7,14}$") 
    @Size(max = 14)
	private String phoneNo;
	
	@Column(nullable = false)
	private LocalDate dob;
	
	//ctor
	public Admin() {
		// TODO Auto-generated constructor stub
	}
	
	//para-ctor
	public Admin(String firstName, String lastName, String email, String password, LocalDate dob,
			String phoneNo) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.dob = dob;
		this.phoneNo = phoneNo;
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

	
	//toString
	@Override
	public String toString() {
		return "Stylist [sfirstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", password=" + password + ", dob=" + dob + ", phoneNo=" + phoneNo + "]";
	}

}
