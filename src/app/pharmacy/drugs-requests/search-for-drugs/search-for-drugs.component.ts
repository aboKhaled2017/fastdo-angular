import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDrugsRequestsComponent } from '../base.component';
import { DrugsRequestsService } from '../drugs-requests.service';
import { ISearchedStkDrugResponseModel } from '../models/searchedStkDrugResponse.model';

@Component({
  selector: 'app-search-for-drugs',
  templateUrl: './search-for-drugs.component.html',
  styleUrls: ['./search-for-drugs.component.scss']
})
export class SearchForDrugsComponent extends BaseDrugsRequestsComponent<ISearchedStkDrugResponseModel>{
  loading=true;
  constructor(public storeService:DrugsRequestsService<ISearchedStkDrugResponseModel>,
              public router:Router) {
    super(storeService,router,'search');
  }

  ngOnInit(): void {
  }

}
