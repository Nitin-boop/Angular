import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { SecondComponent } from './second/second.component';
import { SecondincrementComponent } from './secondincrement/secondincrement.component';
import { ThirdComponent } from './third/third.component';
import { FilterPipe } from './filter.pipe';
import { ThirdeditComponent } from './thirdedit/thirdedit.component';
import { LoginComponent } from './login/login.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { RestapiComponent } from './restapi/restapi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    EmployeedetailsComponent,
    SecondComponent,
    SecondincrementComponent,
    ThirdComponent,
    FilterPipe,
    ThirdeditComponent,
    LoginComponent,
    ApiComponent,
    RestapiComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
