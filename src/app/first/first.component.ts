import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Iemployee } from '../Models/Iemployee';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  listemp:Iemployee[];
  constructor(emp:EmployeesService){
    this.listemp = emp.getEmployeelist();
  }

  ngOnInit(): void {
    
  }

}
