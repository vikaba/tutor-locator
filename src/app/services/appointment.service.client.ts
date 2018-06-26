export class AppointmentServiceClient {
  APPOINTMENT_API_URL = 'http://localhost:8080/api/tutor/USERID/appt';

  findTutorApptByID(userId) {
    return fetch(this.APPOINTMENT_API_URL.replace('USERID', userId))
      .then(response => response.json());
  }

  findApptByStudentID(userId) {
    return fetch('http://localhost:8080/api/student/' + userId + '/appt')
      .then(response => response.json());
  }

  createAppt(name, startTime, endTime, tutorID, apptType) {
    const appt = {name, startTime, endTime, apptType};
    return fetch('http://localhost:8080/api/tutor/' + tutorID + '/appt', {
        method: 'post',
        body: JSON.stringify(appt),
        headers: {
        'content-type': 'application/json'
      }
    });
  }


  scheduleAppt(apptId, studentID) {
    return fetch('http://localhost:8080/api/student/' + studentID + '/appt', {
      method: 'post',
      body: JSON.stringify(apptId),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteAppt(apptId) {
    return fetch('http://localhost:8080/api/appt/' + apptId, {
      method: 'delete'
    });
  }
}
