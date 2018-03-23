webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__ = __webpack_require__("./src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_proposition_service__ = __webpack_require__("./src/app/services/user-proposition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, session, propositionService) {
        this.router = router;
        this.session = session;
        this.propositionService = propositionService;
        this.title = 'app';
        this.user = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.session.sendloggedin().subscribe( user => this.success(user));
        // this.getDaPropositions();
    };
    AppComponent.prototype.success = function (user) {
        this.error = null;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
        // this.router.navigate(['/']);
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('user');
        this.user = null;
        this.router.navigate(['login']);
        // this.user = JSON.stringify(localStorage.removeItem('user'));
        // this.session.sendlogout().subscribe(
        //   () => {
        //     this.success(null);
        //   },
        //   (err) => this.errorsess(err));
        // localStorage.removeItem('user');
        // this.user = null;
        // this.router.navigate(['login']);
    };
    AppComponent.prototype.errorsess = function (err) {
        this.error = err;
        this.user = null;
    };
    AppComponent.prototype.getDaPropositions = function () {
        var _this = this;
        this.propositionService.getAllPropositions()
            .subscribe(function (propostion) {
            _this.propositionList = propostion;
            console.log(_this.propositionList);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_proposition_service__["a" /* UserPropositionService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_page_1_home_page_component__ = __webpack_require__("./src/app/home-page-1/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview_2_preview_component__ = __webpack_require__("./src/app/preview-2/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_form_3_signup_form_component__ = __webpack_require__("./src/app/signup-form-3/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_form_4_login_form_component__ = __webpack_require__("./src/app/login-form-4/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dash_board_5_dash_board_component__ = __webpack_require__("./src/app/dash-board-5/dash-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_page_6_main_page_component__ = __webpack_require__("./src/app/main-page-6/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__private_profile_7_private_profile_component__ = __webpack_require__("./src/app/private-profile-7/private-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__proposition_overview_8_proposition_overview_component__ = __webpack_require__("./src/app/proposition-overview-8/proposition-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__chat_9_chat_component__ = __webpack_require__("./src/app/chat-9/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_user_auth_service__ = __webpack_require__("./src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_proposition_service__ = __webpack_require__("./src/app/services/user-proposition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_button_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Extra modules





// Components:










// Componetns Tools:

// Import Services


// Import Material Angular














// import {MatNativeDateModule} from '@angular/material';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '', component: AppComponent },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_page_1_home_page_component__["a" /* HomePageComponent */] },
    { path: 'dash-board', component: __WEBPACK_IMPORTED_MODULE_12__dash_board_5_dash_board_component__["a" /* DashBoardComponent */] },
    { path: 'preview', component: __WEBPACK_IMPORTED_MODULE_9__preview_2_preview_component__["a" /* PreviewComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_10__signup_form_3_signup_form_component__["a" /* SignupFormComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_form_4_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'main-page', component: __WEBPACK_IMPORTED_MODULE_13__main_page_6_main_page_component__["a" /* MainPageComponent */] },
    { path: ':id/private-profile', component: __WEBPACK_IMPORTED_MODULE_14__private_profile_7_private_profile_component__["a" /* PrivateProfileComponent */] },
    { path: 'user/:id/proposition-overview/:propid', component: __WEBPACK_IMPORTED_MODULE_15__proposition_overview_8_proposition_overview_component__["a" /* PropositionOverviewComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_8__home_page_1_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dash_board_5_dash_board_component__["a" /* DashBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__preview_2_preview_component__["a" /* PreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__signup_form_3_signup_form_component__["a" /* SignupFormComponent */],
                __WEBPACK_IMPORTED_MODULE_13__main_page_6_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__chat_9_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_form_4_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_14__private_profile_7_private_profile_component__["a" /* PrivateProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__proposition_overview_8_proposition_overview_component__["a" /* PropositionOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_17__nav_bar_nav_bar_component__["a" /* NavBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDij7dtIX0tYKTlsbTXgCJlH74mFiMaY4A',
                    libraries: ['geometry', 'places']
                }),
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material_datepicker__["a" /* MatDatepickerModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_user_auth_service__["a" /* UserAuthService */], __WEBPACK_IMPORTED_MODULE_19__services_user_proposition_service__["a" /* UserPropositionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-9/chat.component.css":
/***/ (function(module, exports) {

module.exports = ".chat-messages{\ncolor:gray;\n}\n\n.chat-input{\nwidth: 330px;\n}"

/***/ }),

/***/ "./src/app/chat-9/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"chat-messages\" *ngFor=\"let message of elChat\">\n   <b> {{message.user}} </b>\n  <br>\n  {{message.text}} - {{message.date}}\n</p>\n\n\n\n<!-- <input class=\"chat-input\" #text (keydown.enter)=\"sendMessage(text.value)\" type=\"text\"> -->\n  \n\n<mat-form-field>\n\n  <textarea matInput placeholder=\"Write your message here\" matTextareaAutosize matAutosizeMinRows=\"2\"\n            matAutosizeMaxRows=\"5\" #text (keydown.enter)=\"sendMessage(text.value)\" type=\"text\"></textarea>\n</mat-form-field>"

/***/ }),

/***/ "./src/app/chat-9/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase__ = __webpack_require__("./src/app/firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__ = __webpack_require__("./src/app/services/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = /** @class */ (function () {
    // @Output() gimmieID = new EventEmitter<any>(); 
    function ChatComponent(activateRoute, service) {
        this.activateRoute = activateRoute;
        this.service = service;
        this.user = { username: '' };
        this.userid = '';
        this.elChat = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.idCorrecto = params.id;
        });
        // era: _value.id ...
        console.log(this.idCorrecto);
        this.service.sendloggedin()
            .subscribe(function (user) {
            console.log("use", user);
            _this.user = user;
            _this.userid = user._id;
        });
        console.log("chet", this.idCorrecto);
        // leer los datos q lq base de datos de firebase:
        // firebase.database().ref(this.theUserId)
        // .on('child_added', (snap) => {
        //   console.log(snap.val());
        //   this.elChat.push(snap.val());
        // });
        __WEBPACK_IMPORTED_MODULE_1__firebase__["a" /* default */].database().ref(this.idCorrecto)
            .on("child_added", function (snap) {
            console.log(snap.val());
            _this.elChat.push(snap.val());
        });
        //this.sendMessage();
    };
    // metodo que se llama cuando el usuario escribe y da enter
    ChatComponent.prototype.sendMessage = function (text) {
        console.log("entre");
        var message = {
            text: text || "",
            user: this.user.username,
            date: new Date()
        };
        console.log("chet", this.theUserId);
        __WEBPACK_IMPORTED_MODULE_1__firebase__["a" /* default */].database().ref(this.theUserId)
            .push(message);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "theUserId", void 0);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat-9/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat-9/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/dash-board-5/dash-board.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.diagonal-first-background{\n    background-color: #A9EEE6;\n    top: 40px;\n    left: 0px;\n    right: 0px;\n    height: 250px;\n    position: absolute;\n    text-align: center;\n}\n\n.content-first{\n    color: white;\n    font-size: 1.3em;\n    top: 25px;\n    left: 0px;\n    right: 0px;\n    height: 250px;\n    position: absolute;\n}\n\n.diagonal-second-background{\n    background-color: #B8B0B0;\n    position: absolute;\n    top: 190px;\n    left: 0px;\n    right: 0px;\n    height: 220px;\n    color: white;\n    text-align: center; /* IE9 */\n    -webkit-transform: skewY(6deg); /* Safari */\n    transform: skewY(6deg);\n    \n}\n\n.content-second{ /* IE9 */\n    -webkit-transform: skewY(-12deg); /* Safari */\n    transform: skewY(-12deg);\n    font-size: 3.2em;\n    top: 200px;\n}\n\n.diagonal-third-background{\n    background-color:#F38181;\n    position: absolute;\n    top: 590px;\n    left: 0px;\n    right: 0px;\n    height: 220px;\n    color: white;\n    text-align: center; /* IE9 */\n    -webkit-transform: skewY(-8deg); /* Safari */\n    transform: skewY(-8deg);\n    text-align: center;\n}\n\n.content-third{\n    color: #A9EEE6;\n    /* -ms-transform: skewY(6deg); \n    -webkit-transform: skewY(6deg); \n    transform: skewY(6deg); */\n    font-size: 2.8em;\n    text-align: center;\n    position: absolute;\n    top: 440px;\n    left: 40px;\n}\n\n.title-witout-style{\n    text-decoration: none;\n    color: white;\n}\n\n.title-witout-style-blue{\n    text-decoration: none;\n    color: #A9EEE6;\n}"

/***/ }),

