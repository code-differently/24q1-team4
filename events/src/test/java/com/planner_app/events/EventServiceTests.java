package com.planner_app.events;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

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
        EventEntity event = new EventEntity();
        event.setName("Annual Meeting");
        when(eventRepository.save(any(EventEntity.class))).thenReturn(event);

        EventEntity created = eventService.createEvent(event);
        assertNotNull(created);
        assertEquals("Annual Meeting", created.getName());
    }

    @Test
void testGetAllEvents() {
    List<EventEntity> events = new ArrayList<>();
    events.add(new EventEntity("Event 1"));
    events.add(new EventEntity("Event 2"));

    when(eventRepository.findAll()).thenReturn(events);

    List<EventEntity> fetchedEvents = eventService.getAllEvents();
    assertNotNull(fetchedEvents);
    assertEquals(2, fetchedEvents.size());
 } 
 
 @Test
void testUpdateEvent() {
    EventEntity event = new EventEntity("Original Event");
    event.setId("123");

    when(eventRepository.findById("123")).thenReturn(Optional.of(event));
    when(eventRepository.save(any(EventEntity.class))).thenReturn(event);

    event.setName("Updated Event");
    EventEntity updated = eventService.createEvent(event); // Assuming createEvent is used for update as well

    assertNotNull(updated);
    assertEquals("Updated Event", updated.getName());
}

@Test
void testDeleteEvent() {
    String eventId = "123";
    when(eventRepository.existsById(eventId)).thenReturn(true);

    boolean isDeleted = eventService.deleteEvent(eventId);
    assertTrue(isDeleted);
    verify(eventRepository, times(1)).deleteById(eventId);
}
}
