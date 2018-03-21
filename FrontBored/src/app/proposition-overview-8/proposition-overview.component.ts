import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { UserPropositionService } from '../services/user-proposition.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proposition-overview',
  templateUrl: './proposition-overview.component.html',
  styleUrls: ['./proposition-overview.component.css']
})
export class PropositionOverviewComponent implements OnInit {
user;
proposi;
propositionList;
  constructor(
    private AuthService: UserAuthService,
    private propositionService: UserPropositionService,
    private activateRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.AuthService.sendloggedin()
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
    this.AuthService.getUserById(params['id'])
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





