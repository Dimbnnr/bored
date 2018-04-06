import { Component, OnInit, Input } from '@angular/core';
import firebase from '../firebase';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() theUserId;
  user = {username: ''};
  userid = '';
  idCorrecto;
  // @Output() gimmieID = new EventEmitter<any>(); 

  constructor(
    private activateRoute: ActivatedRoute,
    private authService: AuthService

  ) { }
  elChat = [];
  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.idCorrecto = params.id
    });
     // era: _value.id ...
    console.log(this.idCorrecto)

    this.authService.sendloggedin()
    .subscribe(user => {
      console.log("use",user)
      this.user = user;
      this.userid = user._id;
    });

    console.log("chet",this.idCorrecto)

    // leer los datos q lq base de datos de firebase:
    // firebase.database().ref(this.theUserId)
    // .on('child_added', (snap) => {
    //   console.log(snap.val());
    //   this.elChat.push(snap.val());
    // });
    firebase.database().ref(this.idCorrecto)
    .on('child_added', snap => {
      console.log(snap.val())
      this.elChat.push(snap.val());
    });


    //this.sendMessage();
  }

  // metodo que se llama cuando el usuario escribe y da enter
  sendMessage(text){
    console.log("entre")
    const message = { // cqmbiar el ref chat por el id del usuqrio del perfil
      text: text || "",
      user: this.user.username, // tiene aue ser el usuqrio aue esta logueado
      date: new Date()
    };
    console.log("chet",this.theUserId)
    firebase.database().ref(this.theUserId)
    .push(message);
  }


}
