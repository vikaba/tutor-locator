package com.example.wd18finalproj.repositories.users;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.wd18finalproj.models.users.Parent;
import com.example.wd18finalproj.models.users.Student;

public interface ParentRepository extends CrudRepository<Parent, Integer>{

  @Query("SELECT u FROM Parent u WHERE" + " u.username=:username")
  Iterable<Parent> findUserByUsername(@Param("username") String username);
  
  @Query("SELECT u FROM Parent u WHERE u.username=:username AND u.password=:password")
  Iterable<Parent> findUserByCredentials(@Param("username") String username, @Param("password") String password);
}
