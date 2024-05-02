package com.planner_app.events.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")
public class UserEntity {
    @Id public int idusers;
    public String username;
    public String password;
}
