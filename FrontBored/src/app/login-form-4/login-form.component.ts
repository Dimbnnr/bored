import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit {
  user = {};
  constructor(
    private service: UserAuthService,
    private router: Router
  ) { }



  sendlogin() {
    this.service.sendlogin(this.user)
    .subscribe(res => {
      this.router.navigate(['dash-board']);
    });
  }


  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['dash-board']);
    }
  }

}
