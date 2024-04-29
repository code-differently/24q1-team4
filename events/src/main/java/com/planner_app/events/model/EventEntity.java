package com.planner_app.events.model;


import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "events")
public class EventEntity { 
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name="eventid")
    public String eventId;
    @Column(name="eventdate")
    public int eventDate;
    @Column(name="headcount")
    public int headCount;

    public String getEventId() {
        return eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

    public int getEventDate() {
        return eventDate;
    }

    public void setEventDate(int eventDate) {
        this.eventDate = eventDate;
    }

    public int getHeadCount() {
        return headCount;
    }

    public void setHeadCount(int headCount) {
        this.headCount = headCount;
    }
}