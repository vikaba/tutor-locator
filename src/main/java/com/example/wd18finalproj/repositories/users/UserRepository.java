package com.example.wd18finalproj.repositories.users;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.wd18finalproj.models.users.User;

public interface UserRepository extends CrudRepository<User, Integer>{
  
  @Query("SELECT u FROM User u WHERE u.username=:username AND u.password=:password")
  Iterable<User> findUserByCredentials(
  @Param("username") String username, 
  @Param("password") String password);

@Query("SELECT u FROM User u WHERE u.username=:username")
Iterable<User> findUserByUsername(
@Param("username") String username);


}
