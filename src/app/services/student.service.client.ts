export class StudentServiceClient {

  findStudentById(userId) {
    return fetch('http://localhost:8080/api/student/' + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch('http://localhost:8080/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  register(username, password) {
    const user = {
      username: username,
      password: password,
      userType: 'student'
    };
    return fetch('http://localhost:8080/api/student', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
