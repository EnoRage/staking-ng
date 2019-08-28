import {Component} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'staking';

  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.production
      ? 'https://blockatlas.trustwalletapp.com/'
      : 'http://localhost:9000/blockatlas/';

    this.getValidatorsOnce$().subscribe(
      (resp: any) => {
        console.log(resp);
      }
    );
  }


  getValidatorsOnce$(): Observable<Object> {
    return this.http.get(`${this.endpoint}v2/cosmos/staking/validators`);
  }
}
