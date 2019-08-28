import {combineLatest, Observable, of, timer} from 'rxjs';
import {IBlockchainDto} from '../dto';
import {Router} from '@angular/router';
import {CosmosService, CosmosServiceInstance, Validator, Validators} from '../cosmos.service';
import {find, map, shareReplay, switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cosmosAnnualRate: Observable<string>;
  // @ts-ignore
  blockchains: Array<IBlockchainDto> = [];
  // @ts-ignore
  myStakeHolders$: Observable<Array<Validator>>;
  cosmosInstance: CosmosServiceInstance;
  allDelegatorsInfo: Observable<any>;

  constructor(private router: Router, private cosmos: CosmosService) {
    this.cosmosAnnualRate = of('9%');
    this.cosmosInstance = this.cosmos.getInstance('cosmos1cj7u0wpe45j0udnsy306sna7peah054upxtkzk');
    this.allDelegatorsInfo = this.cosmosInstance.getDelegations();

    const validatorsAndDelegation = [
      this.cosmosInstance.getValidators(),
      this.cosmosInstance.getDelegations()
    ];

    const tmp$ = combineLatest(validatorsAndDelegation).pipe(
      map((data: any[]) => {
          const [validators, delegators] = data;

          if (!validators || !delegators) {
            return [];
          }

          // TODO: improve with reduce
          const addressesOfAllDelegators = delegators.map((d) => {
            return d.validatorAddress;
          });

          const uniqueAddressesOfAllDelegators = addressesOfAllDelegators.filter((item, pos, self) => {
            return self.indexOf(item) === pos;
          });

          // TODO: improve with reduce
          const myStakeHolders = [];
          validators.docs.forEach((validator) => {
            const f = uniqueAddressesOfAllDelegators.find((element) => element === validator.id);
            if (f) {
              myStakeHolders.push(validator);
            }
          });

          return myStakeHolders;
        }
      ));

    this.myStakeHolders$ = timer(0, 10000).pipe(
      switchMap(() => {
        return tmp$;
      }),
      shareReplay()
    );

  }

  ngOnInit() {
    this.blockchains = [
      {
        blockchainId: 'cosmos',
        currencyName: 'Cosmos',
        currencySymbol: 'ATOM',
        annualRate: 0.09,
        iconUri: 'https://assets.trustwalletapp.com/blockchains/cosmos/info/logo.png'
      }
    ];
  }

  navigateToPosDelegatorsList(item: IBlockchainDto) {

    this.router.navigate([`/delegators/${item.blockchainId}`]);
  }

  navigateToMyStakeHoldersList(item: Validator) {
    this.router.navigate([`/details/${item.id}`]);
  }

  getValidator(validatorId: string): Observable<Validator> {
    // @ts-ignore
    return this.cosmosInstance.getValidators().pipe(
      // @ts-ignore
      find(validator => validator.id == validatorId)
    );
  }

  getStakedAmount(validatorId: string): Observable<number> {
    return this.allDelegatorsInfo.pipe(
      map((response) => {
        let stakedSumArray = [];
        response.forEach((i) => {
          // @ts-ignore
          stakedSumArray.push(Number(i.shares) / 1000000);

        });
        // @ts-ignore
        return stakedSumArray.reduce((a, b) => a + b, 0).toFixed(6);
      })
    );
  }
}
