package com.cjc.productapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.cjc.productapi.model.User;
import com.cjc.productapi.repositoryi.UserRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")

public class LoginController {
	
    @Autowired
    UserRepository userRepo;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String username, @RequestParam String password) {
    	
        User user = userRepo.findByUsernameAndPassword(username, password);
        
        if (user != null) 
        {
        	return new ResponseEntity<>(HttpStatus.OK);
        }else
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
