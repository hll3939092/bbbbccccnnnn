import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {Game} from "../model/game";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BetServiceService {

  constructor(private http: Http) { }

  public getBetBankCount(game: Game): Observable <string>{
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    let countOfBank;
    this.http.post('http://localhost:8080/test/betBankCount', JSON.stringify(game)).toPromise().then(x => {
      countOfBank = x;
    })

    console.log(countOfBank);
    return countOfBank;
  }

}
