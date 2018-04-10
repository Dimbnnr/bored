import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  user;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authService.sendloggedin()
      .subscribe(user => {
        this.user = user;
      });
  }

}
