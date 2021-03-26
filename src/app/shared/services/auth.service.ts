import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserFactory } from '../models/User';
import {map} from 'rxjs/operators'
import { ILogin, UserType } from '../models/ILogin';
import { Router } from '@angular/router';

@Injectable()  
export class AuthService {
  private currentUserName="currentUser";
  private tokenName="token";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,private router:Router) {
    const _user=JSON.parse(localStorage.getItem(this.currentUserName));
      const user=UserFactory.createUser(_user);
      this.currentUserSubject = new BehaviorSubject<User>(user);
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(loginData:ILogin) {
      return this.http.post<any>(`${environment.apiUrl}/auth/SignIn`, loginData)
          .pipe(map(data => {
              // login successful if there's a jwt token in the response
              if (data && data.accessToken) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem(this.currentUserName, JSON.stringify(data.user));
                  localStorage.setItem(this.tokenName, JSON.stringify(data.accessToken.token));
                  this.currentUserSubject.next(UserFactory.createUser(data.user));
              }

              return data;
          }));
  }
  signup(signupData:FormData,userType:UserType) {
    let str=userType==UserType.Pharmacier?'ph':'stk';
    return this.http.post<any>(`${environment.apiUrl}/${str}/signup`, signupData)
        .pipe(map(data => {
            // login successful if there's a jwt token in the response
            if (data && data.accessToken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(this.currentUserName, JSON.stringify(data.user));
                localStorage.setItem(this.tokenName, JSON.stringify(data.accessToken.token));
                this.currentUserSubject.next(UserFactory.createUser(data.user));
            }

            return data;
        }));
}
  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem(this.currentUserName);
      localStorage.removeItem(this.tokenName);
      this.currentUserSubject.next(null);
      this.router.navigate(['/']);
  }
  
  isAuthenticated():boolean{
   return !!this.currentUserValue && !!this.token;
  }

  public get token(){
    return localStorage.getItem(this.tokenName);
  }
}
