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

import com.app.entities.Services;
import com.app.service.ServiceService;

@RestController
@RequestMapping("/service")
public class ServiceController 
{
    @Autowired
    private ServiceService serviceService;
    
    public ServiceController() 
    {
        System.out.println("In Service Controller "+ getClass());
    }
    
    @GetMapping
    public ResponseEntity<List<Services>> getAllService()
    {
        List<Services> services = serviceService.getAllService();
        return ResponseEntity.ok(services);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Services> getServiceById(@PathVariable Long id)
    {
        Services service = serviceService.getServiceById(id);
        if(service != null) {
            return ResponseEntity.ok(service);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    
    @PostMapping
    public ResponseEntity<Services> addNewService(@RequestBody Services service)
    {
        Services createdService = serviceService.addNewService(service);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdService);
    }
    
    @PutMapping
    public ResponseEntity<Services> updateService(@RequestBody Services service)
    {
        Services updatedService = serviceService.updateService(service);
        if(updatedService != null) {
            return ResponseEntity.ok(updatedService);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteService(@PathVariable Long id)
    {
        String response = serviceService.deleteServices(id);
        if(response.equals("Service deleted successfully")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }
}
