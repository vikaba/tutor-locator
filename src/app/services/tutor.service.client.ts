export class TutorServiceClient {

  findUserById(userId) {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  findTutorByName(username) {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/tutor?username=' + username)
      .then(response => response.json());
  }

  profile() {
    console.log('profile')
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/profile/tutor',
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
      userType: 'tutor'
    };
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/register/tutor', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'post'}).then(function (response) {
      return response.json();
    });
  }

  findAllTutors() {
    const url = 'https://web-dev-final-project-data.herokuapp.com/api/tutor';
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
      userType: 'tutor'
    };
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/tutor', {
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
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/tutor/' + userId,
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
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/tutor/' + userId, {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateProfileUser(userId, newFirstName, newLastName, newEmail, newStreet, newCity, newState, newZipcode) {
    const user = {
      id: userId,
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      street: newStreet,
      city: newCity,
      state: newState,
      zipcode: newZipcode
    };
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/profile/tutor', {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function(response) {
        return response.json();
      });
  }

  logout() {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/login/tutor', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
