(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tutor_search_tutor_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutor-search/tutor-search.component */ "./src/app/tutor-search/tutor-search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_tutorsearch_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/tutorsearch.service.client */ "./src/app/services/tutorsearch.service.client.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/parent/parent.component.ts");
/* harmony import */ var _user_admin_user_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-admin/user-admin.component */ "./src/app/user-admin/user-admin.component.ts");
/* harmony import */ var _services_parent_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/parent.service.client */ "./src/app/services/parent.service.client.ts");
/* harmony import */ var _services_student_service_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/student.service.client */ "./src/app/services/student.service.client.ts");
/* harmony import */ var _services_tutor_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/tutor.service.client */ "./src/app/services/tutor.service.client.ts");
/* harmony import */ var _appt_maker_appt_maker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./appt-maker/appt-maker.component */ "./src/app/appt-maker/appt-maker.component.ts");
/* harmony import */ var _services_appointment_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/appointment.service.client */ "./src/app/services/appointment.service.client.ts");
/* harmony import */ var _services_subject_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/subject.service.client */ "./src/app/services/subject.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _parent_parent_component__WEBPACK_IMPORTED_MODULE_12__["ParentComponent"],
                _user_admin_user_admin_component__WEBPACK_IMPORTED_MODULE_13__["UserAdminComponent"],
                _tutor_search_tutor_search_component__WEBPACK_IMPORTED_MODULE_3__["TutorSearchComponent"],
                _appt_maker_appt_maker_component__WEBPACK_IMPORTED_MODULE_17__["ApptMakerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"]
            ],
            providers: [
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_11__["UserServiceClient"],
                _services_parent_service_client__WEBPACK_IMPORTED_MODULE_14__["ParentServiceClient"],
                _services_student_service_client__WEBPACK_IMPORTED_MODULE_15__["StudentServiceClient"],
                _services_tutor_service_client__WEBPACK_IMPORTED_MODULE_16__["TutorServiceClient"],
                _services_tutorsearch_service_client__WEBPACK_IMPORTED_MODULE_5__["SearchServiceClient"],
                _services_appointment_service_client__WEBPACK_IMPORTED_MODULE_18__["AppointmentServiceClient"],
                _services_subject_service_client__WEBPACK_IMPORTED_MODULE_19__["SubjectServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _user_admin_user_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-admin/user-admin.component */ "./src/app/user-admin/user-admin.component.ts");
/* harmony import */ var _appt_maker_appt_maker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appt-maker/appt-maker.component */ "./src/app/appt-maker/appt-maker.component.ts");
/* harmony import */ var _tutor_search_tutor_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tutor-search/tutor-search.component */ "./src/app/tutor-search/tutor-search.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/parent/parent.component.ts");









