package com.cjc.productapi;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.cjc.productapi.model.User;
import com.cjc.productapi.repositoryi.UserRepository;

@SpringBootApplication
public class ProductapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductapiApplication.class, args);
	}

	 @Bean
	    CommandLineRunner init(UserRepository userRepository) {
	        return args -> {
	            if (userRepository.count() == 0) {
	                User u = new User();
	                u.setUsername("admin");
	                u.setPassword("admin123");
	                userRepository.save(u);
	            }
	        };
	    }
}
