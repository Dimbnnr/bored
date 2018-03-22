import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  wait: Boolean = false;
  // progressValue = 60;
  // color = 'primary';
  // isDeterminate = true;

  // step(val: number) {
  //   this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
  // }
  constructor(
    private router: Router,
  ) { }

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

}
