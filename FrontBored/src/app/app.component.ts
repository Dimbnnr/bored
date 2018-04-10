import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/auth.service';
import { UserService } from './services/user.service';
import { PropositionService } from './services/proposition.service';

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
  private session: AuthenticationService,
  private propositionService: PropositionService) { }

  ngOnInit() {
    // this.session.sendloggedin().subscribe( user => this.success(user));

    // this.getDaPropositions();
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

