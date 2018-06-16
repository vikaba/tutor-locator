import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UserServiceClient} from './services/user.service.client';
import {StudentServiceClient} from './services/student.service.client';
import {TutorServiceClient} from './services/tutor.service.client';
import {ParentServiceClient} from './services/parent.service.client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    UserServiceClient,
    StudentServiceClient,
    TutorServiceClient,
    ParentServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
