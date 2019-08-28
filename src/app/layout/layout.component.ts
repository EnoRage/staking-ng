import {Component, OnInit} from '@angular/core';
import {TrustProviderService} from "../trust-provider.service";
import {CosmosService, CosmosServiceInstance, Validators} from "../cosmos.service";
import {combineLatest, Observable, Subscription} from "rxjs";
import BigNumber from 'bignumber.js';
import {map, shareReplay} from "rxjs/operators";

interface fiatDetails {
  balance : string
  staked : string
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  cosmosInstance : CosmosServiceInstance;
  subscription : Subscription;
  fiatDetails$ : Observable<fiatDetails>;

  constructor( private trustProvider : TrustProviderService, private cosmos : CosmosService ) {

    // this.subscription = this.trustProvider.currentAccount$.subscribe(( account ) => {
    this.cosmosInstance = this.cosmos.getInstance('cosmos16gdxm24ht2mxtpz9cma6tr6a6d47x63hlq4pxt');
    this.fiatDetails$ =
      combineLatest(
        [this.cosmosInstance.getPrice(), this.cosmosInstance.balance$, this.cosmosInstance.getStakedAmount()]).pipe(
        map(( x : any[] ) => {
          const [price, rawBalance, rawStaked] = x;
          // @ts-ignore
          const balance = '$'+ (Number(price) * Number(rawBalance)).toFixed(2);
          // @ts-ignore
          const staked = '$' + (Number(price) * Number(rawStaked)).toFixed(2);
          const fiatDetails : fiatDetails = {balance, staked};
          // @ts-ignore
          return fiatDetails;
        }),
        shareReplay(1)
      );
    // });
  }

  ngOnInit() {
  }

}
