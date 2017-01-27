import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

const PEOPLE_API_URL = 'http://swapi.co/api/people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private http:Http) {

  }

  ngOnInit() {
    this.http.get(PEOPLE_API_URL).$promise
      .then((response) =>  {

      });
  }
}
