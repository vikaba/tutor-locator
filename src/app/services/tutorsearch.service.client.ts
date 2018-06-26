export class SearchServiceClient {
  TUTOR_API_URL = 'http://localhost:8080/api/tutor';
  TUTOR_ADDRESS_API =
    'http://localhost:8080/api/tutor?street=STNAME&city=CNAME&state=STATENAME&zipcode=ZIPNAME';


  findLocation(tutorAddress) {
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address='
      + tutorAddress + '&key=AIzaSyDZtswm-x9wCi3ncGwMVCh5-yhYzUPR23s\n')
      .then(response => response.json());
  }

  findAllTutors() {
    return fetch(this.TUTOR_API_URL)
      .then(response => response.json());
  }

  findTutorsForAddress(tutorAddress) {
    const splitted = tutorAddress.split(",");
    return fetch(this.TUTOR_ADDRESS_API.replace('STNAME', splitted[0])
      .replace("CNAME", splitted[1]).replace('STATENAME', splitted[2])
      .replace('ZIPNAME', splitted[3]))
      .then(response => response.json());
  }
}
