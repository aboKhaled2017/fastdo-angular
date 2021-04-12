import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatePageService } from 'src/app/shared/services/activatedPage.service';
import { BaseStoresComponent } from '../base.component';
import { E_PharmacyStoreComponentType } from '../models/enums';
import { IPhamacyContractedStkResponseModel } from '../models/IPharmacy.stk.search.model';
import { MyStoresService } from '../my-stores.service';

@Component({
  selector: 'app-contracted-stores',
  templateUrl: './contracted-stores.component.html',
  styleUrls: ['./contracted-stores.component.scss']
})
export class ContractedStoresComponent extends BaseStoresComponent<IPhamacyContractedStkResponseModel>{

  constructor(public storeService:MyStoresService<IPhamacyContractedStkResponseModel>,
    public activepageService:ActivatePageService,
    public router:Router){
      super(storeService,E_PharmacyStoreComponentType.contracted);
    }

  ngOnInit(): void {
  }

}
