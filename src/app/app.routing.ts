import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {ApptMakerComponent} from './appt-maker/appt-maker.component';
import {TutorSearchComponent} from './tutor-search/tutor-search.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'user-admin', component: UserAdminComponent},
  { path: 'schedular/:tutorId', component: ApptMakerComponent},
  { path: 'search', component: TutorSearchComponent},
  { path: '**', component: HomeComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
