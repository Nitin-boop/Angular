import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from './Users';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit {
  user:Users[];
  createShow:boolean;
  showUsers:boolean;
  constructor(private userservice:UserService) {
    this.userservice.getUsers().subscribe(users => {this.user=users.data;});
    this.showUsers=true;
   }

  ngOnInit(): void {
  }

  create(){
    this.createShow=true;
    
  }

  sum(){
    this.showUsers = false;
  }
}
