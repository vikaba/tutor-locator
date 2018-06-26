import { Component, OnInit } from '@angular/core';
import {ParentServiceClient} from '../services/parent.service.client';
import {StudentServiceClient} from '../services/student.service.client';
import {User} from '../models/user.model.client';
import {Appointment} from '../models/appointment.model.client';
import {Student} from '../models/student.model.client';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  children: User[] = [];
  appointments: Appointment[] = [];
  selectedStudentId = 0;
  toAddUsername: string;
  parentId: number;

  constructor(private parentService: ParentServiceClient,
              private studentService: StudentServiceClient) {}

  selectStudent(studentId) {
    this.selectedStudentId = studentId;
    this.studentService.findApptsForStudent(studentId)
      .then(appointments => {
        console.log(appointments)
        this.appointments = appointments;
      });
  }

  addStudent(toAddUsername) {
    console.log(toAddUsername);
    this.studentService.findStudentByUsername(toAddUsername)
      .then(student => {
        console.log(student);
        this.parentService.addStudent(this.parentId, student[0])
          .then((response) => {
          this.loadChildren();
          });
      });
  }

  loadChildren() {
    this.parentService.findAllChildrenForParent(this.parentId)
      .then(children => {
        console.log(children);
        this.children = children;
      }
        );
  }

  ngOnInit() {
    this.parentService.profile()
      .then((parent) => {
      this.parentId = parent.id;
      this.parentService.findAllChildrenForParent(this.parentId)
          .then((children) => {
            this.children = children;
          });
      });
  }

}
