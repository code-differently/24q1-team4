package com.planner_app.events.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.planner_app.events.model.EventEntity;


@Repository
public interface EventRepository extends JpaRepository<EventEntity, Integer> {
}
