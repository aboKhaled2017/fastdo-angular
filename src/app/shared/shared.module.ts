import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtilityService } from './services/commonUtility.service';
import { FormLiveStatusComponent } from './components/form-live-status/form-live-status.component';



@NgModule({
  declarations: [FormLiveStatusComponent],
  imports: [
    CommonModule
  ],
  providers:[CommonUtilityService],
  exports:[
    FormLiveStatusComponent
  ]
})
export class SharedModule { }
