package com.example.wd18finalproj.models.users;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.example.wd18finalproj.models.Appointment;
import com.example.wd18finalproj.models.Subject;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "STUDENT")
public class Student extends User {
  
  @OneToMany(mappedBy = "student")
  @JsonIgnore
	List<Appointment> appointments;
	
	@ManyToMany(mappedBy = "students")
	List<Subject> subjects;
	
	@ManyToMany//(mappedBy = "children")
	List<Parent> parents;

  public List<Appointment> getAppointments() {
    return appointments;
  }

  public void setAppointments(List<Appointment> appointments) {
    this.appointments = appointments;
  }

  public List<Subject> getSubjects() {
    return subjects;
  }

  public void setSubjects(List<Subject> subjects) {
    this.subjects = subjects;
  }

  public List<Parent> getParents() {
    return parents;
  }

  public void setParents(List<Parent> parents) {
    this.parents = parents;
  }

  
	
	
	
}
