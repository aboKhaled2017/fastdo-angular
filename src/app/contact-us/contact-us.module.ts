import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsService } from './contact-us.service';
 
@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path:'',component:ContactUsComponent}])
  ],
  exports:[RouterModule],
  providers:[ContactUsService]
})
export class ContactUsModule { }
