import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Extra modules
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { FileSelectDirective } from 'ng2-file-upload';
import { AgmCoreModule } from '@agm/core';

// Components:
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page-1/home-page.component';
import { PreviewComponent } from './preview-2/preview.component';
import { SignupFormComponent } from './signup-form-3/signup-form.component';
import { LoginFormComponent } from './login-form-4/login-form.component';
import { DashBoardComponent } from './dash-board-5/dash-board.component';
import { MainPageComponent } from './main-page-6/main-page.component';
import { PrivateProfileComponent } from './private-profile-7/private-profile.component';
import { PropositionOverviewComponent } from './proposition-overview-8/proposition-overview.component';
import { ChatComponent } from './chat-9/chat.component';

// Componetns Tools:
import { NavBarComponent } from './nav-bar/nav-bar.component';

// Import Services
import {UserAuthService} from './services/user-auth.service';
import {UserPropositionService} from './services/user-proposition.service';

// Import Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';

// import {MatNativeDateModule} from '@angular/material';





const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', component: AppComponent },
  { path: 'home',  component: HomePageComponent },
  { path: 'dash-board', component: DashBoardComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'main-page', component: MainPageComponent },
  { path: ':id/private-profile', component: PrivateProfileComponent },
  { path: 'user/:id/proposition-overview/:propid', component: PropositionOverviewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    HomePageComponent,
    DashBoardComponent,
    PreviewComponent,
    SignupFormComponent,
    MainPageComponent,
    ChatComponent,
    LoginFormComponent,
    PrivateProfileComponent,
    PropositionOverviewComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDij7dtIX0tYKTlsbTXgCJlH74mFiMaY4A',
      libraries: ['geometry', 'places']
    }),
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatDatepickerModule,
    // MatNativeDateModule
  ],
  providers: [UserAuthService, UserPropositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }




