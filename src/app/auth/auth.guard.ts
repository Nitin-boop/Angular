import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private route:Router, private auth:AuthService){

  }
  canActivate():any{
    if(this.auth.isLoggedIn()){
      return true;
    }
    else{
      this.route.navigateByUrl('login');
    }
  }
}
