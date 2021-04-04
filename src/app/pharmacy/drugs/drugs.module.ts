import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DrugsCreateComponent } from './drugs-create/drugs-create.component';
import { DrugsListWeRequestedComponent } from './drugs-list-we-requested/drugs-list-we-requested.component';
import { DrugsReqsListWeRecievedComponent } from './drugs-reqs-list-we-recieved/drugs-reqs-list-we-recieved.component';
import { DrugsShowListComponent } from './drugs-show-list/drugs-show-list.component';
import { DrugsComponent } from './drugs.component';
import { DrugsRoutingModule } from './drugs-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DrugsComponent, DrugsCreateComponent, 
    DrugsShowListComponent, DrugsListWeRequestedComponent, DrugsReqsListWeRecievedComponent],
  imports: [
    CommonModule,
    DrugsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DrugsModule { }
