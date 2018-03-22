import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {

  user;
  latitude: number;
  longitude: number;
  coordinates = [];
   // maps
  @ViewChild('search')
  public searchElementRef: ElementRef;


// por defecto hace una llamada post a nuestro back-end
uploader: FileUploader = new FileUploader({
  url: 'https://bored-project.herokuapp.com' + `/api/auth/signup`
});


  constructor(
    private service: UserAuthService,
    private router: Router,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }



  ngOnInit() {
    this.getReadyAutocomplete();
  }


  sendsignup(newUser) {
    console.log(newUser.value);
    this.uploader.onBuildItemForm = (item: any, form: any) => {
      form.append('username', newUser.value.username);
      form.append('lastName', newUser.value.lastName);
      form.append('age', newUser.value.age);
      form.append('email', newUser.value.email);
      form.append('phoneNumber', newUser.value.phoneNumber)
      form.append('address', newUser.value.location);
      form.append('lat', this.coordinates[0]);
      form.append('lng', this.coordinates[1]);
      form.append('averageBoredTimePerWeek', newUser.value.averageBoredTimePerWeek);
      form.append('password', newUser.value.password);
    };

    console.log('subiendo');
    this.uploader.uploadAll(); // post Call to Url
    this.uploader.onCompleteItem = () => this.router.navigate(['login']); // como el subscribe el onCompleteItem
  }

  getReadyAutocomplete() {
    //  load Places Autocomplete
    this.mapsAPILoader.load()
    .then(() => {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      types: ['address']
    });
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //  get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //  verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
        //  set latitude, longitude and

        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        console.log(this.latitude);
        console.log(this.longitude);
        this.coordinates = [this.latitude, this.longitude];
console.log(this.coordinates);
// this.user.location.coordinates = [this.latitude, this.longitude];
        //  no guarda lasmodificaciones
      });
    });
  });
  }


}

