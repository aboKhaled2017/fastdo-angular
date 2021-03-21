import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { ILogin } from '../../shared/models/ILogin';
import { buffer, bufferToggle, bufferWhen, catchError, delay, filter, first, map, mapTo, max, mergeMap, observeOn, publish, reduce, retry, take, tap } from 'rxjs/operators';
import { LoaderService } from '../../shared/services/loader-service.service';
import { animationFrameScheduler, concat, fromEvent, interval, Observable, observable, of, pipe, SchedulerLike, throwError } from 'rxjs';
import { NgbButtonLabel } from '@ng-bootstrap/ng-bootstrap';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    errors = {
      email:[],
      password:[],
      g:[]
    };
 
  constructor(private authService: AuthService,
              private router:Router,
              private route:ActivatedRoute,
              private loaderService:LoaderService,
              private formBuilder:FormBuilder) { 
    if(authService.isAuthenticated()){
      router.navigate(['/']);
    }
    loaderService.isLoading.subscribe(val=>this.loading=val);
  }

  ngOnInit(): void {
    
    let onDocumentClicked=fromEvent(document,'click');
    of(1,2,3,4,5)
    .pipe(mergeMap(val=>val==3?throwError(val):of(val)),retry(2))
    .pipe(catchError(err=>err==3?of(err):throwError(err)))
    .subscribe(val=>{
      console.log("got value="+val)
    },error=>{
      console.error('got error='+error)
    })

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required,Validators.email],
      password: ['', Validators.required],
      userType:[null]
  });
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  
    // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  setErrors(error){
    for(let prop in error){
      this.errors[prop]=error[prop];
      let ctrl=this.loginForm.get(prop);
      ctrl.markAsTouched();
      ctrl.setErrors({
        g:true
      });
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    this.authService.login(this.loginForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.setErrors(error);
            });
}
}
