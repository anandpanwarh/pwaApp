import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  readonly ROOT_URL: string = "https://jsonplaceholder.typicode.com/users";

  constructor(
    private _http: HttpClient
  ) {}

  getUsers(): Observable<any> {
    return this._http.get(this.ROOT_URL);
  }

}
