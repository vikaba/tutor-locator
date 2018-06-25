import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {TutorServiceClient} from "../services/tutor.service.client";
import {StudentServiceClient} from "../services/student.service.client";
import {ParentServiceClient} from "../services/parent.service.client";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  users: User[] = [];
  userIdToUpdate;
  username;
  password;
  firstName;
  lastName;
  userType;

  constructor(private service: UserServiceClient,
              private tutorService: TutorServiceClient,
              private studentService: StudentServiceClient,
              private parentService: ParentServiceClient) {}

  loadUsers() {
    this
      .service
      .findAllUsers()
      .then(users => this.users = users);
  }

 createUser(username, password, firstName, lastName, userType) {
   if (userType === 'tutor') {
     this.tutorService
       .createUser(username, password, firstName, lastName, 'tutor')
       .then((response) => {
         this.loadUsers();
         this.username = null;
         this.password = null;
         this.firstName = null;
         this.lastName = null;
       });
   } else if (userType === 'parent') {
     this.parentService
       .createUser(username, password, firstName, lastName, 'parent')
       .then((response) => {
         this.loadUsers();
         this.username = null;
         this.password = null;
         this.firstName = null;
         this.lastName = null;
       });
   } else if (userType === 'student') {
     console.log('student')
     this.studentService
       .createUser(username, password, firstName, lastName, 'student')
       .then((response) => {
         this.loadUsers();
         this.username = null;
         this.password = null;
         this.firstName = null;
         this.lastName = null;
       });
   }
  }

  deleteUser(userId) {
    this.service.deleteUser(userId)
      .then(() => {
        this.loadUsers();
      });
  }

  updateUser(userIdToUpdate, newUsername, newPassword, newFirstName, newLastName, newUserType) {
    this.userIdToUpdate = userIdToUpdate;
    this.username = newUsername;
    this.password = newPassword;
    this.firstName = newFirstName;
    this.lastName = newLastName;
    this.userType = newUserType;
  }

  confirmUpdate() {
    this.service.updateUser(this.userIdToUpdate, this.username, this.password,
      this.firstName, this.lastName, this.userType)
      .then(() => {
        this.loadUsers();
        this.username = null;
        this.password = null;
        this.firstName = null;
        this.lastName = null;
      });
  }

  ngOnInit() {
    this.loadUsers();
  }

}
