export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:8080/api/user/' + userId)
      .then(response => response.json());
  }

  profile() {
    console.log('profile')
    return fetch('http://localhost:8080/api/profile',
      {
        credentials: 'same-origin', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  register(username, password, role) {
    console.log([username, password, role]);
    const user = {
      username: username,
      password: password,
      userType: role
    };
    return fetch('http://localhost:8080/api/register', {
      body: JSON.stringify(user),
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'post'}).then(function (response) {
      return response.json();
    })
  }
}
