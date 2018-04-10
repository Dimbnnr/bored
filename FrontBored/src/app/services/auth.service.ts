import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';

@Injectable()
export class AuthenticationService {
 user:any;
 BASE_URL = environment.base_URL + '/api/auth';

  constructor(private http: Http, private authService: AuthService) { }

  signInWithFB() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then( user => {
        return this.http.post(`${this.BASE_URL}/login`, user, {withCredentials:true})
          .map(res => res.json())
          .catch(err => {
            alert(JSON.parse(err._body).message);
            return Observable.throw(err);
          });
      });
  }

  sendloggedin() {
    return this.http.get(`${this.BASE_URL}/loggedin`, {withCredentials: true})
      .map(res => res.json())
      .catch(err => {
        alert(JSON.parse(err._body).message);
        return Observable.throw(err);
      });
  }


  sendlogout() {
    return this.http.post(`${this.BASE_URL}/logout`, {})
      .map(res =>  res.json())
      .catch(e => {
        alert(JSON.parse(e._body).message);
        return Observable.throw(e);
      });
  }




}
