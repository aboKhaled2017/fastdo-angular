import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent  {
  
  @Input('isHandset') isHandset$: Observable<boolean>;
  @Input('drawer') drawer;
  @Output('OnAppTitleClicked') OnAppTitleClicked=new EventEmitter();
  constructor() {}
  OnAppTitleClick(){
    this.OnAppTitleClicked.emit();
  }
}
