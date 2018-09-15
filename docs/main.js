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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lessons/lessons.component */ "./src/app/lessons/lessons.component.ts");
/* harmony import */ var _lessons_motion_linear_linear_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lessons/motion/linear/linear.component */ "./src/app/lessons/motion/linear/linear.component.ts");
/* harmony import */ var _lessons_motion_rotary_rotary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lessons/motion/rotary/rotary.component */ "./src/app/lessons/motion/rotary/rotary.component.ts");
/* harmony import */ var _lessons_lesson2_lesson2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lessons/lesson2/lesson2.component */ "./src/app/lessons/lesson2/lesson2.component.ts");
/* harmony import */ var _lessons_motion_motion_reciprocating_motion_reciprocating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lessons/motion/motion-reciprocating/motion-reciprocating.component */ "./src/app/lessons/motion/motion-reciprocating/motion-reciprocating.component.ts");
/* harmony import */ var _lessons_motion_motion_oscillating_motion_oscillating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lessons/motion/motion-oscillating/motion-oscillating.component */ "./src/app/lessons/motion/motion-oscillating/motion-oscillating.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/index.ts', pathMatch: 'full' },
    { path: 'index.ts', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about.ts', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'lessons.ts', component: _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_4__["LessonsComponent"] },
    {
        path: 'lesson',
        component: _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_4__["LessonsComponent"],
        children: [
            { path: '', redirectTo: 'lesson1.ts', pathMatch: 'full' },
            { path: 'motion/linear.ts', component: _lessons_motion_linear_linear_component__WEBPACK_IMPORTED_MODULE_5__["MotionLinearComponent"] },
            { path: 'motion/rotary.ts', component: _lessons_motion_rotary_rotary_component__WEBPACK_IMPORTED_MODULE_6__["MotionRotaryComponent"] },
            { path: 'motion/reciprocating.ts', component: _lessons_motion_motion_reciprocating_motion_reciprocating_component__WEBPACK_IMPORTED_MODULE_8__["MotionReciprocatingComponent"] },
            { path: 'motion/lesson2.ts', component: _lessons_lesson2_lesson2_component__WEBPACK_IMPORTED_MODULE_7__["Lesson2Component"] },
            { path: 'motion/oscillating.ts', component: _lessons_motion_motion_oscillating_motion_oscillating_component__WEBPACK_IMPORTED_MODULE_9__["MotionOscillatingComponent"] },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center;margin-bottom: 50px;\">\n  <h1>\n    Welcome to {{ title }}(!)\n  </h1>\n  <nav class=\"navbar navbar-expand-sm justify-content-center navbar-dark bg-dark\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"index.ts\">Home</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"about.ts\">About</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"lessons.ts\">Lessons</a></li>\n    </ul>\n  </nav>\n</div>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'easyPhysics';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var duration = animejs__WEBPACK_IMPORTED_MODULE_1___default()({
            targets: 'img',
            translateX: {
                value: 250,
                duration: 800
            },
            rotate: {
                value: 360,
                duration: 1800,
                easing: 'easeInOutSine'
            },
            scale: {
                value: 2,
                duration: 1600,
                delay: 800,
                easing: 'easeInOutQuart'
            },
            delay: 250
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()],
            declarations: [],
            bootstrap: []
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lessons/lessons.component */ "./src/app/lessons/lessons.component.ts");
/* harmony import */ var _lessons_motion_linear_linear_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lessons/motion/linear/linear.component */ "./src/app/lessons/motion/linear/linear.component.ts");
/* harmony import */ var _lessons_lesson2_lesson2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lessons/lesson2/lesson2.component */ "./src/app/lessons/lesson2/lesson2.component.ts");
/* harmony import */ var _lessons_canvas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lessons/canvas.component */ "./src/app/lessons/canvas.component.ts");
/* harmony import */ var _lessons_motion_rotary_rotary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lessons/motion/rotary/rotary.component */ "./src/app/lessons/motion/rotary/rotary.component.ts");
/* harmony import */ var _lessons_motion_motion_reciprocating_motion_reciprocating_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lessons/motion/motion-reciprocating/motion-reciprocating.component */ "./src/app/lessons/motion/motion-reciprocating/motion-reciprocating.component.ts");
/* harmony import */ var _lessons_motion_motion_oscillating_motion_oscillating_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lessons/motion/motion-oscillating/motion-oscillating.component */ "./src/app/lessons/motion/motion-oscillating/motion-oscillating.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_7__["LessonsComponent"],
                _lessons_motion_linear_linear_component__WEBPACK_IMPORTED_MODULE_8__["MotionLinearComponent"],
                _lessons_lesson2_lesson2_component__WEBPACK_IMPORTED_MODULE_9__["Lesson2Component"],
                _lessons_canvas_component__WEBPACK_IMPORTED_MODULE_10__["CanvasComponent"],
                _lessons_motion_rotary_rotary_component__WEBPACK_IMPORTED_MODULE_11__["MotionRotaryComponent"],
                _lessons_motion_motion_reciprocating_motion_reciprocating_component__WEBPACK_IMPORTED_MODULE_12__["MotionReciprocatingComponent"],
                _lessons_motion_motion_oscillating_motion_oscillating_component__WEBPACK_IMPORTED_MODULE_13__["MotionOscillatingComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lessons/canvas.component.css":
/*!**********************************************!*\
  !*** ./src/app/lessons/canvas.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#canvas{\r\n    position: relative;\r\n}\r\n\r\n.boxed{\r\n    padding: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\n#football{\r\n    z-index: 99;\r\n}\r\n\r\n.hr-text {\r\n    line-height: 1em;\r\n    position: absolute;\r\n    outline: 0;\r\n    border: 0;\r\n    color: black;\r\n    text-align: center;\r\n    opacity: .3;\r\n}\r\n\r\n.hr-text:before {\r\n    content: '';\r\n    background: #818078;\r\n    position: absolute;\r\n}\r\n\r\n.hr-text:after {\r\n    content: attr(data-content);\r\n    position: absolute;\r\n    padding: 0 .5em;\r\n    line-height: 1.5em;\r\n    color: #818078;\r\n    background-color: #fcfcfa;\r\n}\r\n\r\n.hr-text.top {\r\n    top: -0.75em;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 1.5em;\r\n}\r\n\r\n.hr-text.top:before {\r\n    left: 0;\r\n    top: 50%;\r\n    width: 100%;\r\n    height: 1px;\r\n}\r\n\r\n.hr-text.top:after {\r\n    -webkit-transform: translate(-50%);\r\n            transform: translate(-50%);\r\n}\r\n\r\n.hr-text.bottom {\r\n    bottom: -0.75em;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 1.5em;\r\n}\r\n\r\n.hr-text.bottom:before {\r\n    left: 0;\r\n    top: 50%;\r\n    width: 100%;\r\n    height: 1px;\r\n}\r\n\r\n.hr-text.bottom:after {\r\n    -webkit-transform: translate(-50%);\r\n            transform: translate(-50%);\r\n}\r\n\r\n.hr-text.left {\r\n    top: 0;\r\n    left: -0.75em;\r\n    width: 1.5em;\r\n    height: 100%;\r\n}\r\n\r\n.hr-text.left:before {\r\n    left: 50%;\r\n    top: 0;\r\n    width: 1px;\r\n    height: 100%;\r\n}\r\n\r\n.hr-text.left:after {\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.hr-text.right {\r\n    top: 0;\r\n    right: -0.75em;\r\n    width: 1.5em;\r\n    height: 100%;\r\n}\r\n\r\n.hr-text.right:before {\r\n    left: 50%;\r\n    top: 0;\r\n    width: 1px;\r\n    height: 100%;\r\n}\r\n\r\n.hr-text.right:after {\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.hr-text.x {\r\n    top: 50%;\r\n    width: 50%;\r\n    height: 1.5em;\r\n    z-index: -1;\r\n}\r\n\r\n.hr-text.x:before {\r\n    left: 0;\r\n    top: 50%;\r\n    width: 100%;\r\n    height: 1px;\r\n}\r\n\r\n.hr-text.x:after {\r\n    -webkit-transform: translate(-50%);\r\n            transform: translate(-50%);\r\n}\r\n\r\n.hr-text.x-left {\r\n    left: 0;\r\n    -webkit-transform: translate(0%, -50%);\r\n            transform: translate(0%, -50%);\r\n}\r\n\r\n.hr-text.x-right {\r\n    left: 50%;\r\n    -webkit-transform: translate(0%, -50%);\r\n            transform: translate(0%, -50%);\r\n}\r\n\r\n.hr-text.y {\r\n    top: 0;\r\n    left: 50%;\r\n    height: 50%;\r\n    z-index: -1;\r\n}\r\n\r\n.hr-text.y:before {\r\n    left: 0;\r\n    top: 0;\r\n    width: 1px;\r\n    height: 100%;\r\n}\r\n\r\n.hr-text.y:after {\r\n    top: 50%;\r\n    left: 50%;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.hr-text.y-top {\r\n    top: 0;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n.hr-text.y-top:after {\r\n}\r\n\r\n.hr-text.y-bottom {\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -0%);\r\n            transform: translate(-50%, -0%);\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/lessons/canvas.component.html":
/*!***********************************************!*\
  !*** ./src/app/lessons/canvas.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"canvas\" class=\"boxed container\" [ngStyle]=\"canvas\">\r\n\r\n\r\n  <div class=\"hr-text top\" [attr.data-content]=\"canvas.width\"></div>\r\n  <div class=\"hr-text left\" [attr.data-content]=\"canvas.height\"></div>\r\n  <div class=\"hr-text bottom\" [attr.data-content]=\"canvas.width\"></div>\r\n  <div class=\"hr-text right\" [attr.data-content]=\"canvas.height\"></div>\r\n\r\n  <div class=\"hr-text x x-left\" [attr.data-content]=\"'-X'\"></div>\r\n  <div class=\"hr-text x x-right\" [attr.data-content]=\"'X'\"></div>\r\n  <div class=\"hr-text y y-top\" [attr.data-content]=\"'Y'\"></div>\r\n  <div class=\"hr-text y y-bottom\" [attr.data-content]=\"'-Y'\"></div>\r\n\r\n\r\n  <ng-content></ng-content>  \r\n</div>"

/***/ }),

