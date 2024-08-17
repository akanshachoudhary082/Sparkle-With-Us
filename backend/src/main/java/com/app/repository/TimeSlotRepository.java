package com.app.repository;


import com.app.entities.TimeSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
//
//@Repository
//public interface TimeSlotRepository extends JpaRepository<TimeSlot, Long> {
//    List<TimeSlot> findByServiceIdAndStartDateTimeBetweenAndAvailable(
//            Long serviceId, LocalDateTime startDateTime, LocalDateTime endDateTime, boolean available);
//
//	
//}




import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface TimeSlotRepository extends JpaRepository<TimeSlot, Long> {

    @Query("SELECT ts FROM TimeSlot ts WHERE ts.service.id = :serviceId AND ts.startDateTime >= :startDateTime AND ts.endDateTime <= :endDateTime AND ts.available = :available")
    List<TimeSlot> findAvailableTimeSlots(
            @Param("serviceId") Long serviceId, 
            @Param("startDateTime") LocalDateTime startDateTime, 
            @Param("endDateTime") LocalDateTime endDateTime, 
            @Param("available") boolean available);
}

