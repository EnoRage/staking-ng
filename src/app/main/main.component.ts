import {combineLatest, Observable, of, timer} from 'rxjs';
import {IBlockchainDto} from '../dto';
import {Router} from '@angular/router';
import {CosmosService, CosmosServiceInstance, toAtom, Validator} from '../cosmos.service';
import {find, map, shareReplay, switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {CosmosDelegation} from '@trustwallet/rpc/lib';

interface IAggregatedDelegationMap {
  // TODO: Use BN or native browser BigInt() + polyfill
  [address: string]: number;
}

interface IStakeAmount {
  address: string;
  amount: number;
}

interface IValidatorInfo extends Validator {
  amount: number; // TODO: Use big number or BigInt, show on UI using pipe
}

type StakeHolderList = Array<IValidatorInfo>;

function map2List(address2stake: IAggregatedDelegationMap, validators: Array<Validator>): Array<IValidatorInfo> {

  return Object.keys(address2stake).map((address) => {
    const validator = validators.find(v => v.id === address);
    return {
      ...validator,
      amount: toAtom(address2stake[address]),
    };
  });
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cosmosAnnualRate: Observable<string>;
  blockchains: Array<IBlockchainDto> = [];
  myStakeHolders$: Observable<StakeHolderList>;
  cosmosInstance: CosmosServiceInstance;

  constructor(private router: Router, private cosmos: CosmosService) {

    this.cosmosAnnualRate = of('9%');
    this.cosmosInstance = this.cosmos.getInstance('cosmos1cj7u0wpe45j0udnsy306sna7peah054upxtkzk');

    const validatorsAndDelegations = [
      this.cosmosInstance.getValidators(),
      this.cosmosInstance.getDelegations()
    ];

    const address2StakeMap$: Observable<StakeHolderList> = combineLatest(validatorsAndDelegations).pipe(
      map((data: any[]) => {
          const [approvedValidators, myDelegations] = data;

          if (!approvedValidators || !myDelegations) {
            return [];
          }

          const addresses = approvedValidators.docs.map((d) => d.id);

          // Ignore delegations to validators that isn't in a list of approved validators
          const filteredDelegations = myDelegations.filter((delegation: CosmosDelegation) => {
            // TODO: use map(Object) in case we have more that 10 approved validators
            return addresses.includes(delegation.validatorAddress);
          });

          const address2stakeMap = filteredDelegations.reduce((acc: IAggregatedDelegationMap, delegation: CosmosDelegation) => {
            // TODO: Use BN or native browser BigInt() + polyfill
            const aggregatedAmount = acc[delegation.validatorAddress] || 0;
            const sharesAmount = +(delegation.shares) || 0;
            acc[delegation.validatorAddress] = aggregatedAmount + sharesAmount;
            return acc;
          }, {});

          return map2List(address2stakeMap, approvedValidators.docs);
        }
      ));


    this.myStakeHolders$ = timer(0, 10000).pipe(
      switchMap(() => {
        return address2StakeMap$;
      }),
      shareReplay(1)
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
}
