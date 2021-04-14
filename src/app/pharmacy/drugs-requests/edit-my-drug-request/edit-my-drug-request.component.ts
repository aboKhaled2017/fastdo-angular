import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constnts';
import { OnDeactivate } from 'src/app/shared/helpers/component.canDeActivate';
import { ActivatePageService } from 'src/app/shared/services/activatedPage.service';

@Component({
  selector: 'app-edit-my-drug-request',
  templateUrl: './edit-my-drug-request.component.html',
  styleUrls: ['./edit-my-drug-request.component.scss']
})
export class EditMyDrugRequestComponent implements OnDeactivate {


  constructor(private router:Router,activePgService:ActivatePageService) { 
    activePgService.setActivePage(Constants.activePags.pharmacy_DrugsRequests,router.url);
  }

  ngOnInit(): void {
  }
  ngOnDeactivate(currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    return confirm('do you ant to save changes')
  }
}
