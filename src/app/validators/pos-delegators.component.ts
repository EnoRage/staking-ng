import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pos-delegators',
  templateUrl: './pos-delegators.component.html',
  styleUrls: ['./pos-delegators.component.scss']
})
export class PosDelegatorsComponent implements OnInit {

  blockchain: string;

  constructor(activatedRoute: ActivatedRoute) {
    this.blockchain = activatedRoute.snapshot.params.blockchain;
  }

  ngOnInit() {
  }

}
