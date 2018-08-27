webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_galleries_galleries_component__ = __webpack_require__("../../../../../src/app/components/galleries/galleries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_view_gallery_view_gallery_component__ = __webpack_require__("../../../../../src/app/components/view-gallery/view-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_guards_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_guards_guest_guard__ = __webpack_require__("../../../../../src/app/shared/guards/guest.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: '',
        redirectTo: '/galleries',
        pathMatch: 'full'
    },
    {
        path: 'galleries',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_guards_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_3__components_galleries_galleries_component__["a" /* GalleriesComponent */]
    },
    {
        path: 'galleries/:galleryID',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_guards_auth_guard__["a" /* AuthGuard */]],
        data: { reuse: true },
        component: __WEBPACK_IMPORTED_MODULE_4__components_view_gallery_view_gallery_component__["a" /* ViewGalleryComponent */]
    },
    {
        path: 'galleries/:galleryID/:imageID',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_guards_auth_guard__["a" /* AuthGuard */]],
        data: { reuse: true },
        component: __WEBPACK_IMPORTED_MODULE_4__components_view_gallery_view_gallery_component__["a" /* ViewGalleryComponent */]
    },
    {
        path: 'register',
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_guards_guest_guard__["a" /* GuestGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_guards_guest_guard__["a" /* GuestGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Div za pozadinu sa teksturom i gradijentom <div class=\"myclass-gradient-background\"> -->\n  <div class=\"container-fluid myclass-whole-page-wrapper\">\n    <app-layout></app-layout>\n  </div>\n<!-- </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
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
    function AppComponent() {
        this.title = 'app';
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: "AIzaSyCJxm_QbMrSQuKdhRPRX2hxjVRStG7MmJM",
            authDomain: "smartinit-zavrsni.firebaseapp.com",
            databaseURL: "https://smartinit-zavrsni.firebaseio.com",
            projectId: "smartinit-zavrsni",
            storageBucket: "smartinit-zavrsni.appspot.com",
            messagingSenderId: "757219458625"
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_gallery_service__ = __webpack_require__("../../../../../src/app/shared/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_view_gallery_view_gallery_component__ = __webpack_require__("../../../../../src/app/components/view-gallery/view-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_view_image_view_image_component__ = __webpack_require__("../../../../../src/app/components/view-image/view-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_layout_layout_component__ = __webpack_require__("../../../../../src/app/components/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_galleries_galleries_component__ = __webpack_require__("../../../../../src/app/components/galleries/galleries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_guards_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_guards_guest_guard__ = __webpack_require__("../../../../../src/app/shared/guards/guest.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { HttpModule } from '@angular/http'; //<<< ovaj je deprecated! treba koristiti HttpClientModule umesto HttpModule, a za ono sto je tebi bilo potrebno u ovom projektu mozes kasnije u  servisima uvesti samo HttpClient koji je zapravo samo deo ovog dole HttpClientModule >>> https://stackoverflow.com/questions/48124136/angular-4-difference-between-httpclient-and-httpclientmodule












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_view_gallery_view_gallery_component__["a" /* ViewGalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_view_image_view_image_component__["a" /* ViewImageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_galleries_galleries_component__["a" /* GalleriesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                // HttpModule,
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                // PopoverModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__shared_services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_15__shared_guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__shared_guards_guest_guard__["a" /* GuestGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__components_view_image_view_image_component__["a" /* ViewImageComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/galleries/galleries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-header{\r\n\tbackground: -webkit-gradient(linear, left top, right top, from(rgba(237,237,237,1)), color-stop(53%, rgba(246,246,246,1)), to(rgba(255,255,255,1)));\r\n\tbackground: linear-gradient(to right, rgba(237,237,237,1) 0%, rgba(246,246,246,1) 53%, rgba(255,255,255,1) 100%);\r\n\t/*background: url(http://api.thumbr.it/whitenoise-361x370.png?background=f0f0f0ff&noise=969696&density=20&opacity=15)*/\r\n}\r\n\r\n.card-footer{\r\n\tbackground: -webkit-gradient(linear, left top, right top, from(rgba(237,237,237,1)), color-stop(53%, rgba(246,246,246,1)), to(rgba(255,255,255,1)));\r\n\tbackground: linear-gradient(to right, rgba(237,237,237,1) 0%, rgba(246,246,246,1) 53%, rgba(255,255,255,1) 100%);\r\n\t/*background: url(http://api.thumbr.it/whitenoise-361x370.png?background=f0f0f0ff&noise=969696&density=20&opacity=15)*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/galleries/galleries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"myclass-galleries-container\">\n\t<div *ngFor=\"let gallery of showedGalleries\" class=\"card text-left\">\n\t  <div class=\"card-header\">\n\t  \t<h5 class=\"card-title\"><a routerLink = \"/galleries/{{gallery.id}}\">{{ gallery.name }}</a></h5>\n\t    {{ gallery.description }}\n\t  </div>\n\t  <div class=\"card-body myclass-galleries-images-container\">\n\t  \t<!-- Ranije dok je ovo bio flexbox umesto showedImagesNumber dole u slice funkciji je stajalo gallery.showedImagesNumber -->\n\t  \t<img *ngFor=\"let image of gallery.images.slice(0, showedImagesNumber)\" src=\"{{image.url}}\" class=\"myclass-galleries-index-images\" (load)=\"resizeImageIfVertical($event)\">\n\t  </div>\n\t  <div class=\"card-footer text-muted\">\n\t    <strong>Created by:</strong> <a href=\"#\" (click)=\"$event.preventDefault()\">{{ gallery.user.firstName }}  {{ gallery.user.lastName}}</a>\n\t    <strong>Created at:</strong> {{ gallery.created_at | date: \"MMMM d, y\" }}\n\t    <span *ngIf=\"gallery.created_at !== gallery.updated_at\"><strong>Last updated at:</strong> {{ gallery.updated_at | date: \"MMMM d, y\" }}</span>\n\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/galleries/galleries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__ = __webpack_require__("../../../../../src/app/shared/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleriesComponent = /** @class */ (function () {
    function GalleriesComponent(galleryService) {
        this.galleryService = galleryService;
        this.showedGalleries = [];
        this.showedImagesNumber = 3;
    }
    GalleriesComponent.prototype.onResize = function (event) {
        // console.log(event.target.innerWidth);
        if (event.target.innerWidth < 575.98) {
            this.showedImagesNumber = 2;
        }
        else {
            this.showedImagesNumber = 3;
        }
    };
    GalleriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryService.getGalleries().subscribe(function (data) {
            console.log(data);
            // this.loadGalleries()
            _this.showedGalleries = data;
        }, function (err) {
            alert("Server returned code " + err.status + " with message: " + err.error.error);
            console.log(err);
        });
    };
    GalleriesComponent.prototype.screenWidthChange = function (mediaQuery) {
        // let self = this
        if (mediaQuery.matches) {
            // console.log(this);
            this.showedImagesNumber = 2;
        }
        else {
            // console.log(self);
            this.showedImagesNumber = 3;
        }
    };
    GalleriesComponent.prototype.resizeImageIfVertical = function ($event) {
        // console.log($event.target.parentElement);
        // kako dobaviti dimenzije slike https://davidwalsh.name/get-image-dimensions
        if (($event.target.naturalHeight / $event.target.naturalWidth) >= 1.5) {
            $event.target.parentNode.style.width = '50%';
        }
        else if (($event.target.naturalHeight / $event.target.naturalWidth) >= 1.2) {
            $event.target.parentNode.style.width = '65%';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GalleriesComponent.prototype, "onResize", null);
    GalleriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-galleries',
            template: __webpack_require__("../../../../../src/app/components/galleries/galleries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/galleries/galleries.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_gallery_service__["a" /* GalleryService */]])
    ], GalleriesComponent);
    return GalleriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Treba koristiti ovu max-width vrednost, kad isprobas u browseru, to je tacno to... Inace ove vrednosti imas na https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints*/\r\n@media (max-width: 991.98px) { \r\n\t#myid-logged-user-dropdown-links{\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n@media (min-width: 992px) { \r\n\t#myid-logged-user-regular-links{\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n@media (max-width: 575.98px) { \r\n\t#myid-central-logo{\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n.bg-dark{\r\n\tbackground-color: black !important;\r\n}\r\n#myid-logged-user-dropdown-links, #myid-logged-user-dropdown-links > li{\r\n\tborder-radius: 50%;\r\n}\r\na.dropdown-toggle.myclass-account-thumbnail{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t/*Vertical align sam uradio po ovom linku https://stackoverflow.com/questions/25311541/how-to-vertically-align-text-inside-a-flexbox mada ima tu jos nacina osim ovog*/\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n\tbackground-color: indianred;\r\n\tborder-radius: 50%;\r\n\tmin-width: 44px;\r\n\tmin-height: 44px;\r\n\tmax-width: 60px;\r\n\tmax-height: 60px;\r\n\ttext-align: center;\r\n\tborder: 2px solid black;\r\n  /*box-shadow: 0px 2px 4px 0px #eeeeee;*/\r\n  -webkit-box-shadow: 0px 2px 4px 0px #E0E0E0;\r\n          box-shadow: 0px 2px 4px 0px #E0E0E0;\r\n  -webkit-transition: -webkit-box-shadow 200ms ease-in-out;\r\n  transition: -webkit-box-shadow 200ms ease-in-out;\r\n  transition: box-shadow 200ms ease-in-out;\r\n  transition: box-shadow 200ms ease-in-out, -webkit-box-shadow 200ms ease-in-out;\r\n}\r\n#myid-logged-user-dropdown-links:hover a.dropdown-toggle.myclass-account-thumbnail {\r\n  -webkit-box-shadow: 0px 2px 2px 0px white;\r\n          box-shadow: 0px 2px 2px 0px white;\r\n}\r\n/*Ovde sam skontao da kad se aktivira dropdown da se na bootstrap na li dodaje show klasu koja uzrokuje da se apliciraju odredjeni stilovi na link koji aktivira dropdown, dok je dropdown aktivan. Ja je isto koristim da dodam neke svoje stilove koje zelim!*/\r\nli.show a{\r\n\t-webkit-box-shadow: 0px 2px 2px 0px white;\r\n\t        box-shadow: 0px 2px 2px 0px white;\r\n}\r\na.dropdown-toggle.myclass-account-thumbnail img{\r\n\twidth: 100%;\r\n\tborder-radius: 50%;\r\n}\r\na.dropdown-toggle.myclass-account-thumbnail::after{\r\n\tdisplay: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<img id=\"myid-central-logo\" src=\"../../../assets/images/logo12-01.svg\">\n<nav #navigation class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/galleries\">AF galleries</a>\n  <button #btnNavBarToggler class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div #collapsingNavBarDiv class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/galleries\">View all galleries</a>\n      </li>\n      \n      \n    </ul>\n            \n            <a class=\"nav-link\" routerLink=\"/login\" *ngIf=\"!authService.isAuthenticated\">Login</a>\n       \n            <a class=\"nav-link\" routerLink=\"/register\" *ngIf=\"!authService.isAuthenticated\">Register</a>\n\n            \n            <!-- Kopiran obican dropdown iz navbar-a i skinuta klasa mr-auto iz ul taga, a dodata klasa dropdown-menu-right dole u dropdown div-->\n\n            <ul id=\"myid-logged-user-dropdown-links\" class=\"navbar-nav\" *ngIf=\"authService.isAuthenticated\">\n              \n              <li class=\"nav-item dropdown\">\n                <!-- Za ovu foru sa ngStyle i && vidi https://stackoverflow.com/questions/45740089/how-to-set-a-ngstyle-in-angular-2-if-condition-matches . To ti sluzi da kad hoces da setujes samo vrednost ako je uslov zadovoljen a vrednost za else te ne zanima. Jos jedno interesantno resenje imas ovde https://stackoverflow.com/questions/37051496/combine-ngstyle-with-condition-if-else/46089536 vidi odgovor od Zohar -->\n                <a class=\"nav-link dropdown-toggle myclass-account-thumbnail\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" [ngStyle]=\"{'padding': authService.loggedUserProfileImage && '2px'}\">\n                  <img *ngIf=\"authService.loggedUserProfileImage; else loggedUserNameFirstLetter\" src=\"{{authService.loggedUserProfileImage}}\">\n                  <ng-template #loggedUserNameFirstLetter>\n                    <span>{{authService.loggedUserNameFirstLetter}}</span>\n                  </ng-template>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                  <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">My account</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">My galleries</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\" href=\"#\" (click)=\"authService.logout($event)\">Logout</a>\n                </div>\n              </li>\n              \n            </ul>\n            <!-- ****************************************** -->\n\n            <span id=\"myid-logged-user-regular-links\">\n              <a class=\"nav-link\" href=\"#\" (click)=\"$event.preventDefault()\" *ngIf=\"authService.isAuthenticated\">My account</a>\n\n              <a class=\"nav-link\" href=\"#\" (click)=\"$event.preventDefault()\" *ngIf=\"authService.isAuthenticated\">My galleries</a>\n              \n              <!-- Ukoliko nemas u donjem primeru href=\"#\" neces imati lepo dizajniran link  -->\n              \n              <a class=\"nav-link\" href=\"#\" (click)=\"authService.logout($event)\" *ngIf=\"authService.isAuthenticated\">Logout</a>\n            </span>\n  </div>\n</nav>\n\n<!-- <br> -->\n\n<!-- foru da ti uvek skroluje na vrh stranice kad ti se promeni ruta nasao ovde https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click , slicnu stvar sa malo vise koda imas ovde (prihvacen odgovor) https://stackoverflow.com/questions/39601026/angular-2-scroll-to-top-on-route-change , a na oba linka imas i varijantu kad hoces da ti se kad kliknes back ili forward u browseru ipak stranica ne skroluje na vrh, nego da ostane tamo gde je bila prethodno (na oba linka je to u odgovoru odmah ispod prihvacenog, a ja zasad ovo resenje nisam stavljao!) -->\n<div class=\"container-fluid myclass-router-outlet-wrapper\">\n\t<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = /** @class */ (function () {
    // ovo sto si injektirao authService u ovu komponentu ti omogucuje da pristupis metodama i propertijima authService-a
    function LayoutComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        // Na ovaj nacin se detektuju promene rute (https://medium.com/@Carmichaelize/detecting-router-changes-with-angular-2-2f8c019788c3)
        router.events.subscribe(function (event) {
            // Na ovaj nacin postizem da mi se hamburger menu navigacija zatvara ukoliko kliknem na neki link unutar nje. Zasto radim ovako, a ne slusam jednostavno click event na linku? Zato sto linkovi rade preko routerLink direktive (atributa sta li je) i kad bi jos dodatno dodao click event koji zatvara navigaciju ne znam koji bi se prvi okinuo i dal bi dolazili u neki konflikt. Plus ovako ako klikces na link na kojem se vec nalazis nece ti se zatvoriti navigacija. Etoooooooooooooo
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */] && _this.collapsingNavBarDiv.nativeElement.classList.contains('show')) {
                _this.btnNavBarToggler.nativeElement.click();
            }
        });
    }
    // S ovim postizem da kad mi je hamburger menu navigacija otvorena, a ja kliknem negde van nje da se ona tada zatvori!
    LayoutComponent.prototype.closeNavbarOnClickOutside = function (event) {
        // console.log(event);
        // Ovde prvo ispitujem da li mi je hamburger menu uopste otvoren, a to saznajem ako on sadrzi klasu show. U vanilla js-u se to radi sa ovim classList.contains() (https://stackoverflow.com/questions/5085567/what-is-the-hasclass-function-with-plain-javascript - vidi odgovor ispod prihvacenog od Damien) ili mozes da uradis ovo iz prihvacenog odgovora sa istog linka (da imitiras jquery hasClass metodu) ukoliko te je briga za neke matorije browsere. Ovde imas opet skoro iste odgovore https://stackoverflow.com/questions/5898656/test-if-an-element-contains-a-class .
        // Zatim ispitujem da li mesto gde sam kliknuo pripada navigaciji, odnosno da li navigacija sadrzi (contains) to mesto. Ovo se danas ovako radi u vanilla js-u sa Node.contains() (https://stackoverflow.com/questions/2234979/how-to-check-in-javascript-if-one-element-is-contained-within-another - vidi odgovor ispod prihvacenog, mozes gledati i sve ostale odgovore ima dobrih, ali pored ovog jos bih odabrao ovaj od Josh Crozier koji koristi parent.querySelector()). Link na istu temu: https://stackoverflow.com/questions/34621987/check-if-clicked-element-is-descendant-of-parent-otherwise-remove-parent-elemen . PS verujem da se ovo moze raditi i sa https://developer.mozilla.org/en-US/docs/Web/API/Element/closest verovatno i sa https://angular.io/api/core/Renderer2#selectRootElement , ali ova dva nisam testirao.
        if (this.collapsingNavBarDiv.nativeElement.classList.contains('show') && !this.navigation.nativeElement.contains(event.target)) {
            // Ovde koristim foru koja je po meni najjednostavnija. Umesto da istrazujem koje se sve klase dodaju da bi se navigacija zatvorila jednostavno simuliram klik na dugme za navigaciju koje i inace zatvara navigaciju (nasao na https://stackoverflow.com/questions/23764863/how-to-close-an-open-collapsed-navbar-when-clicking-outside-of-the-navbar-elemen/23769601#23769601 , https://stackoverflow.com/questions/41494858/closing-an-open-collapsed-navbar-when-clicking-outside-in-booststrap-4). Jos neki korisni odgovori ovde https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click
            this.btnNavBarToggler.nativeElement.click();
        }
    };
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent.prototype.onActivate = function (event) {
        // Ipak sam ovo za sad zakomentarisao, iako je perfektno radilo, ali onda nemas utisak SPA kad ti se non stop stranica penje na gore, tako da cu samo staviti ovo ponasanje na home stranicu
        // window.scroll(0,0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('navigation'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LayoutComponent.prototype, "navigation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('btnNavBarToggler'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LayoutComponent.prototype, "btnNavBarToggler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('collapsingNavBarDiv'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]
        // S ovim postizem da kad mi je hamburger menu navigacija otvorena, a ja kliknem negde van nje da se ona tada zatvori!
        )
    ], LayoutComponent.prototype, "collapsingNavBarDiv", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('body:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LayoutComponent.prototype, "closeNavbarOnClickOutside", null);
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/components/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress{\r\n\tvisibility: hidden;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 10px;\r\n\tborder-radius: 0;\r\n\tz-index: 999;\r\n}\r\n\r\n.progress .progress-bar{\r\n\twidth: 100%;\r\n\t-webkit-animation: progress-bar-stripes 0.5 linear infinite;\r\n    animation: progress-bar-stripes 0.5s linear infinite;\r\n}\r\n\r\n.alert.alert-danger{\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.myclass-input-container-class{\r\n\tmax-width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div #progressBar class=\"progress\">\n    <div class=\"progress-bar progress-bar-striped progress-bar-animated\"></div>\n</div>\n\n<form (ngSubmit)=\"login(email, password)\">\n<div class=\"form-group\">\n\t<label>Email: </label>\n\t<div class=\"container myclass-input-container-class\">\n\t\t<div class=\"row\">\n\t\t\t<input type=\"email\" name=\"email\" class=\"form-control col-9 col-sm-6 col-md-5\" [(ngModel)] = \"email\">\n\t\t</div>\n\t</div>\n</div>\n<div class=\"form-group\">\n\t<label>Password: </label>\n\t<div class=\"container myclass-input-container-class\">\n\t\t<div class=\"row\">\n\t\t\t<input type=\"password\" name=\"password\" class=\"form-control col-9 col-sm-6 col-md-5\" [(ngModel)] = \"password\">\n\t\t</div>\n\t</div>\n</div>\n<button #btnLogin type=\"submit\" id=\"myid-register-submit-button\"  class=\"btn btn-primary\">Login</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, renderer) {
        this.authService = authService;
        this.router = router;
        this.renderer = renderer;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.renderer.setStyle(this.progressBar.nativeElement, 'visibility', 'visible');
        this.renderer.setProperty(this.btnLogin.nativeElement, 'disabled', true);
        this.authService.login(email, password).then(function () {
            _this.renderer.setStyle(_this.progressBar.nativeElement, 'visibility', 'hidden');
            _this.renderer.setProperty(_this.btnLogin.nativeElement, 'disabled', false);
            _this.router.navigateByUrl('/galleries');
        }).catch(function () {
            _this.renderer.setStyle(_this.progressBar.nativeElement, 'visibility', 'hidden');
            _this.renderer.setProperty(_this.btnLogin.nativeElement, 'disabled', false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("progressBar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LoginComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("btnLogin"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LoginComponent.prototype, "btnLogin", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress{\r\n\tvisibility: hidden;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 10px;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.progress .progress-bar{\r\n\twidth: 100%;\r\n\t-webkit-animation: progress-bar-stripes 0.5 linear infinite;\r\n  \tanimation: progress-bar-stripes 0.5s linear infinite;\r\n}\r\n\r\n.alert.alert-danger{\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.myclass-input-container-class, .myclass-error-container-class{\r\n\tmax-width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div #progressBar class=\"progress\">\n    <div class=\"progress-bar progress-bar-striped progress-bar-animated\"></div>\n</div>\n\n<form #registerForm=\"ngForm\" (ngSubmit)=\"register(user)\">\n\n    <div class=\"form-group\">\n        <label for=\"email\">Email address</label>\n        <div class=\"container myclass-input-container-class\">\n          <div class=\"row\">\n            <input #email=\"ngModel\" [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control col-8 col-md-6 col-lg-5\" id=\"email\" name=\"email\" required email>\n          </div>\n        </div>\n\n        <div class=\"container myclass-error-container-class\">\n          <div class=\"row\">\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger col-8 col-md-6 col-lg-5\">\n                <div *ngIf=\"email.errors.required\">\n                    Email is required.\n                </div>\n            \n                <div *ngIf=\"email.errors.email\">\n                    Please provide valid email address.\n                </div>\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"password\">\n           Password\n           \n       </label>\n\n       <div class=\"container myclass-input-container-class\">\n         <div class=\"row\">\n            <input #password=\"ngModel\" [(ngModel)]=\"user.password\" required minlength=\"8\" pattern=\"\\w*[0-9]{1,}\\w*\" \n                 type=\"password\" class=\"form-control col-8 col-md-6 col-lg-5\" id=\"password\" name=\"password\">\n         </div>\n       </div>\n\n       <div class=\"container myclass-error-container-class\">\n         <div class=\"row\">\n\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger col-8 col-md-6 col-lg-5\">\n                 <div *ngIf=\" password.errors.required \">\n                    Password is required\n                 </div>\n                 <ng-container *ngIf=\"password.dirty\">\n                   <div *ngIf=\" password.errors.minlength \">\n                      Password must be at least 8 chars\n                   </div>\n                   <div *ngIf=\" password.errors.pattern \">\n                      Password must contain at least one number\n                   </div>\n                 </ng-container>\n            </div>\n\n         </div>\n       </div>\n\n    </div>\n\n\n    <div class=\"form-group\">\n        <label for=\"password_confirmation\">\n           Confirm Password\n           \n       </label>\n        <div class=\"container\">\n          <div class=\"row\">\n            <input #confirmPassword=\"ngModel\" [(ngModel)]=\"user.confirmPassword\" required \n                type=\"password\" class=\"form-control col-8 col-md-6 col-lg-5\" id=\"password_confirmation\" name=\"password_confirmation\">\n          </div>\n        </div>\n        <div class=\"container myclass-error-container-class\">\n          <div class=\"row\">\n\n              <div *ngIf=\"(confirmPassword.invalid || confirmPassword.value !== password.value) && (confirmPassword.touched || confirmPassword.dirty)\" class=\"alert alert-danger col-8 col-md-6 col-lg-5\">\n                \n                 <div *ngIf=\"confirmPassword.invalid && confirmPassword.errors.required \">\n                    Confirmed password is required\n                 </div>\n                  \n                 <div *ngIf=\"confirmPassword.dirty && confirmPassword.value !== password.value\">\n                    Confirmed password is not the same password\n                 </div>\n\n              </div>\n\n          </div>\n        </div>\n\n        \n    </div>\n\n    <button #btnRegister type=\"submit\" [disabled]=\"!registerForm.valid || confirmPassword.value !== password.value\" id=\"myid-register-submit-button\" class=\"btn btn-primary\">Register</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService, renderer) {
        this.router = router;
        this.authService = authService;
        this.renderer = renderer;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (user) {
        var _this = this;
        // console.log(user);
        this.renderer.setStyle(this.progressBar.nativeElement, 'visibility', 'visible');
        this.renderer.setProperty(this.btnRegister.nativeElement, 'disabled', true);
        setTimeout(function () {
            _this.authService.register(user);
            _this.renderer.setStyle(_this.progressBar.nativeElement, 'visibility', 'hidden');
            _this.renderer.setProperty(_this.btnRegister.nativeElement, 'disabled', false);
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("progressBar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], RegisterComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("btnRegister"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], RegisterComponent.prototype, "btnRegister", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/view-gallery/view-gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress{\r\n\t/*visibility: hidden;*/\r\n\tz-index: 999999;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 10px;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.progress .progress-bar{\r\n\twidth: 100%;\r\n\t-webkit-animation: progress-bar-stripes 0.5 linear infinite;\r\n  \tanimation: progress-bar-stripes 0.5s linear infinite;\r\n}\r\n\r\n/*ideju za ovo pokupio ovde https://stackoverflow.com/questions/9416556/jquery-how-to-disable-the-entire-page*/\r\n\r\n.myclass-disabled-overlay{\r\n\tvisibility: hidden;\r\n\tposition: fixed;\t/*ovde moras dodati fixed da bi ti pokrivao i deo ekrana koji se skroluje (vazi i za visinu i sirinu) https://stackoverflow.com/questions/10945268/disable-whole-page-with-an-overlay*/\r\n\tz-index: 998;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(150, 150, 150, 0.5);\r\n\t/*opacity: 0;*/\r\n}\r\n\r\n#myid-view-gallery-name{\r\n\tfont-size: 32px;\r\n\t/*padding-top: 5px;*/\r\n}\r\n\r\n#myid-view-gallery-description{\r\n\tfont-size: 20px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.myclass-view-gallery-container{\r\n\tbackground-color: #E8E8E8FF;\r\n\tborder-radius: 25px;\r\n\tborder: 2px solid #FF6A00FF;\r\n\toverflow: hidden;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.myclass-view-gallery-images-container{\r\n\t/*display: flex;\r\n\tflex-wrap: wrap;\r\n\talign-items: flex-start;*/\r\n\r\n\t/*background-color: #E5E5E5FF;\r\n\tborder-radius: 25px;\r\n\tborder: 2px solid #FF6A00FF;*/\r\n\tpadding: 25px;\r\n\tdisplay: grid;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\tjustify-items: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tgrid-template-columns: repeat(auto-fill, 30%);\r\n\tgrid-row-gap: 25px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.myclass-view-gallery-images-container a{\r\n\tborder: 2.5px outset white;\r\n\twidth: 100%; /*sa ovim ti njemu zapravo govoris da mu je sirina sto posto od grid kolone!*/\r\n}\r\n\r\n.myclass-view-gallery-images-container a:hover{\r\n\tborder-style: inset;\r\n}\r\n\r\n.myclass-view-gallery-images{\r\n\twidth: 100%;\r\n}\r\n\r\n.myclass-view-gallery-footer{\r\n\t/*border-radius: 0 0 25px 25px; reseno ipak sa overflow hidden na parentu*/\r\n\t/*border-top: 4px solid white;*/\r\n\tborder-top: 4px solid #ffffffd4;\r\n\t/*background-color: darkgray;*/\r\n\tbackground-color: #a9a9a9a1;\r\n\tcolor: white !important;\r\n}\r\n\r\n.myclass-add-comment-form{\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.myclass-gallery-comments{\r\n\tpadding-top: 15px;\r\n}\r\n\r\n.myclass-gallery-comments > * + *{\r\n\tmargin-top: 15px;\r\n\tborder-top: 1.5px solid #636363FF;\r\n\tpadding-top: 10px;\r\n}\r\n\r\n.myclass-account-thumbnail-wrapper{\r\n\twidth: 60px;\r\n}\r\n\r\n.myclass-account-thumbnail{\r\n\tmargin: 0 auto;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tbackground-color: darkblue;\r\n\tborder-radius: 50%;\r\n\tmin-width: 40px;\r\n\tmin-height: 40px;\r\n\tmax-width: 60px;\r\n\tmax-height: 60px;\t\r\n}\r\n\r\n.myclass-account-thumbnail img{\r\n\twidth: 100%;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.myclass-account-thumbnail span{\r\n\tcolor: white;\r\n\tmargin: auto;\r\n}\r\n\r\n.myclass-delete-link{\r\n\tdisplay: inline-block;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n\tmargin: 0 5px;\r\n}\r\n\r\n.myclass-image-delete{\r\n\tline-height: 1;\r\n\tfont-size: 35px;\r\n\tcolor: #BC0000;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.myclass-image-delete:hover{\r\n\tcolor: #EA0000;\r\n\tcursor: pointer;\r\n}\r\n\r\n.myclass-edit-link{\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.myclass-image-edit{\r\n\tline-height: 1;\r\n\tfont-size: 32px;\r\n\tcolor: #e6c300;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.myclass-image-edit:hover{\r\n\tcolor: gold;\r\n\tcursor: pointer;\r\n}\r\n\r\n@media (max-width: 991.98px){\r\n\t#myid-view-gallery-name{\r\n\t\tfont-size: 28px;\r\n\t}\r\n\r\n\t#myid-view-gallery-description{\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n}\r\n\r\n@media (max-width: 767.98px){\r\n\r\n\t#myid-view-gallery-name{\r\n\t\tfont-size: 24px;\r\n\t}\r\n\r\n\t#myid-view-gallery-description{\r\n\t\tfont-size: 16px;\r\n\t}\r\n\r\n\t.myclass-view-gallery-container{\r\n\t\tborder-radius: 10px;\r\n\t}\r\n\r\n\t.myclass-view-gallery-images-container{\r\n\t\tgrid-template-columns: repeat(auto-fill, 32%);\r\n\t\tpadding: 10px;\r\n\t\tmargin-bottom: 15px;\r\n\t}\r\n\r\n}\r\n\r\n@media (max-width: 575.98px){\r\n\r\n\t.myclass-view-gallery-images-container{\r\n\t\tgrid-template-columns: repeat(auto-fill, 49%);\r\n\t\tgrid-row-gap: 10px;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-gallery/view-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'position': 'fixed', 'top': '0', 'z-index': '1000'}\">\n\t<ng-container #viewImageViewContainerRef></ng-container>\n</div>\n \n\n<div #progressBar [ngStyle]=\"{'visibility': disableProgressBar > 0 ? 'visible' : 'hidden'}\" class=\"progress\">\n    <div class=\"progress-bar progress-bar-striped progress-bar-animated\"></div>\n</div>\n<div #disabledOverlay class=\"myclass-disabled-overlay\"></div>\n\n<div #galleryStart></div>\n<div *ngIf=\"gallery\">\n\n\t<h1 id=\"myid-view-gallery-name\">{{ gallery.name }}</h1>\n\t<h2 id=\"myid-view-gallery-description\">{{ gallery.description }}</h2>\n\t\n\t<!-- <div class=\"myclass-view-gallery-container\">\n\t\t\n\t\t<a *ngFor=\"let image of gallery.images\" href=\"{{image.url}}\" target=\"_blank\">\n\t\t\t<img src=\"{{image.url}}\" class=\"myclass-view-gallery-images\" (load)=\"resizeImageIfVertical($event)\">\n\t\t</a>\n\t\n\t</div> -->\n\n\t<div class=\"card text-left myclass-view-gallery-container\">\n\t  \n\t\t<div class=\"myclass-view-gallery-images-container\">\n\t\t\t\t\n\t\t\t<a *ngFor=\"let image of gallery.images\" routerLink=\"/galleries/{{gallery.id}}/{{image.id}}\" href=\"{{image.url}}\">\n\t\t\t\t<img src=\"{{image.url}}\" class=\"myclass-view-gallery-images\" (load)=\"resizeImageIfVertical($event)\">\n\t\t\t</a>\n\t\t\n\t\t</div>\n\n\t  <div class=\"card-footer text-muted myclass-view-gallery-footer\">\n\t    <strong>Created by:</strong> <a href=\"#\" (click)=\"$event.preventDefault()\">{{ gallery.user.first_name }}  {{ gallery.user.last_name}}</a>\n\t    <strong>Created at:</strong> {{ gallery.created_at | date: \"MMMM d, y\" }}\n\t    <span *ngIf=\"gallery.created_at !== gallery.updated_at\"><strong>Last updated at:</strong> {{ gallery.updated_at | date: \"MMMM d, y\" }}</span>\n\t  </div>\n\t</div>\n\n\t<div *ngIf=\"isUserAuthenticated\" class=\"myclass-add-comment-form\">\n\t\t\n\t\t<form #addGalleryCommentForm = \"ngForm\" (ngSubmit)=\"addGalleryComment();\">\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"exampleFormControlTextarea1\">Your comment for this gallery:</label>\n\t\t    <textarea #commentBody=\"ngModel\" [(ngModel)]=\"galleryComment.commentBody\" name=\"commentBody\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" required></textarea>\n\t\t  </div>\n\t\t  <div *ngIf=\"commentBody.invalid && (commentBody.dirty || commentBody.touched)\" class=\"alert alert-danger\">\n\n\t\t    <div *ngIf=\"commentBody.errors.required\">\n\t\t      Comment body is required.\n\t\t    </div>\n\t\t    \n\t\t  </div>\n\t\t  <button #btnAddComment [disabled]=\"!addGalleryCommentForm.valid\" type=\"submit\" class=\"btn btn-primary\">Add comment</button>\n\t\t</form>\n\t\t\n\t</div>\n\n\t<div #commentsContainer class=\"myclass-gallery-comments\">\n\t\t\n\t\t<!-- skinuto sa https://getbootstrap.com/docs/4.0/layout/media-object/ -->\n\t\t<div class=\"media\" [@.disabled]=\"disableAnimations\" @fade *ngFor=\"let comment of commentsArrayReversed\">\n\t\t\t<!-- reverse pipe napravljen po odogovoru od Thierry Templier sa ovog linka, al sam ga ipak izbrisao zasad https://stackoverflow.com/questions/35703258/invert-angular-2-ngfor -->\n\t\t  <!-- <img class=\"mr-3\" alt=\"Image\"> -->\n\t\t\t<div class=\"myclass-account-thumbnail-wrapper mr-3\">\n\t\t\t\t<div [ngStyle]=\"{'width': comment.user.profile_image ? '60px' : '40px', 'height': comment.user.profile_image ? '60px' : '40px', 'background-color': comment.user.profile_image && 'transparent'}\" class=\"myclass-account-thumbnail\">\n\t\t\t\t\t<img *ngIf=\"comment.user.profile_image\" src=\"{{comment.user.profile_image}}\">\n\t\t\t\t\t<span *ngIf=\"!comment.user.profile_image\">{{comment.user.first_name.charAt(0).toUpperCase()}}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  <div class=\"media-body\">\n\t\t    <h5 class=\"mt-0\">{{comment.user.first_name}} {{comment.user.last_name}} <small class=\"text-muted\">{{comment.created_at | date: \"longDate\"}}</small><small class=\"text-muted\" *ngIf=\"comment.created_at !== comment.updated_at\"> ( <em>Last updated at: {{ comment.updated_at | date: \"longDate\" }}</em> )</small></h5>\n\t\t    {{comment.comment_body}}\n\t\t  </div>\n\t\t  <a #editGalleryCommentModalButtonTrigger data-toggle=\"modal\" data-target=\"#exampleModalCenter\" *ngIf=\"comment.user.email === loggedUserEmail\" class=\"myclass-edit-link\" (click)=\"editGalleryComment(comment)\"><i class=\"fas fa-edit myclass-image-edit \"></i></a>\n\t\t  <a *ngIf=\"comment.user.email === loggedUserEmail\" (click)=\"deleteGalleryComment(comment)\" class=\"myclass-delete-link\"><i class=\"fas fa-times-circle myclass-image-delete \"></i></a>\n\t\t</div>\n\t\n\t</div>\n\n\t<!-- Modal -->\n\t\t<div #editGalleryCommentModal class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" data-backdrop=\"static\" data-keyboard=\"false\"><!-- Da zabranis modalu da se zatvara na klik van njega, treba da mu zadas  data-backdrop=\"static\", a da mu zabranis da se zatvara na escape dugme data-keyboard=\"false\"-->\n\t\t  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t    <div class=\"modal-content\">\n\t\t      <div class=\"modal-header\">\n\t\t        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Comment edit</h5>\n\t\t        <button #modalCloseButton type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t          <span aria-hidden=\"true\">&times;</span>\n\t\t        </button>\n\t\t      </div>\n\t\t      <div class=\"modal-body\">\n\t\t        <form #editGalleryCommentForm = \"ngForm\" (ngSubmit)=\"updateGalleryComment(galleryCommentForEditing);\">\n\t\t          <div class=\"form-group\">\n\t\t            <label for=\"exampleFormControlTextarea1\">Edit your comment:</label>\n\t\t            <textarea #editedCommentBody=\"ngModel\" [(ngModel)]=\"galleryCommentForEditing.commentBody\" name=\"editedCommentBody\" class=\"form-control\" id=\"editedCommentBody\" rows=\"3\" required></textarea>\n\t\t          </div>\n\t\t          <div *ngIf=\"editedCommentBody.invalid && editedCommentBody.touched\" class=\"alert alert-danger\">\n\t \t            <div *ngIf=\"editedCommentBody.errors.required\">\n\t\t              Comment body is required.\n\t\t            </div>\n\t\t            \n\t\t          </div>\n\t\t          <button #btnSubmitCommentChanges [disabled]=\"!editGalleryCommentForm.valid || galleryCommentForEditing.commentBody === originalGalleryCommentBeforeEditing.commentBody\" type=\"submit\" class=\"btn btn-primary\">Submit changes</button>\n\t\t          <button #modalCancelButton type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n\t\t        </form>\n\t\t      </div>\n\t \t    </div>\n\t\t  </div>\n\t\t</div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/view-gallery/view-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_gallery_comment__ = __webpack_require__("../../../../../src/app/shared/models/gallery-comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_gallery_service__ = __webpack_require__("../../../../../src/app/shared/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_view_image_view_image_component__ = __webpack_require__("../../../../../src/app/components/view-image/view-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_view_image_service__ = __webpack_require__("../../../../../src/app/shared/services/view-image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewGalleryComponent = /** @class */ (function () {
    function ViewGalleryComponent(galleryService, route, renderer, router, viewImageService, elRef) {
        var _this = this;
        this.galleryService = galleryService;
        this.route = route;
        this.renderer = renderer;
        this.router = router;
        this.viewImageService = viewImageService;
        this.elRef = elRef;
        this.galleryComment = new __WEBPACK_IMPORTED_MODULE_2__shared_models_gallery_comment__["a" /* GalleryComment */]();
        this.galleryCommentForEditing = new __WEBPACK_IMPORTED_MODULE_2__shared_models_gallery_comment__["a" /* GalleryComment */]();
        this.originalGalleryCommentBeforeEditing = new __WEBPACK_IMPORTED_MODULE_2__shared_models_gallery_comment__["a" /* GalleryComment */]();
        this.disableAnimations = true;
        this.disableProgressBar = 0;
        // ******************************************************************** //
        // Pomocu ovoga uspevam da mi se komponenta ne refreshuje (ne inicijalizuje ponovo, nego da se reuse-uje) kad je dve razlicite rute otvaraju i zasad radi!!! Ovo resenje je inace kombinacija sa ova dva linka https://github.com/angular/angular/issues/12446 (vidi odgovor od DanielKucal, a slicnu stvar imas od istog korisnika ovde https://stackoverflow.com/questions/44875644/custom-routereusestrategy-for-angulars-child-module/44876414#44876414) i https://stackoverflow.com/questions/45497208/how-to-change-to-route-with-same-component-without-page-reload . Sa prvog linka koristim ovaj deo iza returna i to sto unutar app-routing modula stavljam  data: { reuse: true } na rute koje zelim da se reuse-uju (reuse znaci da se ne inicijalizuju ponovo kad ih aktiviram nego da koriste vec prethodno izrenderovane stranice), a sa drugog linka sam skinuo ideju da ovo stavim u konstruktor komponente koju zelim da reuseujem. Metoda koju koristim se moze naci ovde https://angular.io/api/router/RouteReuseStrategy. 
        this.router.routeReuseStrategy.shouldReuseRoute = function (future, curr) {
            return (future.routeConfig === curr.routeConfig) || future.data.reuse;
        };
        // ******************************************************************** //
        this.isUserAuthenticated = Boolean(window.localStorage.getItem('loginToken'));
        this.loggedUserEmail = window.localStorage.getItem('loggedUserEmail');
        // Kada se dodaju ili obrisu komentari na slikama, potrebno je te podatke obnoviti i ovde u parent komponenti. Koristim komunikaciju parenta i childa preko servisa kao i ovde https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
        this.viewImageService.galleryUpdatedImageComments.subscribe(function (galleryUpdatedImageComments) { return _this.gallery = galleryUpdatedImageComments; });
    }
    ViewGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Da ova stranica po defaultu bude skrolovana do vrha, posle ima odstupanja nekih 
        window.scrollTo(0, 0);
        // bar po ovom (https://scotch.io/tutorials/handling-route-parameters-in-angular-v2) ovo bi moralo da se radi preko paramMap, jer on vraca Observable, ma pogledaj link samo
        this.route.paramMap.subscribe(function (params) {
            var imageID = params.get('imageID');
            // console.log(imageID);
            if (imageID) {
                // Ako je view image komponenta vec instancirana, znaci da promena imageID u url-u oznacava da unutar view image komponente hocu da predjem na drugu sliku, i tada nema potrebe ponovo setovati sve, vec samo imageID
                if (_this.viewImageService.componentRef) {
                    _this.viewImageService.setImageID(imageID);
                }
                else {
                    // Ako dolazim direktno na link slike a da pre toga nisam bio na galeriji (a to znaci da imam id slike u url-u, a galerija nije jos loadovana unutar komponente galerije), onda hocu da mi se galerija u pozadini skroluje do imena galerije, da kad zatvorim sliku odmah skontam da se nalazim na galeriji koja sadrzi sliku!
                    if (!_this.gallery) {
                        _this.galleryStart.nativeElement.scrollIntoView();
                    }
                    _this.viewImageService.setViewContainerRef(_this.viewImageViewContainerRef);
                    _this.viewImageService.addDynamicComponent(__WEBPACK_IMPORTED_MODULE_7__components_view_image_view_image_component__["a" /* ViewImageComponent */]);
                    _this.viewImageService.setImageID(imageID);
                    // Ako je galerija vec dobavljena u komponenti za galeriju, nema potrebe da komponenta za sliku ponovo pravi zahtev za dobavljanje galerije, pa joj ovako prosledjivam, u suprotnom ako se na sliku dolazi preko spoljnog linka, galerije ovde sigurno jos ne moze biti, pa joj prosledjujem galeriju kada je dobavim dole u getSpecificGallery() metodi. U SVAKOM SLUCAJU VAZNO JE DA PRI KREIRANJU VIEW IMAGE KOMPONENTE DA SE GALERIJA UVEK POSLEDNJA SETUJE, JER SE (UNUTAR VIEW IMAGE KOMPONENTE) POMOCU NJE DOLAZI DO SLIKE I OSTALIH PODATAKA!
                    if (_this.gallery) {
                        _this.viewImageService.setGallery(_this.gallery);
                    }
                }
            }
            else {
                // Ako nemam imageID u url, a view image komponenta je vec kreirana, to znaci da sam otisao sa view image komponente na stranicu view gallery komponente i da ne zelim vise da mi bude nekakva slika prikazana, zato je i fala Bogu brisem
                if (_this.viewImageService.componentRef) {
                    _this.viewImageService.destroyComponent(_this.viewImageService.componentRef);
                }
            }
            // Ovaj uslov if(!this.gallery) je svakako potreban jer se kompletan kod unutar this.route.paramMap.subscribe gde se i sad nalazim, izvrsava svaki put kad se ruta promeni, a ovde je to predvidjeno da se cesto desava! Da nema ovog uslova tebi bi se svaki put iznova dobavljala galerija sa backenda na svaku promene rute! Takodje potreban je i zbog koraka this.viewImageService.setGallery jer nema smisla da ti se ponovo setuje galerija u view image komponenti (gore u kodu je vec jednom setujes ako u tom trenutku postoji dobavljena galerija), jedino ima smisla da je ovde setujes ako se slika posecuje sa spoljnog linka i view gallery komponenta jos nema dobavljenu galeriju (sto i kaze uslov if(!this.gallery)) pa ti ipak prvo kreiras view image komponentu da ti korisnik ne bi cekao dobavljanje galerije pa da tek onda krene formiranje view image komponente (ovako je ti odma formiras al bez slike), pa tek kad stigne galerija ti ces je proslediti view image komponenti. Dakle, kad sliku otvaras preko spoljnog linka, prvo se otvara stranica galerije kojoj ta slika pripada, pa se odmah formira kostur komponente koja treba da prikaze pojedinacnu sliku iako jos nema dobavljenu tu sliku, pa posto komponenti galerije stignu podaci ona ih naravno prikazuje u pozadini u sopstvenom UI, a komponenti slike salje te podatke i tek onda ona moze da prikaze sliku i naravno sve podatke vezane za nju. Uh!!! jbt... Naravno potreban je i uslov if(this.viewImageService.componentRef) jer ako on nije zadovoljen, to znaci da se radi o slucaju da ti ni neces da gledas pojedinacnu sliku nego samo galeriju.
            if (!_this.gallery) {
                var galleryID = params.get('galleryID');
                _this.galleryService.getSpecificGallery(galleryID).subscribe(function (gallery) {
                    /*console.log(gallery);
                    let galleryJSON = JSON.stringify(gallery)
                    // Ovo sam koristio za pravljenje baze u Firebase, samo kopirao i napravio file od toga i onda importovao u Firebase
                    console.log(galleryJSON);*/
                    _this.gallery = gallery;
                    console.log(_this.gallery);
                    // Naravno potreban je i uslov if(this.viewImageService.componentRef) jer ako on nije zadovoljen, to znaci da se radi o slucaju da ti ni neces da gledas pojedinacnu sliku nego samo galeriju.
                    if (_this.viewImageService.componentRef) {
                        // U SVAKOM SLUCAJU VAZNO JE DA PRI KREIRANJU VIEW IMAGE KOMPONENTE DA SE GALERIJA UVEK POSLEDNJA SETUJE, JER SE (UNUTAR VIEW IMAGE KOMPONENTE) POMOCU NJE DOLAZI DO SLIKE I OSTALIH PODATAKA!
                        _this.viewImageService.setGallery(_this.gallery);
                    }
                    _this.commentsArrayReversed = gallery.comments.slice().reverse(); //prvobitno pravljen pipe, al sam onda premestio reverse (pravljenje da ti niz bude u obrnutom redosledu) ovde, vidi odgovor od Thierry Templier https://stackoverflow.com/questions/35703258/invert-angular-2-ngfor
                    // console.log(this.commentsArrayReversed);
                    // console.log(gallery);
                }, function (err) {
                    alert("Server returned code " + err.status + " with message: " + err.error.error);
                    console.log(err);
                });
            }
        });
        jQuery(this.elRef.nativeElement).on('shown.bs.modal', '#exampleModalCenter', function () {
            console.log('radim');
            jQuery('#editedCommentBody').trigger('focus');
        });
    };
    ViewGalleryComponent.prototype.resizeImageIfVertical = function ($event) {
        // console.log($event.target.parentElement);
        // kako dobaviti dimenzije slike https://davidwalsh.name/get-image-dimensions
        /*if (($event.path[0].naturalHeight / $event.path[0].naturalWidth) >= 1.5) {
          $event.path[1].style.width = '50%'
        } else if(($event.path[0].naturalHeight / $event.path[0].naturalWidth) >= 1.2){
          $event.path[1].style.width = '65%'
        }*/
        // U mozilli npr nemas ova path sranja kao gore, ali umesto toga mozes koristiti target za path[0], a target.parentElement ili target.parentNode za path[1]
        if (($event.target.naturalHeight / $event.target.naturalWidth) >= 1.5) {
            $event.target.parentNode.style.width = '50%';
        }
        else if (($event.target.naturalHeight / $event.target.naturalWidth) >= 1.2) {
            $event.target.parentNode.style.width = '65%';
        }
    };
    ViewGalleryComponent.prototype.addGalleryComment = function () {
        var _this = this;
        this.disableAnimations = false;
        this.showLoaderDisablePageElements(true);
        this.renderer.setProperty(this.btnAddComment.nativeElement, 'disabled', true);
        // Da imam utisak unosenja u bazu :)
        setTimeout(function () {
            var galleryComment = new __WEBPACK_IMPORTED_MODULE_2__shared_models_gallery_comment__["a" /* GalleryComment */](_this.gallery.comments[_this.gallery.comments.length - 1].id + 1, _this.galleryComment.commentBody, 1, new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](1, 'Pera', 'Peric', 'pera@gmail.com'), _this.gallery.id);
            var adjustedGalleryCommentObj = {
                comment_body: galleryComment.commentBody,
                gallery_id: galleryComment.galleryId,
                id: galleryComment.id,
                user_id: galleryComment.userId,
                user: {
                    id: galleryComment.userId,
                    first_name: 'Pera',
                    last_name: 'Peric',
                    email: 'pera@gmail.com'
                },
                created_at: Date.now(),
                updated_at: Date.now()
            };
            _this.gallery.comments.push(adjustedGalleryCommentObj);
            _this.addGalleryCommentForm.reset();
            // console.log(this.galleryComment);
            _this.commentsContainer.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            _this.commentsArrayReversed.unshift(adjustedGalleryCommentObj);
            _this.showLoaderDisablePageElements(false);
            console.log(_this.gallery);
        }, 500);
    };
    ViewGalleryComponent.prototype.deleteGalleryComment = function (comment) {
        var _this = this;
        this.disableAnimations = false;
        if (confirm('Are you sure you want to delete this comment?')) {
            this.showLoaderDisablePageElements(true);
            // console.log(comment);
            setTimeout(function () {
                _this.commentsArrayReversed = _this.commentsArrayReversed.filter(function (c) { return c !== comment; });
                _this.gallery.comments = _this.gallery.comments.filter(function (c) { return c !== comment; });
                // console.log(this.gallery.comments);
                _this.showLoaderDisablePageElements(false);
            }, 500);
        }
    };
    ViewGalleryComponent.prototype.editGalleryComment = function (comment) {
        console.log(comment);
        this.galleryCommentForEditing.id = comment.id;
        this.galleryCommentForEditing.commentBody = comment.comment_body;
        console.log(this.galleryCommentForEditing);
        this.originalGalleryCommentBeforeEditing.commentBody = comment.comment_body;
    };
    ViewGalleryComponent.prototype.updateGalleryComment = function (editedGalleryComment) {
        var _this = this;
        console.log(editedGalleryComment);
        var editedGalleryCommentBody = editedGalleryComment.commentBody;
        var editedGalleryCommentId = editedGalleryComment.id;
        this.showLoaderDisablePageElements(true);
        this.disableModalElements(true);
        setTimeout(function () {
            _this.editGalleryCommentModalButtonTrigger.nativeElement.click();
            _this.showLoaderDisablePageElements(false);
            _this.disableModalElements(false);
            var updatedCommentInArray = _this.commentsArrayReversed.find(function (comment) { return comment.id === editedGalleryCommentId; });
            // EKSTRA!!! Kao sto vidis mozes ovde da dodas properti koji ne postoji na tipu GalleryComment, tako sto ga samo prethodno pretvoris u tip any!!!
            updatedCommentInArray.comment_body = editedGalleryCommentBody;
            updatedCommentInArray.updated_at = Date.now();
        }, 500);
    };
    ViewGalleryComponent.prototype.showLoaderDisablePageElements = function (show) {
        if (show === true) {
            this.disableProgressBar++;
            console.log(this.disableProgressBar);
        }
        else {
            this.disableProgressBar--;
            console.log(this.disableProgressBar);
        }
    };
    ViewGalleryComponent.prototype.disableModalElements = function (disable) {
        if (disable === true) {
            this.renderer.setProperty(this.modalCloseButton.nativeElement, 'disabled', true);
            this.renderer.setProperty(this.btnSubmitCommentChanges.nativeElement, 'disabled', true);
            this.renderer.setProperty(this.modalCancelButton.nativeElement, 'disabled', true);
        }
        else {
            this.renderer.setProperty(this.modalCloseButton.nativeElement, 'disabled', false);
            this.renderer.setProperty(this.btnSubmitCommentChanges.nativeElement, 'disabled', false);
            this.renderer.setProperty(this.modalCancelButton.nativeElement, 'disabled', false);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("progressBar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewGalleryComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("btnAddComment"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewGalleryComponent.prototype, "btnAddComment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("disabledOverlay"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]
        // @ViewChild("addGalleryCommentForm") addGalleryCommentForm: FormGroup // radilo je i sa FormGroup samo sto izgleda nije pravilno jer je FormGroup za model driven ili ti reactive forme, a ova tvoja je template driven. Vidi ovde https://stackoverflow.com/questions/48681287/reset-form-from-parent-component. Inace ideju za FormGroup pokupio ovde: https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/ i https://codecraft.tv/courses/angular/forms/submitting-and-resetting/
        )
    ], ViewGalleryComponent.prototype, "disabledOverlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("addGalleryCommentForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* NgForm */] //https://stackoverflow.com/questions/48681287/reset-form-from-parent-component
        )
    ], ViewGalleryComponent.prototype, "addGalleryCommentForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("commentsContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewGalleryComponent.prototype, "commentsContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("editGalleryCommentModalButtonTrigger"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewGalleryComponent.prototype, "editGalleryCommentModalButtonTrigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("editGalleryCommentModal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewGalleryComponent.prototype, "editGalleryCommentModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("viewImageViewContainerRef", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */])
    ], ViewGalleryComponent.prototype, "viewImageViewContainerRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("galleryStart"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewGalleryComponent.prototype, "galleryStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("modalCloseButton"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewGalleryComponent.prototype, "modalCloseButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("btnSubmitCommentChanges"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewGalleryComponent.prototype, "btnSubmitCommentChanges", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("modalCancelButton"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewGalleryComponent.prototype, "modalCancelButton", void 0);
    ViewGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-gallery',
            template: __webpack_require__("../../../../../src/app/components/view-gallery/view-gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-gallery/view-gallery.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_services_view_image_service__["a" /* ViewImageService */]],
            animations: [
                // ideju za animaciju heighta sa '*', nasao na ovom linku https://stackoverflow.com/questions/42376006/angular2-ngfor-animation-of-pushed-away-elements . Naime, animacija heighta ti omogucuje da vidis ovo pomeranje osstalih komentara kad jedan komentar obrises. I kolko sam ja skontao fora je u tome sto ovom kojeg brises, njemu se height postepeno smanjuje dok ne nestane i to zapravo cini da se ovi komentari pomeraju animirano, ali nisu animirani oni vec height ovog sto nestaje.
                // isto ti je da li ces dole raditi sa sequence, ili ces redjati animate jedno za drugim, kao u primeru druge tranzicije (vidi https://angular.io/api/animations/sequence : "sequence Specifies a list of animation steps that are run one by one. (sequence is used by default when an array is passed as animation data into transition.)")
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0, height: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["f" /* sequence */])([
                            // stavljam 500ms delaya zbog skrola koji se desava prethodno
                            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('400ms 500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ height: '*' })),
                            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('400ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                        ])
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('400ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 })),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('400ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ height: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_8__shared_services_view_image_service__["a" /* ViewImageService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ViewGalleryComponent);
    return ViewGalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/view-image/view-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress{\r\n\t/*visibility: hidden;*/\r\n\tz-index: 999999;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 10px;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.progress .progress-bar{\r\n\twidth: 100%;\r\n\t-webkit-animation: progress-bar-stripes 0.5 linear infinite;\r\n  \tanimation: progress-bar-stripes 0.5s linear infinite;\r\n}\r\n\r\n.myclass-view-image-background{\r\n\tposition: fixed;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\tright: 0px;\r\n\tbottom: 0px;\r\n\tbackground-color: #333333C8;\r\n\tz-index: 1000;\r\n\toverflow: auto;\r\n}\r\n\r\n.myclass-view-image-close-link{\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: 20px;\r\n}\r\n\r\n.myclass-view-image-close-icon{\r\n\tfont-size: 40px;\r\n\tbackground-color: white;\r\n\tborder: 1px solid white;\r\n\tborder-radius: 50%;\r\n\tcolor: #EA0000;\r\n\t-webkit-transition: border 200ms ease-in-out, color 200ms ease-in-out;\r\n\ttransition: border 200ms ease-in-out, color 200ms ease-in-out;\r\n}\r\n\r\n.myclass-view-image-close-icon:hover{\r\n\tborder: 1px solid gold;\r\n\tcolor: #BC0000;\r\n  cursor: pointer;\r\n}\r\n\r\n.myclass-view-image-container{\r\n\tbackground-color: white;\r\n\tmin-height: 100vh;\r\n\tmargin: 0 auto;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\twidth: 65%;\r\n\tpadding: 15px;\r\n}\r\n\r\n.myclass-showing-image-wrapper{\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\r\n}\r\n\r\n.myclass-carousel-arrow-link{\r\n\tposition: absolute;\r\n\t/*top: 40%;*/\r\n\theight: 100%;\r\n\twidth: 100px;\r\n\ttext-align: center;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n\t-webkit-transition: visibility 200ms ease-in-out, opacity 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\r\n\ttransition: visibility 200ms ease-in-out, opacity 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\r\n\ttransition: transform 200ms ease-in-out, visibility 200ms ease-in-out, opacity 200ms ease-in-out;\r\n\ttransition: transform 200ms ease-in-out, visibility 200ms ease-in-out, opacity 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\r\n\t/*Sto se tice ove novije animacije koja nije radjena u cistom css-u, ovaj pointer-events ti ovde i nije potreban. Zasto? Zato sto kada krene animacija dolazenja arrowa na sliku, ti iako hoverujes u medjuvremenu strelice tranzicija se nece ponovo okinuti, jer ona deluje samo kad se stilovi promene. A posto je animacija vec krenula to jest stilovi su vec promenjeni ti sa hoverom nista ne menjas i nece doci do nikakvog poigravanja strelica i sl...*/\r\n\t/*pointer-events: none;*/\r\n}\r\n\r\n.myclass-carousel-arrow-link:hover{\r\n\tcursor: pointer;\r\n\t/*background-color: #80808050;*/\r\n}\r\n\r\n.myclass-carousel-arrow{\r\n\tfont-size: 50px;\r\n\tcolor: #404040FF;\r\n\t-webkit-transition: color 200ms ease-in-out, border 200ms ease-in-out;\r\n\ttransition: color 200ms ease-in-out, border 200ms ease-in-out;\r\n\tbackground-color: white;\r\n\tborder: 1px solid white;\r\n\tborder-radius: 50%;\r\n\r\n\tposition: relative;\r\n\ttop: 40%;\r\n}\r\n\r\n/*.myclass-carousel-arrow:hover{\r\n\tcolor: #808080FF;\r\n}\r\n*/\r\n\r\n.myclass-carousel-arrow-link:hover .myclass-carousel-arrow{\r\n\t/*color: #5B5B5BFF;*/\r\n\tcolor: #808080FF;\r\n}\r\n\r\n.myclass-carousel-arrow-link-left{\r\n\t/*left: -70px;*/\r\n\tleft: -100px;\r\n}\r\n\r\n.myclass-carousel-arrow-link-right{\r\n\t/*right: -70px;*/\r\n\tright: -100px;\r\n}\r\n\r\n/*Gradijenti koje dobijas na hover linkova\r\n.myclass-carousel-arrow-link-left:hover{\r\n\tbackground:   linear-gradient(to right, rgba(181,181,181,0.65) 0%, rgba(246,246,246,0.31) 53%, rgba(255,255,255,0) 100%);\r\n}\r\n\r\n.myclass-carousel-arrow-link-right:hover{\r\n\tbackground:  linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(246,246,246,0.31) 47%, rgba(181,181,181,0.65) 100%);\r\n}*/\r\n\r\n/*************************************************************************/\r\n\r\n/*Ovako je isla stara animacija za pojavljivanje strelica, jedina je mana ta da se ova animacija primenjuje i kad hoverujes strelice i kad ih hoverujes u momentu kad napustaju povrsinu slike, onda onako poigravaju i to deluje blesavo jbg... Da bi ti ovo proradilo moras jos i da skines gore iz .myclass-carousel-arrow-link pointer-events: none*/\r\n\r\n/* .myclass-showing-image-wrapper:hover .myclass-carousel-arrow-link-left{\r\n\ttransform: translate(100px);\r\n\tvisibility: visible;\r\n\topacity: 1;\r\n}\r\n\r\n.myclass-showing-image-wrapper:hover .myclass-carousel-arrow-link-right{\r\n\ttransform: translate(-100px);\r\n\tvisibility: visible;\r\n\topacity: 1;\r\n} */\r\n\r\n/*************************************************************************/\r\n\r\n.myclass-carousel-arrow-link-left-animate{\r\n\t-webkit-transform: translate(100px);\r\n\t        transform: translate(100px);\r\n\tvisibility: visible;\r\n\topacity: 1;\r\n}\r\n\r\n.myclass-carousel-arrow-link-right-animate{\r\n\t-webkit-transform: translate(-100px);\r\n\t        transform: translate(-100px);\r\n\tvisibility: visible;\r\n\topacity: 1;\r\n}\r\n\r\n#myid-image-info{\r\n\ttext-align: left;\r\n\tcolor: dimgray; \r\n\tbackground-color: #FFFCEA;\r\n\tfont-size: 20px;\r\n\tpadding: 8px 15px;\r\n\tmargin-bottom: 8px;\r\n\tborder-top: 2px solid #FF6A00FF;\r\n\tborder-bottom-right-radius: 15px;\r\n\tborder-bottom-left-radius: 15px;\r\n\t-webkit-user-select: text;\r\n\t   -moz-user-select: text;\r\n\t    -ms-user-select: text;\r\n\t        user-select: text;\r\n}\r\n\r\n.myclass-showing-image-container{\r\n\t/*Ovo bi trebalo da bude nesto malo vece od font-size za velicinu arrow-a, jer ako se slika npr ne pojavi, da se ovaj div i dalje targetira za pojavljivanje arrowa i da arrowi mogu lepo da stanu unutar ovog diva*/\r\n\tmin-height: 80px;\r\n\r\n}\r\n\r\n.myclass-showing-image{\r\n\tmax-width: 100%;\r\n}\r\n\r\n#myid-image-description{\r\n\ttext-align: left; \r\n\tcolor: dimgray; \r\n\tbackground-color: #FFFCEA;\r\n\tmargin-top: 8px;\r\n\tpadding: 5px;\r\n\t-webkit-user-select: text;\r\n\t   -moz-user-select: text;\r\n\t    -ms-user-select: text;\r\n\t        user-select: text;\r\n}\r\n\r\n.myclass-add-comment-form{\r\n\tmargin-top: 15px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.myclass-image-comments{\r\n\tpadding-top: 15px;\r\n}\r\n\r\n.myclass-image-comments > * + *{\r\n\tmargin-top: 15px;\r\n\tborder-top: 1.5px solid #636363FF;\r\n\tpadding-top: 10px;\r\n}\r\n\r\n.myclass-account-thumbnail-wrapper{\r\n\twidth: 60px;\r\n}\r\n\r\n.myclass-account-thumbnail{\r\n\tmargin: 0 auto;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tbackground-color: darkblue;\r\n\tborder-radius: 50%;\r\n\tmin-width: 40px;\r\n\tmin-height: 40px;\r\n\tmax-width: 60px;\r\n\tmax-height: 60px;\t\r\n}\r\n\r\n.myclass-account-thumbnail img{\r\n\twidth: 100%;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.myclass-account-thumbnail span{\r\n\tcolor: white;\r\n\tmargin: auto;\r\n}\r\n\r\n.myclass-delete-link{\r\n\tdisplay: inline-block;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n\tmargin: 0 5px;\r\n}\r\n\r\n.myclass-image-delete{\r\n\tline-height: 1;\r\n\tfont-size: 35px;\r\n\tcolor: #BC0000;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.myclass-image-delete:hover{\r\n\tcolor: #EA0000;\r\n\tcursor: pointer;\r\n}\r\n\r\n.myclass-edit-link{\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.myclass-image-edit{\r\n\tline-height: 1;\r\n\tfont-size: 32px;\r\n\tcolor: #e6c300;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.myclass-image-edit:hover{\r\n\tcolor: gold;\r\n\tcursor: pointer;\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n\t.myclass-view-image-container{\r\n\t\twidth: 80%;\r\n\t}\r\n\r\n\t.myclass-view-image-close-link{\r\n\t\ttop: 10px;\r\n\t\tright: 10px;\r\n\t}\r\n}\r\n\r\n@media (max-width: 575.98px){\r\n\t.myclass-view-image-close-link{\r\n\t\ttop: 5px;\r\n\t}\r\n\r\n\t.myclass-view-image-container{\r\n\t\tposition: relative;\r\n\t\ttop: 50px;\r\n\t\twidth: 100%;\r\n\t\toverflow: hidden;\r\n\t}\r\n} \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-image/view-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"myclass-view-image-background\">\n\n\t<div #progressBar [ngStyle]=\"{'visibility': disableProgressBar > 0 ? 'visible' : 'hidden'}\" class=\"progress\">\n\t    <div class=\"progress-bar progress-bar-striped progress-bar-animated\"></div>\n\t</div>\n\n\t<a (click)=\"closeImage($event)\" class=\"myclass-view-image-close-link\"><i class=\"fas fa-times-circle myclass-view-image-close-icon\"></i></a>\n\n\t<div class=\"myclass-view-image-container\">\n\t\t\t\n\t\t\t<h1 *ngIf=\"_gallery\" id=\"myid-image-info\"><strong>Gallery:</strong> <a href=\"#\" (click)=\"closeImage($event)\" style=\"font-weight: normal\">{{_gallery.name}}</a> <strong>Author:</strong> <a href=\"#\" (click)=\"$event.preventDefault()\" style=\"font-weight: normal\">{{_gallery.user.first_name}} {{_gallery.user.last_name}}</a></h1>\n\n\t\t\t<div class=\"myclass-showing-image-wrapper\">\n\n\t\t\t\t<a #arrowLinkLeft (mouseenter)=\"arrowsAnimatePreventHover($event)\" (mouseleave)=\"arrowsAnimateIfLeaveImage($event)\" (click)=\"previousImage()\" id=\"myid-carousel-arrow-left-link\" class=\"myclass-carousel-arrow-link myclass-carousel-arrow-link-left\"><i id=\"myid-carousel-arrow-left\" class=\"fas fa-chevron-circle-left myclass-carousel-arrow myclass-carousel-arrow-left\"></i></a>\n\n\t\t\t\t<a #arrowLinkRight (click)=\"nextImage()\" (mouseenter)=\"arrowsAnimatePreventHover($event)\" (mouseleave)=\"arrowsAnimateIfLeaveImage($event)\" id=\"myid-carousel-arrow-right-link\" class=\"myclass-carousel-arrow-link myclass-carousel-arrow-link-right\"><i id=\"myid-carousel-arrow-right\" class=\"fas fa-chevron-circle-right myclass-carousel-arrow myclass-carousel-arrow-right\"></i></a>\n\n\t\t\t\t<!-- <h1 *ngIf=\"_gallery\" id=\"myid-image-info\"><strong>Gallery:</strong> <a href=\"#\" (click)=\"closeImage($event)\" style=\"font-weight: normal\">{{_gallery.name}}</a> <strong>Author:</strong> <a routerLink = \"/authors/{{_gallery.user_id}}\" style=\"font-weight: normal\">{{_gallery.user.first_name}} {{_gallery.user.last_name}}</a></h1> -->\n\n\t\t\t\t<!-- Ove (swipeleft) i (swiperight) mogu koristiti jer sam instalirao hammerjs (hammer.js kako god) (vidi http://hammerjs.github.io/ i https://www.npmjs.com/package/hammerjs, a ideju sam pokupio ovde https://www.youtube.com/watch?v=5Z2C0wy4bmg), a instaliras ga na sledeci nacin: kucas npm install hammerjs --save , zatim odes u main.ts file i odradis samo import 'hammerjs' da bi ti ovi eventovi bili globalno dostupni i to je to. Taj nacin instalacije sam inace pokupio na pomenutom youtube linku -->\n\t\t\t\t<div #showingImageContainer class=\"myclass-showing-image-container\" (touchstart)=\"touchScreenDetector($event)\" (mouseenter)=\"arrowsAnimate($event)\" (mouseleave)=\"arrowsAnimate($event)\" (swipeleft)=\"nextImage()\" (swiperight)=\"previousImage()\">\n\t\t\t\t\t<img class=\"myclass-showing-image\" id=\"myid-showing-image\" *ngIf=\"showingImage\" src=\"{{showingImage.url}}\" (load)=\"resizeImageIfVertical($event)\">\n\n\t\t\t\t</div>\n\n\t\t\t\t<!-- <p *ngIf=\"showingImage\" id=\"myid-image-description\">&nbsp;<strong>Image description:</strong>&nbsp;<em>{{showingImage.description}}</em></p> -->\n\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"showingImage\" id=\"myid-image-description\">&nbsp;<strong>Image description:</strong>&nbsp;<em>{{showingImage.description}}</em></p>\n\n\t\t\t<!-- <div>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"previousImage()\">Previous image</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"nextImage()\">Next image</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"closeImage()\">Close</button>\n\t\t\t</div> -->\n\n\t\t\t<div *ngIf=\"isUserAuthenticated\" class=\"myclass-add-comment-form\">\n\t\t\t\t\n\t\t\t\t<form #addImageCommentForm = \"ngForm\" (ngSubmit)=\"addImageComment();\">\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t    <label for=\"exampleFormControlTextarea1\">Your comment for this image:</label>\n\t\t\t\t    <textarea #commentBody=\"ngModel\" [(ngModel)]=\"imageComment.commentBody\" name=\"commentBody\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" required></textarea>\n\t\t\t\t  </div>\n\t\t\t\t  <div *ngIf=\"commentBody.invalid && (commentBody.dirty || commentBody.touched)\" class=\"alert alert-danger\">\n\n\t\t\t\t    <div *ngIf=\"commentBody.errors.required\">\n\t\t\t\t      Comment body is required.\n\t\t\t\t    </div>\n\t\t\t\t    \n\t\t\t\t  </div>\n\t\t\t\t  <button #btnAddComment [disabled]=\"!addImageCommentForm.valid\" type=\"submit\" class=\"btn btn-primary\">Add comment</button>\n\t\t\t\t</form>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<div #commentsContainer class=\"myclass-image-comments\">\n\n\t\t\t\t<!-- skinuto sa https://getbootstrap.com/docs/4.0/layout/media-object/ -->\n\t\t\t\t<div class=\"media\" [@.disabled]=\"disableAnimations\" @fade (@fade.done)=\"animationDone($event)\" *ngFor=\"let comment of commentsArrayReversed\">\n\t\t\t\t\t<!-- reverse pipe napravljen po odogovoru od Thierry Templier sa ovog linka, al sam ga ipak izbrisao zasad https://stackoverflow.com/questions/35703258/invert-angular-2-ngfor -->\n\t\t\t\t  <!-- <img class=\"mr-3\" alt=\"Image\"> -->\n\t\t\t\t\t<div class=\"myclass-account-thumbnail-wrapper mr-3\">\n\t\t\t\t\t\t<div [ngStyle]=\"{'width': comment.user.profile_image ? '60px' : '40px', 'height': comment.user.profile_image ? '60px' : '40px', 'background-color': comment.user.profile_image && 'transparent'}\" class=\"myclass-account-thumbnail\">\n\t\t\t\t\t\t\t<img *ngIf=\"comment.user.profile_image\" src=\"{{comment.user.profile_image}}\">\n\t\t\t\t\t\t\t<span *ngIf=\"!comment.user.profile_image\">{{comment.user.first_name.charAt(0).toUpperCase()}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t  \t<h5 class=\"mt-0\">{{comment.user.first_name}} {{comment.user.last_name}} <small class=\"text-muted\">{{comment.created_at | date: \"longDate\"}}</small><small class=\"text-muted\" *ngIf=\"comment.created_at !== comment.updated_at\"> ( <em>Last updated at: {{ comment.updated_at | date: \"longDate\" }}</em> )</small></h5>\n\t\t\t\t  \t{{comment.comment_body}}\n\t\t\t\t  </div>\n\t\t\t\t  <a #editImageCommentModalButtonTrigger data-toggle=\"modal\" data-target=\"#exampleModalCenter\" *ngIf=\"comment.user.email === loggedUserEmail\" class=\"myclass-edit-link\" (click)=\"editImageComment(comment)\"><i class=\"fas fa-edit myclass-image-edit \"></i></a>\n\t\t\t\t  <a *ngIf=\"comment.user.email === loggedUserEmail\" (click)=\"deleteImageComment(comment)\" class=\"myclass-delete-link\"><i class=\"fas fa-times-circle myclass-image-delete \"></i></a>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\n\t<!-- Modal -->\n\t\t<div #editImageCommentModal class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" data-backdrop=\"false\" data-keyboard=\"false\"><!-- Da zabranis modalu da se zatvara na klik van njega, treba da mu zadas  data-backdrop=\"static\" ili data-backdrop=\"false\", a da mu zabranis da se zatvara na escape dugme data-keyboard=\"false\"-->\n\t\t  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t    <div class=\"modal-content\">\n\t\t      <div class=\"modal-header\">\n\t\t        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Comment edit</h5>\n\t\t        <button #modalCloseButton type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t          <span aria-hidden=\"true\">&times;</span>\n\t\t        </button>\n\t\t      </div>\n\t\t      <div class=\"modal-body\">\n\t\t        <form #editImageCommentForm = \"ngForm\" (ngSubmit)=\"updateImageComment(imageCommentForEditing);\">\n\t\t          <div class=\"form-group\">\n\t\t            <label for=\"exampleFormControlTextarea1\">Edit your comment:</label>\n\t\t            <textarea #editedCommentBody=\"ngModel\" [(ngModel)]=\"imageCommentForEditing.commentBody\" name=\"editedCommentBody\" class=\"form-control\" id=\"editedCommentBody\" rows=\"3\" required></textarea>\n\t\t          </div>\n\t\t          <div *ngIf=\"editedCommentBody.invalid && editedCommentBody.touched\" class=\"alert alert-danger\">\n\t \t            <div *ngIf=\"editedCommentBody.errors.required\">\n\t\t              Comment body is required.\n\t\t            </div>\n\t\t            \n\t\t          </div>\n\t\t          <button #btnSubmitCommentChanges [disabled]=\"!editImageCommentForm.valid || imageCommentForEditing.commentBody === originalImageCommentBeforeEditing.commentBody\" type=\"submit\" class=\"btn btn-primary\">Submit changes</button>\n\t\t          <button #modalCancelButton type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n\t\t        </form>\n\t\t      </div>\n\t \t    </div>\n\t\t  </div>\n\t\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/view-image/view-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_gallery__ = __webpack_require__("../../../../../src/app/shared/models/gallery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_image_comment__ = __webpack_require__("../../../../../src/app/shared/models/image-comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_view_image_service__ = __webpack_require__("../../../../../src/app/shared/services/view-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_gallery_service__ = __webpack_require__("../../../../../src/app/shared/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewImageComponent = /** @class */ (function () {
    function ViewImageComponent(route, router, viewImageService, renderer, galleryService, elRef) {
        this.route = route;
        this.router = router;
        this.viewImageService = viewImageService;
        this.renderer = renderer;
        this.galleryService = galleryService;
        this.elRef = elRef;
        this.imageComment = new __WEBPACK_IMPORTED_MODULE_4__shared_models_image_comment__["a" /* ImageComment */]();
        this.imageCommentForEditing = new __WEBPACK_IMPORTED_MODULE_4__shared_models_image_comment__["a" /* ImageComment */]();
        this.originalImageCommentBeforeEditing = new __WEBPACK_IMPORTED_MODULE_4__shared_models_image_comment__["a" /* ImageComment */]();
        this.disableAnimations = true;
        this.disableProgressBar = 0;
        this.isDeviceTouchScreen = false;
        this.isUserAuthenticated = Boolean(window.localStorage.getItem('loginToken'));
        this.loggedUserEmail = window.localStorage.getItem('loggedUserEmail');
    }
    // koristio savet odavde https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685
    ViewImageComponent.prototype.touchScreenDetector = function (event) {
        // sudeci po ovome sto kaze ovde https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent (a kaze: If the browser fires both touch and mouse events because of a single user input, the browser must fire a touchstart before any mouse events.) ne bi trebalo da ti se desi situacija da ti se prvo pozove arrowsAnimate() funkcija pa tek onda ovaj hostlistener, nego bi uvek trebalo prvi da se poziva hostlistener. Za svaki slucaj podesavam da ovu funkciju hostlistenera ne poziva samo touchstart event na window-u, nego i touchstart event na div containeru slike koji inace poziva animirane strelice na mouseenter
        console.log(event);
        // Dakle ovaj isDeviceTouchScreen podesavam ovde na true, da bi onemogucio kad se radi o touchscreen uredjaju da se pojavljuju strelice za menjanje slike, vec se u tom slucaju slika menja prevlacenjem prsta (swipe) ulevo ili udesno
        this.isDeviceTouchScreen = true;
    };
    Object.defineProperty(ViewImageComponent.prototype, "imageID", {
        // @Input() imageID: string
        set: function (imageID) {
            var _this = this;
            this._imageID = parseInt(imageID);
            if (this._gallery) {
                this.showingImage = this._gallery.images.find(function (image) { return image.id === _this._imageID; });
                this.commentsArrayReversed = this.showingImage.comments.slice().reverse(); //prvobitno pravljen pipe, al sam onda premestio reverse (pravljenje da ti niz bude u obrnutom redosledu) ovde, vidi odgovor od Thierry Templier https://stackoverflow.com/questions/35703258/invert-angular-2-ngfor
                console.log(this.commentsArrayReversed);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewImageComponent.prototype, "gallery", {
        set: function (gallery) {
            var _this = this;
            this._gallery = gallery;
            this.galleryID = gallery.id;
            this.showingImage = this._gallery.images.find(function (image) { return image.id === _this._imageID; });
            this.commentsArrayReversed = this.showingImage.comments.slice().reverse(); //prvobitno pravljen pipe, al sam onda premestio reverse (pravljenje da ti niz bude u obrnutom redosledu) ovde, vidi odgovor od Thierry Templier https://stackoverflow.com/questions/35703258/invert-angular-2-ngfor
            console.log(this.commentsArrayReversed);
        },
        enumerable: true,
        configurable: true
    });
    ViewImageComponent.prototype.ngOnInit = function () {
        // console.log(this._gallery);
        // console.log(this.componentReference);
        // console.log(this._imageID);
        // Pomocu ovoga se postize da se moze skrolovati samo ova komponenta, a pozadina da ne moze https://stackoverflow.com/questions/31906059/absolute-positioned-div-prevent-background-scroll?rq=1 . Inace ako hoces preko renderer-a da radis, moras raditi na ovaj nacin, tj. moras da napises document.body kao prvi argument funkcije, jer body ne mozes da targetiras preko ViewChild (vidi sta kaze Günter Zöchbauer https://stackoverflow.com/questions/39971762/add-class-to-body-on-angular2). Kao sto vidis na prethodnom linku koristi se fora da u glavnoj app komponenti podesis da ti njen selektor bude body tag umesto app-root taga, pa da onda koristis HostBinding kako bi stilizovao body. Ja to nisam hteo da radim, jer mi deluje prilicno hacky, pa sam koristio renderer na ovu foru, sto sam pokupio ovde https://stackoverflow.com/questions/43542373/angular2-add-class-to-body-tag , e sad da li je ovo saglasno pravilima angular dom manipulacije, to bas i ne znam, al na ovom linku niko ne spominje da nije saglasno (zapravo spominje se: "This won't work server-side as there's no document there." - mgol. Pa sad ako ti treba server side rendering, onda radi onako da stavljas body selektor u app komponentu... Imas to i na ovom linku https://stackoverflow.com/questions/39971762/add-class-to-body-on-angular2 i ovom https://stackoverflow.com/questions/34430666/angular-2-x-bind-class-on-body-tag/34430979#34430979, https://stackoverflow.com/questions/34636661/how-do-i-change-the-body-class-via-a-typescript-class-angular2/34637039#34637039, https://stackoverflow.com/questions/34881401/style-html-body-from-web-component-angular-2/34892496#34892496 i jos kolko oces mesta...)
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
        jQuery(this.elRef.nativeElement).on('shown.bs.modal', '#exampleModalCenter', function () {
            console.log('radim');
            jQuery('#editedCommentBody').trigger('focus');
        });
    };
    ViewImageComponent.prototype.nextImage = function () {
        var _this = this;
        this.disableAnimations = true;
        var nextImageID;
        // Id sledece slike se mora traziti preko indexa te slike u nizu, ne mozes kao prethodno sto si radio samo da mu dodas 1, jer ne mora da znaci da su id-evi u bazi poredjani tako da je sledeci uvek za jedan veci od prethodnog, moguce je da ima rupa izmedju ako su npr. brisane slike
        var currentImageIndex = this._gallery.images.findIndex(function (image) { return image.id === _this._imageID; });
        if (this._gallery.images[currentImageIndex + 1]) {
            nextImageID = this._gallery.images[currentImageIndex + 1].id;
        }
        else {
            nextImageID = this._gallery.images[0].id;
        }
        this.router.navigateByUrl('/galleries/' + this.galleryID + '/' + nextImageID);
    };
    ViewImageComponent.prototype.previousImage = function () {
        var _this = this;
        this.disableAnimations = true;
        var previousImageID;
        // Zasto trazis ovako, pogledaj gore objasnjenje unutar funkcije nextImage()
        var currentImageIndex = this._gallery.images.findIndex(function (image) { return image.id === _this._imageID; });
        var lastImageIndex = this._gallery.images.length - 1;
        if (this._gallery.images[currentImageIndex - 1]) {
            previousImageID = this._gallery.images[currentImageIndex - 1].id;
        }
        else {
            previousImageID = this._gallery.images[lastImageIndex].id;
        }
        this.router.navigateByUrl('/galleries/' + this.galleryID + '/' + previousImageID);
    };
    ViewImageComponent.prototype.arrowsAnimate = function (event) {
        console.log(event);
        // sudeci po ovome sto kaze ovde https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent (a kaze: If the browser fires both touch and mouse events because of a single user input, the browser must fire a touchstart before any mouse events.) ne bi trebalo da ti se desi situacija da ti se prvo pozove ova funkcija pa tek onda gore hostlistener koji ti podesava this.isDeviceTouchScreen na true, nego bi uvek trebalo prvi da se poziva hostlistener. On podesava this.isDeviceTouchScreen na true, da bi onemogucio kad se radi o touchscreen uredjaju da se pojavljuju ove strelice za menjanje slike, vec se u tom slucaju slika menja prevlacenjem prsta (swipe) ulevo ili udesno
        if (!this.isDeviceTouchScreen) {
            if (event.type === 'mouseenter') {
                this.renderer.addClass(this.arrowLinkLeft.nativeElement, "myclass-carousel-arrow-link-left-animate");
                this.renderer.addClass(this.arrowLinkRight.nativeElement, 'myclass-carousel-arrow-link-right-animate');
                this.renderer.setStyle(this.arrowLinkLeft.nativeElement, 'pointer-events', 'auto');
                this.renderer.setStyle(this.arrowLinkRight.nativeElement, 'pointer-events', 'auto');
            }
            else if (event.type === 'mouseleave') {
                // Ovaj relatedTarget postoji na mouseleave eventu i odnosi se na onaj element na kojem se nadje kursor kad se desi mouseleave. Ovde mi se pojavljuje greska u konzoli ako se mouseleave desi na delu koji nije stranica (npr konzola) jer je tamo relatedTarget undefined pa moram da proveravam da li postoji relatedTarget
                if (event.relatedTarget) {
                    // Posto arrow cini link i ovaj <i> element koji se u domu pojavljuje kao svg i path element, ovde stavljam uslove za sve ovo sto sam naveo, a sam kod kaze sledece: ukoliko stavim kursor na arrow desice se mouseleave sa elementa (div koji okruzuje sliku) koji osluskuje mouseenter i mouseleave. U tom slucaju zelim da mi se ne desi da se strelice sklone i pomocu ovoga to sprecavam
                    if (event.relatedTarget.id === "myid-carousel-arrow-left" || event.relatedTarget.id === "myid-carousel-arrow-right" || event.relatedTarget.id === "myid-carousel-arrow-left-link" || event.relatedTarget.id === "myid-carousel-arrow-right-link" || event.relatedTarget.parentElement.id === "myid-carousel-arrow-left" || event.relatedTarget.parentElement.id === "myid-carousel-arrow-right") {
                        return;
                        // Testiranje:
                        // this.renderer.setStyle(this.arrowLinkRight.nativeElement, 'background-color', 'yellow')
                    }
                    else {
                        this.renderer.setStyle(this.arrowLinkLeft.nativeElement, 'pointer-events', 'none');
                        this.renderer.setStyle(this.arrowLinkRight.nativeElement, 'pointer-events', 'none');
                        this.renderer.removeClass(this.arrowLinkLeft.nativeElement, "myclass-carousel-arrow-link-left-animate");
                        this.renderer.removeClass(this.arrowLinkRight.nativeElement, 'myclass-carousel-arrow-link-right-animate');
                        // Testiranje:
                        // this.renderer.setStyle(this.arrowLinkRight.nativeElement, 'background-color', 'blue')
                        // console.log(event.relatedTarget);
                        // console.log(event);
                    }
                }
                else {
                    // Jbg sad ovde moram da dupliram kod iz ovog elsa iznad, jer sam morao da stavim gore dva if-a da mi ne bi izbacivao greske u konzoli...
                    this.renderer.setStyle(this.arrowLinkLeft.nativeElement, 'pointer-events', 'none');
                    this.renderer.setStyle(this.arrowLinkRight.nativeElement, 'pointer-events', 'none');
                    this.renderer.removeClass(this.arrowLinkLeft.nativeElement, "myclass-carousel-arrow-link-left-animate");
                    this.renderer.removeClass(this.arrowLinkRight.nativeElement, 'myclass-carousel-arrow-link-right-animate');
                    // Testiranje:
                    // this.renderer.setStyle(this.arrowLinkRight.nativeElement, 'background-color', 'red')
                }
            }
        }
    };
    // Ova funkcija je tu sad zapravo za svaki slucaj, jer sam ovu gore arrowsAnimate() naterao da radi kako treba, al nek ova ipak ostane tu. Njena poenta je u tome da kad predjes preko strelica da se ne desi ono sto je definisano za mouseleave event u arrowsAnimate(), konkretno da ti na hover preko strelica arrowsAnimate() ne odradi standardnu akciju za mouseleave a to je da ti skloni strelice! Sa onim silnim if uslovima u arrowsAnimate() je to reseno i radi u svim browserima koje sam ja testirao, a za ostale verzije i druge browsere nisam siguran, pa nek ostane za svaki slucaj i ovo cudo ovde...
    ViewImageComponent.prototype.arrowsAnimatePreventHover = function (event) {
        this.renderer.addClass(this.arrowLinkLeft.nativeElement, "myclass-carousel-arrow-link-left-animate");
        this.renderer.setStyle(this.arrowLinkLeft.nativeElement, 'pointer-events', 'auto');
        this.renderer.addClass(this.arrowLinkRight.nativeElement, "myclass-carousel-arrow-link-right-animate");
        this.renderer.setStyle(this.arrowLinkRight.nativeElement, 'pointer-events', 'auto');
    };
    // Ovu funkciju sam dodao kad sam podesio da se link za promenu slike proteze preko cele visine slike i ide do kraja stranice slike u sirinu. Dakle kad ti sa takvog linka odes direktno misem van slike vise se ne aktivira mouseleave koji je registrovan na slici, nego se aktivira mouseleave registrovan na linku i zato se mora ovde posebno definisati
    ViewImageComponent.prototype.arrowsAnimateIfLeaveImage = function (event) {
        // console.log('pjera');
        // Ovaj relatedTarget postoji na mouseleave eventu i odnosi se na onaj element na kojem se nadje kursor kad se desi mouseleave. Ovde mi se pojavljuje greska u konzoli ako se mouseleave desi na delu koji nije stranica (npr konzola) jer je tamo relatedTarget undefined pa moram da proveravam da li postoji relatedTarget
        if (event.relatedTarget) {
            // console.log(event.relatedTarget);
            if (event.relatedTarget.id !== 'myid-showing-image') {
                this.renderer.setStyle(this.arrowLinkLeft.nativeElement, 'pointer-events', 'none');
                this.renderer.setStyle(this.arrowLinkRight.nativeElement, 'pointer-events', 'none');
                this.renderer.removeClass(this.arrowLinkLeft.nativeElement, "myclass-carousel-arrow-link-left-animate");
                this.renderer.removeClass(this.arrowLinkRight.nativeElement, 'myclass-carousel-arrow-link-right-animate');
            }
        }
    };
    ViewImageComponent.prototype.closeImage = function (event) {
        event.preventDefault();
        this.viewImageService.destroyComponent(this.componentReference);
        this.router.navigateByUrl('/galleries/' + this.galleryID);
    };
    ViewImageComponent.prototype.addImageComment = function () {
        var _this = this;
        this.disableAnimations = false;
        this.showLoaderDisablePageElements(true);
        this.renderer.setProperty(this.btnAddComment.nativeElement, 'disabled', true);
        // Da imam utisak unosenja u bazu :)
        setTimeout(function () {
            var imageComment = new __WEBPACK_IMPORTED_MODULE_4__shared_models_image_comment__["a" /* ImageComment */](_this.showingImage.comments[_this.showingImage.comments.length - 1].id + 1, _this.imageComment.commentBody, 1, new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](1, 'Pera', 'Peric', 'pera@gmail.com'), _this._imageID);
            var adjustedImageCommentObj = {
                comment_body: imageComment.commentBody,
                image_id: imageComment.imageId,
                id: imageComment.id,
                user_id: imageComment.userId,
                user: {
                    id: imageComment.userId,
                    first_name: 'Pera',
                    last_name: 'Peric',
                    email: 'pera@gmail.com'
                },
                created_at: Date.now(),
                updated_at: Date.now()
            };
            // this.gallery.comments.push(adjustedImageCommentObj)
            var showingImageInGalleryObject = _this._gallery.images.find(function (image) { return image.id === _this._imageID; });
            showingImageInGalleryObject.comments.push(adjustedImageCommentObj);
            _this.addImageCommentForm.reset();
            // console.log(this.imageComment);
            _this.commentsContainer.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            _this.commentsArrayReversed.unshift(adjustedImageCommentObj);
            // Pri svakoj promeni galerije kao sto je dodavanje ili brisanje komentara, moram ponovo da dobavim galeriju da ne bi koristio stare podatke:
            // this._gallery = data.gallery
            // A moram ih proslediti i pozadinskoj view gallery komponenti jer su i u njoj jos stari podaci. Koristim komunikaciju parenta i childa preko servisa kao i ovde https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
            _this.viewImageService.setGalleryUpdatedImageComments(_this._gallery);
            _this.showLoaderDisablePageElements(false);
            console.log(_this._gallery);
        }, 500);
    };
    ViewImageComponent.prototype.deleteImageComment = function (comment) {
        var _this = this;
        this.disableAnimations = false;
        if (confirm('Are you sure you want to delete this comment?')) {
            this.showLoaderDisablePageElements(true);
            // console.log(comment);
            setTimeout(function () {
                // element niza ipak brisem preko filter funkcije (potrazi ovde: https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value) zato sto se teoretski po mom misljenju moze desiti slucaj da se izmedju dva koraka od koliko se sastoji metoda sa splice promeni index od elementa koji hocu da brisem, ukoliko se npr bas izmedju ta dva koraka doda novi element u niz, tako da bi ovo sa filterom trebalo da bude sigurnija metoda:
                _this.commentsArrayReversed = _this.commentsArrayReversed.filter(function (c) { return c !== comment; });
                // this.gallery.comments = this.gallery.comments.filter(c => c !== comment)
                var showingImageInGalleryObject = _this._gallery.images.find(function (image) { return image.id === _this._imageID; });
                showingImageInGalleryObject.comments = showingImageInGalleryObject.comments.filter(function (c) { return c !== comment; });
                // Pri svakoj promeni galerije kao sto je dodavanje ili brisanje komentara, moram ponovo da dobavim galeriju da ne bi koristio stare podatke:
                // this._gallery = data.gallery
                // A moram ih proslediti i pozadinskoj view gallery komponenti jer su i u njoj jos stari podaci. Koristim komunikaciju parenta i childa preko servisa kao i ovde https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
                _this.viewImageService.setGalleryUpdatedImageComments(_this._gallery);
                // console.log(this.gallery.comments);
                _this.showLoaderDisablePageElements(false);
            }, 500);
        }
    };
    ViewImageComponent.prototype.editImageComment = function (comment) {
        console.log(comment);
        this.imageCommentForEditing.id = comment.id;
        this.imageCommentForEditing.commentBody = comment.comment_body;
        console.log(this.imageCommentForEditing);
        this.originalImageCommentBeforeEditing.commentBody = comment.comment_body;
    };
    ViewImageComponent.prototype.updateImageComment = function (editedGalleryComment) {
        var _this = this;
        console.log(editedGalleryComment);
        var editedGalleryCommentBody = editedGalleryComment.commentBody;
        var editedGalleryCommentId = editedGalleryComment.id;
        this.showLoaderDisablePageElements(true);
        this.disableModalElements(true);
        setTimeout(function () {
            _this.editImageCommentModalButtonTrigger.nativeElement.click();
            _this.showLoaderDisablePageElements(false);
            _this.disableModalElements(false);
            var updatedCommentInArray = _this.commentsArrayReversed.find(function (comment) { return comment.id === editedGalleryCommentId; });
            // EKSTRA!!! Kao sto vidis mozes ovde da dodas properti koji ne postoji na tipu GalleryComment, tako sto ga samo prethodno pretvoris u tip any!!!
            updatedCommentInArray.comment_body = editedGalleryCommentBody;
            updatedCommentInArray.updated_at = Date.now();
            var showingImageInGalleryObject = _this._gallery.images.find(function (image) { return image.id === _this._imageID; });
            var editedCommentInGalleryObject = showingImageInGalleryObject.comments.find(function (comment) { return comment.id === editedGalleryCommentId; });
            editedCommentInGalleryObject.comment_body = editedGalleryCommentBody;
            editedCommentInGalleryObject.updated_at = updatedCommentInArray.updated_at;
            // Pri svakoj promeni galerije kao sto je dodavanje ili brisanje komentara, moram ponovo da dobavim galeriju da ne bi koristio stare podatke:
            // this._gallery = data.gallery
            // A moram ih proslediti i pozadinskoj view gallery komponenti jer su i u njoj jos stari podaci. Koristim komunikaciju parenta i childa preko servisa kao i ovde https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
            _this.viewImageService.setGalleryUpdatedImageComments(_this._gallery);
        }, 500);
    };
    ViewImageComponent.prototype.showLoaderDisablePageElements = function (show) {
        if (show === true) {
            this.disableProgressBar++;
            console.log(this.disableProgressBar);
        }
        else {
            this.disableProgressBar--;
            console.log(this.disableProgressBar);
        }
    };
    // Vidi https://stackoverflow.com/questions/38405703/function-callback-after-animation-ends-in-angular-2, https://angular.io/guide/animations#animation-callbacks
    ViewImageComponent.prototype.animationDone = function ($event) {
        this.disableAnimations = true;
    };
    ViewImageComponent.prototype.resizeImageIfVertical = function ($event) {
        // console.log($event.target);
        // kako dobaviti dimenzije slike https://davidwalsh.name/get-image-dimensions
        /*if (($event.path[0].naturalHeight / $event.path[0].naturalWidth) >= 1.5) {
          // $event.path[0].style.maxWidth = '35%'
          const image = $event.path[0]
          this.renderer.setStyle(image, 'max-width', '35%')
        } else if(($event.path[0].naturalHeight / $event.path[0].naturalWidth) >= 1.2){
          $event.path[0].style.maxWidth = '50%'
        }else{
          $event.path[0].style.maxWidth = '100%'
        }*/
        if (($event.target.naturalHeight / $event.target.naturalWidth) >= 1.5) {
            // $event.target.style.maxWidth = '35%'
            var image = $event.target;
            this.renderer.setStyle(image, 'max-width', '35%');
        }
        else if (($event.target.naturalHeight / $event.target.naturalWidth) >= 1.2) {
            $event.target.style.maxWidth = '50%';
        }
        else {
            $event.target.style.maxWidth = '100%';
        }
    };
    ViewImageComponent.prototype.disableModalElements = function (disable) {
        if (disable === true) {
            this.renderer.setProperty(this.modalCloseButton.nativeElement, 'disabled', true);
            this.renderer.setProperty(this.btnSubmitCommentChanges.nativeElement, 'disabled', true);
            this.renderer.setProperty(this.modalCancelButton.nativeElement, 'disabled', true);
        }
        else {
            this.renderer.setProperty(this.modalCloseButton.nativeElement, 'disabled', false);
            this.renderer.setProperty(this.btnSubmitCommentChanges.nativeElement, 'disabled', false);
            this.renderer.setProperty(this.modalCancelButton.nativeElement, 'disabled', false);
        }
    };
    ViewImageComponent.prototype.ngOnDestroy = function () {
        this.renderer.setStyle(document.body, 'overflow', 'visible'); //visible je default vrednost https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("progressBar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewImageComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("btnAddComment"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]
        // @ViewChild("addGalleryCommentForm") addGalleryCommentForm: FormGroup // radilo je i sa FormGroup samo sto izgleda nije pravilno jer je FormGroup za model driven ili ti reactive forme, a ova tvoja je template driven. Vidi ovde https://stackoverflow.com/questions/48681287/reset-form-from-parent-component. Inace ideju za FormGroup pokupio ovde: https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/ i https://codecraft.tv/courses/angular/forms/submitting-and-resetting/
        )
    ], ViewImageComponent.prototype, "btnAddComment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("addImageCommentForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* NgForm */] //https://stackoverflow.com/questions/48681287/reset-form-from-parent-component
        )
    ], ViewImageComponent.prototype, "addImageCommentForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("commentsContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewImageComponent.prototype, "commentsContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("editImageCommentModalButtonTrigger"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewImageComponent.prototype, "editImageCommentModalButtonTrigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("editImageCommentModal"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewImageComponent.prototype, "editGalleryCommentModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("arrowLinkLeft"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewImageComponent.prototype, "arrowLinkLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("arrowLinkRight"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewImageComponent.prototype, "arrowLinkRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("showingImageContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewImageComponent.prototype, "showingImageContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("modalCloseButton"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewImageComponent.prototype, "modalCloseButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("btnSubmitCommentChanges"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewImageComponent.prototype, "btnSubmitCommentChanges", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("modalCancelButton"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]
        // koristio savet odavde https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685
        )
    ], ViewImageComponent.prototype, "modalCancelButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:touchstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ViewImageComponent.prototype, "touchScreenDetector", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentRef */])
    ], ViewImageComponent.prototype, "componentReference", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ViewImageComponent.prototype, "imageID", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_models_gallery__["a" /* Gallery */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_models_gallery__["a" /* Gallery */]])
    ], ViewImageComponent.prototype, "gallery", null);
    ViewImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-image',
            template: __webpack_require__("../../../../../src/app/components/view-image/view-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-image/view-image.component.css")],
            animations: [
                // ideju za animaciju heighta sa '*', nasao na ovom linku https://stackoverflow.com/questions/42376006/angular2-ngfor-animation-of-pushed-away-elements . Naime, animacija heighta ti omogucuje da vidis ovo pomeranje osstalih komentara kad jedan komentar obrises. I kolko sam ja skontao fora je u tome sto ovom kojeg brises, njemu se height postepeno smanjuje dok ne nestane i to zapravo cini da se ovi komentari pomeraju animirano, ali nisu animirani oni vec height ovog sto nestaje.
                // isto ti je da li ces dole raditi sa sequence, ili ces redjati animate jedno za drugim, kao u primeru druge tranzicije (vidi https://angular.io/api/animations/sequence : "sequence Specifies a list of animation steps that are run one by one. (sequence is used by default when an array is passed as animation data into transition.)")
                Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["i" /* trigger */])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["h" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["g" /* style */])({ opacity: 0, height: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["f" /* sequence */])([
                            // stavljam 500ms delaya zbog skrola koji se desava prethodno
                            Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* animate */])('400ms 500ms', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["g" /* style */])({ height: '*' })),
                            Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* animate */])('400ms', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["g" /* style */])({ opacity: 1 }))
                        ])
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["h" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* animate */])('400ms', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["g" /* style */])({ opacity: 0 })),
                        Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* animate */])('400ms', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["g" /* style */])({ height: 0 }))
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__shared_services_view_image_service__["a" /* ViewImageService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__shared_services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ViewImageComponent);
    return ViewImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isAuthenticated) {
            this.router.navigate(['/login']);
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/guards/guest.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestGuard = /** @class */ (function () {
    function GuestGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    GuestGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAuthenticated) {
            this.router.navigate(['/']);
        }
        return true;
    };
    GuestGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], GuestGuard);
    return GuestGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/gallery-comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComment; });
