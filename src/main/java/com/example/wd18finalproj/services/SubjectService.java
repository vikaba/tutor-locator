package com.example.wd18finalproj.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.wd18finalproj.models.Subject;
import com.example.wd18finalproj.models.Topic;
import com.example.wd18finalproj.models.users.Student;
import com.example.wd18finalproj.models.users.Tutor;
import com.example.wd18finalproj.repositories.SubjectRepository;
import com.example.wd18finalproj.repositories.users.StudentRepository;
import com.example.wd18finalproj.repositories.users.TutorRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class SubjectService {
  
  @Autowired
  SubjectRepository subjectRepository;
  @Autowired
  StudentRepository studentRepository; 
  @Autowired
  TutorRepository tutorRepository; 
  

  @GetMapping("/api/subject")
  public Iterable<Subject> findAllSubjects() {
    return subjectRepository.findAll(); 
  }
  
  @PostMapping("/api/subject")
  public Subject createSubject(@RequestBody Subject subject) {
    if (subject.getTitle() == "") {
      subject.setTitle("New Lesson");
    }
      return subjectRepository.save(subject);
  }
  
  @GetMapping("/api/student/{userId}/subject")
  public List<Subject> findAllSubjectsForStudent(@PathVariable("userId") int userId) {
    Optional<Student> data =
        studentRepository.findById(userId);
    if(data.isPresent()) {
      Student student = data.get();
      return student.getSubjects();
    } else {
      return null;
    }  
  }
  
  @GetMapping("/api/tutor/{userId}/subject")
  public List<Subject> findAllSubjectsForTutors(@PathVariable("userId") int userId) {
    Optional<Tutor> data =
        tutorRepository.findById(userId);
    if(data.isPresent()) {
      Tutor tutor = data.get();
      return tutor.getSubjects();
    } else {
      return null;
    }  
  }
 

  
  @DeleteMapping("/api/subject/{subjectId}")
  public void deleteSubject(@PathVariable("subjectId") int id) {
    subjectRepository.deleteById(id);
  }
}
