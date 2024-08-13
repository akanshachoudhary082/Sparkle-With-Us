package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.Services;
import com.app.exception.ResourceNotFoundException;
import com.app.repository.ServiceRepository;

@Service
@Transactional
public class ServiceServiceImpl implements ServiceService
{
	@Autowired
	private ServiceRepository serviceRepository;
	
	@Override
	public List<Services> getAllService() 
	{
		return serviceRepository.findAll();
	}

	@Override
	public String deleteServices(Long id) 
	{
		if(serviceRepository.existsById(id)) 
		{
			serviceRepository.deleteById(id);
			return "Service Details Deleted";
		}
		return "Deleting Service details failed : Invalid Service ID";
	}

	@Override
	public Services addNewService(Services newService) 
	{
		return serviceRepository.save(newService);
	}

	@Override
	public Services updateService(Services service) 
	{
		return serviceRepository.save(service);
	}

	@Override
	public Services getServiceById(Long id) 
	{
		Optional<Services> service = serviceRepository.findById(id);
		return service.orElseThrow(() -> new ResourceNotFoundException("Service Id not found"));
	}

}
