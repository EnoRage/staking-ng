import { Component, OnInit } from '@angular/core';
import {map, shareReplay} from "rxjs/operators";
import {CosmosService, CosmosServiceInstance, Validators} from "../cosmos.service";
import {TrustProviderService} from "../trust-provider.service";
import {combineLatest, Observable, of, Subscription} from "rxjs";
import BigNumber from "bignumber.js";
import {HttpClient} from "@angular/common/http";

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
