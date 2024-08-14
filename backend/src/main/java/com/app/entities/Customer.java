package com.app.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name = "customers")
public class Customer extends  BaseEntity {

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name = "cust_id")
//	private Long custId;
	
	@Column(length = 20, name = "first_name", nullable = false)
	private String firstName;

	@Column(length = 20, name = "last_name", nullable = false)
	private String lastName;
	
	@Column(length = 30, unique = true, nullable = false) 
	@Email
    @Size(max = 30)
	private String email;
	
	@Column(nullable = false, unique = true) // not null constraint
	@Size(min = 8, max = 20)
	//@Pattern(regexp = "^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\\d).{8,20}$")
	private String password;
	
	@Column(name = "phone_no", unique = true)
	@Pattern(regexp = "^\\+?[0-9. ()-]{7,14}$") 
    @Size(max = 14)
	private String phoneNo;;
	
	private LocalDate dob;

	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private Gender gender;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "address")
	private Address address;


//	@OneToMany(mappedBy ="customers",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    private List<Booking> booking=new ArrayList<>();
	
	
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	//para-ctor
		

	// getter & setter
		public String getFirstName() {
			return firstName;
		}

		public Customer(String firstName, String lastName, String email, String password, String phoneNo, LocalDate dob,
				Gender gender, Address address) {
			super();
			this.firstName = firstName;
			this.lastName = lastName;
			this.email = email;
			this.password = password;
			this.phoneNo = phoneNo;
			this.dob = dob;
			this.gender = gender;
			this.address = address;
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

		public String getPhoneNo() {
			return phoneNo;
		}

		public void setPhoneNo(String phoneNo) {
			this.phoneNo = phoneNo;
		}

		public LocalDate getDob() {
			return dob;
		}

		public void setDob(LocalDate dob) {
			this.dob = dob;
		}

		public Gender getGender() {
			return gender;
		}

		public void setGender(Gender gender) {
			this.gender = gender;
		}

		public Address getAddress() {
			return address;
		}

		public void setAddress(Address address) {
			this.address = address;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		// toString
		@Override
		public String toString() {
			return "Customer [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password="
					+ password + ", phoneNo=" + phoneNo + ", dob=" + dob + ", gender=" + gender + ", address=" + address
					+ "]";
		}

}

