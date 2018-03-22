import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
import { UserPropositionService } from '../services/user-proposition.service';
import { DatePipe } from '@angular/common';
// import { FormControl } from '@angular/forms';
// import { } from 'googlemaps';
// import { MapsAPILoader } from '@agm/core';
// import {} from '@types/googlemaps';
// import { ViewChild, ElementRef, NgZone } from '@angular/core';


import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  base_URL = environment.base_URL;
  user;
  userid = '';
  titl: String = '#Bored Map';
  usersList: Array<Object>;
  propositionList: Array<Object>;
  proposition;
  // : Array<Object>;
  lat: any;
  lng: any;
  zoom: Number;
  searchControl: FormControl;
  today = Date.now();

  @ViewChild('search')
  public searchElementRef: ElementRef;


//   markers = [
//   {label: 'Homere',
//     lat: 51.678418,
//   lng: 7.809007,
//   markerIcon: 'http://www.free-icons-download.net/images/qq-penguin-icon-92197.png'
//   },
//   {label: 'Arquimedes',
//     lat: 60,
//     lng: 108,
//     markerIcon: 'http://www.pngall.com/wp-content/uploads/2016/03/Penguin-PNG-Clipart.png'
//     }
// ];


markerClick(m) {
  // this.markers.forEach(m => m);
// once marker is given, iterate through your list of markers and change this marker's icon and make sure the rest of the icons are back to their default
}

  constructor(
    private service: UserAuthService,
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private propositionService: UserPropositionService
  ) {
    this.zoom = 14;
    // this.lat = 19.3984354;
    // this.lng = -99.1801588;
    // para lo de current possition, add: in the html https://stackblitz.com/edit/angular-google-map?file=app%2Fapp.component.html
    if (navigator) {
navigator.geolocation.getCurrentPosition( pos => {
  this.lng = +pos.coords.longitude;
  this.lat = +pos.coords.latitude;
});
    }

   }

  //  private setCurrentPosition() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  // }

 


  ngOnInit() {

    this.service.sendloggedin()
      .subscribe(user => {
        this.user = user;
        this.userid = user._id;
        this.lat = this.user.location.coordinates[0];
        this.lng = this.user.location.coordinates[1];
      });

      this.getUsers();

      this.getDaPropositions();
  }

  getUsers() {
    this.service.getAllUsers()
    .subscribe(user => {
         this.usersList = user;
          console.log(this.usersList);
    });
  }

  sendPropositionForm(myForm) {
    this.propositionService.sendNewProposition(myForm.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['main-page']);
    });
  }

  getDaPropositions() {
    this.propositionService.getAllPropositions()
    .subscribe(propostion => {
      this.propositionList = propostion;
      console.log(this.propositionList);
    });
  }


}
