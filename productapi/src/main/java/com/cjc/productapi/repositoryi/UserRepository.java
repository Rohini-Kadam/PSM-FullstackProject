package com.cjc.productapi.repositoryi;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cjc.productapi.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsernameAndPassword(String username, String password);
}