/***/ "./src/app/lessons/canvas.component.ts":
/*!*********************************************!*\
  !*** ./src/app/lessons/canvas.component.ts ***!
  \*********************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanvasComponent = /** @class */ (function () {
    function CanvasComponent() {
    }
    CanvasComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CanvasComponent.prototype, "canvas", void 0);
    CanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas',
            inputs: ['canvas'],
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/lessons/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.css */ "./src/app/lessons/canvas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/lessons/lesson2/lesson2.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lessons/lesson2/lesson2.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lessons/lesson2/lesson2.component.html":
/*!********************************************************!*\
  !*** ./src/app/lessons/lesson2/lesson2.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-canvas [canvas]=\"canvas\">\r\n  <img id=\"football\" src=\"assets/football.svg\" [ngStyle]=\"footballStyle\">\r\n  <img id=\"globe\" src=\"assets/Terrestrial_globe.svg\" [ngStyle]=\"footballStyle\">\r\n\r\n</app-canvas>\r\n<br />\r\n<div class=\"boxed container text-center\">\r\n  <button (click)=\"reset()\">Reset</button>\r\n  <button (click)=\"simulate()\">Simulate</button>\r\n  <label >\r\n    <input type=\"text\" value=\"{{canvasSize}}\" [(ngModel)]=\"canvasSize\">\r\n\r\n  </label>\r\n</div>"

/***/ }),

