import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userList: Observable<any>;


  constructor(
    private _userSvc: WeatherService
  ) { }


  ngOnInit() { 
    this.getUsers();
  }

  getUsers() {
    this.userList = this._userSvc.getUsers();
  }
  
}
