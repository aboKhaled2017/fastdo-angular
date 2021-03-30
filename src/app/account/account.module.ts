import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ProfileComponent,AccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    NgbNavModule
  ]
})
export class AccountModule { }
