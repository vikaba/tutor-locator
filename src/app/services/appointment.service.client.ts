export class AppointmentServiceClient {
  APPOINTMENT_API_URL = 'http://localhost:8080/api/tutor/ID/appt';

  findTutorApptByID(tutorId) {
    return fetch(this.APPOINTMENT_API_URL.replace('ID', tutorId))
      .then(response => response.json());
  }

  createAppt(studentName, startTime, endTime, subject, ApptType) {

    const appt = {studentName, startTime, endTime, subject, ApptType};
    return fetch('http://localhost:8080/api/appt'), {
        method: 'post',
        body: JSON.stringify(appt),
        headers: {
        'content-type': 'application/json'
      }
    };
  }


  scheduleAppt(apptId, studentName, startTime, endTime, subject, ApptType) {
    const appt = {studentName, startTime, endTime, subject, ApptType};
    return fetch('http://localhost:8080/api/appt' + apptId), {
      method: 'put',
      body: JSON.stringify(appt),
      headers: {
        'content-type': 'application/json'
      }
    };
  }

  deleteAppt(apptId) {
    return fetch('http://localhost:8080/api/appt' + apptId), {
      method: 'delete'
    };
  }
}
