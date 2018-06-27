import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  userType;
  constructor(private router: Router,
              private tutorService: TutorServiceClient,
              private studentService: StudentServiceClient,
              private parentService: ParentServiceClient) {
  }


  register(username, password, password2, userType) {
    console.log(username, password, userType)
    if (password !== password2) {
      alert('passwords do not match');
      return;
    } else if (userType === 'tutor') {
      this.tutorService
        .register(username, password, 'tutor')
        .then((response) => {
        if (response.status === 200) {
          this.router.navigate(['profile']);
        } else {
          console.log(response.status)
          alert('username already exists');
          return;
        }
      });
    } else if (userType === 'parent') {
      this.parentService
        .register(username, password, 'parent')
        .then((response) => {
          if (response.status === 200) {
            this.router.navigate(['profile']);
          } else {
            alert('username already exists');
            return;
          }
      });
    } else if (userType === 'student') {
      this.studentService
        .register(username, password, 'student')
        .then((response) => {
          if (response.status === 200) {
            this.router.navigate(['profile']);
          } else {
            alert('username already exists');
            return;
          }
      });
    }
  }

  ngOnInit() {
  }

}
