import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = 'sydney@fife';
  password = 'pistol';

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  clickRegister() {
    this.api.register(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/login');
          }
        },
        r => {
          alert(r.error.error);
        });
  }
  ngOnInit() {
  }
}
