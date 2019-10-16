import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor(private authService: AuthService,
    private router: Router) {}

  onLogout() {
this.authService.logout();
this.router.navigateByUrl('/auth');
  }

}