var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'user-admin', component: _user_admin_user_admin_component__WEBPACK_IMPORTED_MODULE_5__["UserAdminComponent"] },
    { path: 'schedular/:userId', component: _appt_maker_appt_maker_component__WEBPACK_IMPORTED_MODULE_6__["ApptMakerComponent"] },
    { path: 'search', component: _tutor_search_tutor_search_component__WEBPACK_IMPORTED_MODULE_7__["TutorSearchComponent"] },
    { path: 'parent', component: _parent_parent_component__WEBPACK_IMPORTED_MODULE_8__["ParentComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/appt-maker/appt-maker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/appt-maker/appt-maker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appt-maker/appt-maker.component.html":
/*!******************************************************!*\
  !*** ./src/app/appt-maker/appt-maker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Scheduler</h2>\n\n<div class=\"container\">\n  <table>\n    <thead>\n    <tr>\n      <th>Appointment Name</th>\n      <th>Subject Title</th>\n      <th>Start Time</th>\n      <th>End Time</th>\n      <th>Type</th>\n    </tr>\n    <tr>\n      <th><input type=\"text\"\n                 placeholder=\"Mary Sue Math Appt\"\n                 [(ngModel)]=\"name\"\n                 class=\"form-control\"/> </th>\n      <th><input type=\"text\"\n                 placeholder=\"Math\"\n                 [(ngModel)]=\"subjectTitle\"\n                 class=\"form-control\"/> </th>\n      <th><input type=\"datetime-local\"\n                 placeholder=\"yyyy-mm-dd hh:ii\"\n                 [(ngModel)]=\"startTime\"\n                 class=\"form-control\"/></th>\n      <th><input type=\"datetime-local\"\n                 placeholder=\"yyyy-mm-dd hh:ii\"\n                 [(ngModel)]=\"endTime\"\n                 class=\"form-control\"/></th>\n      <th><select [(ngModel)]=\"apptType\" class=\"form-control\">\n        <option value=\"virtual\">Virtual</option>\n        <option value=\"inPerson\">In-Person</option>\n      </select></th>\n      <th><span class=\"float-right\" style=\"white-space: nowrap\">\n      \t\t\t<button (click)=\"createAppointment(name, subjectTitle, startTime, endTime, apptType)\" class=\"btn btn-primary\">Add Appointment</button>\n  \t\t\t\t</span></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let appointment of appointments\">\n      <td>{{appointment.name}}</td>\n      <div *ngIf=\"appointment.subject === null\">\n        <td></td>\n      </div>\n      <div *ngIf=\"appointment.subject !== null\">\n        <td>{{appointment.subject.title}}</td>\n      </div>\n      <td>{{appointment.startTime}}</td>\n      <td>{{appointment.endTime}}</td>\n      <td>{{appointment.apptType}}</td>\n      <td><button (click)=\"deleteAppointment(appointment.id)\" class=\"btn btn-danger\">Delete</button>\n      </td>\n      <td><button (click)=\"schedule(appointment.id)\" class=\"btn btn-primary\">Schedule</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n  <a routerLink=\"/home\" class=\"btn btn-outline-primary btn-block\">Home</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/appt-maker/appt-maker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/appt-maker/appt-maker.component.ts ***!
  \****************************************************/
/*! exports provided: ApptMakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApptMakerComponent", function() { return ApptMakerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_appointment_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/appointment.service.client */ "./src/app/services/appointment.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_subject_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/subject.service.client */ "./src/app/services/subject.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApptMakerComponent = /** @class */ (function () {
    function ApptMakerComponent(aRoute, service, uService, subService) {
        var _this = this;
        this.aRoute = aRoute;
        this.service = service;
        this.uService = uService;
        this.subService = subService;
        this.appointments = [];
        this.studentId = null;
        this.subjectID = null;
        this.aRoute.params.subscribe(function (params) { return _this.loadAppt(params['userId']); });
    }
    ApptMakerComponent.prototype.loadAppt = function (userId) {
        var _this = this;
        this.tutorId = userId;
        this.service.findTutorApptByID(userId)
            .then(function (appointments) { return _this.appointments = appointments; });
    };
    ApptMakerComponent.prototype.createAppointment = function (name, subjectTitle, startTime, endTime, apptType) {
        var _this = this;
        this.subService.findSubjectByName(subjectTitle)
            .then(function (subject) {
            _this.subjectID = subject.id;
            console.log(_this.subjectID);
            if (_this.studentId === null) {
                _this.service
                    .createAppt(name, _this.subjectID, startTime, endTime, _this.tutorId, apptType)
                    .then(function () {
                    _this.loadAppt(_this.tutorId);
                });
            }
            else {
                alert("Please contact your tutor: Only tutors can create appts");
            }
        });
    };
    ApptMakerComponent.prototype.findSubjectForID = function (apptId) {
        var _this = this;
        this.service.findSubjectForAppt(apptId)
            .then(function (subject) { return _this.subject = subject; });
    };
    ApptMakerComponent.prototype.schedule = function (apptId) {
        if (this.studentId === null) {
            alert("Only students are allowed to schedule");
        }
        else {
            this.service.scheduleAppt(apptId, this.studentId)
                .then(function () {
                alert('You have been scheduled');
            });
        }
    };
    ApptMakerComponent.prototype.deleteAppointment = function (apptId) {
        var _this = this;
        this.service.deleteAppt(apptId)
            .then(function () { return _this.loadAppt(_this.tutorId); });
    };
    ApptMakerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uService.profile()
            .then(function (user) {
            _this.userType = user.userType;
            if (_this.userType === 'student') {
                _this.studentId = user.id;
            }
        });
    };
    ApptMakerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appt-maker',
            template: __webpack_require__(/*! ./appt-maker.component.html */ "./src/app/appt-maker/appt-maker.component.html"),
            styles: [__webpack_require__(/*! ./appt-maker.component.css */ "./src/app/appt-maker/appt-maker.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_appointment_service_client__WEBPACK_IMPORTED_MODULE_2__["AppointmentServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _services_subject_service_client__WEBPACK_IMPORTED_MODULE_4__["SubjectServiceClient"]])
    ], ApptMakerComponent);
    return ApptMakerComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  font-size: 14px;\n}\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n.mb-3, .my-3 {\n  margin-bottom: -0.5rem !important;\n}\n.locations {\n  padding-top: 10px;\n}\n.main {\n  background-image: url(\"https://78.media.tumblr.com/0ebe5b25fd811d5084fcd1be0b1b2c21/tumblr_nc3u4sSFdy1smv9jio1_500.gif\");\n  background-size:100%;\n}\n.container {\n  max-width: 960px;\n}\n.pricing-header {\n  max-width: 700px;\n  height: 300px;\n  color: white;\n  font-weight: bold;\n}\n.card-deck .card {\n  min-width: 220px;\n}\n.border-top { border-top: 1px solid #e5e5e5; }\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, 0); }\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">Tutoring Management</h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"p-2 text-dark\" routerLink=\"/login\">Login</a>\n  </nav>\n  <a class=\"btn btn-outline-primary\" routerLink=\"/register\">Sign up</a>\n</div>\n\n<div class = \"container-fluid main\">\n<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n  <h1 class=\"display-4\">Welcome!</h1>\n  <p class=\"lead\">We connect students with tutors by location, allowing students to spend more time learning\n  from their tutors than looking for them.</p>\n</div>\n</div>\n\n<div class=\"container-fluid text-center locations\">\n  <h3>Tutors at {{locations.length}} locations!</h3>\n  <div class=\"card-deck mb-3 text-center\">\n      <div class=\"card mb-4 box-shadow\" *ngFor=\"let location of locations\">\n        <div routerLink=\"/register\" class=\"card-header\">\n          <h4 class=\"my-0 font-weight-normal\">{{location}}</h4>\n        </div>\n  </div>\n  </div>\n  </div>\n\n\n<div class=\"container-fluid text-center\">\n  <h3>for {{subjects.length}} subjects</h3>\n  <div class=\"card-deck mb-3 text-center\">\n    <div class=\"card mb-4 box-shadow\" *ngFor=\"let subject of subjects\">\n      <div routerLink=\"/register\" class=\"card-header\">\n        <h4 class=\"my-0 font-weight-normal\">{{subject}}</h4>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tutor_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tutor.service.client */ "./src/app/services/tutor.service.client.ts");
/* harmony import */ var _services_subject_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/subject.service.client */ "./src/app/services/subject.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(tutorService, subjectService) {
        this.tutorService = tutorService;
        this.subjectService = subjectService;
        this.tutors = [];
        this.subjects = [];
        this.locations = [];
    }
    HomeComponent.prototype.loadTutors = function () {
        var _this = this;
        this.tutorService.findAllTutors()
            .then(function (tutors) {
            _this.tutors = tutors;
            tutors.forEach(function (tutor) {
                _this.locations.push(tutor.city);
            });
        });
    };
    HomeComponent.prototype.loadSubjects = function () {
        var _this = this;
        this.subjectService.findSubjects()
            .then(function (subjects) {
            subjects.forEach(function (subject) {
                _this.subjects.push(subject.title);
            });
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.loadTutors();
        this.loadSubjects();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tutor_service_client__WEBPACK_IMPORTED_MODULE_1__["TutorServiceClient"],
            _services_subject_service_client__WEBPACK_IMPORTED_MODULE_2__["SubjectServiceClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbody {\n  height: 100%;\n}\n\n.button-box {\n  text-align:center;\n  margin-top:10px;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\n<div class=\"container-fluid\">\n  <form class=\"form-signin\">\n  <h1>Login</h1>\n\n  <div class=\"form-group row\">\n    <input [(ngModel)]=\"username\"\n           [ngModelOptions]=\"{standalone: true}\"\n           placeholder=\"username\"\n           class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group row\">\n    <input [(ngModel)]=\"password\"\n           [ngModelOptions]=\"{standalone: true}\"\n           placeholder=\"password\"\n           class=\"form-control\"\n           type=\"password\"/>\n  </div>\n\n  <div class=\"form-group row\">\n    <button (click)=\"login(username, password)\"\n            class=\"btn btn-primary btn-block\">\n      Login\n    </button>\n  </div>\n\n  <div class=\"form-group row\">\n      <button routerLink=\"/register\"\n              class=\"btn btn-outline-dark btn-block\">\n        Register\n      </button>\n      <button routerLink=\"/home\"\n              class=\"btn btn-outline-dark btn-block\">\n        Home\n      </button>\n  </div>\n\n\n  </form>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.service.login(username, password)
            .then(function (response) {
            if (response.status === 200) {
                _this.router.navigate(['profile']);
            }
            else {
                alert('no such user exists');
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/parent/parent.component.css":
/*!*********************************************!*\
  !*** ./src/app/parent/parent.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item.active.webdev {\n  z-index: 2;\n  color: #fff;\n  background-color: #00a8ff;\n  border-color: #00a8ff;\n}\n"

/***/ }),

/***/ "./src/app/parent/parent.component.html":
/*!**********************************************!*\
  !*** ./src/app/parent/parent.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1> Parent Id: {{parentId}}</h1>\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">Students</li>\n        <li *ngFor=\"let student of children\"\n            class=\"list-group-item webdev\"\n            [ngClass]=\"{'active': student.id === selectedStudentId}\"\n            (click)=\"selectStudent(student.id)\">\n          {{student.username}} ({{student.firstName}} {{student.lastName}})\n          <button (click)=\"deleteStudent(student.id)\" class=\"btn btn-danger float-right\">\n            x </button>\n        </li>\n      </ul>\n      <input [(ngModel)]=\"toAddUsername\"\n             placeholder=\"student username\"\n             class=\"form-control\">\n      <button (click)=\"addStudent(toAddUsername)\" class=\"btn btn-primary btn-block\">\n        + </button>\n    </div>\n\n        <div class=\"col-8\">\n          <h2> Appointments for Student </h2>\n          <ul class=\"list-group\">\n            <li *ngFor=\"let appt of appointments\"\n                class=\"list-group-item\">\n              Name: {{appt.name}} <br>\n              Where: {{appt.apptType}} <br>\n              End Time: {{appt.endTime}}\n            </li>\n          </ul>\n        </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/parent/parent.component.ts":
/*!********************************************!*\
  !*** ./src/app/parent/parent.component.ts ***!
  \********************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_parent_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/parent.service.client */ "./src/app/services/parent.service.client.ts");
/* harmony import */ var _services_student_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/student.service.client */ "./src/app/services/student.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParentComponent = /** @class */ (function () {
    function ParentComponent(parentService, studentService) {
        this.parentService = parentService;
        this.studentService = studentService;
        this.children = [];
        this.appointments = [];
        this.selectedStudentId = 0;
    }
    ParentComponent.prototype.selectStudent = function (studentId) {
        var _this = this;
        this.selectedStudentId = studentId;
        this.studentService.findApptsForStudent(studentId)
            .then(function (appointments) {
            console.log(appointments);
            _this.appointments = appointments;
        });
    };
    ParentComponent.prototype.addStudent = function (toAddUsername) {
        var _this = this;
        console.log(toAddUsername);
        this.studentService.findStudentByUsername(toAddUsername)
            .then(function (student) {
            _this.parentService.addStudent(_this.parentId, student[0])
                .then(function (response) {
                _this.loadChildren();
                _this.toAddUsername = null;
            });
        });
    };
    ParentComponent.prototype.deleteStudent = function (studentId) {
        var _this = this;
        this.parentService.deleteStudentFromParent(this.parentId, studentId)
            .then(function () {
            _this.loadChildren();
        });
    };
    ParentComponent.prototype.loadChildren = function () {
        var _this = this;
        this.parentService.findAllChildrenForParent(this.parentId)
            .then(function (children) {
            console.log(children);
            _this.children = children;
        });
    };
    ParentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentService.profile()
            .then(function (parent) {
            _this.parentId = parent.id;
            _this.parentService.findAllChildrenForParent(_this.parentId)
                .then(function (children) {
                _this.children = children;
            });
        });
    };
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/parent/parent.component.html"),
            styles: [__webpack_require__(/*! ./parent.component.css */ "./src/app/parent/parent.component.css")]
        }),
        __metadata("design:paramtypes", [_services_parent_service_client__WEBPACK_IMPORTED_MODULE_1__["ParentServiceClient"],
            _services_student_service_client__WEBPACK_IMPORTED_MODULE_2__["StudentServiceClient"]])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Profile</h1>\n\n  <div class=\"form-group\">\n  <label for=\"username\">Username</label>\n  <input [(ngModel)]=\"username\"\n         [ngModelOptions]=\"{standalone: true}\"\n         placeholder=\"username\"\n         class=\"form-control\"\n         id=\"username\"readonly/>\n  </div>\n\n  <div class=\"form-group\">\n  <label for=\"userType\">Role</label>\n  <select [(ngModel)]=\"userType\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id = \"userType\" disabled>\n    <option selected value = \"student\">student</option>\n    <option value = \"tutor\">tutor</option>\n    <option value = \"parent\">parent</option>\n    <option value = \"admin\">admin</option>\n  </select>\n  </div>\n\n  <div class=\"form-group\">\n  <label for=\"firstName\">First Name</label>\n  <input [(ngModel)]=\"firstName\"\n         [ngModelOptions]=\"{standalone: true}\"\n         placeholder=\"first name\"\n         class=\"form-control\"\n         id=\"firstName\"/>\n  </div>\n\n  <div class=\"form-group\">\n  <label for=\"lastName\">Last Name</label>\n  <input [(ngModel)]=\"lastName\"\n         [ngModelOptions]=\"{standalone: true}\"\n         placeholder=\"lastName\"\n         class=\"form-control\"\n         id = \"lastName\" />\n  </div>\n\n  <div class=\"form-group\">\n  <label for=\"email\">Email</label>\n  <input [(ngModel)]=\"email\"\n         [ngModelOptions]=\"{standalone: true}\"\n         placeholder=\"email\"\n         class=\"form-control\"\n         id = \"email\"/>\n  </div>\n\n  <div class=\"form-group\" *ngIf = \"userType === 'tutor'\">\n  <label for=\"street\">Street Address</label>\n  <input [(ngModel)]=\"street\"\n         [ngModelOptions]=\"{standalone: true}\"\n         placeholder=\"903 Massachusetts Ave\"\n         class=\"form-control\"\n         id = \"street\"/>\n  </div>\n\n  <div class=\"form-group\" *ngIf = \"userType === 'tutor'\">\n  <label for=\"city\">City</label>\n  <input [(ngModel)]=\"city\"\n         [ngModelOptions]=\"{standalone: true}\"\n         placeholder=\"Boston\"\n         class=\"form-control\"\n         id = \"city\"/>\n  </div>\n\n  <div class=\"form-group\" *ngIf = \"userType === 'tutor'\">\n  <label for=\"state\">State</label>\n  <input [(ngModel)]=\"state\"\n         [ngModelOptions]=\"{standalone: true}\"\n         placeholder=\"MA\"\n         class=\"form-control\"\n         id = \"state\"/>\n  </div>\n\n  <div class=\"form-group\" *ngIf = \"userType === 'tutor'\">\n  <label for=\"zipcode\">Zip Code</label>\n  <input [(ngModel)]=\"zipcode\"\n         [ngModelOptions]=\"{standalone: true}\"\n         placeholder=\"02115\"\n         class=\"form-control\"\n         id = \"zipcode\"/>\n  </div>\n\n  <div class=\"form-group\" *ngIf = \"userType === 'tutor'\">\n    <input [(ngModel)]=\"subject\"\n           [ngModelOptions]=\"{standalone: true}\"\n           placeholder=\"Subject Title\"\n           class=\"form-control\"\n           id = \"subject\"/>\n\n  <br>\n  <button (click)=\"createSubject(subject)\"\n          class=\"btn btn-outline-primary btn-block\">\n    Add Subject\n  </button>\n    <br>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let subject of subjects\">\n        Subject Title: {{subject.title}}\n      </li>\n    </ul>\n    <button (click)=\"loadSubjects()\"\n            class=\"btn btn-primary btn-block\">\n      Subjects\n    </button>\n  </div>\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let appointment of appointments\">\n      Appointment: {{appointment.name}} |\n      Start: {{appointment.startTime}} |\n      End: {{appointment.endTime}} |\n      Location: {{appointment.apptType}}\n    </li>\n  </ul>\n  <button *ngIf = \"userType === 'tutor' || userType === 'student'\" (click)=\"loadAppts()\"\n          class=\"btn btn-primary btn-block\">\n    Appointments\n  </button>\n  <button (click)=\"update()\"\n          class=\"btn btn-success btn-block\">\n    Update\n  </button>\n\n  <button *ngIf = \"userType === 'admin'\" routerLink=\"/user-admin\"\n          class=\"btn btn-outline-primary btn-block\">\n    User Admin\n  </button>\n\n  <button *ngIf = \"userType === 'student'\" routerLink=\"/search\"\n          class=\"btn btn-outline-primary btn-block\">\n    Student Dashboard\n  </button>\n\n  <button *ngIf = \"userType === 'parent'\" routerLink=\"/parent\"\n          class=\"btn btn-outline-primary btn-block\">\n    Parent Dashboard\n  </button>\n\n  <button *ngIf = \"userType === 'tutor'\" routerLink=\"/schedular/{{userId}}\"\n          class=\"btn btn-outline-primary btn-block\">\n    Tutor Dashboard\n  </button>\n\n  <button (click)=\"logout()\"\n          class=\"btn btn-danger btn-block\">\n    Logout\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tutor_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tutor.service.client */ "./src/app/services/tutor.service.client.ts");
/* harmony import */ var _services_appointment_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/appointment.service.client */ "./src/app/services/appointment.service.client.ts");
/* harmony import */ var _services_subject_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/subject.service.client */ "./src/app/services/subject.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, tutorService, apptService, subService, router) {
        this.service = service;
        this.tutorService = tutorService;
        this.apptService = apptService;
        this.subService = subService;
        this.router = router;
        this.user = {};
        this.appointments = [];
    }
    ProfileComponent.prototype.update = function () {
        var _this = this;
        if (this.userType === 'student' || this.userType === 'parent' || this.userType === 'admin') {
            var user = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email
            };
            this.service.updateProfileUser(user.firstName, user.lastName, user.email)
                .then(function (response) {
                _this.email = response.email;
                _this.firstName = response.firstName;
                _this.lastName = response.lastName;
                alert('updated');
            });
        }
        else {
            var tutor = {
                id: this.userId,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                street: this.street,
                city: this.city,
                state: this.state,
                zipcode: this.zipcode,
            };
            console.log(tutor.id, tutor.street, tutor.city, tutor.state, tutor.zipcode);
            this.tutorService.updateProfileUser(tutor.id, tutor.firstName, tutor.lastName, tutor.email, tutor.street, tutor.city, tutor.state, tutor.zipcode)
                .then(function (response) {
                _this.email = response.email;
                _this.firstName = response.firstName;
                _this.lastName = response.lastName;
                _this.street = response.street;
                _this.city = response.city;
                _this.state = response.state;
                _this.zipcode = response.zipcode;
                alert('updated');
            });
        }
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.loadAppts = function () {
        var _this = this;
        if (this.userType === 'student') {
            this.apptService.findApptByStudentID(this.userId)
                .then(function (appointments) { return _this.appointments = appointments; });
        }
        else if (this.userType === 'tutor') {
            this.apptService.findTutorApptByID(this.userId)
                .then(function (appointments) { return _this.appointments = appointments; });
        }
    };
    ProfileComponent.prototype.createSubject = function (name) {
        var _this = this;
        this.subService.createSubject(name)
            .then(function () { return _this.loadAppts(); });
    };
    ProfileComponent.prototype.loadSubjects = function () {
        var _this = this;
        this.subService.findSubjects()
            .then(function (subjects) { return _this.subjects = subjects; });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.profile()
            .then(function (user) {
            _this.username = user.username;
            _this.userType = user.userType;
            _this.userId = user.id;
            _this.firstName = user.firstName;
            _this.lastName = user.lastName;
            _this.email = user.email;
            if (user.userType === 'tutor') {
                _this.street = user.street;
                _this.city = user.city;
                _this.state = user.state;
                _this.zipcode = user.zipcode;
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_tutor_service_client__WEBPACK_IMPORTED_MODULE_3__["TutorServiceClient"],
            _services_appointment_service_client__WEBPACK_IMPORTED_MODULE_4__["AppointmentServiceClient"],
            _services_subject_service_client__WEBPACK_IMPORTED_MODULE_5__["SubjectServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align:center;\n}\n\nbody {\n  height: 100%;\n}\n\n.button-box {\n  text-align:center;\n  margin-top:10px;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container-fluid\">\n    <form class=\"form-signin\">\n\n    <h1>Register</h1>\n    <div class=\"form-group row\">\n        <label for=\"username\">Username</label>\n        <input [(ngModel)]=\"username\"\n               [ngModelOptions]=\"{standalone: true}\"\n               placeholder=\"username\"\n               class=\"form-control\"\n               id = \"username\"/>\n      </div>\n    <div class = \"form-group row\">\n        <label for=\"password\">Password</label>\n        <input [(ngModel)]=\"password\"\n               [ngModelOptions]=\"{standalone: true}\"\n               placeholder=\"password\"\n               class=\"form-control\"\n               id = \"password\"\n               type=\"password\"/>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"verifyPassword\">Verify Password</label>\n      <input [(ngModel)]=\"password2\"\n             [ngModelOptions]=\"{standalone: true}\"\n             placeholder=\"verify password\"\n             class=\"form-control\"\n             id = \"verifyPassword\"\n             type=\"password\"/>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"userType\">Role</label>\n      <select [(ngModel)]=\"userType\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id = \"userType\">\n        <option value = \"student\">student</option>\n        <option value = \"tutor\">tutor</option>\n        <option value = \"parent\">parent</option>\n      </select>\n    </div>\n\n    <div class=\"form-group row\">\n      <button (click)=\"register(username, password, password2, userType.valueOf())\"\n              class=\"btn btn-primary btn-block\">\n        Register\n      </button>\n     </div>\n\n    <div class=\"form-group row\">\n      <button routerLink=\"/login\"\n              class=\"btn btn-outline-dark btn-block\">\n        Login\n      </button>\n      <button routerLink=\"/home\"\n              class=\"btn btn-outline-dark btn-block\">\n        Home\n      </button>\n    </div>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tutor_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tutor.service.client */ "./src/app/services/tutor.service.client.ts");
/* harmony import */ var _services_parent_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/parent.service.client */ "./src/app/services/parent.service.client.ts");
/* harmony import */ var _services_student_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/student.service.client */ "./src/app/services/student.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, tutorService, studentService, parentService) {
        this.router = router;
        this.tutorService = tutorService;
        this.studentService = studentService;
        this.parentService = parentService;
    }
    RegisterComponent.prototype.register = function (username, password, password2, userType) {
        var _this = this;
        console.log(username, password, userType);
        if (password !== password2) {
            alert('passwords do not match');
            return;
        }
        else if (userType === 'tutor') {
            this.tutorService
                .register(username, password, 'tutor')
                .then(function (response) {
                if (response.status !== 200) {
                    _this.router.navigate(['profile']);
                }
                else {
                    alert('username already exists');
                    return;
                }
            });
        }
        else if (userType === 'parent') {
            this.parentService
                .register(username, password, 'parent')
                .then(function (response) {
                if (response.status === 200) {
                    _this.router.navigate(['profile']);
                }
                else {
                    alert('username already exists');
                    return;
                }
            });
        }
        else if (userType === 'student') {
            this.studentService
                .register(username, password, 'student')
                .then(function (response) {
                if (response.status === 200) {
                    _this.router.navigate(['profile']);
                }
                else {
                    alert('username already exists');
                    return;
                }
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_tutor_service_client__WEBPACK_IMPORTED_MODULE_2__["TutorServiceClient"],
            _services_student_service_client__WEBPACK_IMPORTED_MODULE_4__["StudentServiceClient"],
            _services_parent_service_client__WEBPACK_IMPORTED_MODULE_3__["ParentServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/appointment.service.client.ts":
/*!********************************************************!*\
  !*** ./src/app/services/appointment.service.client.ts ***!
  \********************************************************/
/*! exports provided: AppointmentServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentServiceClient", function() { return AppointmentServiceClient; });
var AppointmentServiceClient = /** @class */ (function () {
    function AppointmentServiceClient() {
        this.APPOINTMENT_API_URL = 'https://web-dev-final-project-data.herokuapp.com/api/tutor/USERID/appt';
    }
    AppointmentServiceClient.prototype.findTutorApptByID = function (userId) {
        return fetch(this.APPOINTMENT_API_URL.replace('USERID', userId))
            .then(function (response) { return response.json(); });
    };
    AppointmentServiceClient.prototype.findSubjectForAppt = function (apptId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/appt/' + apptId)
            .then(function (response) { return response.json(); });
    };
    AppointmentServiceClient.prototype.findApptByStudentID = function (userId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/student/' + userId + '/appt')
            .then(function (response) { return response.json(); });
    };
    AppointmentServiceClient.prototype.createAppt = function (name, subjectID, startTime, endTime, tutorID, apptType) {
        var appt = { name: name, startTime: startTime, endTime: endTime, apptType: apptType };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/tutor/' + tutorID + '/subject/' + subjectID + '/appt', {
            method: 'post',
            body: JSON.stringify(appt),
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    AppointmentServiceClient.prototype.scheduleAppt = function (apptId, studentID) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/student/' + studentID + '/appt', {
            method: 'post',
            body: JSON.stringify(apptId),
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    AppointmentServiceClient.prototype.deleteAppt = function (apptId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/appt/' + apptId, {
            method: 'delete'
        });
    };
    return AppointmentServiceClient;
}());



/***/ }),

/***/ "./src/app/services/parent.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/parent.service.client.ts ***!
  \***************************************************/
/*! exports provided: ParentServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentServiceClient", function() { return ParentServiceClient; });
var ParentServiceClient = /** @class */ (function () {
    function ParentServiceClient() {
    }
    ParentServiceClient.prototype.findUserById = function (userId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    ParentServiceClient.prototype.profile = function () {
        console.log('profile');
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/profile/parent', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    ParentServiceClient.prototype.register = function (username, password, role) {
        console.log([username, password, role]);
        var user = {
            username: username,
            password: password,
            userType: 'parent'
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/register/parent', {
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            method: 'post'
        }).then(function (response) {
            return response.json();
        });
    };
    ParentServiceClient.prototype.deleteStudentFromParent = function (parentId, studentId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/parent/' + parentId + '/children/' + studentId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    ParentServiceClient.prototype.findAllChildrenForParent = function (parentId) {
        var url = 'https://web-dev-final-project-data.herokuapp.com/api/parent/' + parentId + '/children';
        return fetch(url)
            .then(function (response) {
            return response.json();
        });
    };
    ParentServiceClient.prototype.findAllParents = function () {
        var url = 'https://web-dev-final-project-data.herokuapp.com/api/parent';
        return fetch(url)
            .then(function (response) {
            return response.json();
        });
    };
    ParentServiceClient.prototype.createUser = function (username, password, firstName, lastName, userType) {
        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            userType: 'parent'
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/parent', {
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            method: 'post'
        }).then(function (response) {
            return response.json();
        });
    };
    ParentServiceClient.prototype.deleteUser = function (userId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/parent/' + userId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    ParentServiceClient.prototype.updateUser = function (userId, newUsername, newPassword, newFirstName, newLastName, newUserType) {
        var user = {
            id: userId,
            username: newUsername,
            password: newPassword,
            firstName: newFirstName,
            lastName: newLastName,
            userType: newUserType
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/parent/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    ParentServiceClient.prototype.logout = function () {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    ParentServiceClient.prototype.addStudent = function (parentId, student) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/parent/' + parentId + '/children', {
            method: 'post',
            body: JSON.stringify(student),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    ParentServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/login/parent', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return ParentServiceClient;
}());



/***/ }),

/***/ "./src/app/services/student.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/student.service.client.ts ***!
  \****************************************************/
/*! exports provided: StudentServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentServiceClient", function() { return StudentServiceClient; });
var StudentServiceClient = /** @class */ (function () {
    function StudentServiceClient() {
    }
    StudentServiceClient.prototype.findUserById = function (userId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    StudentServiceClient.prototype.findStudentByUsername = function (username) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/student/username/' + username)
            .then(function (response) { return response.json(); });
    };
    StudentServiceClient.prototype.profile = function () {
        console.log('profile');
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/profile/student', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    StudentServiceClient.prototype.register = function (username, password, role) {
        console.log([username, password, role]);
        var user = {
            username: username,
            password: password,
            userType: role
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/register/student', {
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            method: 'post'
        }).then(function (response) {
            return response.json();
        });
    };
    StudentServiceClient.prototype.findAllStudents = function () {
        var url = 'https://web-dev-final-project-data.herokuapp.com/api/student';
        return fetch(url)
            .then(function (response) {
            return response.json();
        });
    };
    StudentServiceClient.prototype.createUser = function (username, password, firstName, lastName, userType) {
        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            userType: 'student'
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/student', {
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            method: 'post'
        }).then(function (response) {
            return response.json();
        });
    };
    StudentServiceClient.prototype.deleteUser = function (userId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/student/' + userId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    StudentServiceClient.prototype.updateUser = function (userId, newUsername, newPassword, newFirstName, newLastName, newUserType) {
        var user = {
            id: userId,
            username: newUsername,
            password: newPassword,
            firstName: newFirstName,
            lastName: newLastName,
            userType: newUserType
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/student/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    StudentServiceClient.prototype.findApptsForStudent = function (studentId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/student/' + studentId + '/appt')
            .then(function (response) { return response.json(); });
    };
    StudentServiceClient.prototype.logout = function () {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    StudentServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/login/student', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return StudentServiceClient;
}());



/***/ }),

/***/ "./src/app/services/subject.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/subject.service.client.ts ***!
  \****************************************************/
/*! exports provided: SubjectServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectServiceClient", function() { return SubjectServiceClient; });
var SubjectServiceClient = /** @class */ (function () {
    function SubjectServiceClient() {
    }
    SubjectServiceClient.prototype.findSubjectByName = function (name) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/subject/' + name)
            .then(function (response) { return response.json(); });
    };
    SubjectServiceClient.prototype.findSubjects = function () {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/subject')
            .then(function (response) { return response.json(); });
    };
    SubjectServiceClient.prototype.createSubject = function (title) {
        var subject = { title: title };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/subject', {
            method: 'post',
            body: JSON.stringify(subject),
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return SubjectServiceClient;
}());



/***/ }),

