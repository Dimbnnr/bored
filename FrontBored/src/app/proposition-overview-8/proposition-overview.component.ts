import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PropositionService } from '../services/proposition.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from 'firebase';

@Component({
  selector: 'app-proposition-overview',
  templateUrl: './proposition-overview.component.html',
  styleUrls: ['./proposition-overview.component.css']
})
export class PropositionOverviewComponent implements OnInit {
user;
base_URL = environment.base_URL;
proposi;
propositionList;
  constructor(
    private authService: AuthService,
    private propositionService: PropositionService,
    private userService: UserService,
    private activateRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.authService.sendloggedin()
      .subscribe(user => {
        this.user = user;
      });
      this.getDaPropositionById();
      this.getDaUserById();
      // para dibujarlas en una parte tipo: historical de actividades
      this.getDaPropositions();
      console.log(this.activateRouter.params['id']);
  }


getDaUserById() {
  this.activateRouter.params.subscribe(params => {
    this.userService.getUserById(params['id'])
    .subscribe(singleUser => this.user = singleUser);
  });
}

  getDaPropositionById() {
    this.activateRouter.params.subscribe(params => {
      this.propositionService.getOneProposition(params['propid'])
      .subscribe(propos => this.proposi = propos);
    });

 }
 getDaPropositions() {
  this.propositionService.getAllPropositions()
  .subscribe(propostion => {
    this.propositionList = propostion;
    console.log(this.propositionList);
  });
}

//  getAllPropostionHistorical() {
//   this.propositionService.getAllPropositions()
//   .subscribe(propostion => {
//     this.propositionList = propostion;
//     console.log(this.propositionList);
//   });
// }

}





