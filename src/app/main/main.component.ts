import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable, of} from 'rxjs';
import {IBlockchainDto} from '../dto';
import {Router} from '@angular/router';
import {CosmosService, CosmosServiceInstance, Validator, Validators} from "../cosmos.service";
import {find, map} from "rxjs/operators";

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
  myStakeHolders : Array<Validator> = [];
  cosmosInstance : CosmosServiceInstance;

  constructor( private router : Router, private cosmos : CosmosService ) {
    this.cosmosAnnualRate = of('9%');
    this.cosmosInstance = this.cosmos.getInstance('cosmos1cj7u0wpe45j0udnsy306sna7peah054upxtkzk');
     combineLatest([this.cosmosInstance.getValidators(), this.cosmosInstance.getDelegations()]).pipe(
      map(( x : any ) => {
        const [validators, delegators] = x;
        let validatorsFinal;
        // @ts-ignore
        delegators.forEach(( i ) => {
          const v = validators.docs.find(( validator ) => {
            validator.id === delegators[i].validator_address
          });
          if (v) {
            // @ts-ignore
            validatorsFinal.push(v);
          }
          return validatorsFinal;
        })
      })).subscribe()
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

  navigateToPosDelegatorsList( item : IBlockchainDto ) {

    this.router.navigate([`/delegators/${item.blockchainId}`]);
  }

  navigateToMyStakeHoldersList( item : Validator ) {
    this.router.navigate([`/details/${item.id}`]);
  }

  getValidator( validatorId : string ) : Observable<Validator> {
    // @ts-ignore
    return this.cosmosInstance.getValidators().pipe(
      // @ts-ignore
      find(validator => validator.id == validatorId)
    );
  }

  getStakedAmount( validatorId : string ) : Observable<number> {
    return this.cosmosInstance.getDelegations().pipe(
      map(( response ) => {
        let stakedSumArray = [];
        response.forEach(( i ) => {
          if (response[i].validator_address == validatorId) {
            // @ts-ignore
            stakedSumArray.push(response[i].shares);
          }
        });
        // @ts-ignore
        return stakedSum.reduce(( a, b ) => a + b, 0)
      })
    )
  }
}
