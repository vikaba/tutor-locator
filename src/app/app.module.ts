import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TutorSearchComponent } from './tutor-search/tutor-search.component';
import {FormsModule} from '@angular/forms';
import {SearchServiceClient} from './services/tutorsearch.service.client';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UserServiceClient} from './services/user.service.client';
import { ParentComponent } from './parent/parent.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import {ParentServiceClient} from './services/parent.service.client';
import {StudentServiceClient} from './services/student.service.client';
import {TutorServiceClient} from './services/tutor.service.client';
import { ApptMakerComponent } from './appt-maker/appt-maker.component';
import {AppointmentServiceClient} from './services/appointment.service.client';
import {SubjectServiceClient} from './services/subject.service.client';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ParentComponent,
    UserAdminComponent,
    TutorSearchComponent,
    ApptMakerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    UserServiceClient,
    ParentServiceClient,
    StudentServiceClient,
    TutorServiceClient,
    SearchServiceClient,
    AppointmentServiceClient,
    SubjectServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
