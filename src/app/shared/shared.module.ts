import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtilityService } from './services/commonUtility.service';
import { FormLiveStatusComponent } from './components/form-live-status/form-live-status.component';
import { VerticalTimelineComponent } from './components/vertical-timeline/vertical-timeline.component';
import { TrackArabicTextDirective } from './directives/track-arabic-text.directive';
import { InputValidatorDirective } from './directives/input-validator.directive';
import { LoadingButtonComponent } from './components/buttons/loading-button/loading-button.component';
import { HTabeComponent } from './components/h-tabe/h-tabe.component';
import { RouterModule } from '@angular/router';
import { InputWithValidationComponent } from './components/input-with-validation/input-with-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomSelectInputComponent } from './components/custom-select-input/custom-select-input.component';
import { NgbDatepickerI18n, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n, I18n } from './services/datepicker.service';



@NgModule({
  declarations: [FormLiveStatusComponent, VerticalTimelineComponent, 
    TrackArabicTextDirective, InputValidatorDirective, LoadingButtonComponent, 
    HTabeComponent, InputWithValidationComponent, CustomSelectInputComponent],
  imports: [
    CommonModule,RouterModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  providers:[CommonUtilityService,I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}],
  exports:[
    FormLiveStatusComponent,
    VerticalTimelineComponent,
    TrackArabicTextDirective,
    LoadingButtonComponent,
    HTabeComponent,
    InputWithValidationComponent,
    CustomSelectInputComponent
  ]
})
export class SharedModule { }
