import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppointmentServiceClient} from '../services/appointment.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-appt-maker',
  templateUrl: './appt-maker.component.html',
  styleUrls: ['./appt-maker.component.css']
})
export class ApptMakerComponent implements OnInit {

  name;
  startTime;
  endTime;
  apptType;
  appointments = [];
  tutorId;
  studentId = null;
  userType;

  constructor(private aRoute: ActivatedRoute,
              private service: AppointmentServiceClient,
              private uService: UserServiceClient) {
    this.aRoute.params.subscribe(params => this.loadAppt(params['userId']));
  }

  loadAppt(userId) {
    this.tutorId = userId;
    this.service.findTutorApptByID(userId)
      .then(appointments => this.appointments = appointments);

  }

  createAppointment(name, startTime, endTime, apptType) {
    if (this.studentId === null) {
      this.service
        .createAppt(name, startTime, endTime, this.tutorId, apptType)
        .then(() => {
          this.loadAppt(this.tutorId);
        });
    } else {
      alert("Please contact your tutor: Only tutors can create appts");
    }
  }

  schedule(apptId) {
    if (this.studentId === null) {
      alert("Only students are allowed to schedule");
    } else {
      this.service.scheduleAppt(apptId, this.studentId)
        .then(function() {
          alert('You have been scheduled');
        });
    }
  }
  deleteAppointment(apptId) {
    this.service.deleteAppt(apptId)
      .then(() => this.loadAppt(this.tutorId));
  }
  ngOnInit() {
    this.uService.profile()
      .then(user => {
          this.userType = user.userType;
          if (this.userType === 'student') {
            this.studentId = user.id;
          }
        }
      );
  }

}
