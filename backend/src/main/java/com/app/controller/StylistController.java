package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Specialization;
import com.app.entities.Stylist;
import com.app.service.StylistService;

@RestController
@RequestMapping("/stylist")
public class StylistController 
{
	@Autowired
	private StylistService stylistService;

	public StylistController() {
		
		System.out.println("In Stylist Controller "+ getClass());
	}
	
	@GetMapping("/{specialization}")
    public ResponseEntity<List<Stylist>> getStylistsBySpecialization(@PathVariable Specialization specialization) {
        List<Stylist> stylists = stylistService.findStylistsBySpecialization(specialization);
        return ResponseEntity.ok(stylists);
    }
	
	@GetMapping
    public ResponseEntity<List<Stylist>> getAllStylist() {
        List<Stylist> stylists = stylistService.getAllStylist();
        return ResponseEntity.ok(stylists);
    }
	
	@GetMapping("/available")
    public ResponseEntity<List<Stylist>> getAvailableStylists() 
	{
        List<Stylist> stylists = stylistService.getAllAvailableStylists();
        return ResponseEntity.ok(stylists);
    }
	
	@GetMapping("/id/{stylistId}")
    public ResponseEntity<Stylist> getStylistDetails(@PathVariable("stylistId") Long stylistId) 
	{
        Stylist stylist = stylistService.getStylistDetails(stylistId);
        return ResponseEntity.ok(stylist);
    }
	
	@DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStylistDetails(@PathVariable Long id) {
        String response = stylistService.deleteStylistDetails(id);
        return ResponseEntity.ok(response);
    }

    @PutMapping
    public ResponseEntity<Stylist> updateStylistDetails(@RequestBody Stylist stylist) {
        Stylist updatedStylist = stylistService.updateStylistDetail(stylist);
        return ResponseEntity.ok(updatedStylist);
    }

    @PostMapping
    public ResponseEntity<Stylist> addNewStylist(@RequestBody Stylist stylist) {
        Stylist newStylist = stylistService.addNewStylist(stylist);
        return ResponseEntity.status(HttpStatus.CREATED).body(newStylist);
    }
}
