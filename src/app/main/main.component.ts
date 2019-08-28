import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cosmosAnnualRate: Observable<string>;


  constructor() {
    this.cosmosAnnualRate = of('9%');
  }

  ngOnInit() {
  }

}
