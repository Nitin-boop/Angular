import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  value:boolean;
  constructor() {
    this.value=false;
   }

  ngOnInit(): void {
  }

  clicked(){
    this.value = true;
  }
}
