import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatePageService } from 'src/app/shared/services/activatedPage.service';
import { LoaderService } from 'src/app/shared/services/loader-service.service';
import { PaginatorService } from 'src/app/shared/services/paginator.service';
import { ToastService } from 'src/app/shared/services/toast.service.';
import { DrugsBaseComponent } from '../base.component';
import { DrugsService } from '../drugs.service';

@Component({
  selector: 'app-drugs-reqs-list-we-recieved',
  templateUrl: './drugs-reqs-list-we-recieved.component.html',
  styleUrls: ['./drugs-reqs-list-we-recieved.component.scss']
})
export class DrugsReqsListWeRecievedComponent  extends DrugsBaseComponent  {

  constructor(private paginatorService:PaginatorService,
    private drugsService:DrugsService,
    public loaderService:LoaderService,
    public activepageService: ActivatePageService,
    private route:ActivatedRoute,
    public router:Router,
    private toastService:ToastService) { 
      super(activepageService,router);
 
  }

  ngOnInit(): void {
  }

}
