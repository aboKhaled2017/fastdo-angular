import { Component, OnInit } from '@angular/core';
import { HTabeModel } from '../../shared/components/h-tabe/hTabe.model';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.scss']
})
export class DrugsComponent implements OnInit {
  tabs:HTabeModel[];
  constructor() {
    this.tabs=[
      {iconClass:'fa-plus-circle',link:'/pharmacy/mydrugs/create',text:'اضافة راكد'},
      {iconClass:'fa-th-list',link:'/pharmacy/mydrugs/list',text:'عرض الرواكد'},
      {iconClass:'fa-th-list',link:'/pharmacy/mydrugs/we-requested',text:'رواكد قمنا بطلبها'},
      {iconClass:'fa-th-list',link:'/pharmacy/mydrugs/we-recieved',text:'طلبات ارسلت الينا'},
    ]
  }

  ngOnInit(): void {
  }

}
