package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.entities.Specialization;
import com.app.entities.Stylist;
import com.app.repository.StylistRepository;

@Service
@Transactional
public class StylistServiceImpl implements StylistService {
	@Autowired
	private StylistRepository stylistRepository;

	public List<Stylist> findStylistsBySpecialization(Specialization specialization) 
	{
		return stylistRepository.findBySpecialization(specialization);
	}

	@Override
	public List<Stylist> getAllStylist() {
		return stylistRepository.findAll();
	}

	@Override
	public Stylist getStylistDetails(Long stylistId) {
		Optional<Stylist> stylist = stylistRepository.findById(stylistId);
		return stylist.orElseThrow(() -> new ResourceNotFoundException("Invalid Stylist Id"));
	}

	@Override
	public String deleteStylistDetails(Long id) {
		if (stylistRepository.existsById(id)) {
			stylistRepository.deleteById(id);
			return "Stylist details deleted";
		}
		return "Deleting stylist details failed :Invaid Stylist ID";
	}

	@Override
	public Stylist updateStylistDetail(Stylist stylist) {
		return stylistRepository.save(stylist);
	}

	@Override
	public Stylist addNewStylist(Stylist stylist) 
	{	
		return stylistRepository.save(stylist);
	}

	@Override
	public List<Stylist> getAllAvailableStylists() 
	{
		return stylistRepository.findByAvailability(true);
	}

}
