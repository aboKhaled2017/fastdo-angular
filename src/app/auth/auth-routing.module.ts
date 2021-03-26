import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { JoinComponent } from './join/join.component';
import { JoinAsPhrmacyComponent } from './join/join-as-phrmacy/join-as-phrmacy.component';
import { JoinAsStoreComponent } from './join/join-as-store/join-as-store.component';

const authRoutes: Routes = [
  {path:'',children:[
    { path: 'join', component: JoinComponent,children:[
      {path:'as-pharmacy',component:JoinAsPhrmacyComponent,data:{type:'pharmacy'}},
      {path:'as-store',component:JoinAsStoreComponent,data:{type:'store'}}
    ]},
    { path: 'signin', component: SigninComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