/***/ "./src/app/services/tutor.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/tutor.service.client.ts ***!
  \**************************************************/
/*! exports provided: TutorServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorServiceClient", function() { return TutorServiceClient; });
var TutorServiceClient = /** @class */ (function () {
    function TutorServiceClient() {
    }
    TutorServiceClient.prototype.findUserById = function (userId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    TutorServiceClient.prototype.findTutorByName = function (username) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/tutor?username=' + username)
            .then(function (response) { return response.json(); });
    };
    TutorServiceClient.prototype.profile = function () {
        console.log('profile');
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/profile/tutor', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    TutorServiceClient.prototype.register = function (username, password, role) {
        console.log([username, password, role]);
        var user = {
            username: username,
            password: password,
            userType: 'tutor'
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/register/tutor', {
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            method: 'post'
        }).then(function (response) {
            return response.json();
        });
    };
    TutorServiceClient.prototype.findAllTutors = function () {
        var url = 'https://web-dev-final-project-data.herokuapp.com/api/tutor';
        return fetch(url)
            .then(function (response) {
            return response.json();
        });
    };
    TutorServiceClient.prototype.createUser = function (username, password, firstName, lastName, userType) {
        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            userType: 'tutor'
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/tutor', {
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            method: 'post'
        }).then(function (response) {
            return response.json();
        });
    };
    TutorServiceClient.prototype.deleteUser = function (userId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/tutor/' + userId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    TutorServiceClient.prototype.updateUser = function (userId, newUsername, newPassword, newFirstName, newLastName, newUserType) {
        var user = {
            id: userId,
            username: newUsername,
            password: newPassword,
            firstName: newFirstName,
            lastName: newLastName,
            userType: newUserType
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/tutor/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    TutorServiceClient.prototype.updateProfileUser = function (userId, newFirstName, newLastName, newEmail, newStreet, newCity, newState, newZipcode) {
        var user = {
            id: userId,
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            street: newStreet,
            city: newCity,
            state: newState,
            zipcode: newZipcode
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/profile/tutor', {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    TutorServiceClient.prototype.logout = function () {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    TutorServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/login/tutor', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return TutorServiceClient;
}());



/***/ }),

