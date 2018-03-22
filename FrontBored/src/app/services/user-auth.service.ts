import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';


@Injectable()
export class UserAuthService {

 BASE_URL = environment.base_URL + '/api/auth';

  constructor(private http: Http) { }


// OTRA FORMA DE MOSTRAR EL ERROR SI NO HAY ALERT
  // handleError(e) {
  //   return Observable.throw(e.json().message);
  // }

  sendsignup(user) {
    return this.http.post(`${this.BASE_URL}/signup`, user, {withCredentials: true})
    .map(res => res.json())
    .catch(err => {
      alert(JSON.parse(err._body).message);
      return Observable.throw(err);
    });
  }

  sendlogin(user) {
    return this.http.post(`${this.BASE_URL}/login`, user, {withCredentials: true})
    .map(res => res.json())
  //  CREAR USER.USERNAME Y USER.PASSWORD EN EL FORM DEL LOGIN !! Y DESCOMENTAR LO DE ABAJO UNA VEZ HECHO
    // .map(user => {
    //   localStorage.setItem('user', JSON.stringify(user));
    //   return user;
    // })
    .catch(err => {
      alert(JSON.parse(err._body).message);
      return Observable.throw(err);
    });
    // OTRO TIPO DE CATCH A CHECAR DIF
  //   .catch(err => {
  //     console.log(err);
  //     return Observable.throw(err);
  // });
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

  getAllUsers() {
    return this.http.get(`${this.BASE_URL}/all`, {})
    .map(res =>  res.json())
    .catch(e => {
      alert(JSON.parse(e._body).message);
      return Observable.throw(e);
    });
  }


  getUserById(id) {
    return this.http.get(`${this.BASE_URL}/${id}`, {})
    .map(res =>  res.json())
    .catch(e => {
      alert(JSON.parse(e._body).message);
      return Observable.throw(e);
    });
  }


   removeItem(item) {
    return this.http.delete(`${this.BASE_URL}/` + item._id, item)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  patchItem(item): Observable<any> {
    return this.http.patch(`${this.BASE_URL}/` + item._id, item)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }



}
