import {Component, OnInit} from '@angular/core';
import {TrustProviderService} from "../trust-provider.service";
import {CosmosService, CosmosServiceInstance, Validators} from "../cosmos.service";
import {combineLatest, Observable, Subscription} from "rxjs";
import BigNumber from 'bignumber.js';
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  cosmosInstance : CosmosServiceInstance;
  balance$ : Observable<string | BigNumber>;
  fiat$ : Observable<string>;
  subscription : Subscription;

  constructor( private trustProvider : TrustProviderService, private cosmos : CosmosService ) {

    // this.subscription = this.trustProvider.currentAccount$.subscribe(( account ) => {
      this.cosmosInstance = this.cosmos.getInstance('cosmos16gdxm24ht2mxtpz9cma6tr6a6d47x63hlq4pxt');
      this.cosmosInstance.getStakedAmount().subscribe();
      this.balance$ = this.cosmosInstance.balance$;
      this.fiat$ = combineLatest([this.cosmosInstance.getPrice(),  this.balance$]).pipe(
        map(( x : any[] ) => {
          const [price, balance] = x;
          // @ts-ignore
          return Number(price) * Number(balance);
        }),
        map(( x : number ) => {
          // @ts-ignore
          return '$' + x.toFixed(2);
        }),
        shareReplay(1)
      );
    // });
  }

  ngOnInit() {
  }

}
