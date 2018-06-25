import { Component, OnInit } from '@angular/core';
import {SearchServiceClient} from '../services/tutorsearch.service.client';
import {} from '@types/googlemaps';

declare const google: any;

@Component({
  selector: 'app-tutor-search',
  templateUrl: './tutor-search.component.html',
  styleUrls: ['./tutor-search.component.css']
})
export class TutorSearchComponent implements OnInit {

  // credits: https://developers.google.com/maps/documentation/javascript/geocoding
  geocoder;
  tutors;
  tutorAddress;
  map;
  constructor(private tutorSearchService: SearchServiceClient) { }

  searchForTutors(tutorAddress) {
    this.tutorSearchService.findTutorsForAddress(this.tutorAddress)
      .then(tutors => this.tutors = tutors);

    this.geocoder = new google.maps.Geocoder();

    this.geocoder.geocode( { 'address': tutorAddress}, function(results, status) {
      if (status === 'OK') {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();

        const latlng = new google.maps.LatLng(-34.397, 150.644);

        const mapOptions = {
          zoom: 8,
          center: latlng
        };

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);


        this.map.setCenter(new google.maps.LatLng(latitude, longitude));
        const marker = new google.maps.Marker({
          map: this.map,
          position: results[0].geometry.location
        });
      } else {
        alert('Address could not be found');
      }
    });

  }

  ngOnInit() {

  }

}