/***/ "./src/app/dash-board-5/dash-board.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n\n\n<div class=\"diagonal-first-background\">\n\n  <div class=\"content-first\">\n <h1>  <a class=\"title-witout-style\" [routerLink]=\"['/main-page']\"> SPORTS !</a> </h1>  \n\n  </div>\n\n</div>\n\n\n\n<div class=\"diagonal-second-background\">\n<br>\n<br>\n  <h1 class=\"content-second\"><a class=\"title-witout-style\" [routerLink]=\"['/main-page']\"> BlaBla</a></h1>\n  </div>\n  \n  <h1 class=\"content-third\"> <a class=\"title-witout-style-blue\" [routerLink]=\"['/main-page']\"> Visits & Stuffs</a></h1>\n\n  <div class=\"diagonal-third-background\">\n    \n  </div>\n "

/***/ }),

/***/ "./src/app/dash-board-5/dash-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__ = __webpack_require__("./src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent(AuthService, router, activateRouter) {
        this.AuthService = AuthService;
        this.router = router;
        this.activateRouter = activateRouter;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.sendloggedin()
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    DashBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-board',
            template: __webpack_require__("./src/app/dash-board-5/dash-board.component.html"),
            styles: [__webpack_require__("./src/app/dash-board-5/dash-board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "./src/app/firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5vwoBAz9fnGsJ68VL_OvKMo3DP-DsGfY",
    authDomain: "ironhack-6f63d.firebaseapp.com",
    databaseURL: "https://ironhack-6f63d.firebaseio.com",
    projectId: "ironhack-6f63d",
    storageBucket: "ironhack-6f63d.appspot.com",
    messagingSenderId: "852176463337"
  };
  __WEBPACK_IMPORTED_MODULE_0_firebase__["initializeApp"](config);

  /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_firebase__);

/***/ }),

/***/ "./src/app/home-page-1/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\n    width: 100%;\n    height: 100%;\n    background-color:#FFFCEF;\n    text-align: center;\n}\n\nh1{\n    font-weight: bold;\n}\n\nh2 {\n    font-weight: 400;\n}\n\np{\n   font-size: 400;\n    font-style: italic;\n}\n\n.toCenter{\n    display: block;\n      \n      position: absolute;\n      top: 50%;\n      right: 22%;\n    \n}\n\n"

/***/ }),

/***/ "./src/app/home-page-1/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"main\">\n  \n<br>\n<br>\n\n<h1> <i>Bored!</i> </h1>\n\n<h2>- Welcome to Bored international network -</h2>\n<br>\n<br>\n<p>\nCreating new connections without ambuigity\n</p>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<button  class ='spin-test2' mat-raised-button color=\"primary\" type=\"submit\" (click)=\"submit()\">Get Connected !</button>\n\n\n<br>\n<br>\n\n</div>\n\n\n<div class=\"toCenter\">\n  <mat-progress-spinner *ngIf=\"wait\" [mode]=\"isDeterminate ? 'determinate' : 'indeterminate'\"\n      [value]=\"progressValue\" color=\"warn\" [strokeWidth]=\"8\" [diameter]=\"216\"></mat-progress-spinner>\n  </div>\n"

/***/ }),

