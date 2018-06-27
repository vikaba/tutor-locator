export class SubjectServiceClient {
  findSubjectByName(name) {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/subject/' + name)
      .then(response => response.json());
  }

  findSubjects() {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/subject')
      .then(response => response.json());
  }


  createSubject(title) {
    const subject = {title};
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/subject', {
      method: 'post',
      body: JSON.stringify(subject),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
