import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Idepartment } from '../Models/Idepartment';
import { Iemployee } from '../Models/Iemployee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thirdedit',
  templateUrl: './thirdedit.component.html',
  styleUrls: ['./thirdedit.component.css']
})
export class ThirdeditComponent implements OnInit {
  list:Iemployee;
  departments:Idepartment[];
  constructor(emp:EmployeesService,private route:ActivatedRoute) { 
    const id = +this.route.snapshot.params['id'];
    this.list=emp.getEmployeeById(id); 
    
    this.departments = [
      { id: 1, name: "ME" },      
      { id: 2, name: "CSE" },     
      { id: 3, name: "ECE" }     
      ];
  }

  ngOnInit(): void {
    
  }

  new():void{
    if(this.list.department.id==1){
      this.list.department.name="ME";
    }
    if(this.list.department.id==2){
      this.list.department.name="CSE";
    }
    if(this.list.department.id==3){
      this.list.department.name="ECE";
    }
  }
}
