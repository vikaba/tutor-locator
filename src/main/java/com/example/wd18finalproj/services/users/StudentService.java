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

import com.example.wd18finalproj.models.users.Student;
import com.example.wd18finalproj.models.users.Tutor;
import com.example.wd18finalproj.models.users.User;
import com.example.wd18finalproj.repositories.users.StudentRepository;
import com.example.wd18finalproj.repositories.users.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4000", maxAge = 3600, allowCredentials = "true")
public class StudentService {
  @Autowired
  StudentRepository repository;
  @Autowired
  UserRepository userRepository;
  
  @DeleteMapping("/api/student/{userId}")
  public void deleteStudent(@PathVariable("userId") int id) {
    repository.deleteById(id);
  }
  
  @PostMapping("/api/register/student")
  public Student register(@RequestBody Student student, HttpSession session) {
    List<User> sameUsername = (List<User>) userRepository.findUserByUsername(student.getUsername());
    if (sameUsername == null || sameUsername.isEmpty()) {
      Student u = repository.save(student);
      session.setAttribute("currentUser", u);
      return u;
    } else {
      throw new ConflictException();
    }
  }
  
  @PostMapping("/api/login/student")
  public Student login(@RequestBody Student student, HttpSession session) {
    List<Student> goodLogin =
        (List<Student>) repository.findUserByCredentials(student.getUsername(), student.getPassword());
      if (goodLogin != null || !(goodLogin.isEmpty())) {
        Student u = goodLogin.get(0);
        session.setAttribute("currentUser", u);
      return u;
    } else {
      return null;
    }
  }
  
  @GetMapping("/api/student/{userId}")
  public Student findStudentById(@PathVariable("userId") int userId) {
    Optional<Student> data = repository.findById(userId);
    if (data.isPresent()) {
      return data.get();
    } else {
      return null;
    }
  }
  
  @GetMapping("/api/profile/student")
  public Student profile(HttpSession session) {
    Student currentUser = (Student) session.getAttribute("currentUser");  
    return currentUser;
  }
  
  @GetMapping("/api/student")
  public List<Student> findAllStudents() {
    return (List<Student>) repository.findAll();
  }
  
  @GetMapping("/api/student?username={username}")
  public List<Student> findStudentByUsername(String username) {
    return (List<Student>) repository.findUserByUsername(username);
  }
  
  @PutMapping("/api/profile/student")
  public Student updateProfile(@RequestBody Student user, HttpSession session) {
    Student currentUser = (Student) session.getAttribute("currentUser");  
    if (currentUser != null) {
      if (user.getEmail() != null) {
        currentUser.setEmail(user.getEmail());
      }
      return currentUser;
    } else {
      return null;
    }
  }
  
  @PutMapping("/api/student/{userId}")
  public Student updateStudent(@PathVariable("userId") int userId, @RequestBody Student newUser) {
    Optional<Student> data = repository.findById(userId);
    if (data.isPresent()) {
      Student user = data.get(); // get user data
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
      Student u = repository.save(user); // save updated user in database
      return u; // return updated user
     
    } else {
      return null;
    }
  }
  
  @PostMapping("/api/student")
  public Student createTutor(@RequestBody Student student) {
      Student u = repository.save(student);
      return u;
  }
  
  @GetMapping("/api/student/session/set/{attr}/{value}")
  public String setSessionAttribute(@PathVariable("attr") String attr,
      @PathVariable("value") String value, HttpSession session) {
    session.setAttribute(attr, value);
    return attr + " = " + value;
  }
  
  @GetMapping("/api/student/session/get/{attr}")
  public String getSessionAttribute(@PathVariable ("attr") String attr, HttpSession session) {
    return (String) session.getAttribute(attr);
  }
  
  @GetMapping("/api/student/session/invalidate")
  public String invalidateSession(HttpSession session) {
    session.invalidate();
  return "session invalidated";
  }
}
