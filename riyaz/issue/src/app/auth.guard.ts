import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthService,private router:Router) {}
  canActivate(): boolean {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
