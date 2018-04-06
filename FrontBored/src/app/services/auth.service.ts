import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

 BASE_URL = environment.base_URL + '/api/auth';

  constructor(private http: Http) { }

  signup() {
    return this.http.get(`${this.BASE_URL}/auth/facebook`, {withCredentials: true})
    .map(res => res.json())
    .catch(err => {
      alert(JSON.parse(err._body).message);
      return Observable.throw(err);
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
