package com.planner_app.events.service;

import java.util.List;

import com.planner_app.events.model.EventEntity;
import com.planner_app.events.repository.EventRepository;
import org.springframework.stereotype.Service;

@Service
public class EventService {
    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository; 
        }
    public List<EventEntity> getAllEvents() {
        return eventRepository.findAll();
    }
}