/***/ "./src/app/home-page-1/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    // progressValue = 60;
    // color = 'primary';
    // isDeterminate = true;
    // step(val: number) {
    //   this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
    // }
    function HomePageComponent(router) {
        this.router = router;
        this.wait = false;
    }
    HomePageComponent.prototype.submit = function () {
        var _this = this;
        this.wait = true;
        setTimeout(function () {
            _this.wait = false;
        }, 1000);
        setTimeout(function () {
            _this.router.navigate(['dash-board']);
        }, 1010);
    };
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/home-page-1/home-page.component.html"),
            styles: [__webpack_require__("./src/app/home-page-1/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/login-form-4/login-form.component.css":
/***/ (function(module, exports) {

module.exports = "#login-form{\nwidth: 60%;\nmargin: 0 20%;\n}"

/***/ }),

/***/ "./src/app/login-form-4/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n\n\n<div id=\"login-form\">\n<br>\n<br>\n<br>\n    <p>\n        LOGIN:\n      </p>\n    <mat-form-field>\n  <input matInput type=\"text\" placeholder=\"username\" [(ngModel)]=\"user.username\">\n</mat-form-field>\n  <mat-form-field>\n  <input matInput type=\"password\" placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"user.password\">\n  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n</mat-form-field>\n  <button mat-button color=\"accent\"  (click)=\"sendlogin()\" >Login!</button>\n  \n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/login-form-4/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__ = __webpack_require__("./src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(service, router) {
        this.service = service;
        this.router = router;
        this.user = {};
    }
    LoginFormComponent.prototype.sendlogin = function () {
        var _this = this;
        this.service.sendlogin(this.user)
            .subscribe(function (res) {
            localStorage.setItem('user', JSON.stringify(res));
            _this.router.navigate(['dash-board']);
        });
    };
    LoginFormComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this.router.navigate(['dash-board']);
        }
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("./src/app/login-form-4/login-form.component.html"),
            styles: [__webpack_require__("./src/app/login-form-4/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/main-page-6/main-page.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 700px;\n    width: 500px;\n    \n  }\n\n\n  .centered{\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      width: 50%;\n}\n\n\n  .main-title{\n    font-size: bold;\n    font-style: italic;\n    text-align: center;\n}\n\n\n  .sticky-map{\n    position: -webkit-sticky !important;\n    position: sticky !important;\n    width: 100% !important;\n   \n}\n\n\n  .agm-map-container-inner{\nborder: solid 8px #A9EEE6 !important;\n}\n\n\n  .title-second{\n    \n    font-weight: 500;\n   \n    text-align: center;\n}\n\n\n  .proposition-form{\ntext-align: center;\npadding-bottom: 2.5vh;\nmargin-left: 5%;\nmargin-right: 5%;\n}\n\n\n  .mat-input-flex{\n    width: 400px !important;\n}\n\n\n  .send-prop-button{\n   \n}\n\n\n  .field-width{\n    width: 25em;\n}\n\n\n  .agm-da-link{\n    font-weight: 500;\n    color: #11CBD7;\n}\n\n\n  .background{\nbackground-color: #FFFCEF;\n}"

/***/ }),

/***/ "./src/app/main-page-6/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"background\">\n  <br>\n<h1 class=\"main-title\">{{ titl }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n\n\n\n\n<agm-map class=\"sticky-map\" *ngIf=\"usersList\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n\n<agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n\n  <!-- Heroku :  [iconUrl]=\"base_URL + u.image\" -->\n  <agm-marker *ngFor=\"let u of usersList\" (markerClick)=\"markerClick(m)\"\n  \n  \n \n  [iconUrl]=\"base_URL + u.image\"\n  [latitude]=\"u.location.coordinates[0]\" \n  [longitude]=\"u.location.coordinates[1]\">\n\n  <agm-info-window >\n     <strong>  {{u.username}} {{u.lastName}}  </strong> \n    <br> \n    {{u.age}} years old \n    <p  *ngFor=\"let prop of propositionList\">\n    <span *ngIf=\"prop.owner === u._id\">\n      <b> {{prop.title}}</b> \n    \n    </span>\n   \n    <a class=\"agm-da-link\" *ngIf=\"prop.owner === u._id\" [routerLink]=\"['../user', u._id, 'proposition-overview' , prop._id]\" > Let's see: </a>\n\n   </p>\n      <!-- 'http://localhost:3000/' -->\n\n  </agm-info-window>\n\n</agm-marker>\n\n\n<!-- [label]=\"u.username\" -->\n\n</agm-map>\n</div>\n\n<br>\n<br>\n\n<h3 class=\"title-second\">Your <i style=\"color:#FC4482\">#UNBORED!</i>  Way Out</h3>\n\n\n\n<div class=\"proposition-form\"> \n  <form  (ngSubmit)=\"sendPropositionForm(myForm)\" #myForm=\"ngForm\">\n    \n      <mat-form-field class=\"field-width\">\n        \n        <input class=\"input-size\" matInput placeholder=\"Your #UNBORED! Activity Proposition\" id=\"title\" [(ngModel)]=\"title\" name=\"title\" type=\"text\">\n      </mat-form-field>\n      <br>\n\n    <mat-form-field class=\"field-width\">\n        \n        <input matInput  class=\"input-size\"  placeholder=\"When you'd like to make it happen ?\" id=\"startTimeDate\" [(ngModel)]=\"startTimeDate\" name=\"startTimeDate\" type=\"date\">\n      </mat-form-field>\n<br>\n    <mat-form-field class=\"field-width\">\n        \n        <input class=\"input-size\" matInput placeholder=\"At which hour it starts ?\" id=\"startTimeHour\" [(ngModel)]=\"startTimeHour\" name=\"startTimeHour\" type=\"time\"> \n      </mat-form-field>\n    <!-- <span>Date: {{ today | date:'shortTime' }} </span> -->\n    <br>\n    <mat-form-field class=\"field-width\">\n       \n        <input class=\"input-size\" matInput placeholder=\"Where do you want to realize your activity?\" id=\"location\" [(ngModel)]=\"location\" name=\"location\" type=\"text\"> \n      </mat-form-field>\n<br>\n    <!-- héhéhé shortcut mini front hack here -->\n    <input [(ngModel)]=\"userid\" name=\"id\" type=\"hidden\">\n    \n \n    <button class=\"send-prop-button\" color=\"accent\" mat-raised-button type=\"submit\">\n     Launch Your <i>#UNBORED!</i>\n    </button>\n    \n  </form>\n</div>\n<!-- \n<div *ngFor = \"let user of UsersList\">\n  <h3>{{user.username}} {{user.lastName}}</h3> \n  <ul>\n    <li>{{user.age}}</li>\n    <li>{{user.averageBoredTimePerWeek}}</li>\n  </ul>     \n\n<img [src]=\"'http://localhost:3000/' + user.image\">\n</div> -->\n\n\n"

/***/ }),

