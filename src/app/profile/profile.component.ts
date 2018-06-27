import {Component, Input, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';
import {TutorServiceClient} from '../services/tutor.service.client';
import {AppointmentServiceClient} from '../services/appointment.service.client';
import {SubjectServiceClient} from '../services/subject.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {};
  username;
  email;
  firstName;
  lastName;
  userType;
  userId;
  appointments = [];
  subjects;
  street;
  city;
  state;
  zipcode;

  constructor(private service: UserServiceClient,
              private tutorService: TutorServiceClient,
              private apptService: AppointmentServiceClient,
              private subService: SubjectServiceClient,
              private router: Router) {
  }

  update() {
    if (this.userType === 'student' || this.userType === 'parent' || this.userType === 'admin') {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email};
      this.service.updateProfileUser(user.firstName, user.lastName, user.email)
          .then(response => {
            this.email = response.email;
            this.firstName = response.firstName;
            this.lastName = response.lastName;
            alert('updated');
          });
    } else {
      const tutor = {
        id: this.userId,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        street: this.street,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode,
      };
      console.log(tutor.id, tutor.street, tutor.city, tutor.state, tutor.zipcode);
      this.tutorService.updateProfileUser(tutor.id, tutor.firstName, tutor.lastName, tutor.email,
        tutor.street, tutor.city, tutor.state, tutor.zipcode)
        .then(response => {
          this.email = response.email;
          this.firstName = response.firstName;
          this.lastName = response.lastName;
          this.street = response.street;
          this.city = response.city;
          this.state = response.state;
          this.zipcode = response.zipcode;
          alert('updated');
        });
    }
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  loadAppts() {
    if (this.userType === 'student') {
      this.apptService.findApptByStudentID(this.userId)
        .then(appointments => this.appointments = appointments);
    } else if (this.userType === 'tutor') {
      this.apptService.findTutorApptByID(this.userId)
        .then(appointments => this.appointments = appointments);
    }
  }
  createSubject(name) {
    this.subService.createSubject(name)
      .then(() => this.loadAppts());
  }
  loadSubjects() {
      this.subService.findSubjects()
        .then(subjects => this.subjects = subjects);
  }

  ngOnInit() {
     this.service.profile()
       .then(user => {
         this.username = user.username;
         this.userType = user.userType;
         this.userId = user.id;
         this.firstName = user.firstName;
         this.lastName = user.lastName;
         this.email = user.email;
         if (user.userType === 'tutor') {
           this.street = user.street;
           this.city = user.city;
           this.state = user.state;
           this.zipcode = user.zipcode;
         }
       }
         );
  }

}
