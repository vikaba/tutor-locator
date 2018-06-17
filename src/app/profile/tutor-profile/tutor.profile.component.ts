import {Component, Input, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {TutorServiceClient} from '../services/tutor.service.client';
import {ParentServiceClient} from '../services/parent.service.client';
import {StudentServiceClient} from '../services/student.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './tutor.profile.component.html',
  styleUrls: ['./tutor.profile.component.css']
})
export class TutorProfileComponent implements OnInit {
  user = {};
  username;
  password;

  constructor(private service: UserServiceClient,
              private tutorService: TutorServiceClient,
              private parentService: ParentServiceClient,
              private studentService: StudentServiceClient) {
  }

  update(user: User) {
    console.log(user);
  }

  ngOnInit() {
     this.service.profile().then(user => this.username = user.username);
    // this.service
    //   .findUserById('5b1ec6c2d06a450655254f14')
    //   .then(user => this.user = user);
  }

}
