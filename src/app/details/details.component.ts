import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CosmosService, CosmosServiceInstance, Validators, Validator} from "../cosmos.service";
import {find, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  validatorId : string;
  validators : Observable<Validator>;
  cosmosInstance : CosmosServiceInstance;
  stakedSum : Observable<number>;

  constructor( activatedRoute : ActivatedRoute, private http : HttpClient, private cosmos : CosmosService ) {
    this.validatorId = activatedRoute.snapshot.params.blockchainId;
    this.cosmosInstance = this.cosmos.getInstance('cosmos1cj7u0wpe45j0udnsy306sna7peah054upxtkzk');
    this.validators = this.getValidator(this.validatorId);
    this.stakedSum = this.getStakedAmount(this.validatorId);
  }

  ngOnInit() {

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
