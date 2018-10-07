import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent {
  title = 'Planealo';
  city: string = "Camuy";

  routes$: any;
  constructor(private data: DataService) {}

  ngOnInit() {
  }

  getChinchorreo(){
    this.data.getRoute(this.city+"&category=chinchorro").subscribe(
      data => this.routes$ = data
    );
  }  
  getAttraction(){
    this.data.getRoute(this.city+"&category=culture & science").subscribe(
      data => this.routes$ = data
    );
  }  
  getAccomodation(){
    this.data.getRoute(this.city+"&category=hotel").subscribe(
      data => this.routes$ = data
    );
  }
}
