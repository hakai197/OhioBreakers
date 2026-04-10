package com.ohiobreakers.config;

import com.ohiobreakers.model.User;
import com.ohiobreakers.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {
    @Bean
    public CommandLineRunner initAdminUser(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            String adminUsername = "admin";
            String adminPassword = "ohiobreakers2026";
            // Check if admin user exists
            if (userRepository.findByUsername(adminUsername).isEmpty()) {
                User admin = new User();
                admin.setUsername(adminUsername);
                admin.setPassword(passwordEncoder.encode(adminPassword));
                admin.setRole("ROLE_ADMIN");
                userRepository.save(admin);
                System.out.println("Default admin user created: " + adminUsername);
            }
        };
    }
}
