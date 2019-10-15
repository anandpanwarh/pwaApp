import { Component, OnInit } from '@angular/core';
import { ApiService, Item } from './core/service/api.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwademo';
  items: Array<Item>;

  constructor(private apiService: ApiService, private _swUpdate: SwUpdate) {
  }
  ngOnInit() {
    if(this._swUpdate.isEnabled) {
      this._swUpdate.available.subscribe(() => {
        if(confirm('New version available. Load new version?')) {
          window.location.reload();
        }
      })
    }
    this.fetchData();
  }

  fetchData() {
    this.apiService.fetch().subscribe((data: Array<Item>) => {
      console.log(data);
      this.items = data;
    }, (err) => {
      console.log(err);
    });
  }

}
