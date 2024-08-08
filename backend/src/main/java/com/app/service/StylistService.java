package com.app.service;

import java.util.List;

import com.app.entities.Specialization;
import com.app.entities.Stylist;

public interface StylistService 
{
	List<Stylist> findStylistsBySpecialization(Specialization specialization);
	
	List<Stylist>getAllStylist();
	
	List<Stylist> getAllAvailableStylists();
	
	String deleteStylistDetails(Long id);
	
	Stylist getStylistDetails(Long stylistId);
	
	Stylist updateStylistDetail(Stylist stylist);
	
	Stylist addNewStylist(Stylist stylist);
	
	
}