/***/ "./src/app/services/tutorsearch.service.client.ts":
/*!********************************************************!*\
  !*** ./src/app/services/tutorsearch.service.client.ts ***!
  \********************************************************/
/*! exports provided: SearchServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchServiceClient", function() { return SearchServiceClient; });
var SearchServiceClient = /** @class */ (function () {
    function SearchServiceClient() {
        this.TUTOR_API_URL = 'https://web-dev-final-project-data.herokuapp.com/api/tutor';
        this.TUTOR_ADDRESS_API = 'https://web-dev-final-project-data.herokuapp.com/api/tutor?street=STNAME&city=CNAME&state=STATENAME&zipcode=ZIPNAME';
    }
    SearchServiceClient.prototype.findLocation = function (tutorAddress) {
        return fetch('https://maps.googleapis.com/maps/api/geocode/json?address='
            + tutorAddress + '&key=AIzaSyDZtswm-x9wCi3ncGwMVCh5-yhYzUPR23s\n')
            .then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.findAllTutors = function () {
        return fetch(this.TUTOR_API_URL)
            .then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.findTutorsForAddress = function (tutorAddress) {
        var splitted = tutorAddress.split(",");
        return fetch(this.TUTOR_ADDRESS_API.replace('STNAME', splitted[0])
            .replace("CNAME", splitted[1]).replace('STATENAME', splitted[2])
            .replace('ZIPNAME', splitted[3]))
            .then(function (response) { return response.json(); });
    };
    return SearchServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.profile = function () {
        console.log('profile');
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.register = function (username, password, role) {
        console.log([username, password, role]);
        var user = {
            username: username,
            password: password,
            userType: role
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            method: 'post'
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.findAllUsers = function () {
        var url = 'https://web-dev-final-project-data.herokuapp.com/api/user';
        return fetch(url)
            .then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.createUser = function (username, password, firstName, lastName, userType) {
        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            userType: userType
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/user', {
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            method: 'post'
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.deleteUser = function (userId) {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/user/' + userId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.updateUser = function (userId, newUsername, newPassword, newFirstName, newLastName, newUserType) {
        var user = {
            username: newUsername,
            password: newPassword,
            firstName: newFirstName,
            lastName: newLastName,
            userType: newUserType
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/user/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.updateProfileUser = function (newFirstName, newLastName, newEmail) {
        var user = {
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/profile', {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('https://web-dev-final-project-data.herokuapp.com/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/tutor-search/tutor-search.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tutor-search/tutor-search.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/tutor-search/tutor-search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tutor-search/tutor-search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <h2>Tutor Search</h2>\n\n    <input [(ngModel)]=\"tutorAddress\" placeholder=\"address\"/>\n    <button (click)=\"searchForTutors(tutorAddress)\">Search</button>\n\n    <div class=\"container\">\n    <div id=\"map\" style=\"width:500px;height:380px;\"></div>\n    </div>\n    <h2>Tutors for address:</h2>\n    <ul>\n      <li *ngFor=\"let tutor of tutors\">\n        <a routerLink=\"/schedular/{{tutor.id}}\">{{tutor.username}}</a>: <a (click)=\"searchForTutors(tutor.address)\">{{tutor.address}}</a>\n      </li>\n    </ul>\n\n    <a routerLink=\"/home\" class=\"btn btn-outline-primary btn-block\">Home</a>\n\n"

/***/ }),

/***/ "./src/app/tutor-search/tutor-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tutor-search/tutor-search.component.ts ***!
  \********************************************************/
/*! exports provided: TutorSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorSearchComponent", function() { return TutorSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tutorsearch_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tutorsearch.service.client */ "./src/app/services/tutorsearch.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TutorSearchComponent = /** @class */ (function () {
    function TutorSearchComponent(tutorSearchService) {
        this.tutorSearchService = tutorSearchService;
    }
    TutorSearchComponent.prototype.searchForTutors = function (tutorAddress) {
        var _this = this;
        this.tutorSearchService.findTutorsForAddress(this.tutorAddress)
            .then(function (tutors) { return _this.tutors = tutors; });
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({ 'address': tutorAddress }, function (results, status) {
            if (status === 'OK') {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                var latlng = new google.maps.LatLng(-34.397, 150.644);
                var mapOptions = {
                    zoom: 8,
                    center: latlng
                };
                this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
                this.map.setCenter(new google.maps.LatLng(latitude, longitude));
                var marker = new google.maps.Marker({
                    map: this.map,
                    position: results[0].geometry.location
                });
            }
            else {
                alert('Address could not be found');
            }
        });
    };
    TutorSearchComponent.prototype.ngOnInit = function () {
    };
    TutorSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutor-search',
            template: __webpack_require__(/*! ./tutor-search.component.html */ "./src/app/tutor-search/tutor-search.component.html"),
            styles: [__webpack_require__(/*! ./tutor-search.component.css */ "./src/app/tutor-search/tutor-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tutorsearch_service_client__WEBPACK_IMPORTED_MODULE_1__["SearchServiceClient"]])
    ], TutorSearchComponent);
    return TutorSearchComponent;
}());



/***/ }),

/***/ "./src/app/user-admin/user-admin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-admin/user-admin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding-left: 30px;\n}\n"

/***/ }),

/***/ "./src/app/user-admin/user-admin.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-admin/user-admin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container-fluid\">\n  <h1>User Admin</h1>\n  <table>\n    <thead>\n    <tr>\n      <th> Username </th>\n      <th> Password </th>\n      <th> First Name </th>\n      <th> Last Name </th>\n      <th> Role </th>\n      <th></th>\n      <th></th>\n    </tr>\n    </thead>\n    <tr>\n      <th><input [(ngModel)]=\"username\"\n                 placeholder=\"username\"\n                 class=\"form-control\"></th>\n      <th><input [(ngModel)]=\"password\"\n                 placeholder=\"password\"\n                 class=\"form-control\"\n                 id = \"password\"\n                 type=\"password\"/></th>\n      <th><input [(ngModel)]=\"firstName\"\n                 placeholder=\"First Name\"\n                 class=\"form-control\"></th>\n      <th><input [(ngModel)]=\"lastName\"\n                 placeholder=\"Last Name\"\n                 class=\"form-control\"></th>\n      <th><select [(ngModel)]=\"userType\" class=\"form-control\" id = \"userType\">\n        <option selected value = \"admin\">admin</option>\n        <option value = \"tutor\">tutor</option>\n        <option value = \"parent\">parent</option>\n        <option value = \"student\">student</option>\n      </select></th>\n      <th><button (click)=\"createUser(username, password, firstName, lastName, userType)\" class=\"btn btn-success btn-block\">\n        + </button></th>\n      <th><button (click)=\"confirmUpdate()\" class=\"btn btn-success btn-block\">\n        update</button></th>\n    </tr>\n    <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td>{{user.username}}</td>\n      <td>{{user.password}}</td>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.userType}}</td>\n      <th><button (click)=\"updateUser(user.id, user.username, user.password, user.firstName, user.lastName, user.userType)\"\n                  class=\"btn btn-primary btn-block\">update</button></th>\n      <th> <button (click)=\"deleteUser(user.id)\"\n                   class=\"btn btn-danger btn-block\">x</button> </th>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user-admin/user-admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-admin/user-admin.component.ts ***!
  \****************************************************/
/*! exports provided: UserAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdminComponent", function() { return UserAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_tutor_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tutor.service.client */ "./src/app/services/tutor.service.client.ts");
/* harmony import */ var _services_student_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/student.service.client */ "./src/app/services/student.service.client.ts");
/* harmony import */ var _services_parent_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/parent.service.client */ "./src/app/services/parent.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserAdminComponent = /** @class */ (function () {
    function UserAdminComponent(service, tutorService, studentService, parentService) {
        this.service = service;
        this.tutorService = tutorService;
        this.studentService = studentService;
        this.parentService = parentService;
        this.users = [];
    }
    UserAdminComponent.prototype.loadUsers = function () {
        var _this = this;
        this
            .service
            .findAllUsers()
            .then(function (users) { return _this.users = users; });
    };
    UserAdminComponent.prototype.createUser = function (username, password, firstName, lastName, userType) {
        var _this = this;
        if (userType === 'tutor') {
            this.tutorService
                .createUser(username, password, firstName, lastName, 'tutor')
                .then(function (response) {
                _this.loadUsers();
                _this.username = null;
                _this.password = null;
                _this.firstName = null;
                _this.lastName = null;
            });
        }
        else if (userType === 'parent') {
            this.parentService
                .createUser(username, password, firstName, lastName, 'parent')
                .then(function (response) {
                _this.loadUsers();
                _this.username = null;
                _this.password = null;
                _this.firstName = null;
                _this.lastName = null;
            });
        }
        else if (userType === 'student') {
            console.log('student');
            this.studentService
                .createUser(username, password, firstName, lastName, 'student')
                .then(function (response) {
                _this.loadUsers();
                _this.username = null;
                _this.password = null;
                _this.firstName = null;
                _this.lastName = null;
            });
        }
    };
    UserAdminComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.service.deleteUser(userId)
            .then(function () {
            _this.loadUsers();
        });
    };
    UserAdminComponent.prototype.updateUser = function (userIdToUpdate, newUsername, newPassword, newFirstName, newLastName, newUserType) {
        this.userIdToUpdate = userIdToUpdate;
        this.username = newUsername;
        this.password = newPassword;
        this.firstName = newFirstName;
        this.lastName = newLastName;
        this.userType = newUserType;
    };
    UserAdminComponent.prototype.confirmUpdate = function () {
        var _this = this;
        this.service.updateUser(this.userIdToUpdate, this.username, this.password, this.firstName, this.lastName, this.userType)
            .then(function () {
            _this.loadUsers();
            _this.username = null;
            _this.password = null;
            _this.firstName = null;
            _this.lastName = null;
        });
    };
    UserAdminComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UserAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-admin',
            template: __webpack_require__(/*! ./user-admin.component.html */ "./src/app/user-admin/user-admin.component.html"),
            styles: [__webpack_require__(/*! ./user-admin.component.css */ "./src/app/user-admin/user-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_tutor_service_client__WEBPACK_IMPORTED_MODULE_2__["TutorServiceClient"],
            _services_student_service_client__WEBPACK_IMPORTED_MODULE_3__["StudentServiceClient"],
            _services_parent_service_client__WEBPACK_IMPORTED_MODULE_4__["ParentServiceClient"]])
    ], UserAdminComponent);
    return UserAdminComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vikaba/frontend-heroku/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map