package com.planner_app.events.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @Column(name = "idusers")
    public int userId;
    @Column(name = "username")
    public String username;
    @Column(name = "password")
    public String password;
}
