import {User} from "./user.model.client";
import {Subject} from "./subject.model.client";

export class Appointment {
  id: number;
  startTime: string;
  endTime: string;
  apptType: string;
  subject: Subject;
  tutor: User;
  student: User;
}
