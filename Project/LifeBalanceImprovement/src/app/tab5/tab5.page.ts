import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  public Profileitems: any;
    
  constructor(private authService: AuthService,
    private router: Router) {
      this.Profileitems = 
      {
        ImgUrl : "URL",Name : "Kevin", Age : 420,Gender : 'Bum'
      }
    }

  onLogout() {
this.authService.logout();
this.router.navigateByUrl('/auth');
  }

}
