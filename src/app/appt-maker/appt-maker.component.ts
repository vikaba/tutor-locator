import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppointmentServiceClient} from '../services/appointment.service.client';

@Component({
  selector: 'app-appt-maker',
  templateUrl: './appt-maker.component.html',
  styleUrls: ['./appt-maker.component.css']
})
export class ApptMakerComponent implements OnInit {

  studentName;
  startTime;
  endTime;
  ApptType;
  subject;
  userId = '';
  appointments = [];

  constructor(private aRoute: ActivatedRoute,
              private service: AppointmentServiceClient) {
    this.aRoute.params.subscribe(params => this.loadAppt(params['userId']));
  }

  loadAppt(userId) {
    this.userId = userId;
    this.service.findTutorApptByID(this.userId)
      .then(appointments => this.appointments = appointments);
  }

  createAppointment(studentName, startTime, endTime, subject, ApptType) {
    this.service
      .createAppt(studentName, startTime, endTime, subject, ApptType)
      .then(() => {
        this.loadAppt(this.userId);
      });
  }

  schedule(apptId, studentName, startTime, endTime, subject, ApptType) {
    this.service.scheduleAppt(apptId, studentName, startTime, endTime, subject, ApptType);
  }
  deleteAppointment(apptId) {
    this.service.deleteAppt(apptId)
      .then(() => this.loadAppt(this.userId));
  }
  ngOnInit() {
  }

}
