package com.example.wd18finalproj.services.users;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.wd18finalproj.models.users.User;
import com.example.wd18finalproj.repositories.users.UserRepository;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserService {
  @Autowired
  UserRepository repository;
  
  
  @GetMapping("/api/user")
  public List<User> findAllUsers() {
    return (List<User>) repository.findAll();
  }
}
