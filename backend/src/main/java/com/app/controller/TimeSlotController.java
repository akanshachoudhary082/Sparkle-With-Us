package com.app.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.TimeSlot;
import com.app.service.TimeSlotService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/timeslots")
public class TimeSlotController {

	@Autowired
	private TimeSlotService timeSlotService;

	@GetMapping("/available")
	public List<TimeSlot> getAvailableTimeSlots(@RequestParam Long serviceId,
			@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime startDateTime,
			@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime endDateTime) {

		return timeSlotService.getAvailableTimeSlots(serviceId, startDateTime, endDateTime, true);
	}
}
