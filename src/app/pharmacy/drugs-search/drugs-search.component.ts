import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drugs-search',
  templateUrl: './drugs-search.component.html',
  styleUrls: ['./drugs-search.component.scss']
})
export class DrugsSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedCityChanged(obj){
    console.log(obj)
  }
  onSearchChange(value:string){
   console.log(value)
  }
}
