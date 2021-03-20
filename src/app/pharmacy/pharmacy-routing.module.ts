import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrugsComponent } from './drugs/drugs.component';
import { DrugsRequestsComponent } from './drugs-requests/drugs-requests.component';
import { MyStoresComponent } from './my-stores/my-stores.component';
import { DrugsSearchComponent } from './drugs-search/drugs-search.component';

const routes:Routes=[
 {path:'',children:[
   {path:'mydrugs',component:DrugsComponent},
   {path:'serachdrugs',component:DrugsSearchComponent},
   {path:'mystores',component:MyStoresComponent},
   {path:'request-drugs-from-stores',component:DrugsRequestsComponent},
 ]}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PharmacyRoutingModule { }
