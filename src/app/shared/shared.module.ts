import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtilityService } from './services/commonUtility.service';
import { FormLiveStatusComponent } from './components/form-live-status/form-live-status.component';
import { VerticalTimelineComponent } from './components/vertical-timeline/vertical-timeline.component';
import { TrackArabicTextDirective } from './directives/track-arabic-text.directive';
import { InputValidatorDirective } from './directives/input-validator.directive';



@NgModule({
  declarations: [FormLiveStatusComponent, VerticalTimelineComponent, TrackArabicTextDirective, InputValidatorDirective],
  imports: [
    CommonModule
  ],
  providers:[CommonUtilityService],
  exports:[
    FormLiveStatusComponent,
    VerticalTimelineComponent,
    TrackArabicTextDirective
  ]
})
export class SharedModule { }
