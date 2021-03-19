import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './shared/models/Role';
import { User } from './shared/models/User';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get userRole() {
      return  this.currentUser?.getRole || null;
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/signin']);
  }
}