/***/ "./src/app/main-page-6/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__ = __webpack_require__("./src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_proposition_service__ = __webpack_require__("./src/app/services/user-proposition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { FormControl } from '@angular/forms';
// import { } from 'googlemaps';
// import { MapsAPILoader } from '@agm/core';
// import {} from '@types/googlemaps';
// import { ViewChild, ElementRef, NgZone } from '@angular/core';



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(service, router, mapsAPILoader, ngZone, propositionService) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.propositionService = propositionService;
        this.base_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment_prod__["a" /* environment */].base_URL;
        this.userid = '';
        this.titl = '#Bored Map';
        this.today = Date.now();
        this.zoom = 14;
        // this.lat = 19.3984354;
        // this.lng = -99.1801588;
        // para lo de current possition, add: in the html https://stackblitz.com/edit/angular-google-map?file=app%2Fapp.component.html
        if (navigator) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
            });
        }
    }
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
    MainPageComponent.prototype.markerClick = function (m) {
        // this.markers.forEach(m => m);
        // once marker is given, iterate through your list of markers and change this marker's icon and make sure the rest of the icons are back to their default
    };
    //  private setCurrentPosition() {
    //   if ('geolocation' in navigator) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //       this.zoom = 12;
    //     });
    //   }
    // }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.sendloggedin()
            .subscribe(function (user) {
            _this.user = user;
            _this.userid = user._id;
            _this.lat = _this.user.location.coordinates[0];
            _this.lng = _this.user.location.coordinates[1];
        });
        this.getUsers();
        this.getDaPropositions();
    };
    MainPageComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getAllUsers()
            .subscribe(function (user) {
            _this.usersList = user;
            console.log(_this.usersList);
        });
    };
    MainPageComponent.prototype.sendPropositionForm = function (myForm) {
        var _this = this;
        this.propositionService.sendNewProposition(myForm.value)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['main-page']);
        });
    };
    MainPageComponent.prototype.getDaPropositions = function () {
        var _this = this;
        this.propositionService.getAllPropositions()
            .subscribe(function (propostion) {
            _this.propositionList = propostion;
            console.log(_this.propositionList);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MainPageComponent.prototype, "searchElementRef", void 0);
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__("./src/app/main-page-6/main-page.component.html"),
            styles: [__webpack_require__("./src/app/main-page-6/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__services_user_proposition_service__["a" /* UserPropositionService */]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = "#nav-menu{\nfont-size: 1.5rem; \nmargin-top: 2%;\nmargin-left: 3%;\n}"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"nav-menu\" mat-button [matMenuTriggerFor]=\"menu\">\n\n\n  Menu\n\n\n</button>\n<mat-menu #menu=\"matMenu\"  [overlapTrigger]=\"false\">\n    <button mat-menu-item [routerLink]=\"['/home']\">\n      <i class=\"material-icons\">home</i> Home</button>\n  <button mat-menu-item [routerLink]=\"['/dash-board']\">\n    <i class=\"material-icons\">dashboard</i> Dashboard</button>\n  <button mat-menu-item *ngIf=\"user\" [routerLink]=\"['../', user._id, 'private-profile' ]\">\n    <i class=\"material-icons\">face</i>\n    <i class=\"material-icons\">create</i> Profile </button>\n  <button mat-menu-item [routerLink]=\"['/main-page']\">\n    <i class=\"material-icons\" >map</i> #Bored Super Map</button>\n  <button [routerLink]=\"['/signup']\" mat-menu-item *ngIf=\"!user\">\n    <i class=\"material-icons\" >tag_faces</i> Sign up</button>\n  <button mat-menu-item *ngIf=\"!user\" [routerLink]=\"['/login']\">\n    <i class=\"material-icons\">vpn_key</i>  Login</button>\n\n  <ng-template matMenuContent >\n\n  <button *ngIf=\"user\" mat-menu-item (click)=\"logout()\">\n    <i class=\"material-icons\">flight_takeoff</i> Log off <strong>{{user.username}}</strong> </button>\n  </ng-template>\n{{error}}\n</mat-menu>\n\n\n<!-- <input [(ngModel)]=\"userid\" name=\"id\" type=\"hidden\">\n<input  type=\"hidden\"> -->\n\n<!-- \n\n  <p  *ngFor=\"let prop of propositionList\">\n\n<span *ngIf=\"prop.owner === user._id\">\n                    \n    <a [routerLink]=\"[user._id, 'private-profile', prop._id]\">Edit Profile</a>\n    \n  </span> -->"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__ = __webpack_require__("./src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_proposition_service__ = __webpack_require__("./src/app/services/user-proposition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router, AuthService, activateRouter, propositionService) {
        this.router = router;
        this.AuthService = AuthService;
        this.activateRouter = activateRouter;
        this.propositionService = propositionService;
        this.user = null;
        this.propositionById = {
            owner: '',
            _id: ''
        };
    }
    // proposition = {
    //   owner: '',
    //   _id: ''
    // };
    NavBarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
    };
    NavBarComponent.prototype.logout = function () {
        localStorage.removeItem('user');
        this.user = null;
        this.router.navigate(['login']);
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_proposition_service__["a" /* UserPropositionService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/preview-2/preview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview-2/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<p>\n  preview works!\n</p>\n\n\n<h1>\n\nCaroussel \n\n</h1>"

/***/ }),

/***/ "./src/app/preview-2/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreviewComponent = /** @class */ (function () {
    function PreviewComponent() {
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__("./src/app/preview-2/preview.component.html"),
            styles: [__webpack_require__("./src/app/preview-2/preview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/private-profile-7/private-profile.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n/* .first-draw-profile-pic{\n    position: absolute;\n    right: 51%;\n    top: 1%;\n} */\n\n.first-draw-profile-credentials{\n    position: absolute;\n    right: 3%;\n    top: 3%;\n    margin: 0;\n\n}\n\n.profile-content{\npadding-left: 5%;\nmargin-left: 3%;\n}\n\n/* .profile-title{\n    font-weight: 500;\n    font-size: 1.4em;\n    padding-left: 5%;\n    margin-left: 3%;\n} */\n\n.profile-subtitle{\n    font-weight: 500;\n    font-size: 0.9em;\n}\n\n.profile-output{\n    color: #11CBD7;\n    font-weight: 400;\n}\n\n.mat-raised-button.edit{\n    margin-left: 15px;\n    min-width: 1%;\n    height: 30px;\n}\n\n.delete-button{\n    text-align: center;\n    padding: 15px 0 15px 0;\n    margin-bottom: 15px;\n}\n\n.profil-pic-input{\n    padding-bottom: 15px;\n}\n\n.edit-proposition-section{\nmargin-left: 8%;\n}\n\n.proposition-output{\n    color: #04DEAD;\n    font-weight: 400;\n}"

/***/ }),

/***/ "./src/app/private-profile-7/private-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n\n\n<section *ngIf=\"user\">\n\n\n\n    <!-- personal data -->\n\n\n        <div  *ngIf=\"!showEditUsername\">\n          <!-- <img class=\"first-draw-profile-pic\" [src]=\"'http://localhost:3000/' + user.image\">  -->\n          \n          <!-- <p class=\"first-draw-profile-credentials\" >{{user.username}} {{user.lastName}}</p> -->\n          \n          \n        </div>\n        \n \n    <!-- profile info -->\n\n   \n      <h5 class=\"profile-title\"> </h5>\n\n      <div class=\"profile-content\">\n\n          <button class=\"edit-profile\" style=\"position: absolute;\n          top: 2%;\n          right: 6%;\n          min-width: 33%;\" mat-raised-button color=\"primary\" class=\"edit\" (click)=\"changeShow()\">Edit Profile</button>\n\n\n\n          <div>\n              <img [src]=\"base_URL + user.image\">\n            <input  class=\"profil-pic-input\" type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n            <button mat-raised-button (click)=\"updatePhoto()\">Update Photo</button>\n    \n          </div>\n\n      <!-- userName -->\n      <div *ngIf=\"!showEditAll\">\n      \n        <br>\n        <p class=\"profile-subtitle\" >Username: <span class=\"profile-output\">{{user.username}}</span>\n          <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditAll=true\">edit</button> -->\n        </p>\n      </div>\n      <div *ngIf=\"showEditAll\">\n          <mat-form-field>\n        <input matInput (keydown.enter)=\"sendModification()\" type=\"text\" [(ngModel)]=\"user.username\">\n      </mat-form-field>\n      </div>\n      \n      \n      <!-- Last name -->\n      <div *ngIf=\"!showEditAll\">\n        <p class=\"profile-subtitle\">Last Name: <span class=\"profile-output\">{{user.lastName}}</span>\n          <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditAll=true\">edit</button> -->\n        </p>\n      </div>\n      <div *ngIf=\"showEditAll\">\n          <mat-form-field>\n        <input matInput (keydown.enter)=\"sendModification()\" type=\"text\" [(ngModel)]=\"user.lastName\">\n      </mat-form-field>\n      </div>\n\n      <!-- Age -->\n      <div *ngIf=\"!showEditAll\">\n        <p class=\"profile-subtitle\">Age: <span class=\"profile-output\">{{user.age}}</span> years old!\n          <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditAll=true\">edit</button> -->\n        </p>\n      </div>\n      <div *ngIf=\"showEditAll\">\n          <mat-form-field>\n        <input matInput (keydown.enter)=\"sendModification()\" type=\"number\" [(ngModel)]=\"user.age\">\n      </mat-form-field>\n      </div>\n\n      <!-- phoneNumber -->\n\n      <div *ngIf=\"!showEditAll\">\n          <p class=\"profile-subtitle\">Your Phone Number: <span class=\"profile-output\">{{user.phoneNumber}} </span>\n            <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditAll=true\">edit</button> -->\n          </p>\n        </div>\n        <div *ngIf=\"showEditAll\">\n            <mat-form-field>\n          <input matInput (keydown.enter)=\"sendModification()\" type=\"number\" [(ngModel)]=\"user.phoneNumber\">\n        </mat-form-field>\n        </div>\n\n\n      <!-- email -->\n      <div *ngIf=\"!showEditAll\">\n        <p class=\"profile-subtitle\">Email: <span class=\"profile-output\">{{user.email}}</span>\n          <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditAll=true\">edit</button> -->\n        </p>\n      </div>\n      <div *ngIf=\"showEditAll\">\n          <mat-form-field>\n        <input matInput (keydown.enter)=\"sendModification()\" type=\"text\" [(ngModel)]=\"user.email\">\n      </mat-form-field>\n      </div>\n\n         <!-- Belief -->\n         <div *ngIf=\"!showEditAll\">\n            <p class=\"profile-subtitle\">Your Belief:  <span class=\"profile-output\"> <b> {{user.belief}}</b></span>\n              <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditAll=true\">edit</button> -->\n            </p>\n          </div>\n          <div *ngIf=\"showEditAll\">\n              <mat-form-field>\n            <input matInput (keydown.enter)=\"sendModification()\" type=\"text\" [(ngModel)]=\"user.belief\">\n          </mat-form-field>\n          </div>\n\n           <!-- Citation -->\n         <div *ngIf=\"!showEditAll\">\n            <p class=\"profile-subtitle\">One of your favourite citation: <i> <span class=\"profile-output\">{{user.citation}}</span></i>\n              <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditAll=true\">edit</button> -->\n            </p>\n          </div>\n          <div *ngIf=\"showEditAll\">\n              <mat-form-field>\n            <input matInput (keydown.enter)=\"sendModification()\" type=\"text\" [(ngModel)]=\"user.citation\">\n          </mat-form-field>\n          </div>\n\n      <!-- AverageBoredTimePerWeek -->\n      <div *ngIf=\"!showEditAll\">\n        <p class=\"profile-subtitle\">#Bored moments per week: <span class=\"profile-output\">{{user.averageBoredTimePerWeek}} h</span>\n          <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditAll=true\">edit</button> -->\n        </p>\n      </div>\n      <div *ngIf=\"showEditAll\">\n          <mat-form-field>\n        <input matInput (keydown.enter)=\"sendModification()\" type=\"number\" [(ngModel)]=\"user.averageBoredTimePerWeek\">\n      </mat-form-field>\n      <br>\n      </div>\n\n      <!-- image -->\n     \n\n\n   \n  </div>\n</section>\n\n<button class=\"edit-proposition\" style=\"margin-left: 28px;\" mat-raised-button color=\"primary\" class=\"edit\" (click)=\"changeProposition()\">Edit Proposition</button>\n\n<br>\n\n<section class=\"edit-proposition-section\" *ngIf=\"proposi\">\n\n\n\n  <!-- title -->\n  \n  <div *ngIf=\"!showEditTitle\">\n      <p class=\"profile-subtitle\"> <strong>Proposition Title: </strong>  <span class=\"proposition-output\">{{proposi.title}}</span> \n        <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditTitle=true\">edit</button> -->\n      </p>\n    </div>\n\n    <div *ngIf=\"showEditTitle\">\n        <mat-form-field>\n      <input matInput(keydown.enter)=\"sendProposiModification()\" type=\"text\" [(ngModel)]=\"proposi.title\">\n    </mat-form-field>\n    </div>\n\n    <div *ngIf=\"!showEditLocation\">\n        <p class=\"profile-subtitle\"> <strong>Location: </strong> <span class=\"proposition-output\">{{proposi.location}}</span> \n          <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditLocation=true\">edit</button> -->\n        </p>\n      </div>\n  \n      <div *ngIf=\"showEditLocation\">\n          <mat-form-field>\n        <input matInput(keydown.enter)=\"sendProposiModification()\" type=\"text\" [(ngModel)]=\"proposi.location\">\n      </mat-form-field>\n      </div>\n\n      <div *ngIf=\"!showEditHour\">\n          <p class=\"profile-subtitle\"> <strong>Set Hour: </strong> <span class=\"proposition-output\">{{proposi.startTimeHour}}</span>\n            <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditHour=true\">edit</button> -->\n          </p>\n        </div>\n    \n        <div *ngIf=\"showEditHour\">\n            <mat-form-field>\n          <input matInput(keydown.enter)=\"sendProposiModification()\" type=\"text\" [(ngModel)]=\"proposi.startTimeHour\">\n        </mat-form-field>\n        </div>\n\n\n\n        <div *ngIf=\"!showEditDate\">\n            <p class=\"profile-subtitle\"> <strong>Set Date: </strong> <span class=\"proposition-output\">{{proposi.startTimeDate | date: 'fullDate'}}</span>\n              <!-- <button mat-raised-button class=\"edit\" (click)=\"showEditDate=true\">edit</button> -->\n            </p>\n          </div>\n      \n          <div *ngIf=\"showEditDate\">\n              <mat-form-field>\n            <input matInput(keydown.enter)=\"sendProposiModification()\" type=\"text\" [(ngModel)]=\"proposi.startTimeDate\">\n          </mat-form-field>\n          </div>\n  \n\n</section>\n\n\n\n\n<div class=\"delete-button\">\n    <button  mat-raised-button color=\"warn\" (click)=\"deleteProfile()\">Delete my profile</button>\n  </div>"

/***/ }),

/***/ "./src/app/private-profile-7/private-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__ = __webpack_require__("./src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_proposition_service__ = __webpack_require__("./src/app/services/user-proposition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Autocomplete methode to check
// import { MapsAPILoader } from '@agm/core';
var PrivateProfileComponent = /** @class */ (function () {
    function PrivateProfileComponent(AuthService, route, router, propositionService) {
        this.AuthService = AuthService;
        this.route = route;
        this.router = router;
        this.propositionService = propositionService;
        this.showEditAll = false;
        this.showEditProposition = true;
        this.showEditUsername = false;
        this.showEditLastName = false;
        this.showEditAge = false;
        this.showEditphoneNumber = false;
        this.showEditEmail = false;
        this.showEditBelief = false;
        this.showEditCitation = false;
        this.showEditAverageBoredTimePerWeek = false;
        this.showEditTitle = false;
        this.showEditLocation = false;
        this.showEditHour = false;
        this.showEditDate = false;
        // showEditPhone: Boolean = false;
        // showEditAdress: Boolean = false;
        this.base_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].base_URL;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({});
    }
    PrivateProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.sendloggedin()
            .subscribe(function (user) {
            _this.user = user;
            _this.uploader.options.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].base_URL + ("/api/auth/" + _this.user._id + "/addimg");
            // `http://localhost:3000/api/auth/${this.user._id}/addimg`;
        });
        this.getDaPropositionById();
    };
    PrivateProfileComponent.prototype.changeShow = function () {
        this.showEditAll = true;
    };
    PrivateProfileComponent.prototype.changeProposition = function () {
        this.showEditProposition = true;
    };
    PrivateProfileComponent.prototype.getDaPropositionById = function () {
        var _this = this;
        this.propositionService.getAllPropositions()
            .subscribe(function (propos) {
            _this.proposi = propos[propos.length - 1];
        });
    };
    // sent changes
    PrivateProfileComponent.prototype.sendModification = function () {
        var _this = this;
        this.AuthService.patchItem(this.user)
            .subscribe(function (user) {
            _this.user = user;
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
    };
    PrivateProfileComponent.prototype.sendProposiModification = function () {
        var _this = this;
        this.propositionService.changeProposition(this.proposi)
            .subscribe(function (prop) {
            _this.proposi = prop;
        });
        this.showEditTitle = false;
        this.showEditLocation = false;
        this.showEditHour = false;
        this.showEditDate = false;
        this.showEditProposition = false;
    };
    PrivateProfileComponent.prototype.updatePhoto = function () {
        var _this = this;
        this.uploader.queue[0].method = 'PATCH';
        console.log('voy a subir archivo');
        // form es un objeto interno de la instancia FileUploader
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function () { return _this.router.navigate(["main-page"]); };
    };
    PrivateProfileComponent.prototype.deleteProfile = function () {
        var _this = this;
        if (!confirm('Are you certain about leaving Bored Int. Great Network ?'))
            return;
        this.AuthService.removeItem(this.user)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    PrivateProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-private-profile',
            template: __webpack_require__("./src/app/private-profile-7/private-profile.component.html"),
            styles: [__webpack_require__("./src/app/private-profile-7/private-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_proposition_service__["a" /* UserPropositionService */]])
    ], PrivateProfileComponent);
    return PrivateProfileComponent;
}());



/***/ }),

