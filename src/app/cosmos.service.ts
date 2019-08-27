import {Injectable} from '@angular/core';
import {combineLatest, Observable, of, timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import 'reflect-metadata';
import {Expose, Transform, Type} from 'class-transformer';
import BigNumber from 'bignumber.js';
import {map} from "rxjs/operators";

class Coin {
  denom : string;
  @Transform(value => new BigNumber(value), {toClassOnly: true})
  amount : BigNumber;
}

class PublicKey {
  value : string;
  type : string;
}

export class CosmosAccount {
  address : string;
  @Type(() => PublicKey)
  @Expose({name: 'public_key'})
  publicKey : PublicKey;
  @Type(() => Coin)
  coins : Coin[];
  @Transform(value => new BigNumber(value), {toClassOnly: true})
  @Expose({name: 'account_number'})
  accountNumber : BigNumber;
  // @ts-ignore
  @Transform(value => Number(value), {toClassOnly: true})
  sequence : number;
}

export class CosmosAccountResult {
  type : string;
  @Type(() => CosmosAccount)
  value : CosmosAccount;
}

export interface CoinPrice {
  price : string;
  contract : string;
  percent_change_24h : string;
}

export interface Response {
  status : boolean;
  docs : CoinPrice[];
  currency : string;
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

  balance$ : Observable<string | BigNumber>;

  constructor( private http : HttpClient, private account : string ) {
    const timer$ = timer(0, 5000);
    const url = 'https://cosmos-rpc.trustwalletapp.com';
    const balance$ = this.getBalance(account, url);

    this.balance$ = combineLatest([timer$, balance$]).pipe(
      map(( x : any[] ) => {
        const [timer, balance] = x;
        const denom = new BigNumber(1000000);
        // @ts-ignore
        return (balance / denom).toString();
      })
    );
  }

  getBalance( address : string, baseUrl : string ) : Observable<string | BigNumber> {
    return this.http.get(baseUrl + `/auth/accounts/${address}`).pipe(
      map(( result ) => {
        // @ts-ignore
        const cosmosAccount : CosmosAccount = result.value;
        const balances : Coin[] = cosmosAccount.coins;
        // @ts-ignore
        const cosmosBalance = balances.find(( coin ) => coin.denom.toUpperCase() == "UATOM");
        return cosmosBalance.amount;
      })
    );
  }

  getPrice() : Observable<string> {
    const body = {
      "currency": "USD",
      "tokens": [
        {
          "contract": "0x0000000000000000000000000000000000000076"
        }
      ]
    };
    return this.http.post('https://api.trustwallet.com/prices', body).pipe(
      map(( result : Response ) => {
        const currency = result.docs;
        // @ts-ignore
        const coin = currency.find(( coin ) => coin.contract == '0x0000000000000000000000000000000000000076');
        return coin.price;
      })
    );
  }

  getStakedAmount() : Observable<string> {
    return of('')
  }
}
