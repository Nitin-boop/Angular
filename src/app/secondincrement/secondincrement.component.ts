import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondincrement',
  templateUrl: './secondincrement.component.html',
  styleUrls: ['./secondincrement.component.css']
})
export class SecondincrementComponent implements OnInit {
  value:number;
  constructor() {
    this.value=0;
   }

  ngOnInit(): void {
  }

  increment():void{
    this.value += 1;
  }

  decrement():void{
    this.value -= 1;
  }

  check():boolean{
    if(this.value==0){
      return true;
    }
    return false;
  }

}
