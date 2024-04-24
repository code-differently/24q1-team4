package com.planner_app.events;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;



@RestController
public class EventsController {

    @GetMapping("/greeting")
    public String getMethodName() {
        String result = Greeting.getGreeting("vicente");
        return result;
    }

    private final UserService userService;

    public EventsController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

}