/***/ "./src/app/lessons/lesson2/lesson2.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lessons/lesson2/lesson2.component.ts ***!
  \******************************************************/
/*! exports provided: Lesson2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson2Component", function() { return Lesson2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Lesson2Component = /** @class */ (function () {
    function Lesson2Component(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.canvas = {
            position: 'relative',
            width: '600px',
            height: '400px',
            padding: '0px',
        };
        this.footballStyle = {
            position: 'absolute',
            top: '0',
            left: '50%',
            width: '64px',
            height: '64px',
            transform: 'translateX(-50%)',
        };
    }
    Lesson2Component.prototype.simulate = function () {
        var cssProperties = animejs__WEBPACK_IMPORTED_MODULE_1___default()({
            targets: '#football',
            top: '100%',
            translateY: '50%',
            translateX: '-50%',
            easing: 'linear',
        });
    };
    Lesson2Component.prototype.reset = function () {
        var _this = this;
        var url = this.router.url.toString();
        this.router.navigate(['lessons.ts']).then(function () {
            _this.router.navigate([url]);
        });
    };
    Lesson2Component.prototype.ngOnInit = function () {
    };
    Lesson2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson2',
            template: __webpack_require__(/*! ./lesson2.component.html */ "./src/app/lessons/lesson2/lesson2.component.html"),
            styles: [__webpack_require__(/*! ./lesson2.component.css */ "./src/app/lessons/lesson2/lesson2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Lesson2Component);
    return Lesson2Component;
}());



/***/ }),

