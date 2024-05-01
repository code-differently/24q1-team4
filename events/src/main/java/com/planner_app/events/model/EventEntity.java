package com.planner_app.events.model;

import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EventEntity {
    @Id
    private String id; // ID as a String

    private String name;
    private LocalDate eventDate;
    private int headCount;
    @Column(length = 500)
    private String description;

    public EventEntity() {}

    public EventEntity(String name, LocalDate eventDate, int headCount, String description) {
        this.name = name;
        this.eventDate = eventDate;
        this.headCount = headCount;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

    public int getHeadCount() {
        return headCount;
    }

    public void setHeadCount(int headCount) {
        this.headCount = headCount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
