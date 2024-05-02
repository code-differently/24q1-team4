package com.planner_app.events.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.planner_app.events.model.EventEntity;
import com.planner_app.events.repository.EventRepository;

@Service
public class EventService {
    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<EventEntity> getAllEvents() {
        return eventRepository.findAll();
    }

    public EventEntity createEvent(EventEntity event) {
        return eventRepository.save(event);
    }

    public boolean deleteEvent(String id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    // public EventEntity updateEvent(String id, EventEntity updatedEvent) {
    //     Optional<EventEntity> existingEventOptional = eventRepository.findById(id);
    //     if (existingEventOptional.isPresent()) {
    //         EventEntity existingEvent = existingEventOptional.get();
            
    //         // Update the fields of the existing event
    //         existingEvent.setName(updatedEvent.getName());
    //         existingEvent.setEventDate(updatedEvent.getEventDate());
    //         existingEvent.setHeadCount(updatedEvent.getHeadCount());
    //         existingEvent.setDescription(updatedEvent.getDescription());  // Assuming a setDescription method exists

    //         return eventRepository.save(existingEvent);
    //     } else {
    //         throw new RuntimeException("Event not found with id: " + id);
    //     }
    // }
}
