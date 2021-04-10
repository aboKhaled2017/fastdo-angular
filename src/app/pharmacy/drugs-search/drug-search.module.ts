import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsSearchComponent } from './drugs-search.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [DrugsSearchComponent],
  exports: [RouterModule],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
    {path:'',component:DrugsSearchComponent}
  ])]
})
export class DrugSearchModule { }
