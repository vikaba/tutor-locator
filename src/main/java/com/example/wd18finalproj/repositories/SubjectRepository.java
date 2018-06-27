package com.example.wd18finalproj.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.wd18finalproj.models.Subject;

public interface SubjectRepository extends CrudRepository<Subject, Integer> {

	@Query("SELECT s FROM Subject s WHERE s.title=:title")
	Optional<Subject> findSubjectByName(
	@Param("title") String title);

}
