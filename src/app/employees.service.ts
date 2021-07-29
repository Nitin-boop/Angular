import { Injectable } from '@angular/core';
import { Iemployee } from './Models/Iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  listemployees:Iemployee[] = [
    {id:1,
    salary:10000,
    name:"Nitin",
    permanent:true,
    department:{id:1,name:"ME"},
    skills:[{id:1,name:"Draw"},{id:2,name:"Code"}]},
    {id:2,
    salary:50000,
    name:"Karthika",
    permanent:true,
    department:{id:2,name:"CSE"},
    skills:[{id:1,name:"Sing"},{id:2,name:"Public Speaking"}]},
    {id:3,
    salary:100000,
    name:"Mani",
    permanent:false,
    department:{id:3,name:"ECE"},
    skills:[{id:1,name:"Cricket"},{id:2,name:"Game"}]}
    ];
  constructor() { }
  getEmployeelist():any
        {
            return this.listemployees;
        }
    getEmployeeById(id:number):any
        {
            return this.listemployees.find(e=>e.id===id);
        }
}
