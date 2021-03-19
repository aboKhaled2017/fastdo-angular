import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import {map} from 'rxjs/operators'
import { ILogin } from '../models/ILogin';

@Injectable()  
export class AuthService {
  private currentUserName="currentUser";
  private tokenName="token";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(this.currentUserName)));
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
                  this.currentUserSubject.next(data.user);
              }

              return data;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem(this.currentUserName);
      localStorage.removeItem(this.tokenName);
      this.currentUserSubject.next(null);
  }
  
  isAuthenticated():boolean{
   return !!this.currentUserValue && !!this.token;
  }

  public get token(){
    return localStorage.getItem(this.tokenName);
  }
}
