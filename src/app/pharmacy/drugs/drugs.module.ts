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
import { DrugsService } from './drugs.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DrugItemDetailsComponent } from './drugs-show-list/drug-item-details/drug-item-details.component';
import { DrugTableDetailsComponent } from './drugs-show-list/drug-item-details/drug-table-details/drug-table-details.component';
import { DrugToPackageComponent } from './drugs-show-list/drug-item-details/drug-to-package/drug-to-package.component';
import { DrugPackageStatusComponent } from './drugs-show-list/drug-item-details/drug-package-status/drug-package-status.component';
import { DrugGuard } from 'src/app/shared/helpers/Guards/drugs.guard';



@NgModule({
  declarations: [DrugsComponent, DrugsCreateComponent, 
    DrugsShowListComponent, DrugsListWeRequestedComponent, DrugsReqsListWeRecievedComponent, DrugItemDetailsComponent, DrugTableDetailsComponent, DrugToPackageComponent, DrugPackageStatusComponent],
  imports: [
    CommonModule,
    DrugsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[DrugsService,DrugGuard]
})
export class DrugsModule { }
