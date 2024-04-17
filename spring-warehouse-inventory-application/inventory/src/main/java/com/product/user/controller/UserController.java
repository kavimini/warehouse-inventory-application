package com.product.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.product.user.entity.User;
import com.product.user.model.UserStatusDTO;
import com.product.user.service.UserService;

@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public List<User> getInventoryData(){
       return userService.findAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserDetails(@PathVariable Long id){
       return userService.findById(id);
    }

    @PostMapping
    public void addUserData(@RequestBody User user){
        userService.saveInventory(user);
    }

    @GetMapping("/login")
    public UserStatusDTO checkUsername(@RequestParam String username) {
        return userService.findRoleByUsername(username);
    }
    
}
