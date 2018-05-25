import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BacanoComponent} from "./bacano/bacano.component";

const routes: Routes = [
  {path: '', component: BacanoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BacanoRoutingModule { }
