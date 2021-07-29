import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Iemployee } from '../Models/Iemployee';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  search:string;
  listemp:Iemployee[];
  constructor(emp:EmployeesService) {
    this.search="";
    this.listemp =emp.getEmployeelist();
   }

  ngOnInit(): void {
  }

}
