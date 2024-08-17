package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "services")
public class Services extends BaseEntity {

	@Enumerated(EnumType.STRING) // col type : varchar(20 : store enum constant names
	@Column(length = 20)
	private ServiceType type;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "stylist_id", nullable = false)
	private Stylist stylist;

	private String description;

	// Default constructor
	public Services() {
		// No-arg constructor
	}

	// Parameterized constructor

	public Services(ServiceType type, Stylist stylist, String description) {
		super();
		this.type = type;
		this.stylist = stylist;
		this.description = description;
	}

	// Getters and Setters
	public ServiceType getType() {
		return type;
	}

	public void setType(ServiceType type) {
		this.type = type;
	}

	public Stylist getStylist() {
		return stylist;
	}

	public void setStylist(Stylist stylist) {
		this.stylist = stylist;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Services [type=" + type + ", stylist=" + stylist + ", description=" + description + "]";
	}

	// toString method

}
