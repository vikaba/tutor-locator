import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppointmentServiceClient} from '../services/appointment.service.client';
import {TutorServiceClient} from '../services/tutor.service.client';

@Component({
  selector: 'app-appt-maker',
  templateUrl: './appt-maker.component.html',
  styleUrls: ['./appt-maker.component.css']
})
export class ApptMakerComponent implements OnInit {

  studentName;
  startTime;
  endTime;
  apptType;
  subject;
  username = '';
  appointments = [];
  tutorId;
  tutor;

  constructor(private aRoute: ActivatedRoute,
              private service: AppointmentServiceClient,
              private tService: TutorServiceClient) {
    this.aRoute.params.subscribe(params => this.loadAppt(params['userId']));
  }

  loadAppt(userId) {
    this.tutorId = userId;
    this.service.findTutorApptByID(userId)
      .then(appointments => this.appointments = appointments);
    this.tService.findUserById(this.tutorId)
      .then(tutor => this.tutor = tutor);
    console.log(this.tutorId);

  }

  createAppointment(startTime, endTime, apptType) {
    this.service
      .createAppt(startTime, endTime, this.tutor, apptType)
      .then(() => {
        this.loadAppt(this.tutorId);
      });
  }

  schedule(apptId, startTime, endTime, apptType) {
    this.service.scheduleAppt(apptId, startTime, endTime, this.tutor, apptType);
  }
  deleteAppointment(apptId) {
    this.service.deleteAppt(apptId)
      .then(() => this.loadAppt(this.tutorId));
  }
  ngOnInit() {
  }

}
