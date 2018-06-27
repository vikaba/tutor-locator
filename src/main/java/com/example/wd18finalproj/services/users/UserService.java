package com.example.wd18finalproj.services.users;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.wd18finalproj.models.users.Tutor;
import com.example.wd18finalproj.models.users.User;
import com.example.wd18finalproj.repositories.users.UserRepository;

@RestController
@CrossOrigin(origins = "https://limitless-hollows-40393.herokuapp.com/", maxAge = 3600, allowCredentials = "true")
public class UserService {
  @Autowired 
  UserRepository repository;
  
  @GetMapping("/api/user")
  public List<User> findAllUsers() {
    return (List<User>) repository.findAll();
  }
  
  @GetMapping("/api/user/{userId}")
  public User findUserById(@PathVariable("userId") int userId) {
    Optional<User> data = repository.findById(userId);
    if (data.isPresent()) {
      return data.get();
    } else {
      return null;
    }
  }
  
  @PutMapping("/api/user/{userId}")
  public User updateUser(@PathVariable("userId") int userId, @RequestBody User newUser) {
    Optional<User> data = repository.findById(userId);
    if (data.isPresent()) {
      User user = data.get(); // get user data
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
      if (newUser.getUserType() != null) {
        user.setUserType(newUser.getUserType());
      }
      User u = repository.save(user); // save updated user in database
      return u; // return updated user
     
    } else {
      return null;
    }
  }
  
  @DeleteMapping("/api/user/{userId}")
  public void deleteUser(@PathVariable("userId") int id) {
    repository.deleteById(id);
  }
  
  @GetMapping("/api/session/set/{attr}/{value}")
  public String setSessionAttribute(@PathVariable("attr") String attr,
      @PathVariable("value") String value, HttpSession session) {
    session.setAttribute(attr, value);
    return attr + " = " + value;
  }
  
  @GetMapping("/api/session/get/{attr}")
  public String getSessionAttribute(@PathVariable ("attr") String attr, HttpSession session) {
    return (String) session.getAttribute(attr);
  }
  
  @GetMapping("/api/session/invalidate")
  public String invalidateSession(HttpSession session) {
    session.invalidate();
  return "session invalidated";
  }
  
  @PostMapping("/api/logout")
  public void logout(HttpSession session) {
    session.invalidate();
  }
  
  @GetMapping("/api/profile")
  public User profile(HttpSession session) {
    User currentUser = (User) session.getAttribute("currentUser");  
    return currentUser;
  }
  
  @PutMapping("/api/profile")
  public User updateProfile(@RequestBody User newUser, HttpSession session) {
    User currentUser = (User) session.getAttribute("currentUser");  
    if (currentUser != null) {
        if (newUser.getUsername() != null) {
          currentUser.setUsername(newUser.getUsername());
        }
        if (newUser.getPassword() != null) {
          currentUser.setPassword(newUser.getPassword());
        }
        if (newUser.getFirstName() != null) {
          currentUser.setFirstName(newUser.getFirstName());
        }
        if (newUser.getLastName() != null) {
          currentUser.setLastName(newUser.getLastName());
        }
        if (newUser.getEmail() != null) {
          currentUser.setEmail(newUser.getEmail());
        }
        if (newUser.getUserType() != null) {
          currentUser.setUserType(newUser.getUserType());
        }
        Optional<User> data = repository.findById(currentUser.getId());
        User user = data.get(); // get user data
        user = currentUser;
        User u = repository.save(user); // save updated user in database
        return currentUser; // return updated user
        } else {
        return null;
      }
  } 

  
  @PostMapping("/api/register")
  public User register(@RequestBody User user, HttpSession session) {
    List<User> sameUsername = (List<User>) repository.findUserByUsername(user.getUsername());
    if (sameUsername == null || sameUsername.isEmpty()) {
      User u = repository.save(user);
      session.setAttribute("currentUser", u);
      return u;
    } else {
      throw new ConflictException();
    }
  }
  
  @PostMapping("/api/login")
  public User login(@RequestBody User user, HttpSession session) {
    List<User> goodLogin =
            (List<User>) repository.findUserByCredentials(user.getUsername(), user.getPassword());
    if (goodLogin != null || !(goodLogin.isEmpty())) {
      User u = goodLogin.get(0);
      session.setAttribute("currentUser", u);
      return u;
    } else {
      throw new ConflictException();
    }
  }
}
