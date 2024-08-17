package com.app.service;

//import java.time.LocalDateTime;
//import java.util.List;
//
//import com.app.entities.TimeSlot;
//
//public interface TimeSlotService {
//    List<TimeSlot> getAvailableTimeSlots(Long serviceId, LocalDateTime startDateTime, LocalDateTime endDateTime, boolean isAvailable);
//}


import java.time.LocalDateTime;
import java.util.List;
import com.app.entities.TimeSlot;

public interface TimeSlotService {

    // Method to get available time slots based on service ID, start date/time, end date/time, and availability
    List<TimeSlot> getAvailableTimeSlots(Long serviceId, LocalDateTime startDateTime, LocalDateTime endDateTime, boolean available);
}
