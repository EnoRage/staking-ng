import {Injectable} from '@angular/core';
import {combineLatest, from, Observable, timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import 'reflect-metadata';
import {CosmosRPC, CosmosAccount, CosmosDelegation} from '@trustwallet/rpc';
import BigNumber from 'bignumber.js';
import {map} from 'rxjs/operators';
import {forEach} from '@angular/router/src/utils/collection';


export interface CoinPrice {
  price : string;
  contract : string;
  percent_change_24h : string;
}

export interface PriceResponse {
  status : boolean;
  docs : CoinPrice[];
  currency : string;
}

export interface ValidatorInfo {
  name : string;
  description : string;
  image : string;
  website : string;
}

export interface Reward {
  annual : number;
}

export interface Validator {
  id : string;
  status : boolean;
  info : ValidatorInfo;
  reward : Reward;
}
export interface Validators {
  docs: Validator[];
}

@Injectable({
  providedIn: 'root'
})
export class CosmosService {
  readonly mapping : { [key : string] : CosmosServiceInstance } = {};

  constructor( private http : HttpClient ) {
  }

  getInstance( address : string ) : CosmosServiceInstance {
    if (this.mapping[address]) {
      return this.mapping[address];
    }
    const instance = new CosmosServiceInstance(this.http, address);
    this.mapping[address] = instance;
    return instance;
  }
}

export class CosmosServiceInstance {
  currentAccount : string;
  balance$ : Observable<string | BigNumber>;
  rpc : CosmosRPC;

  constructor( private http : HttpClient, private account : string ) {
    this.rpc = new CosmosRPC('https://cosmos-rpc.trustwalletapp.com');
    // this.rpc = new CosmosRPC('https://stargate.cosmos.network');
    this.currentAccount = account;
    const timer$ = timer(0, 5000);
    const balance$ = this.getBalance(account);

    this.balance$ = combineLatest([timer$, balance$]).pipe(
      map(( x : any[] ) => {
        const [timer, balance] = x;
        const denominator = new BigNumber(1000000);
        // @ts-ignore
        return (balance / denominator).toString();
      })
    );
  }

  getBalance( address : string ) : Observable<any> {
    return from(this.rpc.getAccount(address)).pipe(
      map(( account : CosmosAccount ) => {
        const balances = (account as CosmosAccount).coins;
        // @ts-ignore
        const result = balances.find(( coin ) => coin.denom.toUpperCase() === 'UATOM');
        return result.amount;
      })
    );
  }

  getPrice() : Observable<string> {
    const body = {
      'currency': 'USD',
      'tokens': [
        {
          'contract': '0x0000000000000000000000000000000000000076'
        }
      ]
    };
    return this.http.post('https://api.trustwallet.com/prices', body).pipe(
      map(( result : PriceResponse ) => {
        const currency = result.docs;
        // @ts-ignore
        const coin = currency.find(( coin ) => coin.contract == '0x0000000000000000000000000000000000000076');
        return coin.price;
      })
    );
  }

  getLargestRate() : Observable<string> {
    const url = 'https://blockatlas.trustwalletapp.com/v2/cosmos/staking/validators';
    // const url = ' http://142.93.172.157:9000/blockatlas//v2/cosmos/staking/validators';
    return this.http.get(url).pipe(
      map(( x ) => {
        // console.log(x);
        return x;
      }),
      map(( docs : Validators ) => {
        const annualRates = [];
        // console.log(docs);
        // @ts-ignore
        docs.forEach(( i ) => {
          // @ts-ignore
          annualRates.push(docs[i].reward.annual);
        });
        return annualRates;
      }),
      map(( annualRates : number[] ) => {
        // @ts-ignore
        const largestRateToDisplay = Math.max.apply(annualRates);
        return largestRateToDisplay.toFixed(2);
      })
    );
  }

  getStakedAmount() : Observable<number> {
    return from(this.rpc.listDelegations(this.account)).pipe(
      map(( delegations : any[] ) => {

        console.log(delegations)
        let sums = [];
        // @ts-ignore
        if(delegations)
        {
          // @ts-ignore
          for (let i = 0; i < delegations.length; i++) {
            // @ts-ignore
            sums.push(delegations[i].shares);
          }
          return (BigNumber.sum(...sums).toNumber() / 1000000);
        }
           return 0;
      })
    );
  }

  getDelegations() : Observable<any> {
    return from(this.rpc.listDelegations(this.account));
  }

  getValidators() : Observable<Validators> {
    const url = 'https://blockatlas.trustwalletapp.com/v2/cosmos/staking/validators';
    // const url = 'http://142.93.172.157:9000/blockatlas/v2/cosmos/staking/validators';
    return this.http.get(url).pipe(
      map((response: Validators) => {
        // console.log(response);
        return response;
      })
    )
  }
}
