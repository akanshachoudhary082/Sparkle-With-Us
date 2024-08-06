package com.app.service;

import java.util.List;

import com.app.entities.Stylist;

public interface StylistService {

	List<Stylist>getAllSpecialization();
	List<Stylist>getAllStylist();
	List<Stylist>getAllAvailableStylist();
	String deleteStylistDetails(Long id);
	Stylist getStylistDetails(Long stylistId);
	Stylist updateStylistDetail(Stylist stylist);
	
	
}
