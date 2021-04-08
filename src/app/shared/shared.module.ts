import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { NgbDatepickerI18n, NgbDatepickerModule, NgbModalModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n, I18n } from './services/datepicker.service';
import { PagingSectionComponent } from './components/paging-section/paging-section.component';
import { LoadingStatusComponent } from './components/loading-status/loading-status.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { MainTableRowSectionComponent } from './components/main-table/main-table-row-section/main-table-row-section.component';
import { VTabsComponent } from './components/v-tabs/v-tabs.component';
import { VTabComponent } from './components/v-tabs/v-tab.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ModalPopupservice } from './services/modal.popup.service';



@NgModule({
  declarations: [FormLiveStatusComponent, VerticalTimelineComponent, 
    TrackArabicTextDirective, InputValidatorDirective, LoadingButtonComponent, 
    HTabeComponent, InputWithValidationComponent, CustomSelectInputComponent, 
    PagingSectionComponent, LoadingStatusComponent, MainTableComponent, 
    MainTableRowSectionComponent, VTabsComponent,VTabComponent, ConfirmModalComponent],
  imports: [
    CommonModule,RouterModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbPaginationModule,
    NgbNavModule,
    NgbModalModule
  ],
  providers:[CommonUtilityService,I18n, 
    {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n},
    ModalPopupservice],
  exports:[
    FormLiveStatusComponent,
    VerticalTimelineComponent,
    TrackArabicTextDirective,
    LoadingButtonComponent,
    HTabeComponent,
    LoadingStatusComponent,
    InputWithValidationComponent,
    CustomSelectInputComponent,
    PagingSectionComponent,
    MainTableComponent,
    VTabsComponent,
    VTabComponent,
    NgbModalModule
  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
