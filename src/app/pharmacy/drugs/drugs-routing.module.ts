import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOnDeactivate } from 'src/app/shared/helpers/component.canDeActivate';
import { DrugsCreateComponent } from './drugs-create/drugs-create.component';
import { DrugsListWeRequestedComponent } from './drugs-list-we-requested/drugs-list-we-requested.component';
import { DrugsReqsListWeRecievedComponent } from './drugs-reqs-list-we-recieved/drugs-reqs-list-we-recieved.component';
import { DrugsShowListComponent } from './drugs-show-list/drugs-show-list.component';
import { DrugsComponent } from './drugs.component';

const routes:Routes=[
  {path:'',component:DrugsComponent, children:[
    {path:'edit',component:DrugsCreateComponent,canDeactivate:[ComponentOnDeactivate]},
    {path:'edit/:id',component:DrugsCreateComponent,canDeactivate:[ComponentOnDeactivate]},
    {path:'list',component:DrugsShowListComponent},
    {path:'we-requested',component:DrugsListWeRequestedComponent},
    {path:'we-recieved',component:DrugsReqsListWeRecievedComponent},
    {path:'',redirectTo:'list',pathMatch:'full'},
  ]}
 ]
 
 @NgModule({
   exports: [RouterModule],
   imports: [RouterModule.forChild(routes)]
 })
export class DrugsRoutingModule { }
