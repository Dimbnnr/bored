import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './services/user-auth.service';
import { UserPropositionService } from './services/user-proposition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app';
  user = null;
  error: any;
  propositionList: Array<Object>;

  constructor(
    private router: Router,
  private session: UserAuthService,
  private propositionService: UserPropositionService) { }

  ngOnInit() {
    this.session.sendloggedin().subscribe( user => this.success(user));

    this.getDaPropositions();
  }


success(user) {
  this.error = null;
  this.user = JSON.parse(localStorage.getItem('user'));
  console.log(this.user);
  // this.router.navigate(['/']);
}

  logout() {
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['login']);

    // this.user = JSON.stringify(localStorage.removeItem('user'));
    // this.session.sendlogout().subscribe(
    //   () => {
    //     this.success(null);
    //   },
    //   (err) => this.errorsess(err));
    // localStorage.removeItem('user');
    // this.user = null;
    // this.router.navigate(['login']);
  }

  errorsess(err) {
    this.error = err;
    this.user = null;
  }


  getDaPropositions() {
    this.propositionService.getAllPropositions()
    .subscribe(propostion => {
      this.propositionList = propostion;
      console.log(this.propositionList);
    });
  }

}

