import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserPropositionService } from '../services/user-proposition.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router,
    private AuthService: UserAuthService,
    private activateRouter: ActivatedRoute,
    private propositionService: UserPropositionService,

  ) { }
  user = null;
  propositionById = {
    owner: '',
    _id: ''
  };
  // proposition = {
  //   owner: '',
  //   _id: ''
  // };

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }


  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['login']);
}




}
