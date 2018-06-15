package com.example.wd18finalproj.repositories.users;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.wd18finalproj.models.users.Tutor;

public interface TutorRepository extends CrudRepository<Tutor, Integer> {
  @Query("SELECT u FROM Tutor u WHERE u.username=:username")
  Iterable<Tutor> findUserByUsername(@Param("username") String username);
  
  @Query("SELECT u FROM Tutor u WHERE u.username=:username AND u.password=:password")
  Iterable<Tutor> findUserByCredentials(@Param("username") String username, @Param("password") String password);
  
  @Query("SELECT u FROM Tutor u WHERE u.street=:street AND u.city=:city "
      + "AND u.state=:state AND u.zipcode=:zipcode")
  Iterable<Tutor> findTutorByAddress(@Param("street") String street, @Param("city") String city,
      @Param("state") String state, @Param("zipcode") int zipcode);
}
