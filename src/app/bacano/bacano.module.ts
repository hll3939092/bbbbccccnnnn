import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BacanoRoutingModule } from './bacano-routing.module';
import { BacanoComponent } from './bacano/bacano.component';
import {BetServiceService} from "../service/bet-service.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BacanoRoutingModule
  ],
  providers: [
    BetServiceService
  ],
  declarations: [BacanoComponent]
})
export class BacanoModule { }
