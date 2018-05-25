import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User('', '' , '');
  public type = ['bacano' , 'taxas poker' , 'animal'];

  submitted = false;


  constructor() { }

  ngOnInit() {
  }

}
