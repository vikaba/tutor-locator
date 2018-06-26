import {Appointment} from './appointment.model.client';

export class Student {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  id: number;
  appointments: Appointment[];
}
