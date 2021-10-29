import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import {NavigationService} from '../services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(private _router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem('token')) {
        return true;
    }  
    this._router.navigate(['/login']);
    return false;
}
}
