package com.planner_app.events;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.planner_app.events.model.EventEntity;
import com.planner_app.events.repository.EventRepository;
import com.planner_app.events.service.EventService;

@SpringBootTest
public class EventServiceTests {

    @Autowired
    private EventService eventService;

    @MockBean
    private EventRepository eventRepository;

    @Test
    void testCreateEvent() {
        EventEntity event = new EventEntity("Annual Meeting", LocalDate.now(), 100, "This is an annual general meeting for all staff.");
        when(eventRepository.save(any(EventEntity.class))).thenReturn(event);
        EventEntity created = eventService.createEvent(event);
        assertNotNull(created);
        assertEquals("Annual Meeting", created.getName());
        assertEquals("This is an annual general meeting for all staff.", created.getDescription());
    }

    @Test
    void testGetAllEvents() {
        List<EventEntity> events = new ArrayList<>();
        events.add(new EventEntity("Event 1", LocalDate.now(), 50, "Description for Event 1"));
        events.add(new EventEntity("Event 2", LocalDate.now(), 75, "Description for Event 2"));
        when(eventRepository.findAll()).thenReturn(events);
        List<EventEntity> fetchedEvents = eventService.getAllEvents();
        assertNotNull(fetchedEvents);
        assertEquals(2, fetchedEvents.size());
    }

    @Test
    void testUpdateEvent() {
        String eventId = "123";
        EventEntity existingEvent = new EventEntity("Original Event", LocalDate.now(), 50, "Original Description");
        existingEvent.setId(eventId);
        EventEntity updatedEvent = new EventEntity("Updated Event", LocalDate.now(), 55, "Updated Description");
        when(eventRepository.findById(eventId)).thenReturn(Optional.of(existingEvent));
        when(eventRepository.save(any(EventEntity.class))).thenReturn(updatedEvent);
        EventEntity result = eventService.updateEvent(eventId, updatedEvent);
        assertNotNull(result);
        assertEquals("Updated Event", result.getName());
    }

    @Test
    void testDeleteEvent() {
        String eventId = "123";
        when(eventRepository.existsById(eventId)).thenReturn(true);
        boolean isDeleted = eventService.deleteEvent(eventId);
        assertTrue(isDeleted);
        verify(eventRepository).deleteById(eventId);
    }
}
