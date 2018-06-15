package com.example.wd18finalproj.services;

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
import com.example.wd18finalproj.repositories.SubjectRepository;
import com.example.wd18finalproj.repositories.TopicRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class TopicService {
  @Autowired
  SubjectRepository subjectRepository;
  
  @Autowired
  TopicRepository topicRepository;
  
  @PostMapping("/api/subject/{subjectId}/topic")
  public Topic createTopic(@PathVariable("courseId") int subjectId, @RequestBody Topic newTopic) {
    Optional<Subject> data = subjectRepository.findById(subjectId);
    if(data.isPresent()) {
      Subject subject = data.get();
      newTopic.setSubject(subject);
      if (newTopic.getTitle() == "") {
        newTopic.setTitle("New Topic");
      }
      return topicRepository.save(newTopic);
    } else {
    return null;
    }
  }
  
  @GetMapping("/api/subject/{subjectId}/topic")
  public List<Topic> findAllTopicsForSubject(@PathVariable("courseId") int subjectId) {
    Optional<Subject> data =
        subjectRepository.findById(subjectId);
    if(data.isPresent()) {
      Subject subject = data.get();
      return subject.getTopics();
    } else {
      return null;
    }  
  }
  
  @DeleteMapping("/api/subject/{topicId}")
  public void deleteTopic(@PathVariable("topicId")int topicId) {
    topicRepository.deleteById(topicId);
  }
  
  @GetMapping("/api/topic")
  public List<Topic> findAllTopics() {
    return (List<Topic>) topicRepository.findAll();
  }


}
