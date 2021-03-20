import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreManageComponent } from './store-manage/store-manage.component';
import { StoreRequestsDrugsComponent } from './store-requests-drugs/store-requests-drugs.component';

const routes:Routes=[
  {path:'',children:[
    {path:'manage-store',component:StoreManageComponent},
    {path:'store-requested-drugs',component:StoreRequestsDrugsComponent}
  ]}
 ]
 
 @NgModule({
   exports: [RouterModule],
   imports: [RouterModule.forChild(routes)]
 })
export class StoreRoutingModule { }
