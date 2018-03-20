import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserPropositionService {

BASE_URL = 'http://localhost:3000/api/proposition';

  constructor(private http: Http) { }


sendNewProposition(proposition) {
return this.http.post(`${this.BASE_URL}/new`, proposition)
.map(res => res.json())
.catch(err => {
  alert(JSON.parse(err._body).message);
  return Observable.throw(err);
});
}

getAllPropositions() {
  return this.http.get(`${this.BASE_URL}/all`)
  .map(res => res.json())
  .catch(err => {
    alert(JSON.parse(err._body).message);
    return Observable.throw(err);
  });
  }

getOneProposition(id) {
  return this.http.get(`${this.BASE_URL}/${id}`)
  .map(res => res.json())
  .catch(err => {
    alert(JSON.parse(err._body).message);
    return Observable.throw(err);
  });
  }

changeProposition(item) {
return this.http.patch(`${this.BASE_URL}/` + item._id, item)
.map((res: Response) => res.json())
    .map(item => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
}

deleteProposition() {

}








}
