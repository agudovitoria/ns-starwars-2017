import {Component, OnInit} from '@angular/core';
import "rxjs";
import {SwapiService} from "./core/swapi.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'app works!';
  people: any[] = [];

  constructor(private swapiService:SwapiService) {

  }

  ngOnInit() {
    // this.http.get(PEOPLE_API_URL).subscribe(this.getElements);
    const observable = this.swapiService.getPeople();

    observable.subscribe((results) => this.people = results);
    observable.subscribe(() => console.log('People has changed', this.people));
  }
}
