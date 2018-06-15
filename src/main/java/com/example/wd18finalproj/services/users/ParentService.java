package com.example.wd18finalproj.services.users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.wd18finalproj.models.users.Parent;
import com.example.wd18finalproj.models.users.Student;
import com.example.wd18finalproj.repositories.users.ParentRepository;
import com.example.wd18finalproj.repositories.users.StudentRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ParentService {
  @Autowired
  ParentRepository repository;
  
  @DeleteMapping("/api/parent/{userId}")
  public void deleteParent(@PathVariable("userId") int id) {
    repository.deleteById(id);
  }

  
  @PostMapping("/api/parent")
  public Parent register(@RequestBody Parent parent) {
    List<Parent> sameUsername = (List<Parent>) repository.findUserByUsername(parent.getUsername());
    if (sameUsername == null || sameUsername.isEmpty()) {
      Parent u =  repository.save(parent);
      return u;
    } else {
      return null;
    }
  }
  
  @PostMapping("/api/login/parent")
  public Parent login(@RequestBody Parent parent) {
    List<Parent> goodLogin =
        (List<Parent>) repository.findUserByCredentials(parent.getUsername(), parent.getPassword());
      if (goodLogin != null || !(goodLogin.isEmpty())) {
        Parent u = goodLogin.get(0);
      return u;
    } else {
      return null;
    }
  }
  
  @GetMapping("/api/parent/{userId}")
  public Parent findParentById(@PathVariable("userId") int userId) {
    Optional<Parent> data = repository.findById(userId);
    if (data.isPresent()) {
      return data.get();
    } else {
      return null;
    }
  }
  
  @GetMapping("/api/parent")
  public List<Parent> findAllParents() {
    return (List<Parent>) repository.findAll();
  }
  
  @GetMapping("/api/course/{courseId}/module")
  public List<Student> findAllChildrenForParent(
      @PathVariable("courseId") int courseId) {
    Optional<Parent> data = repository.findById(courseId);
    if(data.isPresent()) {
      Parent parent = data.get();
      return parent.getChildren();
    } else {
      return null;
    }  
  }
  
  @GetMapping("/api/parent?username={username}")
  public List<Parent> findParentByUsername(String username) {
    return (List<Parent>) repository.findUserByUsername(username);
  }
  
  @PutMapping("/api/parent/{userId}")
  public Parent updateParent(@PathVariable("userId") int userId, @RequestBody Parent newUser) {
    Optional<Parent> data = repository.findById(userId);
    if (data.isPresent()) {
      Parent user = data.get(); // get user data
      if (newUser.getUsername() != null) {
        user.setUsername(newUser.getUsername());
      }
      if (newUser.getPassword() != null) {
        user.setPassword(newUser.getPassword());
      }
      if (newUser.getFirstName() != null) {
        user.setFirstName(newUser.getFirstName());
      }
      if (newUser.getLastName() != null) {
        user.setLastName(newUser.getLastName());
      }
      if (newUser.getEmail() != null) {
        user.setEmail(newUser.getEmail());
      }
      Parent u = repository.save(user); // save updated user in database
      return u; // return updated user
     
    } else {
      return null;
    }
  }
}
