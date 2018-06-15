package com.example.wd18finalproj.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.example.wd18finalproj.models.users.Student;
import com.example.wd18finalproj.models.users.Tutor;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Subject {
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  int id;
  String title;
  
  @OneToMany(mappedBy="subject")
  List<Topic> topics;
  
  @OneToMany(mappedBy = "subject")
  @JsonIgnore
  List<Appointment> appointments;
  
  @ManyToMany//(mappedBy = "subject")
  @JsonIgnore
  List<Tutor> tutors;
  
  @ManyToMany//(mappedBy = "subject")
  @JsonIgnore
  List<Student> students;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public List<Topic> getTopics() {
    return topics;
  }

  public void setTopics(List<Topic> topics) {
    this.topics = topics;
  }

  public List<Appointment> getAppointments() {
    return appointments;
  }

  public void setAppointments(List<Appointment> appointments) {
    this.appointments = appointments;
  }

  public List<Tutor> getTutors() {
    return tutors;
  }

  public void setTutors(List<Tutor> tutors) {
    this.tutors = tutors;
  }

  public List<Student> getStudents() {
    return students;
  }

  public void setStudents(List<Student> students) {
    this.students = students;
  }
  
  
}
