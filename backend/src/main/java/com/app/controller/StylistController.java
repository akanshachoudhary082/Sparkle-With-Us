package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Stylist;
import com.app.service.StylistService;

@RestController
@RequestMapping("/stylist")

public class StylistController {

	@Autowired
	private StylistService stylistService;

	public StylistController() {
		
		System.out.println("In Stylist Controller"+ getClass());
	}
	
	@GetMapping("/specializations")
	public List<Stylist> getAllSpecialization(){
		return stylistService.getAllSpecialization();
		
	}
	
	@GetMapping("/all")
	public List<Stylist>  getAllStylist(){
		return stylistService.getAllStylist();
		
	}
	@GetMapping("/available")
	public List<Stylist>getAllAvailableStylist(){
		return stylistService.getAllAvailableStylist();
		
	}
	
	@GetMapping("/{id}")
	public Stylist getStylistDetails(@PathVariable Long stylistId)
	{
		return stylistService.getStylistDetails(stylistId);
	}
	
	@DeleteMapping("/{id}")
	public String deleteStylistDetails(@PathVariable Long id) {
		return stylistService.deleteStylistDetails(id);
		
	}
	
	@PutMapping
	public Stylist updateStylistDetails(@RequestBody Stylist stylist)
	{
		return stylistService.updateStylistDetail(stylist);
	}
}
