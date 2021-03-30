import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';

const routes:Routes=[
  {path:'account',component:AccountComponent},
  {path:'profile',component:ProfileComponent}
]


@NgModule({
 imports:[RouterModule.forChild(routes)],
 exports:[RouterModule]
})
export class AccountRoutingModule { }


