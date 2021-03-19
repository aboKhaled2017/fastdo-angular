import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtilityService } from './services/commonUtility.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[CommonUtilityService]
})
export class SharedModule { }
