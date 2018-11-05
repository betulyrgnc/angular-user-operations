import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users: any;
  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  getUsers() {
    this.api.users()
    .subscribe(res => {
      this.users = res.data;
    });
  /*  .subscribe(
    (data: Response) => {
        data = JSON.parse(data['_body']);
        this.users = data;
    },
    err => console.log(err), // error
    () => console.log('getUser Complete') // complete
); */
  }
  ngOnInit() {
    this.users = [];
  }
}


/*import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.users = [];
  }

  public getUsers() {
    this.http.get('https://reqres.in/api/users?page=2').subscribe(res => {
      this.users = res;
    });
  }

}*/