/***/ "./src/app/lessons/lessons.component.css":
/*!***********************************************!*\
  !*** ./src/app/lessons/lessons.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lessons/lessons.component.html":
/*!************************************************!*\
  !*** ./src/app/lessons/lessons.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"lessons col-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          Lesson 1\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\"><a routerLink=\"/lesson/motion/linear.ts\">Linear Motion</a></li>\n            <li class=\"list-group-item\"><a routerLink=\"/lesson/motion/rotary.ts\">Circle Motion</a></li>\n            <li class=\"list-group-item\"><a routerLink=\"/lesson/motion/reciprocating.ts\">Reciprocating Motion</a></li>\n            <li class=\"list-group-item\"><a routerLink=\"/lesson/motion/oscillating.ts\">Oscillating Motion</a></li>\n          </ul>\n          \n        </li>\n        <li class=\"list-group-item\"><a routerLink=\"/lesson/lesson2.ts\">Lesson 2</a></li>\n      </ul>\n    </div>\n    <div class=\"details col\">\n      Lesson details\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/lessons/lessons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/lessons/lessons.component.ts ***!
  \**********************************************/
/*! exports provided: LessonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsComponent", function() { return LessonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LessonsComponent = /** @class */ (function () {
    function LessonsComponent() {
    }
    LessonsComponent.prototype.ngOnInit = function () {
    };
    LessonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lessons',
            template: __webpack_require__(/*! ./lessons.component.html */ "./src/app/lessons/lessons.component.html"),
            styles: [__webpack_require__(/*! ./lessons.component.css */ "./src/app/lessons/lessons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LessonsComponent);
    return LessonsComponent;
}());



/***/ }),

/***/ "./src/app/lessons/motion/linear/linear.component.css":
/*!************************************************************!*\
  !*** ./src/app/lessons/motion/linear/linear.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".football{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0px;\r\n    width: 64px;\r\n    height: 64px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n.football.state1{\r\n    opacity: 0.5;\r\n}"

/***/ }),

/***/ "./src/app/lessons/motion/linear/linear.component.html":
/*!*************************************************************!*\
  !*** ./src/app/lessons/motion/linear/linear.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-canvas [canvas]=\"canvas\">\n  <img id=\"_football\" class=\"football state1\" src=\"assets/football.svg\">\n  <img id=\"football\" class=\"football\" src=\"assets/football.svg\">\n\n</app-canvas>\n<br />\n<div class=\"boxed container text-center\">\n  <button (click)=\"reset()\">Reset</button>\n  <button (click)=\"simulate()\">Simulate</button>\n  <br />\n  <br />\n  <label >\n    Distance: \n    <input type=\"number\" value=\"{{canvasSize}}\" [(ngModel)]=\"distance\" max=\"600\">\n  </label>\n  <br />\n  <label >\n    Velocity:\n    <input type=\"number\" value=\"{{canvasSize}}\" [(ngModel)]=\"velocity\">\n    m/s\n  </label>\n  <br />\n  <label >\n    Time:\n    <input type=\"number\" value=\"{{canvasSize}}\" [(ngModel)]=\"time\">\n    s\n  </label>\n</div>"

/***/ }),

/***/ "./src/app/lessons/motion/linear/linear.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/lessons/motion/linear/linear.component.ts ***!
  \***********************************************************/
