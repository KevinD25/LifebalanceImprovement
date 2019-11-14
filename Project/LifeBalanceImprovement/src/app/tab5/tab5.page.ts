import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit, OnDestroy {

  public Profileitems: any;
  private authSub: Subscription;
  private previousAuthState = false;
    
  constructor(private authService: AuthService,
    private router: Router) {
      this.Profileitems = 
      {
        ImgUrl : "URL",Name : "Test", Age : 420,Gender : 'Test'
      }
    }

    ngOnInit(){
      this.authSub = this.authService.userIsAuthenticated.subscribe(isAuth => {
        if(!isAuth && this.previousAuthState !== isAuth){
          this.router.navigateByUrl('/auth');
        }
        this.previousAuthState = isAuth;  
      })
    }

    ngOnDestroy(){
      if(!this.authSub){
        this.authSub.unsubscribe();
      }
    }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  goToExterneHulp(){
    this.router.navigateByUrl('/externe-hulp');
  }

}