/***/ "./src/app/proposition-overview-8/proposition-overview.component.css":
/***/ (function(module, exports) {

module.exports = ".prop-overview{\n    width: 100%;\n    height: 100%;\n    padding-left: 5%;\n    padding-top: 1%;\n    background-color: #FEFAEC;\n}\n\n.user-info{\n    line-height: 1.8;\n    list-style-type: none;\n}\n\n.proposi-title{\n    color:#0081C6;\n    font-weight: 500;\n    line-height: 1.8;\n}\n\n.proposi-info{\n    color:#00BBF0;\n    line-height: 1.8;\n}\n\n/* p.ng-star-inserted{\n    color:rebeccapurple;\n}\n\n.prop-overview input{\n    background-repeat:repeat-x;\n    border: 0px solid blue;\n    height:25px;\n    width:125px;\n} */"

/***/ }),

/***/ "./src/app/proposition-overview-8/proposition-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<div class=\"prop-overview\"> \n\n\n\n\n<div *ngIf=\"user\">\n\n\n  <h3><img id=\"photo\" [src]=\"base_URL + user.image\" alt=\"doesn't work\"> {{user.username}} {{user.lastName}} Profile: </h3>\n  <ul>\n    \n    <li class=\"user-info\" ><strong >{{user.age}}</strong> years old</li>\n    <li class=\"user-info\"><strong >Her belief: </strong>{{user.belief}}</li>\n    <li class=\"user-info\"><strong >Citation: </strong>{{user.citation}}</li>\n    <li class=\"user-info\"> <strong >{{user.username}}' mail:</strong> {{user.email}}  </li>\n    <li class=\"user-info\"><strong >{{user.username}}' PhoneNumber:</strong> {{user.phoneNumber}}</li>\n    <!-- <li>{{user.image}}</li> -->\n  </ul>\n\n<hr style=\"width:80%;line-height: 2; \">\n\n<h2>{{user.username}}' <i> #UNBORED </i>Way Out:</h2>\n</div>\n\n<div *ngIf=\"proposi\">\n<h3> Proposition: <span class=\"proposi-title\">{{proposi.title}}</span></h3>\n<ul>\n  <li>  <strong>What Time ?</strong> <span class=\"proposi-info\"> {{proposi.startTimeHour}}</span></li>\n  <li> <strong>When ?</strong> <span class=\"proposi-info\"> {{proposi.startTimeDate | date: 'fullDate'}}</span> </li>\n  <!-- <li>{{proposi.endTimeHour}}</li> -->\n  <li> <strong>Where ?</strong>  <span class=\"proposi-info\"> {{proposi.location}}</span> </li>\n  \n</ul>\n\n<mat-checkbox> <i class=\"material-icons\">chat</i> <strong>Let's Chat!</strong> </mat-checkbox>\n\n<!-- \n<div *ngIf=\"single\">\n\n  <h1>{{single.name}}</h1>\n  <h3>{{single.brand}}</h3>    \n  <div *ngFor=\"let spec of single.specs\">\n    <li>{{spec}}</li>\n  </div>\n  <img id=\"photo\" [src]=\"single.image\">\n\n</div> -->\n<div class=\"da-chat\"> \n<app-chat [theUserId]=\"user._id\" ></app-chat>\n</div>\n\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/proposition-overview-8/proposition-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropositionOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__ = __webpack_require__("./src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_proposition_service__ = __webpack_require__("./src/app/services/user-proposition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropositionOverviewComponent = /** @class */ (function () {
    function PropositionOverviewComponent(AuthService, propositionService, activateRouter) {
        this.AuthService = AuthService;
        this.propositionService = propositionService;
        this.activateRouter = activateRouter;
        this.base_URL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].base_URL;
    }
    PropositionOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.sendloggedin()
            .subscribe(function (user) {
            _this.user = user;
        });
        this.getDaPropositionById();
        this.getDaUserById();
        // para dibujarlas en una parte tipo: historical de actividades
        this.getDaPropositions();
        console.log(this.activateRouter.params['id']);
    };
    PropositionOverviewComponent.prototype.getDaUserById = function () {
        var _this = this;
        this.activateRouter.params.subscribe(function (params) {
            _this.AuthService.getUserById(params['id'])
                .subscribe(function (singleUser) { return _this.user = singleUser; });
        });
    };
    PropositionOverviewComponent.prototype.getDaPropositionById = function () {
        var _this = this;
        this.activateRouter.params.subscribe(function (params) {
            _this.propositionService.getOneProposition(params['propid'])
                .subscribe(function (propos) { return _this.proposi = propos; });
        });
    };
    PropositionOverviewComponent.prototype.getDaPropositions = function () {
        var _this = this;
        this.propositionService.getAllPropositions()
            .subscribe(function (propostion) {
            _this.propositionList = propostion;
            console.log(_this.propositionList);
        });
    };
    PropositionOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-proposition-overview',
            template: __webpack_require__("./src/app/proposition-overview-8/proposition-overview.component.html"),
            styles: [__webpack_require__("./src/app/proposition-overview-8/proposition-overview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_proposition_service__["a" /* UserPropositionService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], PropositionOverviewComponent);
    return PropositionOverviewComponent;
}());



