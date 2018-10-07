import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Planealo';
  param: string;

  routes$: any;
  constructor(private data: DataService) {}

  ngOnInit() {
  }

  getSomething(){
    this.data.getRoute(this.param).subscribe(
      data => this.routes$ = data
    );
    console.log(this.routes$);
  }
}
