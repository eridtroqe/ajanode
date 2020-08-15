(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dashboard/login/login.component */ "./src/app/modules/dashboard/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");






const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _modules_dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'dashboard',
        // component: DashboardComponent,
        loadChildren: () => Promise.all(/*! import() | modules-dashboard-dashboard-module */[__webpack_require__.e("default~modules-contact-contact-module~modules-dashboard-dashboard-module~modules-home-home-module~m~0161ed6f"), __webpack_require__.e("modules-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "./src/app/modules/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | modules-home-home-module */[__webpack_require__.e("default~modules-contact-contact-module~modules-dashboard-dashboard-module~modules-home-home-module~m~0161ed6f"), __webpack_require__.e("default~modules-home-home-module~modules-real-estate-real-estate-module"), __webpack_require__.e("modules-home-home-module")]).then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        path: 'aboutus',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-aboutus-aboutus-module */ "modules-aboutus-aboutus-module").then(__webpack_require__.bind(null, /*! ./modules/aboutus/aboutus.module */ "./src/app/modules/aboutus/aboutus.module.ts")).then(m => m.AboutusModule)
    },
    {
        path: 'contact',
        loadChildren: () => Promise.all(/*! import() | modules-contact-contact-module */[__webpack_require__.e("default~modules-contact-contact-module~modules-dashboard-dashboard-module~modules-home-home-module~m~0161ed6f"), __webpack_require__.e("modules-contact-contact-module")]).then(__webpack_require__.bind(null, /*! ./modules/contact/contact.module */ "./src/app/modules/contact/contact.module.ts")).then(m => m.ContactModule)
    },
    {
        path: 'real-estate',
        loadChildren: () => Promise.all(/*! import() | modules-real-estate-real-estate-module */[__webpack_require__.e("default~modules-contact-contact-module~modules-dashboard-dashboard-module~modules-home-home-module~m~0161ed6f"), __webpack_require__.e("default~modules-home-home-module~modules-real-estate-real-estate-module"), __webpack_require__.e("modules-real-estate-real-estate-module")]).then(__webpack_require__.bind(null, /*! ./modules/real-estate/real-estate.module */ "./src/app/modules/real-estate/real-estate.module.ts")).then(m => m.RealEstateModule)
    },
    {
        path: 'e-apliki',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-e-apliki-e-apliki-module */ "modules-e-apliki-e-apliki-module").then(__webpack_require__.bind(null, /*! ./modules/e-apliki/e-apliki.module */ "./src/app/modules/e-apliki/e-apliki.module.ts")).then(m => m.EAplikiModule)
    },
    {
        path: 'environmental-consultancy',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-environmental-consultancy-environmental-consultancy-module */ "modules-environmental-consultancy-environmental-consultancy-module").then(__webpack_require__.bind(null, /*! ./modules/environmental-consultancy/environmental-consultancy.module */ "./src/app/modules/environmental-consultancy/environmental-consultancy.module.ts")).then(m => m.EnvironmentalConsultancyModule)
    },
    {
        path: 'food-safety',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-food-safety-food-safety-module */ "modules-food-safety-food-safety-module").then(__webpack_require__.bind(null, /*! ./modules/food-safety/food-safety.module */ "./src/app/modules/food-safety/food-safety.module.ts")).then(m => m.FoodSafetyModule)
    },
    {
        path: 'intermediation',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-intermediation-intermediation-module */ "modules-intermediation-intermediation-module").then(__webpack_require__.bind(null, /*! ./modules/intermediation/intermediation.module */ "./src/app/modules/intermediation/intermediation.module.ts")).then(m => m.IntermediationModule)
    },
    {
        path: 'real-estate-appraisal',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-real-estate-appraisal-real-estate-appraisal-module */ "modules-real-estate-appraisal-real-estate-appraisal-module").then(__webpack_require__.bind(null, /*! ./modules/real-estate-appraisal/real-estate-appraisal.module */ "./src/app/modules/real-estate-appraisal/real-estate-appraisal.module.ts")).then(m => m.RealEstateAppraisalModule)
    },
    {
        path: 'topographic-works',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-topographic-works-topographic-works-module */ "modules-topographic-works-topographic-works-module").then(__webpack_require__.bind(null, /*! ./modules/topographic-works/topographic-works.module */ "./src/app/modules/topographic-works/topographic-works.module.ts")).then(m => m.TopographicWorksModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoint/auth.service */ "./src/app/endpoint/auth.service.ts");
/* harmony import */ var _endpoint_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endpoint/backend.service */ "./src/app/endpoint/backend.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _home_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/layout/sidenav/sidenav.component */ "./src/app/home/layout/sidenav/sidenav.component.ts");
/* harmony import */ var _home_layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/layout/header/header.component */ "./src/app/home/layout/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/layout/footer/footer.component */ "./src/app/home/layout/footer/footer.component.ts");












