import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { } from 'googlemaps';
import { FileUploader } from 'ng2-file-upload';
import { UserPropositionService } from '../services/user-proposition.service';

// Autocomplete methode to check
// import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-private-profile',
  templateUrl: './private-profile.component.html',
  styleUrls: ['./private-profile.component.css']
})
export class PrivateProfileComponent implements OnInit {
  showEditAll: Boolean = false;
  showEditProposition: Boolean = true;
  showEditUsername: Boolean = false;
  showEditLastName: Boolean = false;
  showEditAge: Boolean = false;
  showEditphoneNumber: Boolean = false;
  showEditEmail: Boolean = false;
  showEditBelief: Boolean = false;
  showEditCitation: Boolean = false;
  showEditAverageBoredTimePerWeek: Boolean = false;
  showEditTitle: Boolean = false;
  showEditLocation: Boolean = false;
  showEditHour: Boolean = false;
  showEditDate: Boolean = false;
  // showEditPhone: Boolean = false;
  // showEditAdress: Boolean = false;

  user;
  proposi;
  latitude: number;
  longitude: number;


  uploader = new FileUploader({
    });

// autocomplete: map
  //  @ViewChild('search')
  //  public searchElementRef: ElementRef;

  feedback: string;

  constructor(
    private AuthService: UserAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private propositionService: UserPropositionService,
  //  private mapsAPILoader: MapsAPILoader,
  //  private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.AuthService.sendloggedin()
      .subscribe(user => {
        this.user = user;
        this.uploader.options.url = `http://localhost:3000/api/auth/${this.user._id}/addimg`;
      });

      this.getDaPropositionById();

  }

  changeShow() {
    this.showEditAll = true;
  }

  changeProposition() {
    this.showEditProposition = true;
  }

  getDaPropositionById() {
      this.propositionService.getAllPropositions()
      .subscribe(propos => {
        this.proposi = propos[propos.length - 1];
      });
 }

   // sent changes
   sendModification() {
    this.AuthService.patchItem(this.user)
    .subscribe(user => {
      this.user = user;
    });
    this.showEditUsername = false;
    this.showEditLastName = false;
    this.showEditAge = false;
    this.showEditphoneNumber = false;
    this.showEditBelief = false;
    this.showEditCitation = false;
    this.showEditAverageBoredTimePerWeek = false;
    this.showEditEmail = false;
    this.showEditAll = false;
  }


 sendProposiModification() {
   this.propositionService.changeProposition(this.proposi)
   .subscribe(prop => {
     this.proposi = prop;
   });
   this.showEditTitle = false;
   this.showEditLocation = false;
   this.showEditHour = false;
   this.showEditDate = false;
   this.showEditProposition = false;
 }

  updatePhoto() {
    this.uploader.queue[0].method = 'PATCH';
      console.log('voy a subir archivo')
      // form es un objeto interno de la instancia FileUploader
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.router.navigate([`main-page`]);
  }


  deleteProfile() {
    if (!confirm('Are you certain about leaving Bored Int. Great Network ?')) return;
    this.AuthService.removeItem(this.user)
    .subscribe(user => {
      this.user = user;
    });
  }



}



