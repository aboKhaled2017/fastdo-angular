import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DrugsSearchComponent } from './drugs-search/drugs-search.component';
import { MyStoresComponent } from './my-stores/my-stores.component';
import { DrugsRequestsComponent } from './drugs-requests/drugs-requests.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DrugsSearchComponent, 
    MyStoresComponent, DrugsRequestsComponent],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PharmacyModule { }
