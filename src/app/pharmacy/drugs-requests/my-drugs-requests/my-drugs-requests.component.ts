import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDrugsRequestsComponent } from '../base.component';
import { DrugsRequestsService } from '../drugs-requests.service';

@Component({
  selector: 'app-my-drugs-requests',
  templateUrl: './my-drugs-requests.component.html',
  styleUrls: ['./my-drugs-requests.component.scss']
})
export class MyDrugsRequestsComponent  extends BaseDrugsRequestsComponent<{}>{

  constructor(public storeService:DrugsRequestsService<{}>,
    public router:Router) {
    super(storeService,router,"myDrugReqs");
  }

  ngOnInit(): void {
  }

}
