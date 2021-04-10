import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {  fromEvent } from 'rxjs';
import { ISearchMenuInputSelectData } from './models/ISearchMenu.model';

@Component({
  host: {
    '(document:click)': 'onDomClick($event)',
  },
  selector: 'app-serach-input-select',
  templateUrl: './serach-input-select.component.html',
  styleUrls: ['./serach-input-select.component.scss']
})
export class SerachInputSelectComponent implements OnInit {

  @ViewChild('indicator') indicator:ElementRef<HTMLElement>;
  @ViewChild('input') input:ElementRef<HTMLElement>;
  @ViewChild('select_menu') menue:ElementRef<HTMLElement>;
  selectedItems:ISearchMenuInputSelectData[];
  menuOpened=false;
  @Input('data') data:ISearchMenuInputSelectData[]
  @Output('selectChange') selectChange=new EventEmitter<ISearchMenuInputSelectData[]>();
  constructor(private _eref: ElementRef) { 
  }
  
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement,'keyup')
    .subscribe((e:any)=>{
      this.menuOpened=true;
     let val=e.target.value || '';
     this.data=this.data
           .map(e=>({...e,notMatched:!(<string>e.value).includes(val)}));
    });
  }
  onDomClick(event:Event){
    let target=event.target as HTMLElement;
    if(target.classList.contains('remover'))return;
    if(this.menue.nativeElement.contains(target as Node))return;

    if(target==this.indicator.nativeElement || target==this.input.nativeElement){
      this.menuOpened=!this.menuOpened;
    }
    else{
      this.menuOpened=false;
    }
    //if (this._eref.nativeElement.contains(event.target)) // or some similar check
  }
  filterSelected(data:ISearchMenuInputSelectData[]){
    return data.filter(e=>e.selected)
  }
  removeItem(item:ISearchMenuInputSelectData){
    if((item as any)=='all'){
      this.data=this.data.map(el=>({...el,selected:false}));
    }
    else{
      let ind=this.data.findIndex(e=>e.key==item.key);
      if(ind>-1){
        this.data[ind].selected=false;
      }
    }
    this.handleSelectChange();
  }
  toggleItem(index:number){
    this.data[index].selected= !this.data[index].selected;
    this.handleSelectChange();
  }
  handleSelectChange(){
    this.selectChange.emit(
      this.data.filter(e=>e.selected)
      );
  }
}