var GalleryComment = /** @class */ (function () {
    function GalleryComment(id, commentBody, userId, user, galleryId, gallery, createdAt, updatedAt) {
        this.id = id;
        this.commentBody = commentBody;
        this.userId = userId;
        this.user = user;
        this.galleryId = galleryId;
        this.gallery = gallery;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    return GalleryComment;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/gallery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gallery; });
var Gallery = /** @class */ (function () {
    function Gallery(id, name, description, user_id, created_at, updated_at, user, images, 
        // Morao sam ovo da promenim zbog toga sto u template-u koristim semantiku sa backenda koja je snake_case public comments: Array<GalleryComment> = [],
        comments, showedImagesNumber) {
        if (images === void 0) { images = []; }
        if (comments === void 0) { comments = []; }
        this.id = id;
        this.name = name;
        this.description = description;
        this.user_id = user_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.user = user;
        this.images = images;
        this.comments = comments;
        this.showedImagesNumber = showedImagesNumber;
    }
    return Gallery;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/image-comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComment; });
var ImageComment = /** @class */ (function () {
    function ImageComment(id, commentBody, userId, user, imageId, image, createdAt, updatedAt) {
        this.id = id;
        this.commentBody = commentBody;
        this.userId = userId;
        this.user = user;
        this.imageId = imageId;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    return ImageComment;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(id, firstName, lastName, email, profileImage, password, confirmPassword, acceptedTerms, verified, verifyToken) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.profileImage = profileImage;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.acceptedTerms = acceptedTerms;
        this.verified = verified;
        this.verifyToken = verifyToken;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.isAuthenticated = Boolean(window.localStorage.getItem('loginToken'));
        this.loggedUserNameFirstLetter = window.localStorage.getItem('loggedUserNameFirstLetter');
        this.token = window.localStorage.getItem('loginToken');
        /*if(this.isAuthenticated){
            if(firebase.auth().currentUser){
                firebase.auth().currentUser.getIdToken().then((token: string) => {
                    if(token !== this.token){
                        alert("Your session is expired, please log in again.")
                        this.logout()
                    }
                })
            }
            
        }*/
        // Nasao ovde https://stackoverflow.com/questions/37873608/how-do-i-detect-if-a-user-is-already-logged-in-firebase
        /*firebase.auth().onAuthStateChanged((user) => {
          
          console.log(user);
          
          if(!user){
            // Ovaj uslov isAuthenticated ispitujem, jer ako je on false to znaci da je user manualno izlogovan, a taj slucaj ovde nema potrebe da hendlujem
            if(this.isAuthenticated){
                this.logout()
                alert('Your session is expired, please log in again!')
            }
          }else{
            firebase.auth().currentUser.getIdToken().then((token: string) => {
              if(token !== this.token){
                alert("Your session is expired, please log in again.")
                this.logout()
              }
            })
          }
          if(user){
    
            firebase.auth().currentUser.getIdToken().then((token: string) => {
              if(token !== this.token){
                alert("Your session is expired, please log in again.")
                this.logout()
              }
            })
    
          }
    
        });*/
    }
    AuthService.prototype.getRequestHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem('loginToken'));
    };
    AuthService.prototype.getAndCheckToken = function () {
        var _this = this;
        /*console.log(firebase.auth().currentUser);
    
        if(firebase.auth().currentUser){
            firebase.auth().currentUser.getIdToken().then((token: string) => {
                if(token !== this.token){
                    alert("Your session is expired, please log in again.")
                    this.logout()
                }
            })
        }*/
        // Nasao ovde https://stackoverflow.com/questions/37873608/how-do-i-detect-if-a-user-is-already-logged-in-firebase
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
            console.log(user);
            if (user) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.getIdToken().then(function (token) {
                    if (token !== _this.token) {
                        alert("Your session is expired, please log in again.");
                        _this.logout();
                    }
                });
            }
        });
        return this.token;
    };
    AuthService.prototype.register = function (user) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().createUserWithEmailAndPassword(user.email, user.password).then(function () {
            alert('You have successfully registered!');
        }).catch(function (error) {
            alert(error);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.getIdToken().then(function (token) {
                    _this.token = token;
                    window.localStorage.setItem('loginToken', token);
                    _this.isAuthenticated = true;
                    _this.loggedUserNameFirstLetter = response.user.email.charAt(0).toUpperCase();
                    window.localStorage.setItem('loggedUserNameFirstLetter', _this.loggedUserNameFirstLetter);
                    window.localStorage.setItem('loggedUserEmail', response.user.email);
                    resolve();
                });
            }).catch(function (error) {
                alert('You have provided invalid credentials!');
                console.log(error);
                reject();
            });
        });
    };
    AuthService.prototype.logout = function (event) {
        if (event)
            event.preventDefault();
        this.isAuthenticated = false;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut();
        window.localStorage.removeItem('loginToken');
        window.localStorage.removeItem('loggedUserEmail');
        window.localStorage.removeItem('loggedUserNameFirstLetter');
        this.loggedUserNameFirstLetter = '';
        this.router.navigateByUrl('/login');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/gallery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_gallery__ = __webpack_require__("../../../../../src/app/shared/models/gallery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GalleryService = /** @class */ (function () {
    // private specificGallery: Gallery //mozda je pametnije da ga ne lepis ovde, nego da napravis promenljivu unutar funkcije, onda mozda ne bi morao ovako da je reinicijalizujes na pocetku ko sto radis u getGalleries()
    function GalleryService(http, authService) {
        /*this.http.get('http://localhost:8000/api/galleries_firebase').subscribe(galleries => {
                    console.log(galleries);
                    let galleriesJSON = JSON.stringify(galleries)
            // Ovo sam koristio za pravljenje baze u Firebase, samo kopirao i napravio file od toga i onda importovao u Firebase
            console.log(galleriesJSON);
                })*/
        this.http = http;
        this.authService = authService;
        // moras ga inicijalizovati, jer inace nece moci da nadje push metodu na njemu!
        this.galleries = [];
    }
    GalleryService.prototype.getGalleries = function () {
        var _this = this;
        // desava se da ostanu stari rezultati, pa onda kad dobavi nove sabiraju se i duplaju i ne prikazuju kako treba, i to se sabiraju ovde u servisu a ne u komponenti!
        this.galleries = [];
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (o) {
            _this.http.get('https://smartinit-zavrsni.firebaseio.com/galleries.json?auth=' + _this.authService.getAndCheckToken(), { observe: 'body', responseType: 'json' })
                .subscribe(function (galleries) {
                galleries.forEach(function (g) {
                    // let showedImagesNumber = this.setShowedImagesNumber(g)
                    _this.galleries.push(new __WEBPACK_IMPORTED_MODULE_2__shared_models_gallery__["a" /* Gallery */](g.id, g.name, g.description, g.user_id, g.created_at, g.updated_at, new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](g.user.id, g.user.first_name, g.user.last_name, g.user.email), g.images, g.comments /*, showedImagesNumber*/));
                });
                o.next(_this.galleries);
                return o.complete();
            }, function (err) {
                o.error(err);
                return o.complete();
            });
        });
    };
    GalleryService.prototype.getSpecificGallery = function (id) {
        var _this = this;
        id = id - 1;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (o) {
            _this.http.get('https://smartinit-zavrsni.firebaseio.com/galleries/' + id + '.json?auth=' + _this.authService.getAndCheckToken(), { observe: 'body', responseType: 'json' })
                .subscribe(function (gallery) {
                console.log(gallery);
                var fetchedGallery = new __WEBPACK_IMPORTED_MODULE_2__shared_models_gallery__["a" /* Gallery */](gallery.id, gallery.name, gallery.description, gallery.user_id, gallery.created_at, gallery.updated_at, gallery.user, gallery.images, gallery.comments);
                o.next(fetchedGallery);
                return o.complete();
            }, function (err) {
                o.error(err);
                return o.complete();
            });
        });
    };
    GalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */]])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/view-image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewImageService = /** @class */ (function () {
    function ViewImageService(componentFactoryResolver, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        // Koristim komunikaciju parenta i childa preko servisa kao i ovde https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
        this.gallerySource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.galleryUpdatedImageComments = this.gallerySource.asObservable();
    }
    ViewImageService.prototype.setViewContainerRef = function (vcRef) {
        this.vcRef = vcRef;
    };
    // Moram imat posebne setere za imageID i galeriju jer se oni ne setuju uvek pri kreiranju komponente
    ViewImageService.prototype.setImageID = function (imageID) {
        this.imageID = imageID;
        this.componentRef.instance.imageID = this.imageID;
    };
    ViewImageService.prototype.setGallery = function (gallery) {
        this.gallery = gallery;
        this.componentRef.instance.gallery = this.gallery;
    };
    ViewImageService.prototype.setGalleryUpdatedImageComments = function (galleryUpdatedImageComments) {
        this.gallerySource.next(galleryUpdatedImageComments);
    };
    ViewImageService.prototype.addDynamicComponent = function (component) {
        // 1. Create a component reference from the component 
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        // Neku debilnu gresku resavam ovde tako sto stavim tacku zarez na kraj izraza, debilno al probaj ako budes imao neki problem ovde... Kolko sam skontao, problem je zapravo u sledecem redu koji pocinje sa (<any> , jer sam mi se isti ovaj problem pojavljivao ispred tog reda. Dakle u red iznad treba samo staviti tacku zarez
        this.componentRef = componentRef;
        this.componentRef.instance.componentReference = componentRef;
        this.vcRef.insert(componentRef.hostView);
    };
    ViewImageService.prototype.destroyComponent = function (componentRef) {
        var indexVcRef = this.vcRef.indexOf(componentRef.hostView);
        this.vcRef.remove(indexVcRef); //msm da sam ovo skontao iz dokumentacije zvanicne kako se radi, nznm, msm da to nisam nasao u onim tutorijalima, nisam siguran
        componentRef.destroy(); // ovo svaki tutorijal kaze da treba da se destroyuje ovako...
        componentRef = null; // ovo da stavlja na null sam nasao ovde https://medium.com/@DenysVuika/dynamic-content-in-angular-2-3c85023d9c36 <<< gledaj u ngOnDestroy
        this.componentRef = null; // Bez ovoga nije hteo da mi odradi da ponovo otvorim sliku, kad bi je prethodno zatvorio
    };
    ViewImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], ViewImageService);
    return ViewImageService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map