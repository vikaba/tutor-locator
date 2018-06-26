export class StudentServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:8080/api/user/' + userId)
      .then(response => response.json());
  }

  findStudentByUsername(username) {
    return fetch('http://localhost:8080/api/student/username/' + username)
      .then(response => response.json());
  }

  profile() {
    console.log('profile')
    return fetch('http://localhost:8080/api/profile/student',
      {
        credentials: 'include', // include, same-origin, *omit
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
    return fetch('http://localhost:8080/api/register/student', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'post'}).then(function (response) {
      return response.json();
    });
  }

  findAllStudents() {
    const url = 'http://localhost:8080/api/student';
    return fetch(url)
      .then(response =>
        response.json());
  }

  createUser(username, password, firstName, lastName, userType) {
    const user = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      userType: 'student'
    };
    return fetch('http://localhost:8080/api/student', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'post'}).then(function (response) {
      return response.json();
    });
  }

  deleteUser(userId) {
    return fetch('http://localhost:8080/api/student/' + userId,
      {
        method: 'DELETE',
        credentials: 'include'
      });
  }

  updateUser(userId, newUsername, newPassword, newFirstName, newLastName, newUserType) {
    const user = {
      id: userId,
      username: newUsername,
      password: newPassword,
      firstName: newFirstName,
      lastName: newLastName,
      userType: newUserType
    };
    return fetch('http://localhost:8080/api/student/' + userId, {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findApptsForStudent(studentId) {
    return fetch('http://localhost:8080/api/student/' + studentId + '/appt')
      .then(response => response.json());
  }

  logout() {
    return fetch('http://localhost:8080/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:8080/api/login/student', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
