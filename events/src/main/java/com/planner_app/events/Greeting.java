package com.planner_app.events;

import org.springframework.stereotype.Service;

@Service
public class Greeting {
    public static String getGreeting(String param) {
        return param;
    }
}
