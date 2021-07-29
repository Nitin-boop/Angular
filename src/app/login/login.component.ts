import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  message:string;
  constructor(private router: Router, private auth:AuthService) {
    this.username="";
    this.password="";
   }

  ngOnInit(): void {
  }

  login():void{
    if(this.username=="admin" && this.password=="admin"){
      this.auth.login();
      this.router.navigateByUrl('third');
    }
    else{
      this.message="Invalid credentials";
    }
  }
}
