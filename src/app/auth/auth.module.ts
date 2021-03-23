import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinComponent } from './join/join.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JoinAsPhrmacyComponent } from './join/join-as-phrmacy/join-as-phrmacy.component';
import { JoinAsStoreComponent } from './join/join-as-store/join-as-store.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SigninComponent,
    JoinComponent,
    JoinAsPhrmacyComponent,
    JoinAsStoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
