import { Component, OnInit } from '@angular/core';
import {TutorServiceClient} from '../services/tutor.service.client';
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tutors: User[] = [];
  subjects: string[] = [];
  locations: string[] = [];

  constructor(private tutorService: TutorServiceClient) { }

  loadTutors() {
    this.tutorService.findAllTutors()
      .then(tutors => {
        this.tutors = tutors;
        tutors.forEach(tutor => {
          this.locations.push(tutor.city);
          tutor.subjects.forEach(subject => {
            this.subjects.push(subject.title);
          });
        });
      });
      }

  ngOnInit() {
    this.loadTutors();
  }

}
