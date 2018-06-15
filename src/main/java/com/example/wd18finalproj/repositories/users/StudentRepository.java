package com.example.wd18finalproj.repositories.users;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.wd18finalproj.models.users.Student;
import com.example.wd18finalproj.models.users.Tutor;

public interface StudentRepository extends CrudRepository<Student, Integer>{
  @Query("SELECT u FROM Student u WHERE" + " u.username=:username")
  Iterable<Student> findUserByUsername(@Param("username") String username);
  
  @Query("SELECT u FROM Student u WHERE u.username=:username AND u.password=:password")
  Iterable<Student> findUserByCredentials(@Param("username") String username, @Param("password") String password);
}