/***/ }),

/***/ "./src/app/services/user-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserAuthService = /** @class */ (function () {
    function UserAuthService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].base_URL + '/api/auth';
    }
    // OTRA FORMA DE MOSTRAR EL ERROR SI NO HAY ALERT
    // handleError(e) {
    //   return Observable.throw(e.json().message);
    // }
    UserAuthService.prototype.sendsignup = function (user) {
        return this.http.post(this.BASE_URL + "/signup", user, { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            alert(JSON.parse(err._body).message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    UserAuthService.prototype.sendlogin = function (user) {
        return this.http.post(this.BASE_URL + "/login", user, { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            alert(JSON.parse(err._body).message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        // OTRO TIPO DE CATCH A CHECAR DIF
        //   .catch(err => {
        //     console.log(err);
        //     return Observable.throw(err);
        // });
    };
    UserAuthService.prototype.sendloggedin = function () {
        return this.http.get(this.BASE_URL + "/loggedin", { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            alert(JSON.parse(err._body).message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    UserAuthService.prototype.sendlogout = function () {
        return this.http.post(this.BASE_URL + "/logout", {})
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            alert(JSON.parse(e._body).message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    UserAuthService.prototype.getAllUsers = function () {
        return this.http.get(this.BASE_URL + "/all", {})
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            alert(JSON.parse(e._body).message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    UserAuthService.prototype.getUserById = function (id) {
        return this.http.get(this.BASE_URL + "/" + id, {})
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            alert(JSON.parse(e._body).message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    UserAuthService.prototype.removeItem = function (item) {
        return this.http.delete(this.BASE_URL + "/" + item._id, item)
            .map(function (res) { return res.json(); })
            .map(function (item) { return item; })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    UserAuthService.prototype.patchItem = function (item) {
        return this.http.patch(this.BASE_URL + "/" + item._id, item)
            .map(function (res) { return res.json(); })
            .map(function (item) { return item; })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    UserAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserAuthService);
    return UserAuthService;
}());



/***/ }),

/***/ "./src/app/services/user-proposition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPropositionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserPropositionService = /** @class */ (function () {
    function UserPropositionService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].base_URL + '/api/proposition';
    }
    UserPropositionService.prototype.sendNewProposition = function (proposition) {
        return this.http.post(this.BASE_URL + "/new", proposition)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            alert(JSON.parse(err._body).message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    UserPropositionService.prototype.getAllPropositions = function () {
        return this.http.get(this.BASE_URL + "/all")
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            alert(JSON.parse(err._body).message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    UserPropositionService.prototype.getOneProposition = function (id) {
        return this.http.get(this.BASE_URL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            alert(JSON.parse(err._body).message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    UserPropositionService.prototype.changeProposition = function (item) {
        return this.http.patch(this.BASE_URL + "/" + item._id, item)
            .map(function (res) { return res.json(); })
            .map(function (item) { return item; })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    UserPropositionService.prototype.deleteProposition = function () {
    };
    UserPropositionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserPropositionService);
    return UserPropositionService;
}());



/***/ }),

/***/ "./src/app/signup-form-3/signup-form.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\n      height: 300px;\n    }\n\n    .signup-form{\n      text-align: center;\n    \n    }\n\n    #signup-button{\n      font-size: 1.8rem;\n    }"

/***/ }),

/***/ "./src/app/signup-form-3/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"signup-form\">\n\n<form (ngSubmit)=\"sendsignup(myForm)\" #myForm=\"ngForm\">\n\n    <mat-form-field>\n  <input matInput name=\"username\" [(ngModel)]=\"username\" type=\"text\" placeholder=\"Your name:\">\n</mat-form-field>\n  <br>\n  <mat-form-field>\n  <input matInput name=\"lastName\" [(ngModel)]=\"lastName\" type=\"text\" placeholder=\"Your last name:\">\n</mat-form-field>\n  <br>\n  <mat-form-field>\n  <input matInput name=\"age\" [(ngModel)]=\"age\" type=\"number\" placeholder=\"Your age:\">\n</mat-form-field>\n  <br> \n  <mat-form-field>\n  <input matInput name=\"phoneNumber\" [(ngModel)]=\"phoneNumber\" type=\"number\" placeholder=\"Your Phone Number:\">\n</mat-form-field>\n  <br>\n   <!-- address -->\n   <!-- pour l edit !!! -->\n   <!-- <div *ngIf=\"!showEditAddress\">\n    <p>Address: {{user.location.address}} <span class=\"edit\"  (click)=\"showEditaddress=true ; getReadyAutocomplete()\">edit</span></p>\n  </div> \n  <div *ngIf=\"showEditaddress\"> -->\n      <!-- <p>Address: {{user.location.adress}} <span class=\"edit\"  (click)=\"showEditAdress=true ; getReadyAutocomplete()\">edit</span></p> -->\n     <div>\n        <mat-form-field>\n    <input matInput autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"   #search name=\"location\" placeholder=\"Your bored usual location\" type=\"text\"  [(ngModel)]=\"location\" >\n  </mat-form-field>\n    \n  </div>      \n\n            <br>\n            <mat-form-field>\n  <input matInput name=\"email\" [(ngModel)]=\"email\" type=\"text\" placeholder=\"Your email:\">\n  \n</mat-form-field>\n  <br>\n\n    <input  type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />      \n\n\n  <br>\n  <mat-form-field>\n  <input matInput name=\"averageBoredTimePerWeek\" [(ngModel)]=\"averageBoredTimePerWeek\" type=\"number\" placeholder=\"Number of hours you use to get bored per week\">\n</mat-form-field>\n  <br>\n  <br>\n  <mat-form-field>\n  <input matInput name=\"password\" [(ngModel)]=\"password\" [type]=\"hide ? 'password' : 'text'\" placeholder=\"Your Password\">\n  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n</mat-form-field>\n  <br>\n  <mat-form-field>\n  <input matInput name=\"password2\" [(ngModel)]=\"password2\" [type]=\"hide ? 'password' : 'text'\" placeholder=\"Confirm Password\">\n  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n</mat-form-field>\n  <br>\n  <button id=\"signup-button\" mat-button color=\"primary\" type=\"submit\">Signup !</button>\n  <!-- <button *ngIf=\"password !== password2\" disabled>Signup !</button> -->\n\n</form>\n</div>\n<!-- *ngIf=\"password === password2\" -->"

/***/ }),

/***/ "./src/app/signup-form-3/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__ = __webpack_require__("./src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(service, router, route, mapsAPILoader, ngZone) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.coordinates = [];
        // por defecto hace una llamada post a nuestro back-end
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].base_URL + "/api/auth/signup"
        });
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        this.getReadyAutocomplete();
    };
    SignupFormComponent.prototype.sendsignup = function (newUser) {
        var _this = this;
        console.log(newUser.value);
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('username', newUser.value.username);
            form.append('lastName', newUser.value.lastName);
            form.append('age', newUser.value.age);
            form.append('email', newUser.value.email);
            form.append('phoneNumber', newUser.value.phoneNumber);
            form.append('address', newUser.value.location);
            form.append('lat', _this.coordinates[0]);
            form.append('lng', _this.coordinates[1]);
            form.append('averageBoredTimePerWeek', newUser.value.averageBoredTimePerWeek);
            form.append('password', newUser.value.password);
        };
        console.log('subiendo');
        this.uploader.uploadAll(); // post Call to Url
        this.uploader.onCompleteItem = function () { return _this.router.navigate(['login']); }; // como el subscribe el onCompleteItem
    };
    SignupFormComponent.prototype.getReadyAutocomplete = function () {
        var _this = this;
        //  load Places Autocomplete
        this.mapsAPILoader.load()
            .then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    //  get the place result
                    var place = autocomplete.getPlace();
                    //  verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //  set latitude, longitude and
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    console.log(_this.latitude);
                    console.log(_this.longitude);
                    _this.coordinates = [_this.latitude, _this.longitude];
                    console.log(_this.coordinates);
                    // this.user.location.coordinates = [this.latitude, this.longitude];
                    //  no guarda lasmodificaciones
                });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SignupFormComponent.prototype, "searchElementRef", void 0);
    SignupFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__("./src/app/signup-form-3/signup-form.component.html"),
            styles: [__webpack_require__("./src/app/signup-form-3/signup-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    base_URL: ''
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    base_URL: ''
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map