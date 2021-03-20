import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../auth/signin/signin.component';
import { JoinComponent } from '../auth/join/join.component';

const authRoutes:Routes=[
 {path:'aboutus', loadChildren:()=>import('../about-us/about-us.module').then(m=>m.AboutUsModule)},
 {path:'contactus',  loadChildren:()=>import('../contact-us/contact-us.module').then(m=>m.ContactUsModule)}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class CoreRoutingModule { }
