import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrugsRequestsComponent } from './drugs-requests/drugs-requests.component';
import { MyStoresComponent } from './my-stores/my-stores.component';

const routes:Routes=[
 {path:'',children:[
   {path:'mydrugs',loadChildren:()=>import('./drugs/drugs.module').then(m=>m.DrugsModule)},
   {
     path:'serachdrugs',
     loadChildren:()=>import('./drugs-search/drug-search.module').then(e=>e.DrugSearchModule),
     data:{preload:true}
   },
   {path:'mystores',component:MyStoresComponent},
   {path:'request-drugs-from-stores',component:DrugsRequestsComponent},
 ]}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PharmacyRoutingModule { }
