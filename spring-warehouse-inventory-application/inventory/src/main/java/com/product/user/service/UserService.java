package com.product.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.user.entity.User;
import com.product.user.model.UserStatusDTO;
import com.product.user.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepo;

    public List<User> findAllUsers(){
        return userRepo.findAll();
    }

    public User findById(Long id){
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("Id not found"));
        return user;
    }

    public void saveInventory(User user){
        userRepo.save(user);
    }

    public UserStatusDTO findRoleByUsername(String username) {
        Optional<User> user = userRepo.findByUsername(username);
        UserStatusDTO userStatus = new UserStatusDTO();
        if (user.isPresent()) {
            userStatus.setRoleName(user.get().getRole());
            userStatus.setUserExists(true);
            return userStatus;  
        }
        userStatus.setUserExists(false);
        return userStatus;  
    }
    
}
