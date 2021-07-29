import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedIn:boolean;
  constructor() { }
  login():void{
    this.loggedIn=true;
  }
  logout():void{
    this.loggedIn=false;
  }
  isLoggedIn():boolean{
    return this.loggedIn;
  }
}