class AppComponent {
    constructor(http, authService, be, store) {
        this.http = http;
        this.authService = authService;
        this.be = be;
        this.store = store;
    }
    ngOnInit() {
        const authToken = this.authService.getToken();
        if (!authToken) {
            this.store.dispatch(Object(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["authFalse"])());
        }
        else {
            this.store.dispatch(Object(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["authTrue"])());
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_endpoint_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_endpoint_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["role", "navigation", "position", "end", "fixedInViewport", "true"], ["sidenav", ""], [3, "closeSidenav"], [1, "fixed-top", 3, "sidenavToggle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeSidenav", function AppComponent_Template_app_sidenav_closeSidenav_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function AppComponent_Template_app_header_sidenavToggle_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _home_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _home_layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _home_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], styles: ["app-header[_ngcontent-%COMP%] {\n  z-index: 7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxBamEgcmVhbCBlc3RhdGVcXGFqYW5vZGUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlcntcclxuICAgIHotaW5kZXg6IDc7XHJcbn0iLCJhcHAtaGVhZGVyIHtcbiAgei1pbmRleDogNztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _endpoint_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/layout/sidenav/sidenav.component */ "./src/app/home/layout/sidenav/sidenav.component.ts");
/* harmony import */ var _home_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/layout/footer/footer.component */ "./src/app/home/layout/footer/footer.component.ts");
/* harmony import */ var _home_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/layout/header/header.component */ "./src/app/home/layout/header/header.component.ts");
/* harmony import */ var _home_layout_header_contact_header_contact_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/layout/header/contact-header/contact-header.component */ "./src/app/home/layout/header/contact-header/contact-header.component.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var _home_layout_header_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/layout/header/menu-header/menu-header.component */ "./src/app/home/layout/header/menu-header/menu-header.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _modules_dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/dashboard/login/login.component */ "./src/app/modules/dashboard/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modules_dashboard_login_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/dashboard/login/auth-interceptor */ "./src/app/modules/dashboard/login/auth-interceptor.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./store/effects/auth.effects */ "./src/app/store/effects/auth.effects.ts");
/* harmony import */ var _store_effects_property_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./store/effects/property.effects */ "./src/app/store/effects/property.effects.ts");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _modules_dashboard_login_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _modules_dashboard_login_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["ErrorInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMapsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot(_store_app_state__WEBPACK_IMPORTED_MODULE_25__["reducers"], {}),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_26__["ToastrModule"].forRoot({
                // positionClass: 'toast-top-center',
                closeButton: true,
                preventDuplicates: true
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsModule"].forRoot([_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_23__["AuthEffects"], _store_effects_property_effects__WEBPACK_IMPORTED_MODULE_24__["PropertyEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"],
        _home_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _home_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _home_layout_header_contact_header_contact_header_component__WEBPACK_IMPORTED_MODULE_10__["ContactHeaderComponent"],
        _home_layout_header_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_12__["MenuHeaderComponent"],
        _modules_dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMapsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreRootModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_26__["ToastrModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _home_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"],
                    _home_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _home_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _home_layout_header_contact_header_contact_header_component__WEBPACK_IMPORTED_MODULE_10__["ContactHeaderComponent"],
                    _home_layout_header_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_12__["MenuHeaderComponent"],
                    _modules_dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMapsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot(_store_app_state__WEBPACK_IMPORTED_MODULE_25__["reducers"], {}),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_26__["ToastrModule"].forRoot({
                        // positionClass: 'toast-top-center',
                        closeButton: true,
                        preventDuplicates: true
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsModule"].forRoot([_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_23__["AuthEffects"], _store_effects_property_effects__WEBPACK_IMPORTED_MODULE_24__["PropertyEffects"]])
                ],
                providers: [
                    _auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _modules_dashboard_login_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _modules_dashboard_login_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["ErrorInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducers/auth.reducer */ "./src/app/store/reducers/auth.reducer.ts");
/* harmony import */ var _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoint/auth.service */ "./src/app/endpoint/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");






class AuthGuard {
    constructor(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getToken();
        this.store.select(_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsAuth"]).subscribe(val => this.isAuthStore = val);
        if (!isAuth) {
            this.router.navigate(['/login']);
            return false;
        }
        if (isAuth && this.isAuthStore === true) {
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_endpoint_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/endpoint/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/endpoint/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/user';
class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getToken() {
        return localStorage.getItem('token');
    }
    // getIsAuth() {
    //   return this.isAuthenticated;
    // }
    getUserId() {
        return this.userId;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    createUser(email, password) {
        const authData = { email, password };
        this.http.post(BACKEND_URL + '/signup', authData).subscribe(() => {
            this.router.navigate(['/']);
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    login(email, password) {
        const authData = { email, password };
        return this.http
            .post(BACKEND_URL + '/login', authData);
        // .subscribe(
        //   response => {
        //     const token = response.token;
        //     this.token = token;
        //     if (token) {
        //       const expiresInDuration = response.expiresIn;
        //       this.setAuthTimer(expiresInDuration);
        //       this.isAuthenticated = true;
        //       this.userId = response.userId;
        //       this.authStatusListener.next(true);
        //       const now = new Date();
        //       const expirationDate = new Date(
        //         now.getTime() + expiresInDuration * 1000
        //       );
        //       console.log(expirationDate);
        //       this.saveAuthData(token, expirationDate, this.userId);
        //       this.router.navigate(['/dashboard']);
        //     }
        //   },
        //   error => {
        //     this.authStatusListener.next(false);
        //   }
        // );
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate, userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
    }
    getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token,
            expirationDate: new Date(expirationDate),
            userId
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/endpoint/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/endpoint/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
class BackendService {
    constructor(http) {
        this.http = http;
    }
    sendMail(email) {
        this.http.post(BACKEND_URL + '/email', email).subscribe();
    }
    addProperty(property, imagePath) {
        const postData = new FormData();
        postData.append('title', property.title);
        postData.append('city', property.city);
        postData.append('description', property.description);
        postData.append('address', property.address);
        postData.append('sip', property.sip);
        postData.append('typology', property.typology);
        postData.append('rooms', property.rooms);
        postData.append('toilets', property.toilets);
        postData.append('floor', property.floor);
        postData.append('type', property.type);
        postData.append('price', property.price);
        postData.append('exclusive', property.exclusive.toString());
        postData.append('position', property.position.toString());
        postData.append('rented', property.rented.toString());
        postData.append('sold', property.sold.toString());
        postData.append('prenoted', property.sold.toString());
        for (let i = 0; i < imagePath.length; i++) {
            postData.append('imagePath', imagePath[i]);
        }
        return this.http.post(BACKEND_URL + '/propertys', postData, { reportProgress: true, observe: 'events' });
    }
    updateProperty(id, property, imagePath) {
        let postData;
        if (imagePath.length > 0) {
            postData = new FormData();
            postData.append('_id', id);
            postData.append('city', property.city);
            postData.append('title', property.title);
            postData.append('description', property.description);
            postData.append('address', property.address);
            postData.append('sip', property.sip);
            postData.append('typology', property.typology);
            postData.append('rooms', property.rooms);
            postData.append('toilets', property.toilets);
            postData.append('floor', property.floor);
            postData.append('type', property.type);
            postData.append('price', property.price);
            postData.append('exclusive', property.exclusive.toString());
            postData.append('position', property.position.toString());
            postData.append('rented', property.rented.toString());
            postData.append('sold', property.sold.toString());
            postData.append('prenoted', property.sold.toString());
            for (let i = 0; i < imagePath.length; i++) {
                postData.append('imagePath', imagePath[i]);
            }
        }
        else {
            postData = Object.assign(Object.assign({}, property), { _id: id });
        }
        // return of(true);
        return this.http.put(BACKEND_URL + '/propertys/' + id, postData);
    }
    getProperties(postsPerPage, currentPage) {
        const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
        return this.http.get(BACKEND_URL + '/propertys' + queryParams);
    }
    getProperty(id) {
        return this.http.get(BACKEND_URL + '/propertys/' + id);
    }
    deleteProperty(id) {
        return this.http.delete(BACKEND_URL + '/propertys/' + id);
    }
    getExclusive() {
        return this.http.get(BACKEND_URL + '/exclusive');
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/layout/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/layout/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");








function FooterComponent_map_marker_51_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "map-marker", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function FooterComponent_map_marker_51_Template_map_marker_mapClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const marker_r106 = ctx.$implicit; const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.openInfo(_r107, marker_r106.info); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marker_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", marker_r106.position)("label", marker_r106.label)("title", marker_r106.title)("options", marker_r106.options);
} }
const _c0 = function () { return ["/contact"]; };
const _c1 = function () { return ["/environmental-consultancy"]; };
const _c2 = function () { return ["/e-apliki"]; };
const _c3 = function () { return ["/food-safety"]; };
const _c4 = function () { return ["/intermediation"]; };
class FooterComponent {
    constructor() {
        // @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
        this.copyDate = new Date().getFullYear();
        // center = { lat: 24, lng: 12 };
        // markerOptions = { draggable: false };
        // markerPositions: google.maps.LatLngLiteral[] = [];
        // zoom = 4;
        // display?: google.maps.LatLngLiteral;
        this.faFacebookF = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebook"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitter"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInstagram"];
        this.zoom = 18;
        this.options = {
            zoomControl: true,
            scrollwheel: false,
            disableDoubleClickZoom: true
        };
        this.markers = [];
        this.infoContent = '';
    }
    ngOnInit() {
        this.center = {
            lat: 41.322555,
            lng: 19.807965
        };
        this.markers.push({
            position: {
                lat: 41.322555,
                lng: 19.807965
            },
            // label: {
            //   color: '#31394d',
            //   text: 'Ajafirstchoice'
            // },
            icons: '../../../../assets/logo/aja_logo_tab.png',
            title: 'Ajafirstchoice',
            options: {
                animation: google.maps.Animation.BOUNCE
            }
        });
    }
    openInfo(marker, content) {
        this.infoContent = content;
        this.info.open(marker);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], viewQuery: function FooterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapInfoWindow"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.info = _t.first);
    } }, decls: 74, vars: 25, consts: [[1, "container-fluid"], [1, "row", "footer"], [1, "col-md-8", "col-sm-12"], [1, "container"], [1, "row"], [1, "col-md-2", "menus"], [3, "routerLink"], [1, "col-md-5", "services"], [1, "col-md-4", "address"], ["height", "350px", "width", "100%", 1, "col-md-4", "col-sm-12", 3, "zoom", "center", "options"], [3, "position", "label", "title", "options", "mapClick", 4, "ngFor", "ngForOf"], [1, "col-12", "socials"], [1, "row", "justify-content-center", "align-items-center"], [1, "row", "justify-content-center", "align-items-center", "my-4"], ["width", "0", "height", "0"], ["id", "rg", "r", "150%", "cx", "30%", "cy", "107%"], ["stop-color", "#fdf497", "offset", "0"], ["stop-color", "#fdf497", "offset", "0.05"], ["stop-color", "#fd5949", "offset", "0.45"], ["stop-color", "#d6249f", "offset", "0.6"], ["stop-color", "#285AEB", "offset", "0.9"], [1, "social-icons"], [3, "icon"], [1, "d-flex", "py-3", "justify-content-center"], [3, "position", "label", "title", "options", "mapClick"], ["markerElem", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Rreth nesh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sh\u00EBrbime ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Kontakt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Imobiliare ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Vler\u00EBsim i pasurive t\u00EB paluajtshme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Projektime dhe punime topografike ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Konsulenc\u00EB mjedisore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " E-Apliki me ekspertiz\u00EB tekniko-ligjore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Sisteme t\u00EB menaxhimit t\u00EB siguris\u00EB ushqimore dhe bujq\u00EBsis\u00EB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Nd\u00EBrmjet\u00EBsim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Adresa: Blv. Gjergj Fishta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " E-mail: ajafirstchoice@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Tel: +355 69 22 58 711 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "google-map", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, FooterComponent_map_marker_51_Template, 2, 4, "map-marker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "map-info-window");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "radialGradient", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "stop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "stop", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "stop", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/aboutus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/real-estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/real-estate-appraisal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/topographic-works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom)("center", ctx.center)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.infoContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebookF);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTwitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInstagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.copyDate, " Dizenjuar Nga Ajafirstchoice");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapInfoWindow"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapMarker"]], styles: ["ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: greenyellow;\n}\n  .map-container {\n  border-radius: 20px;\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.footer[_ngcontent-%COMP%] {\n  padding: 5rem 2rem;\n  background-color: #293041;\n  color: whitesmoke;\n}\n.menus[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .address[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 1.2rem;\n  margin-bottom: 0.7rem;\n}\na[_ngcontent-%COMP%] {\n  color: #FFF;\n}\nfa-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 1rem;\n  color: greenyellow;\n}\n.socials[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n}\n@media only screen and (max-width: 450px) {\n  .footer[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYXlvdXQvZm9vdGVyL0M6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcQWphIHJlYWwgZXN0YXRlXFxhamFub2RlL3NyY1xcYXBwXFxob21lXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBREFFO0VBQ0Usa0JBQUE7QUNFSjtBREVBO0VBQ0UsbUJBQUE7RUFDQSwySEFBQTtBQ0NGO0FESUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBOzs7RUFHRSxtQkFBQTtFQUNBLHFCQUFBO0FDREY7QURHQTtFQUNFLFdBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtBQ0FGO0FER0E7RUFDRTtJQUNFLGVBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsID4gbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hcC1jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogIDBweCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCBcclxuICAgICAgICAgICAgICAgMHB4IDdweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCBcclxuICAgICAgICAgICAgICAgMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpXHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgcGFkZGluZzogNXJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICBkYXJrZW4oJGNvbG9yOiAjMzEzOTRkLCAkYW1vdW50OiA0KTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLm1lbnVzIGxpICAsIFxyXG4uc2VydmljZXMgbGkgICwgXHJcbi5hZGRyZXNzIGxpICB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAuN3JlbTtcclxufVxyXG5he1xyXG4gIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG5mYS1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDAgMXJlbTtcclxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuXHJcbi5zb2NpYWxze1xyXG4gIG1hcmdpbi10b3A6IDdyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICB9XHJcbn0iLCJ1bCA+IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbnVsID4gbGkgYTpob3ZlciB7XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuOjpuZy1kZWVwIC5tYXAtY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogNXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzMDQxO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLm1lbnVzIGxpLFxuLnNlcnZpY2VzIGxpLFxuLmFkZHJlc3MgbGkge1xuICBsaW5lLWhlaWdodDogMS4ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbmEge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLnNvY2lhbHMge1xuICBtYXJnaW4tdG9wOiA3cmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], null, { map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], { static: false }]
        }], info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapInfoWindow"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/home/layout/header/contact-header/contact-header.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/layout/header/contact-header/contact-header.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactHeaderComponent", function() { return ContactHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



class ContactHeaderComponent {
    constructor() {
    }
    ngOnInit() { }
}
ContactHeaderComponent.ɵfac = function ContactHeaderComponent_Factory(t) { return new (t || ContactHeaderComponent)(); };
ContactHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactHeaderComponent, selectors: [["app-contact-header"]], decls: 12, vars: 0, consts: [[1, "container-fluid"], [1, "row", "justify-content-end"], [1, "d-flex", "align-items-center", "justify-content-center", "mx-2"], ["color", "secondary"], ["href", "tel:+355692258711", 1, "mr-2", "ml-1"], ["href", "mailto:ajafirstchoice@gmail.com", 1, "mr-2", "ml-1", "email"]], template: function ContactHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+355 69 22 58 711");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ajafirstchoice@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.8rem;\n  line-height: 1;\n  letter-spacing: 0.08rem;\n  font-weight: lighter;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: greenyellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYXlvdXQvaGVhZGVyL2NvbnRhY3QtaGVhZGVyL0M6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcQWphIHJlYWwgZXN0YXRlXFxhamFub2RlL3NyY1xcYXBwXFxob21lXFxsYXlvdXRcXGhlYWRlclxcY29udGFjdC1oZWFkZXJcXGNvbnRhY3QtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xheW91dC9oZWFkZXIvY29udGFjdC1oZWFkZXIvY29udGFjdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xheW91dC9oZWFkZXIvY29udGFjdC1oZWFkZXIvY29udGFjdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBsZXR0ZXItc3BhY2luZzogLjA4cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiBncmVlbnllbGxvdztcclxufVxyXG4vLyA6Om5nLWRlZXAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XHJcbi8vICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-header',
                templateUrl: './contact-header.component.html',
                styleUrls: ['./contact-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/layout/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/layout/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _contact_header_contact_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-header/contact-header.component */ "./src/app/home/layout/header/contact-header/contact-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-header/menu-header.component */ "./src/app/home/layout/header/menu-header/menu-header.component.ts");








const _c0 = function () { return ["/home"]; };
class HeaderComponent {
    constructor() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    openSideMenu() {
        this.sidenavToggle.emit();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { sidenavToggle: "sidenavToggle" }, decls: 10, vars: 2, consts: [["color", "primary", 1, "mat-elevation-z10"], [1, "contact", "d-none", "d-sm-block"], [1, "mat-body-1"], [1, "justify-content-between"], [1, "col"], ["src", "../../../../assets/logo/aja_logo_white.png", "alt", "logo", 1, "logo", 3, "routerLink"], ["mat-button", "", 1, "d-md-none", "col-xs-3", 3, "click"], [1, "d-none", "d-md-flex", "justify-content-end"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-contact-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener($event) { return ctx.openSideMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-menu-header", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _contact_header_contact_header_component__WEBPACK_IMPORTED_MODULE_2__["ContactHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_6__["MenuHeaderComponent"]], styles: [".logo[_ngcontent-%COMP%] {\n  max-height: 64px;\n}\n\n.contact[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  opacity: 0.95;\n}\n\nmat-toolbar-row[_ngcontent-%COMP%]:first-of-type {\n  background-image: linear-gradient(to left, #293041 45%, transparent 80%);\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYXlvdXQvaGVhZGVyL0M6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcQWphIHJlYWwgZXN0YXRlXFxhamFub2RlL3NyY1xcYXBwXFxob21lXFxsYXlvdXRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0Usd0VBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dvIHtcclxuICBtYXgtaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4uY29udGFjdHtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIG9wYWNpdHk6IC45NTtcclxufVxyXG5cclxubWF0LXRvb2xiYXItcm93OmZpcnN0LW9mLXR5cGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjkzMDQxIDQ1JSwgdHJhbnNwYXJlbnQgODAlKSA7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59IiwiLmxvZ28ge1xuICBtYXgtaGVpZ2h0OiA2NHB4O1xufVxuXG4uY29udGFjdCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIG9wYWNpdHk6IDAuOTU7XG59XG5cbm1hdC10b29sYmFyLXJvdzpmaXJzdC1vZi10eXBlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyOTMwNDEgNDUlLCB0cmFuc3BhcmVudCA4MCUpO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { sidenavToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/layout/header/menu-header/menu-header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/layout/header/menu-header/menu-header.component.ts ***!
  \*************************************************************************/
/*! exports provided: MenuHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuHeaderComponent", function() { return MenuHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/reducers/auth.reducer */ "./src/app/store/reducers/auth.reducer.ts");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
/* harmony import */ var _store_actions_property_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/actions/property.actions */ "./src/app/store/actions/property.actions.ts");
/* harmony import */ var _model_auth_iterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/auth.iterface */ "./src/app/model/auth.iterface.ts");
/* harmony import */ var _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../endpoint/auth.service */ "./src/app/endpoint/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");













function MenuHeaderComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_ng_container_25_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.navigateToDashboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuHeaderComponent_ng_container_25_Template_a_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "power_settings_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["home"]; };
const _c1 = function () { return ["real-estate"]; };
const _c2 = function () { return ["real-estate-appraisal"]; };
const _c3 = function () { return ["topographic-works"]; };
const _c4 = function () { return ["environmental-consultancy"]; };
const _c5 = function () { return ["e-apliki"]; };
const _c6 = function () { return ["/contact"]; };
class MenuHeaderComponent {
    constructor(authService, store, router) {
        this.authService = authService;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.userIsAuth$ = this.store.select(_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsAuth"]);
    }
    ngOnDestroy() {
    }
    navigateToDashboard() {
        this.store.dispatch(Object(_store_actions_property_actions__WEBPACK_IMPORTED_MODULE_3__["setCreateMode"])({ mode: _model_auth_iterface__WEBPACK_IMPORTED_MODULE_4__["Mode"].Create }));
        this.router.navigate(['dashboard']);
    }
    onLogout() {
        this.store.dispatch(Object(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"])());
    }
    onLogin() {
        this.router.navigate(['login']);
    }
}
MenuHeaderComponent.ɵfac = function MenuHeaderComponent_Factory(t) { return new (t || MenuHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_endpoint_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
MenuHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuHeaderComponent, selectors: [["app-menu-header"]], decls: 27, vars: 18, consts: [[1, "d-flex", "justify-content-center", "m-0"], ["mat-button", "", "routerLinkActive", "router-link-active", 3, "routerLink"], ["mat-button", "", "disableRipple", "", "routerLinkActive", "router-link-active", 3, "matMenuTriggerFor", "mouseenter"], ["matMenuTrigger", "matMenuTrigger"], ["opened", "", "xPosition", "before"], ["menu", "matMenu"], ["id", "menu-list", 3, "mouseleave"], ["mat-menu-item", "", "routerLinkActive", "link-active", 3, "routerLink"], [4, "ngIf"], ["mat-button", "", "routerLinkActive", "router-link-active", 3, "click"], ["mat-button", "", 3, "click"]], template: function MenuHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Imobiliare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MenuHeaderComponent_Template_a_mouseenter_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r110.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sh\u00EBrbime ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function MenuHeaderComponent_Template_div_mouseleave_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r110.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Vler\u00EBsim i pasurive t\u00EB paluajtshme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Projektime dhe punime topografike");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Konsulenc\u00EB mjedisore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " E-Apliki me ekspertiz\u00EB tekniko-ligjore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Kontakt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MenuHeaderComponent_ng_container_25_Template, 8, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 9, ctx.userIsAuth$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  margin: 0;\n}\n\nul[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: 1rem;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: greenyellow;\n}\n\n#menu-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n\n.router-link-active[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYXlvdXQvaGVhZGVyL21lbnUtaGVhZGVyL0M6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcQWphIHJlYWwgZXN0YXRlXFxhamFub2RlL3NyY1xcYXBwXFxob21lXFxsYXlvdXRcXGhlYWRlclxcbWVudS1oZWFkZXJcXG1lbnUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xheW91dC9oZWFkZXIvbWVudS1oZWFkZXIvbWVudS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQUk7RUFDRSxrQkFBQTtBQ0VOOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBRFNBO0VBQ0Usa0JBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGF5b3V0L2hlYWRlci9tZW51LWhlYWRlci9tZW51LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbnVse1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgY29sb3I6IGdyZWVueWVsbG93O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI21lbnUtbGlzdCAgPiBhe1xyXG4gIHotaW5kZXg6IDEwNTA7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcC5tYXQtbWVudS1wYW5lbCB7XHJcbi8vICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLm1hdC1tZW51LWl0ZW06aG92ZXIge1xyXG4vLyAgIGNvbG9yOiBncmVlbnllbGxvdyAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5yb3V0ZXItbGluay1hY3RpdmV7XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59IiwiOmhvc3Qge1xuICBtYXJnaW46IDA7XG59XG5cbnVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbnVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbiNtZW51LWxpc3QgPiBhIHtcbiAgei1pbmRleDogMTA1MDtcbn1cblxuLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-header',
                templateUrl: './menu-header.component.html',
                styleUrls: ['./menu-header.component.scss']
            }]
    }], function () { return [{ type: _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/layout/sidenav/sidenav.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/layout/sidenav/sidenav.component.ts ***!
  \**********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");





const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/home"]; };
const _c2 = function () { return ["/real-estate"]; };
const _c3 = function () { return ["real-estate-appraisal"]; };
const _c4 = function () { return ["topographic-works"]; };
const _c5 = function () { return ["environmental-consultancy"]; };
const _c6 = function () { return ["e-apliki"]; };
const _c7 = function () { return ["/contact"]; };
class SidenavComponent {
    constructor() {
        this.closeSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onClose() {
        this.closeSidenav.emit();
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], outputs: { closeSidenav: "closeSidenav" }, decls: 23, vars: 17, consts: [[3, "routerLink"], ["fxFlexFill", "", "src", "../../../assets/Logo/Intertek-wester-balkans-first-logo-usage-gray-background.png", 2, "height", "inherit"], ["mat-list-item", "", 3, "routerLink", "click"], ["mat-list-item", "", "routerLinkActive", "router-link-active", 3, "matMenuTriggerFor"], ["matMenuTrigger", "matMenuTrigger"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLinkActive", "router-link-active", 3, "routerLink", "click"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_3_listener($event) { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_5_listener($event) { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Imobiliare ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sh\u00EBrbimet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_13_listener($event) { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Vler\u00EBsim i pasurive t\u00EB paluajtshme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_15_listener($event) { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Projektime dhe punime topografike");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_17_listener($event) { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Konsulenc\u00EB mjedisore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_19_listener($event) { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "E-apliki me ekspertiz\u00EB tekniko-ligjore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_21_listener($event) { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Kontakt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c7));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]], styles: ["[_nghost-%COMP%] {\n  width: 200px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYXlvdXQvc2lkZW5hdi9DOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXEFqYSByZWFsIGVzdGF0ZVxcYWphbm9kZS9zcmNcXGFwcFxcaG9tZVxcbGF5b3V0XFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xheW91dC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sYXlvdXQvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8vIHRvcDogMDtcclxuICAgIC8vIGxlZnQ6IDA7XHJcbn0iLCI6aG9zdCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return []; }, { closeSidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");




















const material = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[material],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"]], exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [material],
                exports: [material]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/model/auth.iterface.ts":
/*!****************************************!*\
  !*** ./src/app/model/auth.iterface.ts ***!
  \****************************************/
/*! exports provided: UploadStatus, Mode, cities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadStatus", function() { return UploadStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cities", function() { return cities; });
var UploadStatus;
(function (UploadStatus) {
    UploadStatus["Ready"] = "Ready";
    UploadStatus["Requested"] = "Requested";
    UploadStatus["Started"] = "Started";
    UploadStatus["Failed"] = "Failed";
    UploadStatus["Completed"] = "Completed";
})(UploadStatus || (UploadStatus = {}));
var Mode;
(function (Mode) {
    Mode["Create"] = "create";
    Mode["Update"] = "update";
})(Mode || (Mode = {}));
const cities = ['Vlore', 'Tirane', 'Durres', 'Elbasan', 'Shkoder', 'Fier', 'Kamez', 'Korce', 'Berat', 'Lushnje', 'Pogradec', 'Kavaje', 'Gjirokaster', 'Fushe-Kruje', 'Sarande', 'Lac', 'Kukes', 'Patos', 'Lezhe', 'Mamurras', 'Peshkopi', 'Kucove', 'Kruje', 'Vore', 'Burrel', 'Rreshen', 'Milot', 'Divjake', 'Gramsh', 'Bulqize', 'Vau i Dejes', 'Shengjin', 'Klos', 'Ballsh', 'Shijak', 'Ura Vajgurore', 'Rrogozhine', 'Librazhd', 'Cerrik', 'Peqin', 'Bilisht', 'Permet', 'Perrenjas', 'Delvine', 'Divjake', 'Orikum', 'Bajram Curr', 'Tepelene', 'Corovode', 'Erseke', 'Koplik', 'Himare', 'Puke', 'Kelcyre', 'Memaliaj'];


/***/ }),

/***/ "./src/app/modules/dashboard/login/auth-interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/dashboard/login/auth-interceptor.ts ***!
  \*************************************************************/
/*! exports provided: AuthInterceptor, ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../endpoint/auth.service */ "./src/app/endpoint/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_endpoint_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();
class ErrorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((response) => {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"] && response.status === 401) {
                localStorage.removeItem('token');
                this.router.navigateByUrl('/login');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
/* harmony import */ var _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../endpoint/auth.service */ "./src/app/endpoint/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function LoginComponent_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function LoginComponent_form_4_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_4_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_form_4_Template_form_submit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.onLogin(_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_4_mat_error_5_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_form_4_mat_error_9_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r41.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.invalid);
} }
class LoginComponent {
    constructor(authService, store) {
        this.authService = authService;
        this.store = store;
        this.isLoading = false;
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        // this.authService.login(form.value.email, form.value.password);
        this.store.dispatch(Object(src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginRequest"])({ payload: { email: form.value.email, password: form.value.password } }));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_endpoint_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 2, consts: [[1, "container", "animated", "fadeInDownBig"], [1, "row"], [1, "col-md-7", "m-auto"], [4, "ngIf"], [3, "submit", 4, "ngIf"], [3, "submit"], ["loginForm", "ngForm"], ["matInput", "", "name", "email", "ngModel", "", "type", "email", "placeholder", "E-Mail", "required", "", "email", ""], ["emailInput", "ngModel"], ["type", "password", "ngModel", "", "name", "password", "matInput", "", "placeholder", "Password", "required", ""], ["passwordInput", "ngModel"], ["mat-raised-button", "", "color", "accent", "type", "submit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_form_4_Template, 13, 2, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["EmailValidator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin: 13rem auto;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.8rem 0.5rem;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem 5rem;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvbG9naW4vQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxBamEgcmVhbCBlc3RhdGVcXGFqYW5vZGUvc3JjXFxhcHBcXG1vZHVsZXNcXGRhc2hib2FyZFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURERTtFQUNFLG9CQUFBO0FDR0o7O0FEQUE7RUFDRSxZQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDEzcmVtIGF1dG87XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAuOHJlbSAwLjVyZW07XHJcbn1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSA1cmVtO1xyXG4gIH1cclxufVxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTNyZW0gYXV0bztcbn1cblxubWF0LWNhcmQge1xuICBwYWRkaW5nOiAzcmVtO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuOHJlbSAwLjVyZW07XG59XG5cbm1hdC1jYXJkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcbiAgcGFkZGluZzogMC41cmVtIDVyZW07XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/actions/auth.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth.actions.ts ***!
  \***********************************************/
/*! exports provided: featureKey, loginRequest, loginSuccess, loginFailure, authTrue, authFalse, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureKey", function() { return featureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequest", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailure", function() { return loginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authTrue", function() { return authTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFalse", function() { return authFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const featureKey = 'auth';
const loginRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] loginRequest`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] loginSuccess`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] loginFailure`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const authTrue = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] authTrue`);
const authFalse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] authFalse`);
const logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] logout`);


/***/ }),

/***/ "./src/app/store/actions/property.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/property.actions.ts ***!
  \***************************************************/
/*! exports provided: featureKey, addPropertyRequest, addPropertySuccess, addPropertyFailure, updatePropertyRequest, updatePropertySuccess, updatePropertyFailure, setUpdate, setCreateMode, deletePropertyRequest, deletePropertySuccess, deletePropertyFailure, getPropertiesRequest, getPropertiesSuccess, getPropertiesFailure, getExclusiveRequest, getExclusiveSuccess, getExclusiveFailure, getPropertyRequest, getPropertySuccess, getPropertyFailure, cancelUpload, startedUpload, resetUpload, progressUpload, completedUpload, uploadFailure, globalSuccess, globalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureKey", function() { return featureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPropertyRequest", function() { return addPropertyRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPropertySuccess", function() { return addPropertySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPropertyFailure", function() { return addPropertyFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePropertyRequest", function() { return updatePropertyRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePropertySuccess", function() { return updatePropertySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePropertyFailure", function() { return updatePropertyFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdate", function() { return setUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCreateMode", function() { return setCreateMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePropertyRequest", function() { return deletePropertyRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePropertySuccess", function() { return deletePropertySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePropertyFailure", function() { return deletePropertyFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertiesRequest", function() { return getPropertiesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertiesSuccess", function() { return getPropertiesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertiesFailure", function() { return getPropertiesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExclusiveRequest", function() { return getExclusiveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExclusiveSuccess", function() { return getExclusiveSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExclusiveFailure", function() { return getExclusiveFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyRequest", function() { return getPropertyRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertySuccess", function() { return getPropertySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyFailure", function() { return getPropertyFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelUpload", function() { return cancelUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startedUpload", function() { return startedUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetUpload", function() { return resetUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressUpload", function() { return progressUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completedUpload", function() { return completedUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFailure", function() { return uploadFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalSuccess", function() { return globalSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalError", function() { return globalError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const featureKey = 'property';
const addPropertyRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] addPropertyRequest`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPropertySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] addPropertySuccess`);
const addPropertyFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] addPropertyFailure`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updatePropertyRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] updatePropertyRequest`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updatePropertySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] updatePropertySuccess`);
const updatePropertyFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] updatePropertyFailure`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setUpdate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] setUpdate`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setCreateMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] setCreateMode`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePropertyRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] deletePropertyRequest`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePropertySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] deletePropertySuccess`);
const deletePropertyFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] deletePropertyFailure`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPropertiesRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] getPropertiesRequest`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPropertiesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] getPropertiesSuccess`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPropertiesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] getPropertiesFailure`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getExclusiveRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] getExclusiveRequest`);
const getExclusiveSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] getExclusiveSuccess`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getExclusiveFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] getExclusiveFailure`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPropertyRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] getPropertyRequest`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPropertySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] getPropertySuccess`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPropertyFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] getPropertyFailure`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const cancelUpload = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] cancelUpload`);
const startedUpload = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] startedUpload`);
const resetUpload = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] resetUpload`);
const progressUpload = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] progressUpload`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const completedUpload = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] completedUpload`);
const uploadFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] uploadFailure`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const globalSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] globalSuccess`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const globalError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureKey}] globalError`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/app.state.ts":
/*!************************************!*\
  !*** ./src/app/store/app.state.ts ***!
  \************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/auth.reducer */ "./src/app/store/reducers/auth.reducer.ts");
/* harmony import */ var _reducers_property_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/property.reducer */ "./src/app/store/reducers/property.reducer.ts");


const reducers = {
    auth: _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    property: _reducers_property_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};


/***/ }),

/***/ "./src/app/store/effects/auth.effects.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/auth.effects.ts ***!
  \***********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../endpoint/auth.service */ "./src/app/endpoint/auth.service.ts");









class AuthEffects {
    constructor(actions$, router, auth) {
        this.actions$ = actions$;
        this.router = router;
        this.auth = auth;
        this.LoginRequest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["loginRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(action => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => this.auth.login(data.email, data.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => Object(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"])({ token: res.token, email: res.email })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["loginFailure"])({ error }))))));
        });
        this.LoginSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((user) => {
                localStorage.setItem('token', user.token);
                this.router.navigate(['dashboard']);
            }));
        }, { dispatch: false });
        this.Logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
                localStorage.removeItem('token');
                this.router.navigate(['home']);
            }));
        }, { dispatch: false });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_endpoint_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _endpoint_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/effects/property.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/store/effects/property.effects.ts ***!
  \***************************************************/
