import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {

 BASE_URL = environment.base_URL + '/api/auth';

  constructor(private http: Http) { }

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


   removeUser(item) {
    return this.http.delete(`${this.BASE_URL}/` + item._id, item)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  patchUser(item): Observable<any> {
    return this.http.patch(`${this.BASE_URL}/` + item._id, item)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }



}
