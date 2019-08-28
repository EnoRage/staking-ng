import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable, of, timer} from 'rxjs';
import {IBlockchainDto} from '../dto';
import {Router} from '@angular/router';
import {CosmosService, CosmosServiceInstance, Validator, Validators} from "../cosmos.service";
import {find, map} from "rxjs/operators";
import {element} from "protractor";

// interface IStakeHolderDto {
//
// }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cosmosAnnualRate : Observable<string>;
  // @ts-ignore
  blockchains : Array<IBlockchainDto> = [];
  // @ts-ignore
  myStakeHolders : Observable<Array<Validator>>;
  cosmosInstance : CosmosServiceInstance;

  constructor( private router : Router, private cosmos : CosmosService ) {
    this.cosmosAnnualRate = of('9%');
    this.cosmosInstance = this.cosmos.getInstance('cosmos1cj7u0wpe45j0udnsy306sna7peah054upxtkzk');
    this.myStakeHolders = combineLatest([timer(0, 10000), this.cosmosInstance.getValidators(), this.cosmosInstance.getDelegations()]).pipe(
      map(( x : any ) => {
        const [timer, validators, delegators] = x;

        let delegatorsAddresses = [];

        if (delegators && validators) {
          delegators.forEach(( delegator ) => {
            // @ts-ignore
            delegatorsAddresses.push(delegator.validatorAddress);
          });
          // @ts-ignore
          const res = delegatorsAddresses.filter(( item, pos, self ) => {
            return self.indexOf(item) == pos;
          });
        //
        //   let sums = [];
        //   res.forEach(( i, index ) => {
        //     if (i == delegators[index].validatorAddress
        //       // @ts-ignore
        //       && !sums.find(( s ) => {
        //         s.validatorAddress == delegators[index].validatorAddress
        //       })) {
        //       // @ts-ignore
        //       sums.push({validatorAddress: delegators[index].validatorAddress, sum: Number(delegators[index].shares)})
        //     } else if (i == delegators[index].validatorAddress
        //       // @ts-ignore
        //       && sums.find(( s ) => {
        //         s.validatorAddress == delegators[index].validatorAddress
        //       })) {
        //       sums[index]({validatorAddress: delegators[index].validatorAddress, sum: Number(delegators[index].shares)})
        //     }
        //   })
        // )
    // @ts-ignore
    let validatorsFinal = [];
    validators.docs.forEach(( validator ) => {
      const f = res.find(element => element == validator.id);
      if (f) {
        // @ts-ignore
        validatorsFinal.push(validator);
      }

    });
    return validatorsFinal;
  }

}

))
;

}

ngOnInit()
{
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

navigateToPosDelegatorsList(item
:
IBlockchainDto
)
{

  this.router.navigate([`/delegators/${item.blockchainId}`]);
}

navigateToMyStakeHoldersList(item
:
Validator
)
{
  this.router.navigate([`/details/${item.id}`]);
}

getValidator(validatorId
:
string
) :
Observable < Validator > {
  // @ts-ignore
  return this.cosmosInstance.getValidators().pipe(
    // @ts-ignore
    find(validator => validator.id == validatorId)
  );
}

getStakedAmount(validatorId
:
string
) :
Observable < number > {
  return this.cosmosInstance.getDelegations().pipe(
    map(( response ) => {
      let stakedSumArray = [];
      response.forEach(( i ) => {
        // @ts-ignore
        stakedSumArray.push(Number(i.shares) / 1000000);

      });
      // @ts-ignore
      return stakedSumArray.reduce(( a, b ) => a + b, 0).toFixed(6)
    })
  )
}
}
