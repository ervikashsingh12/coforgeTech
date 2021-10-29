import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import {NavigationService} from '../services/navigation.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: NavigationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getLoggedUser();
    if (token != null) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
    }

    return next.handle(req);

  }
}
