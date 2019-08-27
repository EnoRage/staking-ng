import {Component, OnInit} from '@angular/core';
import {TrustProviderService} from "../trust-provider.service";
import {CosmosService, CosmosServiceInstance} from "../cosmos.service";
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

  constructor(private trustProvider : TrustProviderService, private cosmos : CosmosService) {
    this.subscription = this.trustProvider.currentAccount$.subscribe(( account ) => {
      this.cosmosInstance = this.cosmos.getInstance(account);
      const balance$ = this.cosmosInstance.balance$;
      this.balance$ = balance$;
      const price$ = this.cosmosInstance.getPrice();
      this.fiat$ = combineLatest([price$, balance$]).pipe(
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
    });
  }

  ngOnInit() {
  }

}
