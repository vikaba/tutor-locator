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

import com.example.wd18finalproj.models.users.Parent;
import com.example.wd18finalproj.models.users.Student;
import com.example.wd18finalproj.models.users.Tutor;
import com.example.wd18finalproj.models.users.User;
import com.example.wd18finalproj.repositories.users.TutorRepository;
import com.example.wd18finalproj.repositories.users.UserRepository;

@ResponseStatus(HttpStatus.CONFLICT)
class ConflictException extends RuntimeException {

}

@RestController
@CrossOrigin(origins = "http://localhost:4000", maxAge = 3600, allowCredentials = "true")
public class TutorService {
  @Autowired
  UserRepository userRepository;
  @Autowired
  TutorRepository repository;
  
  
  @DeleteMapping("/api/tutor/{userId}")
  public void deleteTutor(@PathVariable("userId") int id) {
    repository.deleteById(id);
  }
  
  @GetMapping("/api/profile/tutor")
  public User profile(HttpSession session) {
    User currentUser = (User) session.getAttribute("currentUser");  
    return currentUser;
  }
  
  @PutMapping("/api/profile/tutor")
  public User updateProfile(@RequestBody Tutor newUser, HttpSession session) {
    User currentUser = (User) session.getAttribute("currentUser");  
    if (currentUser != null) {
      Optional<Tutor> data = repository.findById(currentUser.getId());
      Tutor user = data.get(); // get user data
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
        if (newUser.getStreet() != null) {
          user.setStreet(newUser.getStreet());
        }
        if (newUser.getCity() != null) {
          user.setCity(newUser.getCity());
        }
        if (newUser.getState() != null) {
          user.setState(newUser.getState());
        }
        if (newUser.getZipcode() != 0) {
          user.setZipcode(newUser.getZipcode());
        }
        currentUser = user;
        Tutor u = repository.save(user); // save updated user in database
        return user; // return updated user
        } else {
        return null;
      }
  } 
  
  @PostMapping("/api/register/tutor")
  public Tutor register(@RequestBody Tutor tutor, HttpSession session) {
    List<User> sameUsername = (List<User>) userRepository.findUserByUsername(tutor.getUsername());
    if (sameUsername == null || sameUsername.isEmpty()) {
      Tutor u = repository.save(tutor);
      session.setAttribute("currentUser", u);
      return u;
    } else {
      throw new ConflictException();
    }
  }
  
  @PostMapping("/api/tutor")
  public Tutor createTutor(@RequestBody Tutor tutor) {
      Tutor u = repository.save(tutor);
      return u;
  }
  
  @GetMapping("/api/tutor?street={street}&city={city}&state={state}&zipcode={zipcode}")
  public List<Tutor> findTutorByAddress(String street, String city, String state, int zipcode) {
    return (List<Tutor>) repository.findTutorByAddress(street, city, state, zipcode);
  }
  
  @PostMapping("/api/login/tutor")
  public Tutor login(@RequestBody Tutor tutor, HttpSession session) {
    List<Tutor> goodLogin =
        (List<Tutor>) repository.findUserByCredentials(tutor.getUsername(), tutor.getPassword());
      if (goodLogin != null || !(goodLogin.isEmpty())) {
      Tutor u = goodLogin.get(0);
      session.setAttribute("currentUser", u);
      return u;
    } else {
      return null;
    }
  }
  
  @GetMapping("/api/tutor/{userId}")
  public Tutor findTutorById(@PathVariable("userId") int userId) {
    Optional<Tutor> data = repository.findById(userId);
    if (data.isPresent()) {
      return data.get();
    } else {
      return null;
    }
  }
  
  @GetMapping("/api/tutor")
  public List<Tutor> findAllTutors() {
    return (List<Tutor>) repository.findAll();
  }
  
  @GetMapping("/api/tutor?username={username}")
  public List<Tutor> findTutorByUsername(String username) {
    return (List<Tutor>) repository.findUserByUsername(username);
  }
  
  @PutMapping("/api/tutor/{userId}")
  public Tutor updateTutor(@PathVariable("userId") int userId, @RequestBody Tutor newUser) {
    Optional<Tutor> data = repository.findById(userId);
    if (data.isPresent()) {
      Tutor user = data.get(); // get user data
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
      if (newUser.getZipcode() != 0) {
        user.setZipcode(newUser.getZipcode());
      }
      if (newUser.getStreet() != null) {
        user.setStreet(newUser.getStreet());
      }
      if (newUser.getState() != null) {
        user.setState(newUser.getState());
      }
      if (newUser.getCity() != null) {
        user.setCity(newUser.getCity());
      }
      Tutor u = repository.save(user); // save updated user in database
      return u; // return updated user
     
    } else {
      return null;
    }
  }
  
  @GetMapping("/api/tutor/session/set/{attr}/{value}")
  public String setSessionAttribute(@PathVariable("attr") String attr,
      @PathVariable("value") String value, HttpSession session) {
    session.setAttribute(attr, value);
    return attr + " = " + value;
  }
  
  @GetMapping("/api/tutor/session/get/{attr}")
  public String getSessionAttribute(@PathVariable ("attr") String attr, HttpSession session) {
    return (String) session.getAttribute(attr);
  }
  
  @GetMapping("/api/tutor/session/invalidate")
  public String invalidateSession(HttpSession session) {
    session.invalidate();
  return "session invalidated";
  }
}