/*! exports provided: MotionLinearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionLinearComponent", function() { return MotionLinearComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MotionLinearComponent = /** @class */ (function () {
    function MotionLinearComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.distance = 600;
        this.velocity = 200;
        this.canvas = {
            position: 'relative',
            width: '600px',
            height: '400px',
            padding: '0px',
        };
    }
    MotionLinearComponent.prototype.simulate = function () {
        this.time = this.distance / this.velocity;
        this.cssProperties = animejs__WEBPACK_IMPORTED_MODULE_1___default()({
            targets: '#football',
            left: this.distance,
            easing: 'linear',
            duration: this.distance / this.velocity * 1000,
        });
    };
    MotionLinearComponent.prototype.reset = function () {
        this.cssProperties.restart().reset();
    };
    MotionLinearComponent.prototype.ngOnInit = function () {
    };
    MotionLinearComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-linear',
            template: __webpack_require__(/*! ./linear.component.html */ "./src/app/lessons/motion/linear/linear.component.html"),
            styles: [__webpack_require__(/*! ./linear.component.css */ "./src/app/lessons/motion/linear/linear.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MotionLinearComponent);
    return MotionLinearComponent;
}());



/***/ }),

/***/ "./src/app/lessons/motion/motion-oscillating/motion-oscillating.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/lessons/motion/motion-oscillating/motion-oscillating.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lessons/motion/motion-oscillating/motion-oscillating.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/lessons/motion/motion-oscillating/motion-oscillating.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"matter-canvas\" #matterCanvas></div>"

/***/ }),

/***/ "./src/app/lessons/motion/motion-oscillating/motion-oscillating.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/lessons/motion/motion-oscillating/motion-oscillating.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MotionOscillatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionOscillatingComponent", function() { return MotionOscillatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotionOscillatingComponent = /** @class */ (function () {
    function MotionOscillatingComponent() {
    }
    MotionOscillatingComponent.prototype.ngOnInit = function () {
        var Engine = matter_js__WEBPACK_IMPORTED_MODULE_1__["Engine"], Render = matter_js__WEBPACK_IMPORTED_MODULE_1__["Render"], Runner = matter_js__WEBPACK_IMPORTED_MODULE_1__["Runner"], Composites = matter_js__WEBPACK_IMPORTED_MODULE_1__["Composites"], Constraint = matter_js__WEBPACK_IMPORTED_MODULE_1__["Constraint"], MouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_1__["MouseConstraint"], Mouse = matter_js__WEBPACK_IMPORTED_MODULE_1__["Mouse"], World = matter_js__WEBPACK_IMPORTED_MODULE_1__["World"], Bodies = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"];
        // create engine
        var engine = Engine.create(), world = engine.world;
        // create renderer
        var render = Render.create({
            element: this.matterCanvas.nativeElement,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                showAngleIndicator: true
            }
        });
        Render.run(render);
        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);
        // add stiff global constraint
        var body = Bodies.circle(800, 100, 25);
        body.mass = 10;
        body.inverseMass = 1 / body.mass;
        var constraint = Constraint.create({
            pointA: { x: 400, y: 100 },
            bodyB: body,
        });
        World.add(world, [body, constraint]);
        World.add(world, [
            // walls
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
        ]);
        // add mouse control
        var mouse = Mouse.create(render.canvas), mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                // allow bodies on mouse to rotate
                angularStiffness: 0,
                render: {
                    visible: false
                }
            }
        });
        World.add(world, mouseConstraint);
        // keep the mouse in sync with rendering
        render.mouse = mouse;
        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 }
        });
        // context for MatterTools.Demo
        return {
            engine: engine,
            runner: runner,
            render: render,
            canvas: render.canvas,
            stop: function () {
                matter_js__WEBPACK_IMPORTED_MODULE_1__["Render"].stop(render);
                matter_js__WEBPACK_IMPORTED_MODULE_1__["Runner"].stop(runner);
            }
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('matterCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MotionOscillatingComponent.prototype, "matterCanvas", void 0);
    MotionOscillatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-motion-oscillating',
            template: __webpack_require__(/*! ./motion-oscillating.component.html */ "./src/app/lessons/motion/motion-oscillating/motion-oscillating.component.html"),
            styles: [__webpack_require__(/*! ./motion-oscillating.component.css */ "./src/app/lessons/motion/motion-oscillating/motion-oscillating.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MotionOscillatingComponent);
    return MotionOscillatingComponent;
}());



/***/ }),

/***/ "./src/app/lessons/motion/motion-reciprocating/motion-reciprocating.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/lessons/motion/motion-reciprocating/motion-reciprocating.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lessons/motion/motion-reciprocating/motion-reciprocating.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/lessons/motion/motion-reciprocating/motion-reciprocating.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  motion-reciprocating works!\n</p>\n"

