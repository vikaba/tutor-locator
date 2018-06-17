export class TutorServiceClient {

  findTutorById(userId) {
    return fetch('http://localhost:8080/api/tutor/' + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch('http://localhost:8080/api/profile/tutor',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  register(username, password) {
    const user = {
      username: username,
      password: password,
      userType: 'tutor'
    };
    return fetch('http://localhost:8080/api/tutor', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
