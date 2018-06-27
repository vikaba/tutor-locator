export class SubjectServiceClient {
  findSubjectByName(name) {
    return fetch('http://localhost:8080/api/subject/' + name)
      .then(response => response.json());
  }

  findSubjects() {
    return fetch('http://localhost:8080/api/subject')
      .then(response => response.json());
  }


  createSubject(title) {
    const subject = {title};
    return fetch('http://localhost:8080/api/subject', {
      method: 'post',
      body: JSON.stringify(subject),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
