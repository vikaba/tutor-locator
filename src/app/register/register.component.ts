import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {TutorServiceClient} from '../services/tutor.service.client';
import {ParentServiceClient} from '../services/parent.service.client';
import {StudentServiceClient} from '../services/student.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username;
  password;
  password2;
  role;
  constructor(private router: Router,
              private service: UserServiceClient,
              private studentService: StudentServiceClient,
              private tutorService: TutorServiceClient,
              private parentService: ParentServiceClient) {
  }


  register(username, password, password2, role) {
    if (password !== password2) {
      alert('passwords do not match')
      return;
    } this.service
      .register(username, password, role)
      .then(() =>
        this.router.navigate(['profile']));
    /*if (role === 'tutor') {
      this.tutorService
        .register(username, password)
        .then(() =>
          this.router.navigate(['tutor-profile']));
    } else if (role === 'student') {
      this.studentService
        .register(username, password)
        .then(() =>
          this.router.navigate(['student-profile']));
    } else if (role === 'parent') {
      this.parentService
        .register(username, password)
        .then(() =>
          this.router.navigate(['parent-profile']));
    }*/
  }

  ngOnInit() {
  }

}
