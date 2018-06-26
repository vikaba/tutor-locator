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
@Table(name = "TUTOR")
public class Tutor extends User {
  
  String street;
  String city;
  String state;
  int zipcode;
  
  @OneToMany(mappedBy = "tutor")
  @JsonIgnore
  List<Appointment> appointments;
  
  @ManyToMany(mappedBy = "tutors")
  List<Subject> subjects;

  
  public String getStreet() {
    return street;
  }

  public void setStreet(String street) {
    this.street = street;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public int getZipcode() {
    return zipcode;
  }

  public void setZipcode(int zipcode) {
    this.zipcode = zipcode;
  }

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
  
  
}
