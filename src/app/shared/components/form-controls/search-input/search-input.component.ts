import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output('textChanged') textChanged=new Subject<string>();
  @Input('label') label:string;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value:string){
  this.textChanged.next(value);
  }
}
