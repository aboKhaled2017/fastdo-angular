import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatePageService } from 'src/app/shared/services/activatedPage.service';
import { MyStoresComponent } from '../my-stores.component';
import { MyStoresService } from '../my-stores.service';
import { IPharmacyRequestedStkResponseModel } from '../models/IPharmacy.stk.search.model';
import { BaseStoresComponent } from '../base.component';
import { E_PharmacyStoreComponentType } from '../models/enums';

@Component({
  selector: 'app-requested-stores',
  templateUrl: './requested-stores.component.html',
  styleUrls: ['./requested-stores.component.scss']
})
export class RequestedStoresComponent extends BaseStoresComponent<IPharmacyRequestedStkResponseModel> {

  constructor(public storeService:MyStoresService<IPharmacyRequestedStkResponseModel>,
    public activepageService:ActivatePageService,
    public router:Router){
      super(storeService,E_PharmacyStoreComponentType.requested);
    }

  ngOnInit(): void {
  }

}