import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { Iemployee } from '../Models/Iemployee';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employee:Iemployee;
  constructor(private emp:EmployeesService ,private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.employee = this.emp.getEmployeeById(id);
  }

}
