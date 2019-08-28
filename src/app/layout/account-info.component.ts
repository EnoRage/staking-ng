import {Component, OnInit} from '@angular/core';
import {TrustProviderService} from '../trust-provider.service';
import {CosmosService, CosmosServiceInstance, Validators} from '../cosmos.service';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

interface IFiatDetails {
  balance: string;
  staked: string;
}

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  cosmosInstance: CosmosServiceInstance;
  subscription: Subscription;
  fiatDetails$: Observable<IFiatDetails>;

  constructor(private trustProvider: TrustProviderService, private cosmos: CosmosService) {

    // this.subscription = this.trustProvider.currentAccount$.subscribe(( account ) => {
    this.cosmosInstance = this.cosmos.getInstance('cosmos16gdxm24ht2mxtpz9cma6tr6a6d47x63hlq4pxt');
    this.fiatDetails$ =
      combineLatest(
        [this.cosmosInstance.getPrice(), this.cosmosInstance.balance$, this.cosmosInstance.getStakedAmount()]).pipe(
        map((x: any[]) => {
          const [price, rawBalance, rawStaked] = x;
          // TODO: move to pipe
          const balance = '$' + (Number(price) * Number(rawBalance)).toFixed(2);
          const staked = '$' + (Number(price) * Number(rawStaked)).toFixed(2);
          const fiatDetails: IFiatDetails = {balance, staked};
          return fiatDetails;
        }),
        shareReplay(1)
      );
    // });
  }

  ngOnInit() {
  }

}
