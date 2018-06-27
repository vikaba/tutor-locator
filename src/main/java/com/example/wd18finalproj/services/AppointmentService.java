package com.example.wd18finalproj.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.wd18finalproj.models.Appointment;
import com.example.wd18finalproj.models.Subject;
import com.example.wd18finalproj.models.users.Student;
import com.example.wd18finalproj.models.users.Tutor;
import com.example.wd18finalproj.repositories.AppointmentRepository;
import com.example.wd18finalproj.repositories.SubjectRepository;
import com.example.wd18finalproj.repositories.users.StudentRepository;
import com.example.wd18finalproj.repositories.users.TutorRepository;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class AppointmentService {

	@Autowired
	AppointmentRepository repository;
	
	@Autowired
  TutorRepository tutorRepository;
	
	@Autowired
  StudentRepository studentRepository;
	
	@Autowired
	  SubjectRepository subjectRepository;
	
	@DeleteMapping("/api/appt/{apptId}")
	public void deleteAppt(@PathVariable("apptId") int id) {
		repository.deleteById(id);
	}
	
	@PostMapping("/api/tutor/{userId}/subject/{subjectId}/appt")
	public Appointment createAppt(@PathVariable("userId") int tutorId,
			@PathVariable("subjectId") int subId,
			@RequestBody Appointment appt) {
		Optional<Tutor> tData = tutorRepository.findById(tutorId);
		if(tData.isPresent()) {
			Tutor tutor = tData.get();
			appt.setTutor(tutor);
			Optional<Subject> sData = subjectRepository.findById(subId);
			if(sData.isPresent()) {
				Subject sub = sData.get();
				appt.setSubject(sub);
			}
			return repository.save(appt);
		}
		else {
			return null;
		}
	}
	
	@PostMapping("/api/student/{userId}/appt")
	public Appointment addStudent(@PathVariable("userId") int studentId, @RequestBody int apptId) {
		Optional<Student> sData = studentRepository.findById(studentId);
		if(sData.isPresent()) {
			Student student = sData.get();
			Optional<Appointment> aData = repository.findById(apptId);
			if(aData.isPresent()) {
				Appointment appt = aData.get();
				appt.setStudent(student);
				return repository.save(appt);
			}
		}
			return null;
	}
	
	@GetMapping("/api/appt")
	public List<Appointment> findAllAppt() {
		return (List<Appointment>) repository.findAll();
	}
	
	@GetMapping("/api/tutor/{userId}/appt")
  public List<Appointment> findAllApptsForTutor(@PathVariable("userId") int userId) {
    Optional<Tutor> data =
        tutorRepository.findById(userId);
    if(data.isPresent()) {
      Tutor tutor = data.get();
      return tutor.getAppointments();
    } else {
      return null;
    }  
  }
	@GetMapping("/api/appt/{apptId}")
	public Subject findSubjectForAppt(@PathVariable("apptId") int id) {
		Optional<Appointment> aData = repository.findById(id);
		if(aData.isPresent()) {
			Appointment app = aData.get();
			return app.getSubject();
		}
		else {
			return null;
		}
	}
	
	@GetMapping("/api/student/{userId}/appt")
  public List<Appointment> findAllApptsForStudent(@PathVariable("userId") int userId) {
    Optional<Student> data =
        studentRepository.findById(userId);
    if(data.isPresent()) {
      Student student = data.get();
      return student.getAppointments();
    } else {
      return null;
    }  
  }
	
	@PutMapping("/api/appt/{apptId}")
	public Appointment updateAppt(@PathVariable("apptId") int apptId, @RequestBody Appointment newAppt) {
		Optional<Appointment> data = repository.findById(apptId);
		 if(data.isPresent()) {
			 Appointment appt = data.get();
			 appt.setStudent(newAppt.getStudent());
			 appt.setStartTime(newAppt.getStartTime());
			 appt.setEndTime(newAppt.getEndTime());
			 appt.setSubject(newAppt.getSubject());
			 appt.setTutor(newAppt.getTutor());
			 appt.setApptType(newAppt.getApptType());
			 repository.save(appt);
			 return appt;
		 }
		 return null;
	}
}
