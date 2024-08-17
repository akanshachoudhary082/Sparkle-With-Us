package com.app.service;

import com.app.entities.TimeSlot;

//import com.app.entities.TimeSlot;
//import com.app.repository.TimeSlotRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Service
//public class TimeSlotServiceImpl implements TimeSlotService {
//
//    @Autowired
//    private TimeSlotRepository timeSlotRepository;
//
//	@Override
//	public List<TimeSlot> findAvailableTimeSlots(Long serviceId, LocalDateTime startDateTime,
//			LocalDateTime endDateTime) {
//		 return timeSlotRepository.findAvailableTimeSlots(
//	                serviceId, startDateTime, endDateTime, true);
//	}
//    
//        
//      
//
//        
//		
//    
//}


import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repository.TimeSlotRepository;


@Service
public class TimeSlotServiceImpl implements TimeSlotService {

    @Autowired
    private TimeSlotRepository timeSlotRepository;

    @Override
    public List<TimeSlot> getAvailableTimeSlots(Long serviceId, LocalDateTime startDateTime, LocalDateTime endDateTime, boolean available) {
        return timeSlotRepository.findAvailableTimeSlots(serviceId, startDateTime, endDateTime, available);
    }
}



