export class AppointmentServiceClient {
  APPOINTMENT_API_URL = 'https://web-dev-final-project-data.herokuapp.com/api/tutor/USERID/appt';

  findTutorApptByID(userId) {
    return fetch(this.APPOINTMENT_API_URL.replace('USERID', userId))
      .then(response => response.json());
  }

  findSubjectForAppt(apptId) {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/appt/' + apptId)
      .then(response => response.json());
  }

  findApptByStudentID(userId) {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/student/' + userId + '/appt')
      .then(response => response.json());
  }

  createAppt(name, subjectID, startTime, endTime, tutorID, apptType) {
    const appt = {name, startTime, endTime, apptType};
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/tutor/' + tutorID + '/subject/' + subjectID + '/appt', {
        method: 'post',
        body: JSON.stringify(appt),
        headers: {
        'content-type': 'application/json'
      }
    });
  }


  scheduleAppt(apptId, studentID) {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/student/' + studentID + '/appt', {
      method: 'post',
      body: JSON.stringify(apptId),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteAppt(apptId) {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/appt/' + apptId, {
      method: 'delete'
    });
  }
}
