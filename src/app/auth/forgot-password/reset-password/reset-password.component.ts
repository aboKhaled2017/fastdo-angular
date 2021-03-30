import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../reset-password.service';
import { ToastService } from '../../../shared/services/toast.service.';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  @Input('email') email:string;
  errors={
    newPassword:[],
    code:[],
    email:[],
    g:undefined
  }
  form:FormGroup;
  loading=false;
  constructor(private resetPassService: ResetPasswordService,
              private fb:FormBuilder,
              private router:Router,
              private toastService: ToastService) { 
  }
  setErrors(error){
    for(let prop in error){
      this.errors[prop]=error[prop];
      let ctrl=this.form.get(prop);
      if(ctrl){
        ctrl.markAsTouched();
        ctrl.setErrors({
          g:true
        });
      }
    }
}
  ngOnInit(): void {
    this.form=this.fb.group({
      newPassword:this.fb.control('',Validators.required),
      code:this.fb.control('',Validators.required)
    });
  }
  get f(){
    return this.form.controls;
  }
  onSubmit(){
    if(this.form.invalid)return;
    this.loading=true;
    this.resetPassService.resetPassword({
     ...this.form.value,
     email:this.email
    }).subscribe(()=>{
      this.loading=false;
      this.form.reset();
      this.toastService.showSuccess("تم تغيير كلمة المرور بنجاح");
      setTimeout(() => {
         this.router.navigate(['/auth/signin']);
      }, 3000);
    },error=>{
      this.loading=false;
      this.setErrors(error);
    });
  }
}