/***/ }),

/***/ "./src/app/lessons/motion/motion-reciprocating/motion-reciprocating.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/lessons/motion/motion-reciprocating/motion-reciprocating.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MotionReciprocatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionReciprocatingComponent", function() { return MotionReciprocatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MotionReciprocatingComponent = /** @class */ (function () {
    function MotionReciprocatingComponent() {
    }
    MotionReciprocatingComponent.prototype.ngOnInit = function () {
    };
    MotionReciprocatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-motion-reciprocating',
            template: __webpack_require__(/*! ./motion-reciprocating.component.html */ "./src/app/lessons/motion/motion-reciprocating/motion-reciprocating.component.html"),
            styles: [__webpack_require__(/*! ./motion-reciprocating.component.css */ "./src/app/lessons/motion/motion-reciprocating/motion-reciprocating.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MotionReciprocatingComponent);
    return MotionReciprocatingComponent;
}());



/***/ }),

/***/ "./src/app/lessons/motion/rotary/rotary.component.css":
/*!************************************************************!*\
  !*** ./src/app/lessons/motion/rotary/rotary.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#football{\r\n    position: absolute;\r\n    /* left: 25%; */\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n#rotator{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n}"

/***/ }),

/***/ "./src/app/lessons/motion/rotary/rotary.component.html":
/*!*************************************************************!*\
  !*** ./src/app/lessons/motion/rotary/rotary.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-canvas [canvas]=\"canvas\">\n  <div id=\"rotator\" [ngStyle]='canvas'>\n    <img id=\"football\" class=\"football\" src=\"assets/football.svg\" width=\"64\" height=\"64\" [ngStyle]=\"football\">\n  </div>\n</app-canvas>\n\n<div class=\"boxed container text-center\">\n  <button (click)=\"reset()\">Reset</button>\n  <button (click)=\"simulate()\">Simulate</button>\n  <br />\n  <br />\n  <label >\n    Radius: \n    <input type=\"number\" [(ngModel)]=\"radius\" max=\"300\">\n  </label>\n  <br />\n  <label >\n    Velocity:\n    <input type=\"number\" [(ngModel)]=\"velocity\">\n    m/s\n  </label>\n  <br />\n  <label >\n    Time:\n    <input type=\"number\" [(ngModel)]=\"time\">\n    s\n  </label>\n</div>"

/***/ }),

/***/ "./src/app/lessons/motion/rotary/rotary.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/lessons/motion/rotary/rotary.component.ts ***!
  \***********************************************************/
/*! exports provided: MotionRotaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionRotaryComponent", function() { return MotionRotaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MotionRotaryComponent = /** @class */ (function () {
    function MotionRotaryComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.radius = 150;
        this.velocity = 100;
        this.canvas = {
            position: 'relative',
            width: '600px',
            height: '600px',
            padding: '0px',
        };
        this.football = {
            'left': '150px',
        };
    }
    MotionRotaryComponent.prototype.ngOnInit = function () {
        var cssProperties = animejs__WEBPACK_IMPORTED_MODULE_2___default()({
            targets: '#football',
            left: (300 - this.radius) + 'px',
            easing: 'linear',
            duration: 0,
        });
    };
    MotionRotaryComponent.prototype.simulate = function () {
        // this.time = this.distance / this.velocity;
        this.football.left = (300 - this.radius) + 'px';
        var cssProperties = animejs__WEBPACK_IMPORTED_MODULE_2___default()({
            targets: '#rotator',
            rotate: 360,
            easing: 'linear',
            loop: true,
            duration: 2 * 22 / 7 * this.radius / this.velocity * 1000,
        });
    };
    MotionRotaryComponent.prototype.reset = function () {
        var _this = this;
        var url = this.router.url.toString();
        this.router.navigate(['lessons.ts']).then(function () {
            _this.router.navigate([url]);
        });
    };
    MotionRotaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rotary',
            template: __webpack_require__(/*! ./rotary.component.html */ "./src/app/lessons/motion/rotary/rotary.component.html"),
            styles: [__webpack_require__(/*! ./rotary.component.css */ "./src/app/lessons/motion/rotary/rotary.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MotionRotaryComponent);
    return MotionRotaryComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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

module.exports = __webpack_require__(/*! A:\xampp\htdocs\defence\easyPhysics\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map