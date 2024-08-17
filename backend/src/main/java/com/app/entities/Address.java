package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="address")

public class Address extends BaseEntity{
    
	@Column(name="adr_line1",length=100)
	private String adrLine1;
	
	@Column(name="adr_line2",length=100)
	private String adrLine2;
	
	@Column(length=20)
	@NotNull(message = "City is mandatory")
	private String city;
	
	@Column(length=20)
	@NotNull(message = "State is mandatory")
	private String state;
	
	@Column(length=20)
	@NotNull(message = "Country is mandatory")
	private String country;
	
	@Column(length=20,name="zip_code")
	@NotNull(message = "Zip-Code is mandatory")
	private String zipCode;
	
	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Address(String adrLine1, String adrLine2, String city, String state, String country, String zipCode) {
		super();
		this.adrLine1 = adrLine1;
		this.adrLine2 = adrLine2;
		this.city = city;
		this.state = state;
		this.country = country;
		this.zipCode = zipCode;
	}

	public String getAdrLine1() {
		return adrLine1;
	}

	public void setAdrLine1(String adrLine1) {
		this.adrLine1 = adrLine1;
	}

	public String getAdrLine2() {
		return adrLine2;
	}

	public void setAdrLine2(String adrLine2) {
		this.adrLine2 = adrLine2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	@Override
	public String toString() {
		return "Address [adrLine1=" + adrLine1 + ", adrLine2=" + adrLine2 + ", city=" + city + ", state=" + state
				+ ", country=" + country + ", zipCode=" + zipCode + "]";
	}
	
	
}
