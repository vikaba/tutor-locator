package com.example.wd18finalproj.models.users;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "PARENT")
public class Parent extends User {

  @ManyToMany(mappedBy = "parents")
  List<Student> children;

	public List<Student> getChildren() {
		return children;
	}
	
	public void setChildren(List<Student> children) {
		this.children = children;
	}
	
	 public void addChild(Student child) {
	    this.children.add(child);
	  }
	

}
