import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { JoinService } from "./join.service";

@Component({
    template:''
})
export class BaseJoinComponent{
    @Input('g') fg:FormGroup;
    @Input('step') currentStep:number;
    errors:{}
    constructor(public joinService:JoinService){}
    setErrors(error){
        for(let prop in error){
          this.errors[prop]=error[prop];
          let ctrl=this.fg.get(prop);
          if(ctrl){
            ctrl.markAsTouched();
            ctrl.setErrors({
              g:true
            });
          }
        }
    }
    ngOnInit(): void {
        this.joinService.onSummaryErrorSubmitted.subscribe(error=>{
            if(error){
              let _error={};
              Object.keys(this.errors).reduce((prev,val)=>{
              if(error[val])prev[val]=error[val];
              return prev;
            },_error);
            this.setErrors(_error);
            }
        });
    }
    get f(){
      return this.fg.controls;
    }
}