/*! exports provided: PropertyEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyEffects", function() { return PropertyEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _actions_property_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/property.actions */ "./src/app/store/actions/property.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _reducers_property_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/property.reducer */ "./src/app/store/reducers/property.reducer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _endpoint_backend_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../endpoint/backend.service */ "./src/app/endpoint/backend.service.ts");













class PropertyEffects {
    constructor(actions$, router, store, toastr, propertyService) {
        this.actions$ = actions$;
        this.router = router;
        this.store = store;
        this.toastr = toastr;
        this.propertyService = propertyService;
        this.AddPropertyRequest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["addPropertyRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((action) => this.propertyService.addProperty(action.payload, action.imagePath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["cancelUpload"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(event => this.getActionHttpEvent(event, _actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["addPropertySuccess"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["addPropertyFailure"])({ error }), Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["globalError"])({ error: 'Nje gabim ndodhi' }))))));
        });
        this.OnAddPropertySuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["addPropertySuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.router.navigate(['real-estate'])));
        }, { dispatch: false });
        this.GetPropertiesRequest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getPropertiesRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((action) => this.propertyService.getProperties(action.postsPerPage, action.currentPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
                return Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getPropertiesSuccess"])({ payload: data });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getPropertiesFailure"])({ error }))))));
        });
        this.showToastrError$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["globalError"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(action => {
            const errorMessage = action.error ? action.error : 'An error ocurred';
            this.toastr.error(errorMessage, 'FAILED');
        })), { dispatch: false });
        this.showToastrSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["globalSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(action => {
            const successMessage = action.message ? action.message : 'Completed successfully';
            this.toastr.success(successMessage, 'SUCCESS');
        })), { dispatch: false });
        this.GetPropertyRequest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getPropertyRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(action => action.id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((id) => this.propertyService.getProperty(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getPropertySuccess"])({ payload: data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getPropertyFailure"])({ error }))))));
        });
        this.DeletePropertyRequest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["deletePropertyRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(action => action.id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.select(_reducers_property_reducer__WEBPACK_IMPORTED_MODULE_6__["getPostsPerPage"]), this.store.select(_reducers_property_reducer__WEBPACK_IMPORTED_MODULE_6__["getPage"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(([id, postsPerPage, currentPage]) => this.propertyService.deleteProperty(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(data => [Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["deletePropertySuccess"])(),
                Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["globalSuccess"])({ message: 'Prona u fshi me sukses!' }),
                Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getPropertiesRequest"])({ postsPerPage, currentPage })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["deletePropertyFailure"])({ error }), Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["globalError"])({ error: 'Një gabim ndodhi gjatë fshirjes së pronës!' }))))));
        });
        this.GetExclusiveProperties$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getExclusiveRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.propertyService.getExclusive().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getExclusiveSuccess"])({ exclusive: data.exclusive })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getExclusiveFailure"])({ error }))))));
        });
        this.UpdatePropertyRequest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["updatePropertyRequest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.select(_reducers_property_reducer__WEBPACK_IMPORTED_MODULE_6__["getPostsPerPage"]), this.store.select(_reducers_property_reducer__WEBPACK_IMPORTED_MODULE_6__["getPage"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(([action, postsPerPage, currentPage]) => this.propertyService.updateProperty(action.id, action.payload, action.imagePath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(data => [Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["updatePropertySuccess"])(),
                Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["globalSuccess"])({ message: 'Prona u ndryshua me sukses!' }),
                Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["getPropertiesRequest"])({ postsPerPage, currentPage })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["updatePropertyFailure"])({ error }), Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["globalError"])({ error: 'Një gabim ndodhi gjatë ndryshimit së pronës!' }))))));
        });
    }
    getActionHttpEvent(event, refresh) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Sent:
                return [Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["startedUpload"])()];
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress:
                return [Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["progressUpload"])({ progress: Math.round((100 * event.loaded) / event.total) })];
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].ResponseHeader:
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Response:
                if (event.status === 201) {
                    return [Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["completedUpload"])(), Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["globalSuccess"])({ message: 'Prona u shtua me sukses!' }), refresh()];
                }
                else {
                    return [Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["uploadFailure"])({ errorMessage: event.statusText })];
                }
            default:
                return [Object(_actions_property_actions__WEBPACK_IMPORTED_MODULE_2__["uploadFailure"])({ errorMessage: 'An unknown error occurred' })];
        }
    }
}
PropertyEffects.ɵfac = function PropertyEffects_Factory(t) { return new (t || PropertyEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_endpoint_backend_service__WEBPACK_IMPORTED_MODULE_10__["BackendService"])); };
PropertyEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PropertyEffects, factory: PropertyEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: _endpoint_backend_service__WEBPACK_IMPORTED_MODULE_10__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/reducers/auth.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/auth.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer, getIsAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuth", function() { return getIsAuth; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");


