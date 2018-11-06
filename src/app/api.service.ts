
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './model/LoginResultModel';

import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }


  users(){
    return this.http.get('https://reqres.in/api/users?page=2')

  }

  register(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('https://reqres.in/api/register', {
      email: email,
      password: password
    });
  }

}
