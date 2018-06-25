export class ParentServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:8080/api/user/' + userId)
      .then(response => response.json());
  }

  profile() {
    console.log('profile')
    return fetch('http://localhost:8080/api/profile/parent',
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
      userType: 'parent'
    };
    return fetch('http://localhost:8080/api/register/parent', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'post'}).then(function (response) {
      return response.json();
    });
  }

  findAllChildrenForParent(parentId) {
    const url = 'http://localhost:8080/api/parent/' + parentId + '/children';
    return fetch(url)
      .then(response =>
        response.json());
  }

  findAllParents() {
    const url = 'http://localhost:8080/api/parent';
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
      userType: 'parent'
    };
    return fetch('http://localhost:8080/api/parent', {
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
    return fetch('http://localhost:8080/api/parent/' + userId,
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
    return fetch('http://localhost:8080/api/parent/' + userId, {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('http://localhost:8080/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  addStudent(parentId, student) {
    return fetch('http://localhost:8080/api/parent/' + parentId + '/children',  {
      method: 'post',
      body: JSON.stringify(student),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }}).then(function (response) {
      return response.json();
    });
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:8080/api/login/parent', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
