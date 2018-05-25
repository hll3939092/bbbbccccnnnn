import { Component, OnInit } from '@angular/core';
import {Game} from "../../model/game";
import {BetServiceService} from "../../service/bet-service.service";

@Component({
  selector: 'app-bacano',
  templateUrl: './bacano.component.html',
  styleUrls: ['./bacano.component.css']
})
export class BacanoComponent implements OnInit {

  time: Date;
  timer: number;
  stop: any;
  count: string;
  constructor(private betService: BetServiceService) {
  }

  ngOnInit() {
    const game = new Game('0000000001', '2018-05-25 14:25:31');
    this.timer = setInterval(x => {
      this.getDate();
    }, 1);

    this.stop = setTimeout( x => {
      console.log('开盘');
      window.clearInterval(this.timer);
    },30*1000);
    this.betService.getBetBankCount(game).subscribe(x => {
      this.count = x;
    });

  }



  getDate() {
    this.time = new Date();
  }


}
