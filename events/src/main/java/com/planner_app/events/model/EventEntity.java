package com.planner_app.events.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "events")
public class EventEntity { 
    @Id
    @Column(name="eventid")
    public int eventId;
    @Column(name="eventdate")
    public int eventDate;
    @Column(name="headcount")
    public int headCount;
}