const initialState = {
    isAuthenticated: false,
    user: null,
    error: null
};
const authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"], (state, { token, email }) => ({
    isAuthenticated: true,
    user: {
        token,
        email
    },
    error: null
})), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginFailure"], (state, { error }) => (Object.assign(Object.assign({}, state), { error: 'Incorrect email or password.' }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["authTrue"], (state) => (Object.assign(Object.assign({}, state), { isAuthenticated: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["authFalse"], (state) => (Object.assign(Object.assign({}, state), { isAuthenticated: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["logout"], () => initialState));
function reducer(state, action) {
    return authReducer(state, action);
}
const authState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["featureKey"]);
const getIsAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authState, state => state.isAuthenticated);


/***/ }),

/***/ "./src/app/store/reducers/property.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/property.reducer.ts ***!
  \****************************************************/
/*! exports provided: initialState, reducer, getProperties, getProperty, getPostsPerPage, getPage, isLoadingProperty, getTotalProperties, getMode, getExclusive, getStarted, getRequested, getReady, getProgress, getFailed, getCompleted, getInProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperties", function() { return getProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsPerPage", function() { return getPostsPerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPage", function() { return getPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadingProperty", function() { return isLoadingProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProperties", function() { return getTotalProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMode", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExclusive", function() { return getExclusive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStarted", function() { return getStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequested", function() { return getRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReady", function() { return getReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgress", function() { return getProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFailed", function() { return getFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompleted", function() { return getCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInProgress", function() { return getInProgress; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions_property_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/property.actions */ "./src/app/store/actions/property.actions.ts");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
/* harmony import */ var _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/auth.iterface */ "./src/app/model/auth.iterface.ts");




