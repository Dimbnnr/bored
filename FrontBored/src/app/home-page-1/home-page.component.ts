import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  wait: Boolean = false;
  constructor(private router: Router, private authService: AuthenticationService) {}

submit() {
  this.wait = true;
  setTimeout(() => {
this.wait = false;
  }, 1000);
  setTimeout(() => {
    this.router.navigate(['dash-board']);
      }, 1010);

}

  ngOnInit() {
  }

  loginFacebook() {
    this.authService.signInWithFB()
      .then(user => console.log(user));
  }


}
