import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StoreManageComponent } from './store-manage/store-manage.component';
import { StoreRequestsDrugsComponent } from './store-requests-drugs/store-requests-drugs.component';



@NgModule({
  declarations: [ StoreManageComponent, StoreRequestsDrugsComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class StoreModule { }
