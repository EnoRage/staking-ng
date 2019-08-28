import {Component} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {distinctUntilChanged} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'staking';

  endpoint: string;
  showBack: boolean;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {

    // activatedRoute.url.subscribe((url) => {
    //   console.log(url);
    // });

    // TODO: do without subscription
    this.router.events.pipe().subscribe((event: any) => {
      if (!event.url) {
        return;
      }

      this.showBack = event.url !== '/main';
    });

    this.endpoint = environment.production
      ? 'https://blockatlas.trustwalletapp.com/'
      : 'http://localhost:9000/blockatlas/';

    this.getValidatorsOnce$().subscribe(
      (resp: any) => {
        // console.log(resp);
      }
    );
  }

  goBack() {
    // window.history.back();
    this.location.back();
    console.log('goBack()...');
  }


  getValidatorsOnce$(): Observable<Object> {
    return this.http.get(`${this.endpoint}v2/cosmos/staking/validators`);
  }
}
