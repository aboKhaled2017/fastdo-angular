import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DrugsSearchComponent } from './drugs-search/drugs-search.component';
import { MyStoresComponent } from './my-stores/my-stores.component';
import { DrugsRequestsComponent } from './drugs-requests/drugs-requests.component';
import { SharedModule } from '../shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [DrugsSearchComponent, 
    MyStoresComponent, DrugsRequestsComponent],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    ReactiveFormsModule,
    SharedModule,  
    NgbPaginationModule,
  ]
})
export class PharmacyModule { }
