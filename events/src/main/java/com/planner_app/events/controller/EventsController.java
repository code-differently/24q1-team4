package com.planner_app.events.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.planner_app.events.model.EventEntity;
import com.planner_app.events.model.UserEntity;
import com.planner_app.events.service.EventService;
import com.planner_app.events.service.UserService;



@RestController
public class EventsController {
    private final UserService userService;
    private final EventService eventService;

    public EventsController(UserService userService, EventService eventService) {
        this.userService = userService;
        this.eventService = eventService;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/events")
    public List<EventEntity> getAllEvents() {
        return eventService.getAllEvents();
    }
   

}
