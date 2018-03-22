import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // progressValue = 60;
  // color = 'primary';
  // isDeterminate = true;

  // step(val: number) {
  //   this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
  // }
  constructor() { }

  ngOnInit() {
  }

}
