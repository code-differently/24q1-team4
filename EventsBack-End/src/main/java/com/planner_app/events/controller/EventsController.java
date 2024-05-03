package com.planner_app.events.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.planner_app.events.model.EventEntity;
import com.planner_app.events.model.UserEntity;
import com.planner_app.events.repository.EventRepository;
import com.planner_app.events.service.EventService;
import com.planner_app.events.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Global CORS for all methods in this controller
public class EventsController {
    private final UserService userService;
    private final EventService eventService;
    private final EventRepository eventRepository;

    public EventsController(UserService userService, EventService eventService, EventRepository eventRepository) {
        this.userService = userService;
        this.eventService = eventService;
        this.eventRepository = eventRepository;
    }

    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/events")
    public List<EventEntity> getAllEvents() {
        return eventService.getAllEvents();
    }

    @PostMapping("/test-create-event")
    public ResponseEntity<EventEntity> testCreateEvent(@RequestBody EventEntity event) {
        EventEntity createdEvent = eventService.createEvent(event);
        return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
    }

    @PutMapping("/events/{eventId}")
    public ResponseEntity<EventEntity> updateEvent(@PathVariable String eventId, @RequestBody EventEntity updatedEvent) {
        // Retrieve the existing event from the database
        EventEntity existingEvent = eventRepository.findById(eventId)
            .orElseThrow(() -> new RuntimeException("Event not found with id: " + eventId));

        // Update the existing event with the new data
        existingEvent.setEventDate(updatedEvent.getEventDate());
        existingEvent.setHeadCount(updatedEvent.getHeadCount());

        // Save the updated event
        EventEntity savedEvent = eventRepository.save(existingEvent);
        return new ResponseEntity<>(savedEvent, HttpStatus.OK);
    }


    @DeleteMapping("/events/{eventId}")
    public ResponseEntity<Void> deleteEvent(@PathVariable String eventId) {
        try {
            eventService.deleteEvent(eventId);
            return ResponseEntity.ok().build();  // Successfully deleted
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // Internal server error
        }
    }
}