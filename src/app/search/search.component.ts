import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'search-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  title = 'Planealo';
  param: string = "chinchorro&city=Camuy";

  routes$: any;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.getSomething();
  }

  getSomething(){
    this.data.getRoute(this.param).subscribe(
      data => this.routes$ = data
    );
    console.log(this.routes$);
  }
}