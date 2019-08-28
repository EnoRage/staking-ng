import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IBlockchainDto} from '../dto';
import {Router} from '@angular/router';

// interface IStakeHolderDto {
//
// }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cosmosAnnualRate: Observable<string>;
  blockchains: Array<IBlockchainDto> = [];
  myStakeHolders: [];

  constructor(private router: Router) {
    this.cosmosAnnualRate = of('9%');
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
}
