import {Injectable} from '@angular/core';
import {from, interval, Observable} from 'rxjs';
import {filter, map, shareReplay, switchMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrustProviderService {

  constructor() {

    this.currentAccount$ = this.getAddressOnce(this.network).pipe(
      shareReplay(1)
    );

    this.currentAccount$.subscribe();
  }

  readonly network = 118; // Cosmos
  currentAccount$: Observable<string>;

  static prepareTransaction(coin: number, addressTo: string, addressFrom: string, smount: string): any {
    return '';
  }

  static signTransaction(): any {
    return '';
  }

  getAddressOnce(network: number): Observable<string> {
    return interval(2000).pipe(
      // @ts-ignore
      filter(() => !!(window as any).trustProvider),
      take(1),
      switchMap(() => {
        // @ts-ignore
        return from((window as any).trustProvider.getAccounts());
      }),
      // @ts-ignore
      map((accounts: Array<any>) => {
        const accountRaw = accounts.find((account) => account.network === network);
        // @ts-ignore
        return JSON.stringify(accountRaw.address)
          .replace('"', '')
          .replace('"', '');
      })
    );
  }
}
