package com.example.wd18finalproj.services.users;

import java.util.ArrayList;
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

import com.example.wd18finalproj.models.users.Parent;
import com.example.wd18finalproj.models.users.Student;
import com.example.wd18finalproj.models.users.Tutor;
import com.example.wd18finalproj.models.users.User;
import com.example.wd18finalproj.repositories.users.ParentRepository;
import com.example.wd18finalproj.repositories.users.StudentRepository;
import com.example.wd18finalproj.repositories.users.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials = "true")
public class ParentService {
  @Autowired
  ParentRepository repository;
  @Autowired
  UserRepository userRepository;
  
  @DeleteMapping("/api/parent/{userId}")
  public void deleteParent(@PathVariable("userId") int id) {
    repository.deleteById(id);
  }
  
  @PostMapping("/api/parent/{parentId}/children")
  public Student addStudent(@PathVariable("parentId") int parentId, @RequestBody Student student) {
    Optional<Parent> data = repository.findById(parentId);
    if (data.isPresent()) {
      Parent user = data.get(); // get user database
      //student.getParents().add(user);
      List<Student> students = user.getChildren();
      students.add(student);
      user.setChildren(students);
      repository.save(user);
      return student;
    } else {
      return null;
    }
  }
  
  @GetMapping("/api/parent/{parentId}/children")
  public List<Student> findAllChildrenForParent(@PathVariable("parentId") int parentId) {
    Optional<Parent> data = repository.findById(parentId);
    if(data.isPresent()) {
      Parent parent = data.get();
      return parent.getChildren();
    } else {
      return null;
    }  
  }
  
  @GetMapping("/api/profile/parent")
  public User profile(HttpSession session) {
    User currentUser = (User) session.getAttribute("currentUser");  
    return currentUser;
  }
  
  @PutMapping("/api/profile/parent")
  public Parent updateProfile(@RequestBody Parent user, HttpSession session) {
    Parent currentUser = (Parent) session.getAttribute("currentUser");  
    if (currentUser != null) {
      if (user.getEmail() != null) {
        currentUser.setEmail(user.getEmail());
      }
      return currentUser;
    } else {
      return null;
    }
  }

  
  @PostMapping("/api/register/parent")
  public Parent register(@RequestBody Parent parent, HttpSession session) {
    List<User> sameUsername = (List<User>) userRepository.findUserByUsername(parent.getUsername());
    if (sameUsername == null || sameUsername.isEmpty()) {
      Parent u =  repository.save(parent);
      session.setAttribute("currentUser", u);
      return u;
    } else {
      throw new ConflictException();
    }
  }
  
  @PostMapping("/api/login/parent")
  public Parent login(@RequestBody Parent parent, HttpSession session) {
    List<Parent> goodLogin =
        (List<Parent>) repository.findUserByCredentials(parent.getUsername(), parent.getPassword());
      if (goodLogin != null || !(goodLogin.isEmpty())) {
        Parent u = goodLogin.get(0);
        session.setAttribute("currentUser", u);
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
  
  @PostMapping("/api/parent")
  public Parent createParent(@RequestBody Parent parent) {
      Parent u = repository.save(parent);
      return u;
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
  
  @GetMapping("/api/parent/session/set/{attr}/{value}")
  public String setSessionAttribute(@PathVariable("attr") String attr,
      @PathVariable("value") String value, HttpSession session) {
    session.setAttribute(attr, value);
    return attr + " = " + value;
  }
  
  @GetMapping("/api/parent/session/get/{attr}")
  public String getSessionAttribute(@PathVariable ("attr") String attr, HttpSession session) {
    return (String) session.getAttribute(attr);
  }
  
  @GetMapping("/api/parent/session/invalidate")
  public String invalidateSession(HttpSession session) {
    session.invalidate();
  return "session invalidated";
  }
}
