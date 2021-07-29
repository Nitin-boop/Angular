import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RestapiComponent } from './restapi/restapi.component';
import { SecondComponent } from './second/second.component';
import { SecondincrementComponent } from './secondincrement/secondincrement.component';
import { ThirdComponent } from './third/third.component';
import { ThirdeditComponent } from './thirdedit/thirdedit.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'third',component:ThirdComponent},
  {path:'counter',component:SecondincrementComponent},
  {path:'employee/:id',component:EmployeedetailsComponent},
  {path:'edit/:id',component:ThirdeditComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'api',component:RestapiComponent},
  {path:"**",redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
