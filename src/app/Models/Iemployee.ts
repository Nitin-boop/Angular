import { Idepartment } from "./Idepartment";
import { Iskills } from "./Iskills";

export interface Iemployee{
    id:number,
    name:string,
    salary:number,
    permanent:boolean,
    department:Idepartment,
    skills:Iskills[]
}