import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
