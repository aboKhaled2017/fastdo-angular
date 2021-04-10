import { Component, OnInit } from '@angular/core';
import { ISearchMenuInputSelectData } from 'src/app/shared/components/form-controls/serach-input-select/models/ISearchMenu.model';
import { IAreaModel } from '../../shared/models/IAreaModel';

@Component({
  selector: 'app-drugs-search',
  templateUrl: './drugs-search.component.html',
  styleUrls: ['./drugs-search.component.scss']
})
export class DrugsSearchComponent implements OnInit {

  areas:IAreaModel[];
  cities=[]
  constructor() { 
    this.areas=[];
  }

  ngOnInit(): void {
  }
  selectedCityChanged(obj){
    console.log(obj)
  }
  onSearchChange(value:string){
   console.log(value)
  }
}
