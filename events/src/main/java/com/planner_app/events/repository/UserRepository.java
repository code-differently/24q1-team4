package com.planner_app.events.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.planner_app.events.model.UserEntity;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
}
