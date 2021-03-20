import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DrugsComponent } from './drugs/drugs.component';
import { DrugsSearchComponent } from './drugs-search/drugs-search.component';
import { MyStoresComponent } from './my-stores/my-stores.component';
import { DrugsRequestsComponent } from './drugs-requests/drugs-requests.component';



@NgModule({
  declarations: [DrugsComponent, DrugsSearchComponent, 
    MyStoresComponent, DrugsRequestsComponent],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    ReactiveFormsModule
  ]
})
export class PharmacyModule { }
