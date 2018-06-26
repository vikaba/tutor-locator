export class AppointmentServiceClient {
  APPOINTMENT_API_URL = 'http://localhost:8080/api/tutor/USERID/appt';

  findTutorApptByID(userId) {
    return fetch(this.APPOINTMENT_API_URL.replace('USERID', userId))
      .then(response => response.json());
  }

  createAppt(startTime, endTime, tutor, apptType) {

    const appt = {startTime, endTime, tutor, apptType};
    return fetch('http://localhost:8080/api/appt', {
        method: 'post',
        body: JSON.stringify(appt),
        headers: {
        'content-type': 'application/json'
      }
    });
  }


  scheduleAppt(apptId, startTime, endTime, tutor, apptType) {
    const appt = {startTime, endTime, tutor, apptType};
    return fetch('http://localhost:8080/api/appt/' + apptId, {
      method: 'put',
      body: JSON.stringify(appt),
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
