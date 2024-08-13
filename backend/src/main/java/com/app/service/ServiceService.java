package com.app.service;

import java.util.List;

import com.app.entities.Services;

public interface ServiceService 
{
	List<Services> getAllService();
	
	String deleteServices(Long id);
	
	Services addNewService(Services service);
	
	Services updateService(Services service);
	
	Services getServiceById(Long id);
}
