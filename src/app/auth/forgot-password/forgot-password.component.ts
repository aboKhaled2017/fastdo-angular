import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers:[ResetPasswordService]
})
export class ForgotPasswordComponent implements OnInit {
  isLoading=false;
  emailControl:FormControl;
  emailErrorMessage:string[];
  emailValidated=false;
  constructor(private resetPassService:ResetPasswordService) { 
    this.emailControl=new FormControl('',[Validators.required,Validators.email]);
  }

  ngOnInit(): void {
  }
  submitEmail(){
    if(this.emailControl.invalid)return;
    this.isLoading=true;
    this.resetPassService.checkIfEmailExists({email:this.emailControl.value})
    .subscribe(()=>{
      this.emailValidated=true;
      this.isLoading=false;
    },error=>{
      this.emailValidated=false;
      this.isLoading=false;
     if(error?.email){
      this.emailErrorMessage=error.email;
      this.emailControl.markAsTouched();
      this.emailControl.setErrors({g:true});
     }
    })
  }
}