const initialState = {
    properties: [],
    exclusive: [],
    property: null,
    totalProperties: 0,
    postsPerPage: 8,
    page: 1,
    mode: _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["Mode"].Create,
    uploadStatus: _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Ready,
    progress: null,
    error: null,
    loading: false
};
const propertyReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["addPropertyRequest"], (state, { payload }) => (Object.assign(Object.assign({}, state), { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["addPropertySuccess"], (state) => (Object.assign(Object.assign({}, state), { loading: false, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["getPropertySuccess"], (state, { payload }) => (Object.assign(Object.assign({}, state), { property: payload, loading: false, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["getPropertiesSuccess"], (state, { payload }) => (Object.assign(Object.assign({}, state), { properties: payload.properties, totalProperties: payload.postsCount }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["setUpdate"], (state, { payload, mode }) => (Object.assign(Object.assign({}, state), { property: payload, mode }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["getExclusiveSuccess"], (state, { exclusive }) => (Object.assign(Object.assign({}, state), { exclusive: exclusive.slice().sort((a, b) => a.position - b.position) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["setCreateMode"], (state, { mode }) => (Object.assign(Object.assign({}, state), { mode, property: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["cancelUpload"], (state) => (Object.assign(Object.assign({}, state), { uploadStatus: _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Ready, progress: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["startedUpload"], (state) => (Object.assign(Object.assign({}, state), { uploadStatus: _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Started, progress: 0 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["progressUpload"], (state, { progress }) => (Object.assign(Object.assign({}, state), { progress }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["completedUpload"], (state) => (Object.assign(Object.assign({}, state), { uploadStatus: _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Ready, progress: 0 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["uploadFailure"], (state, { errorMessage }) => (Object.assign(Object.assign({}, state), { uploadStatus: _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Failed, progress: null, error: errorMessage }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"], () => initialState));
function reducer(state, action) {
    return propertyReducer(state, action);
}
const propertyState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_actions_property_actions__WEBPACK_IMPORTED_MODULE_1__["featureKey"]);
const getProperties = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, state => state.properties);
const getProperty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, state => state.property);
const getPostsPerPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, state => state.postsPerPage);
const getPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, state => state.page);
const isLoadingProperty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, state => state.loading);
const getTotalProperties = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, state => state.totalProperties);
const getMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, state => state.mode);
const getExclusive = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, state => state.exclusive);
const getStarted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, (state) => state.uploadStatus === _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Started);
const getRequested = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, (state) => state.uploadStatus === _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Requested);
const getReady = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, (state) => state.uploadStatus === _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Ready);
const getProgress = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, (state) => state.progress);
const getFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, (state) => state.uploadStatus === _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Failed);
const getCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, (state) => state.uploadStatus === _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Completed);
const getInProgress = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(propertyState, (state) => state.progress >= 0 && state.uploadStatus === _model_auth_iterface__WEBPACK_IMPORTED_MODULE_3__["UploadStatus"].Started);


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
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\Aja real estate\ajanode\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map