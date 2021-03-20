import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
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
  loadingLazyLoadedRoute=false;
  constructor(
      private router: Router,
      private authenticationService: AuthService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      //on routing lazy loaded components
      this.router.events.subscribe(event => {
        if (event instanceof RouteConfigLoadStart) {
            this.loadingLazyLoadedRoute = true;
        } else if (event instanceof RouteConfigLoadEnd) {
            this.loadingLazyLoadedRoute = false;
        }
    });
  }

  get userRole() {
      return  this.currentUser?.getRole || null;
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/signin']);
  }
}
