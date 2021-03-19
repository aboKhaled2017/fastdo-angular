import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { JoinComponent } from './join/join.component';

const authRoutes: Routes = [
  { path: 'join', component: JoinComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
