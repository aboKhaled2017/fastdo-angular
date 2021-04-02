import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { BaseAccountComponent } from '../base.component';
import { Role } from 'src/app/shared/models/Role';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoaderService } from 'src/app/shared/services/loader-service.service';
import { ToastService } from 'src/app/shared/services/toast.service.';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers:[AccountService]
})
export class AccountComponent extends BaseAccountComponent {

  constructor(public accountService:AccountService,
              public authService:AuthService,
              public loaderService:LoaderService,
              public toastService:ToastService) { 
super(authService,loaderService,toastService);
this.currentUser=this.authService.currentUserValue;
this.loaderService.isLoading.subscribe(v=>this.isLoading=v);
this.isPharmacy=this.currentUser.role==Role.pharmacy;
}
ngOnInit(): void {
}

}
