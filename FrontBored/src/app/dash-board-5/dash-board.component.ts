import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  user;

  constructor(
    private AuthService: UserAuthService,
  ) { }

  ngOnInit() {
    this.AuthService.sendloggedin()
      .subscribe(user => {
        this.user = user;
      });
  }

}
