import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.authService.userIsAuthenticated){
        console.log("AUTHENTICATION FAILED");
        this.router.navigateByUrl('/auth');
      }
      console.log("AUTHENTICATION SUCCES");
      console.log(JSON.stringify( this.authService.userIsAuthenticated));
      return this.authService.userIsAuthenticated;
  }
}
