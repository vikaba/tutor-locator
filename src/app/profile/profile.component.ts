import {Component, Input, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {TutorServiceClient} from '../services/tutor.service.client';
import {ParentServiceClient} from '../services/parent.service.client';
import {StudentServiceClient} from '../services/student.service.client';
import {User} from '../models/user.model.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() userId: number;
  @Input() role: string;
  user: User = new User();
  constructor(private service: UserServiceClient,
              private tutorService: TutorServiceClient,
              private parentService: ParentServiceClient,
              private studentService: StudentServiceClient,
              private route: ActivatedRoute) {
    //this.route.params.subscribe(
      //params => this.setParams(params));
  }

  /*setParams(params) {
    this.userId = params['userId'];
    this.role = params['role'];
    this.loadProfile(this.userId, this.role);
  }*/

  update(user: User) {
    console.log(user);
  }

  loadProfile(userId, role) {
    this.userId = userId;
    if (role === 'tutor') {
      this.tutorService.findTutorById(userId).then(user => this.user = user)
    } else if (role === 'student') {
      this.studentService.findStudentById(userId).then(user => this.user = user)
    } else if (role === 'parent') {
      this.parentService.findParentById(userId).then(user => this.user = user)
    }
  }

  ngOnInit() {
     this.service.profile().then(user => this.user = user);
    // this.service
    //   .findUserById('5b1ec6c2d06a450655254f14')
    //   .then(user => this.user = user);
  }

}
