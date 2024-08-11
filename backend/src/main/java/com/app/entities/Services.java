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
@Table(name="services")
public class Services extends BaseEntity
{	
	@Enumerated(EnumType.STRING) // col type : varchar(20 : store enum constant names
	@Column(length = 20)
	private ServiceType type;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "stylist_id", nullable = false)
    private Stylist stylist;
	
	@Column(length = 100)
	private String description;
	
	//ctor
	public Services() {
		// TODO Auto-generated constructor stub
	}

	//para-ctor
	public  Services(ServiceType type, Stylist stylist, String description) {
		super();
		this.type = type;
		this.stylist = stylist;
		this.description = description;
	}

	//getter & setter
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

	//toString
	@Override
	public String toString() {
		return "Service [type=" + type + ", stylist=" + stylist + ", description="
				+ description + "]";
	}
	
	
}
