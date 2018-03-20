webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-denied/access-denied.module": [
		"../../../../../src/app/access-denied/access-denied.module.ts",
		"access-denied.module"
	],
	"./attachments/add.module": [
		"../../../../../src/app/layout/attachments/add.module.ts",
		"add.module.0"
	],
	"./attachments/attachments.module": [
		"../../../../../src/app/layout/attachments/attachments.module.ts"
	],
	"./companies/add.module": [
		"../../../../../src/app/layout/companies/add.module.ts",
		"common",
		"add.module.1"
	],
	"./companies/companies.module": [
		"../../../../../src/app/layout/companies/companies.module.ts"
	],
	"./companies/edit.module": [
		"../../../../../src/app/layout/companies/edit.module.ts",
		"common",
		"edit.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/layout/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./layout/layout.module": [
		"../../../../../src/app/layout/layout.module.ts",
		"common",
		"layout.module"
	],
	"./login/login.module": [
		"../../../../../src/app/login/login.module.ts",
		"login.module"
	],
	"./mail/composemail.module": [
		"../../../../../src/app/layout/mail/composemail.module.ts",
		"composemail.module"
	],
	"./mail/mail.module": [
		"../../../../../src/app/layout/mail/mail.module.ts"
	],
	"./not-found/not-found.module": [
		"../../../../../src/app/not-found/not-found.module.ts",
		"not-found.module"
	],
	"./server-error/server-error.module": [
		"../../../../../src/app/server-error/server-error.module.ts",
		"server-error.module"
	],
	"./signup/signup.module": [
		"../../../../../src/app/signup/signup.module.ts",
		"signup.module"
	],
	"./todo/add.module": [
		"../../../../../src/app/layout/todo/add.module.ts",
		"add.module"
	],
	"./todo/todo.module": [
		"../../../../../src/app/layout/todo/todo.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* AuthGuard */]] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_companies_companies_module__ = __webpack_require__("../../../../../src/app/layout/companies/companies.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layout_attachments_attachments_module__ = __webpack_require__("../../../../../src/app/layout/attachments/attachments.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layout_mail_mail_module__ = __webpack_require__("../../../../../src/app/layout/mail/mail.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layout_todo_todo_module__ = __webpack_require__("../../../../../src/app/layout/todo/todo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__layout_alert_service__ = __webpack_require__("../../../../../src/app/layout/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layout_constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// AoT requires an exported function for factories
function createTranslateLoader(http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_12__layout_attachments_attachments_module__["AttachmentsModule"], __WEBPACK_IMPORTED_MODULE_11__layout_companies_companies_module__["CompaniesModule"], __WEBPACK_IMPORTED_MODULE_13__layout_mail_mail_module__["MailModule"], __WEBPACK_IMPORTED_MODULE_14__layout_todo_todo_module__["TodoModule"],
                __WEBPACK_IMPORTED_MODULE_18_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_18_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__shared__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__layout_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_16__layout_constant_services__["a" /* ConstantService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    AlertService.prototype.success = function (message) {
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message) {
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/attachments/attachments-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attachments_component__ = __webpack_require__("../../../../../src/app/layout/attachments/attachments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__attachments_component__["a" /* AttachmentsComponent */]
    }
];
var AttachmentsRoutingModule = (function () {
    function AttachmentsRoutingModule() {
    }
    AttachmentsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AttachmentsRoutingModule);
    return AttachmentsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/attachments/attachments.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Attachments'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\" style=\"padding: 0.25rem 1.25rem;\">\r\n                    Attachments Management\r\n                    <span style=\"float:right;\">\r\n                    <a [routerLink]=\"['/attachments/add']\" class=\"btn btn-sm btn-primary\">\r\n                        <i class=\"fa fa fa-envelope\"></i> Add Attachment\r\n                    </a> </span>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                   <div class=\"img-wrap\" *ngFor=\"let item of compData;let i = index\">\r\n                        <span class=\"close\" (click)=\"delete(item.id)\">&times;</span>\r\n                        <img src=\"{{item.filepath}}\" data-id=\"{{item.id}}\">\r\n                    </div>\r\n                    <br>\r\n\r\n                </div>\r\n            </div>\r\n         </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/attachments/attachments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-wrap {\n  position: relative;\n  display: inline-block;\n  border: 1px black solid;\n  font-size: 0;\n  margin: 5px 2px 0px 4px;\n  width: 24%; }\n\n.img-wrap .close {\n  position: absolute;\n  top: 0px;\n  right: 2px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 4px 3px 5px;\n  color: #000;\n  font-weight: bold;\n  cursor: pointer;\n  opacity: .2;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%; }\n\n.img-wrap:hover .close {\n  opacity: 1; }\n\nimg {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/attachments/attachments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attachments_service__ = __webpack_require__("../../../../../src/app/layout/attachments/attachments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttachmentsComponent = (function () {
    function AttachmentsComponent(attachmentsService) {
        this.attachmentsService = attachmentsService;
    }
    AttachmentsComponent.prototype.ngOnInit = function () {
        this.getAttachments();
    };
    AttachmentsComponent.prototype.getAttachments = function () {
        var _this = this;
        this.attachmentsService.getAttachments().subscribe(function (res) {
            _this.compData = res.json();
        });
    };
    //for delete image
    AttachmentsComponent.prototype.delete = function (id) {
        var _this = this;
        this.attachmentsService.delete(id).subscribe(function () {
            _this.getAttachments();
        });
    };
    AttachmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-attachments',
            template: __webpack_require__("../../../../../src/app/layout/attachments/attachments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/attachments/attachments.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__attachments_service__["a" /* AttachmentsService */]])
    ], AttachmentsComponent);
    return AttachmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/attachments/attachments.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsModule", function() { return AttachmentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attachments_routing_module__ = __webpack_require__("../../../../../src/app/layout/attachments/attachments-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attachments_component__ = __webpack_require__("../../../../../src/app/layout/attachments/attachments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__attachments_service__ = __webpack_require__("../../../../../src/app/layout/attachments/attachments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AttachmentsModule = (function () {
    function AttachmentsModule() {
    }
    AttachmentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__attachments_routing_module__["a" /* AttachmentsRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__attachments_component__["a" /* AttachmentsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__attachments_service__["a" /* AttachmentsService */]]
        })
    ], AttachmentsModule);
    return AttachmentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/attachments/attachments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttachmentsService = (function () {
    function AttachmentsService(_http, ConstantService) {
        this._http = _http;
        this.ConstantService = ConstantService;
    }
    AttachmentsService.prototype.addAttachment = function (info) {
        var url = this.ConstantService.API_ENDPOINT + 'addAttachments.php';
        return this._http.post(url, info)
            .map(function (res) { return res.json(); });
    };
    AttachmentsService.prototype.getAttachments = function () {
        var url = this.ConstantService.API_ENDPOINT + 'getAttachments.php';
        return this._http.get(url);
    };
    AttachmentsService.prototype.delete = function (id) {
        var _this = this;
        var url = this.ConstantService.API_ENDPOINT + 'DeleteAttachments.php/';
        return this._http.post(url, { 'id': id })
            .map(function () { return _this.getAttachments(); });
    };
    AttachmentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__constant_services__["a" /* ConstantService */]])
    ], AttachmentsService);
    return AttachmentsService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/companies/companies-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__companies_component__ = __webpack_require__("../../../../../src/app/layout/companies/companies.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__companies_component__["a" /* CompaniesComponent */]
    }
];
var CompaniesRoutingModule = (function () {
    function CompaniesRoutingModule() {
    }
    CompaniesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], CompaniesRoutingModule);
    return CompaniesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/companies/companies.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n        <div *ngIf=\"cons.SUCCESS_MSG\" class=\"alert alert-success\">\r\n                {{cons.SUCCESS_MSG}}\r\n            </div>\r\n    <app-page-header [heading]=\"'Companies'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"row\" >\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                \r\n                <div class=\"card-header\" style=\"padding: 0.25rem 1.25rem;\" *ngIf=compData>\r\n                    Company Management\r\n                    <span style=\"float:right;\">\r\n                            <a [routerLink]=\"['/companies/addcompany']\" class=\"btn btn-sm btn-primary\">\r\n                                <i class=\"fa fa fa-plus\"></i> Add Company\r\n                            </a> </span>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                        <div id=\"example_filter\" class=\"dataTables_filter\">\r\n                                <label>Search: <input type=\"text\" name=\"search\" placeholder=\"Enter keyword\" aria-controls=\"example\" [(ngModel)]=\"filter\">\r\n                                </label>\r\n                              </div>\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th (click)=\"sort('name')\">Name\r\n                                    <span class=\"fa fa-sort\" *ngIf=\"key =='name'\" [ngClass]=\"{'fas fa-sort-up':reverse,'fas fa-sort-down':!reverse}\"></span>\r\n                            </th>\r\n                            <th>Email</th>\r\n                            <th>Phone</th>\r\n                            <th>Address</th>\r\n                            <th>Date</th>\r\n                            <th>Status</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>      \r\n                       <tr *ngFor=\"let item of compData | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\r\n                            <th scope=\"row\">{{ i+1 }}</th>\r\n                            <td>{{item.name}}</td>\r\n                            <td>{{item.email}}</td>\r\n                            <td>{{item.phone}}</td>\r\n                            <td>{{item.address}}</td>\r\n                            <td>{{item.addedon | date: 'dd-MM-yyyy'}}</td>\r\n                            <td>\r\n                             <span class=\"badge badge-{{item.status ==1 ? 'success': 'danger' }}\">{{item.status ==1 ? 'Active': 'Inactive' }}</span>\r\n                           </td>\r\n                           <td>\r\n                            <a class=\"badge badge-primary\" routerLink=\"/company/edit/{{item.id}}\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>\r\n                            <a class=\"badge badge-danger\" (click)=\"deleteEmployee(item.id)\"><i class=\"fa fa-trash-o\" style=\"color: #fff;\"></i></a>\r\n                          </td>\r\n                        </tr>                        \r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"page\"><pagination-controls (pageChange)=\"p = $event\"></pagination-controls></div>\r\n                </div>\r\n            </div>\r\n         </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/companies/companies.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n  float: right !important; }\n\n.dataTables_wrapper .dataTables_filter {\n  float: right;\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/companies/companies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__companies_service__ = __webpack_require__("../../../../../src/app/layout/companies/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompaniesComponent = (function () {
    //  @ViewChild(DataTable) carsTable: DataTable;
    function CompaniesComponent(compService, vcr, cons) {
        this.compService = compService;
        this.vcr = vcr;
        this.cons = cons;
        //sorting
        this.key = 'name';
        this.reverse = false;
        this.p = 1;
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    CompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this.compService.getCompanies().subscribe(function (res) {
            _this.compData = res.json();
        });
    };
    CompaniesComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    CompaniesComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        if (confirm("Are you sure to delete.")) {
            this.compService
                .deleteEmployee(id)
                .subscribe(function () {
                _this.cons.setAlert('Company Deleted successfully', 1);
                // this.getCompanies();
            });
        }
    };
    CompaniesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-companies',
            template: __webpack_require__("../../../../../src/app/layout/companies/companies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/companies/companies.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__companies_service__["a" /* CompaniesService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_3__constant_services__["a" /* ConstantService */]])
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/companies/companies.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesModule", function() { return CompaniesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__companies_routing_module__ = __webpack_require__("../../../../../src/app/layout/companies/companies-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__companies_component__ = __webpack_require__("../../../../../src/app/layout/companies/companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__companies_service__ = __webpack_require__("../../../../../src/app/layout/companies/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//for services


 //importing the module
 //importing the module
 // <-- import the module
var CompaniesModule = (function () {
    function CompaniesModule() {
    }
    CompaniesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__companies_routing_module__["a" /* CompaniesRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__["Ng2OrderModule"], __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__companies_component__["a" /* CompaniesComponent */]],
            ////for services
            providers: [__WEBPACK_IMPORTED_MODULE_5__companies_service__["a" /* CompaniesService */]]
        })
    ], CompaniesModule);
    return CompaniesModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/companies/companies.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { DataTableParams } from '../../data-table';

//function for datatable
var CompaniesService = (function () {
    function CompaniesService(_http, ConstantService) {
        this._http = _http;
        this.ConstantService = ConstantService;
    }
    CompaniesService.prototype.getCompanies = function () {
        var url = this.ConstantService.API_ENDPOINT + 'getCompanies.php';
        return this._http.get(url);
    };
    CompaniesService.prototype.addCompany = function (info) {
        var url = this.ConstantService.API_ENDPOINT + 'addCompanies.php';
        return this._http.post(url, info)
            .map(function (res) { return res.json(); });
    };
    CompaniesService.prototype.getCompany = function (id) {
        var url = this.ConstantService.API_ENDPOINT + 'getOneCompanies.php';
        return this._http.post(url, { 'id': id })
            .map(function (res) { return res.json(); });
    };
    CompaniesService.prototype.updateCompany = function (info) {
        var url = this.ConstantService.API_ENDPOINT + 'updateCompany.php';
        return this._http.post(url, info)
            .map(function (res) { return res.json(); });
    };
    CompaniesService.prototype.deleteEmployee = function (id) {
        var _this = this;
        var url = this.ConstantService.API_ENDPOINT + 'DeleteCompanies.php';
        return this._http.post(url, { 'id': id })
            .map(function () { return _this.getCompanies(); });
    };
    CompaniesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__constant_services__["a" /* ConstantService */]])
    ], CompaniesService);
    return CompaniesService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/constant.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstantService = (function () {
    function ConstantService() {
        this.API_ENDPOINT = 'http://localhost:8000/';
        // this.API_ENDPOINT = 'http://localhost/leadmanagement/';   
    }
    ConstantService.prototype.setAlert = function (msg, type) {
        var _this = this;
        this.SUCCESS_MSG = '';
        this.ERROR_MSG = '';
        if (type == 1) {
            this.SUCCESS_MSG = msg;
        }
        if (type == 0) {
            this.ERROR_MSG = msg;
        }
        if (type != 2) {
            setTimeout(function () { return _this.setAlert('', 2); }, 3000);
        }
    };
    ConstantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConstantService);
    return ConstantService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/mail/mail-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_component__ = __webpack_require__("../../../../../src/app/layout/mail/mail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__mail_component__["a" /* MailComponent */]
    }
];
var MailRoutingModule = (function () {
    function MailRoutingModule() {
    }
    MailRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MailRoutingModule);
    return MailRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/mail/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Mail Management List'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div *ngIf=\"cons.SUCCESS_MSG\" class=\"alert alert-success\">\r\n        {{cons.SUCCESS_MSG}}\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\" style=\"padding: 0.25rem 1.25rem;\">\r\n                    Mail Management\r\n                    <span style=\"float:right;\">\r\n                    <a [routerLink]=\"['/mail/composemail']\" class=\"btn btn-sm btn-primary\">\r\n                        <i class=\"fa fa fa-envelope\"></i> Compose Mail\r\n                    </a> </span>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                   <div id=\"example_filter\" class=\"dataTables_filter\">\r\n                     <label>Search: <input type=\"text\" name=\"search\" placeholder=\"Enter keyword\" aria-controls=\"example\" [(ngModel)]=\"filter\">\r\n                     </label>\r\n                   </div>\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                       <tr>\r\n                             <th>#</th>\r\n                            <th>Name </th>\r\n                            <th>Email</th>\r\n                            <th>Phone</th>\r\n                            <th>Size of project</th>\r\n                            <th>Company</th>\r\n                            <th>Date</th>\r\n                            <th>Status</th>\r\n                        </tr> \r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let item of compData | filter:filter | paginate: { itemsPerPage: 20, currentPage: p }; let i = index\">\r\n                            <td scope=\"row\">{{i+1}}</td>\r\n                            <td>{{item.name}}</td>\r\n                            <td>{{item.email}}</td>\r\n                            <td>{{item.phone}}</td>\r\n                            <td>{{item.size}}</td>\r\n                            <td>{{item.companyName}}</td>\r\n                            <td> {{item.doe | date:'dd-MM-yyyy'}}</td>\r\n                            <td>{{item.status}}</td>\r\n                        </tr>\r\n                        </tbody>\r\n                        \r\n                    </table>\r\n                    <div class=\"page\"><pagination-controls (pageChange)=\"p = $event\"></pagination-controls></div>\r\n                </div>\r\n            </div>\r\n         </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/mail/mail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead > tr > th {\n  cursor: pointer; }\n\n.page {\n  float: right !important; }\n\n.dataTables_wrapper .dataTables_filter {\n  float: right;\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/mail/mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_service__ = __webpack_require__("../../../../../src/app/layout/mail/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MailComponent = (function () {
    function MailComponent(router, cons, mailService, datePipe) {
        this.router = router;
        this.cons = cons;
        this.mailService = mailService;
        this.datePipe = datePipe;
        //sorting
        this.key = 'name';
        this.reverse = false;
        this.p = 1;
        this.getLead();
    }
    MailComponent.prototype.ngOnInit = function () { };
    MailComponent.prototype.getLead = function () {
        var _this = this;
        this.mailService.getLead().subscribe(function (res) {
            _this.compData = res.json();
        });
    };
    MailComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    MailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mail',
            template: __webpack_require__("../../../../../src/app/layout/mail/mail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/mail/mail.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__constant_services__["a" /* ConstantService */],
            __WEBPACK_IMPORTED_MODULE_4__mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]])
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/mail/mail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_routing_module__ = __webpack_require__("../../../../../src/app/layout/mail/mail-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_component__ = __webpack_require__("../../../../../src/app/layout/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mail_service__ = __webpack_require__("../../../../../src/app/layout/mail/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








 //importing the module
 //importing the module
 // <-- import the module
var MailModule = (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__mail_routing_module__["a" /* MailRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__mail_component__["a" /* MailComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__mail_service__["a" /* MailService */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]]
        })
    ], MailModule);
    return MailModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/mail/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attachments_attachments_service__ = __webpack_require__("../../../../../src/app/layout/attachments/attachments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailService = (function () {
    function MailService(_http, ConstantService, AttachmentsService) {
        this._http = _http;
        this.ConstantService = ConstantService;
        this.AttachmentsService = AttachmentsService;
    }
    MailService.prototype.addMail = function (info) {
        var url = this.ConstantService.API_ENDPOINT + 'composeMail.php';
        return this._http.post(url, info)
            .map(function (res) { return res.json(); });
    };
    MailService.prototype.getLead = function () {
        var url = this.ConstantService.API_ENDPOINT + 'getLeads.php';
        return this._http.get(url);
    };
    MailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__constant_services__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_4__attachments_attachments_service__["a" /* AttachmentsService */]])
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "../../../../../src/app/layout/todo/todo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_component__ = __webpack_require__("../../../../../src/app/layout/todo/todo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__todo_component__["a" /* TodoComponent */]
    }
];
var TodoRoutingModule = (function () {
    function TodoRoutingModule() {
    }
    TodoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TodoRoutingModule);
    return TodoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Todo Management'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div *ngIf=\"cons.SUCCESS_MSG\" class=\"alert alert-success\">\r\n        {{cons.SUCCESS_MSG}}\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\" style=\"padding: 0.25rem 1.25rem;\">\r\n                   Todo Management\r\n                    <span style=\"float:right;\">\r\n                    <a [routerLink]=\"['/todo/add']\" class=\"btn btn-sm btn-primary\">\r\n                        <i class=\"fa fa fa-envelope\"></i> Add New\r\n                    </a> </span>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                   <div id=\"example_filter\" class=\"dataTables_filter\">\r\n                     <label>Search: <input type=\"text\" name=\"search\" placeholder=\"Enter keyword\" aria-controls=\"example\" [(ngModel)]=\"filter\">\r\n                     </label>\r\n                   </div>\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                       <tr>\r\n                             <th>#</th>\r\n                            <th>Title </th>\r\n                            <th>Added On</th>\r\n                            <th>Status</th>\r\n                            <th>Action</th>\r\n\r\n                        </tr> \r\n                        </thead>\r\n                        <tbody>\r\n\r\n                        <tr *ngFor=\"let item of compData | filter:filter | paginate: { itemsPerPage: 20, currentPage: p }; let i = index\">\r\n                            <td scope=\"row\">{{i+1}}</td>\r\n                            <td>{{item.title}}</td>\r\n                             <td> {{item.created_date | date:'dd-MM-yyyy'}}</td>\r\n                            <td>{{item.status | titlecase }}</td>\r\n                            <td><a>Edit</a> <a>Delete</a> <a>View</a></td>\r\n                        </tr>\r\n                        </tbody>\r\n                        \r\n                    </table>\r\n                    <div class=\"page\"><pagination-controls (pageChange)=\"p = $event\"></pagination-controls></div>\r\n                </div>\r\n            </div>\r\n         </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/todo/todo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead > tr > th {\n  cursor: pointer; }\n\n.page {\n  float: right !important; }\n\n.dataTables_wrapper .dataTables_filter {\n  float: right;\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_service__ = __webpack_require__("../../../../../src/app/layout/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoComponent = (function () {
    function TodoComponent(router, cons, todoService, datePipe) {
        this.router = router;
        this.cons = cons;
        this.todoService = todoService;
        this.datePipe = datePipe;
        //sorting
        this.key = 'name';
        this.reverse = false;
        this.p = 1;
        this.getLead();
    }
    TodoComponent.prototype.ngOnInit = function () { };
    TodoComponent.prototype.getLead = function () {
        var _this = this;
        this.todoService.getLead().subscribe(function (res) {
            _this.Data = res.json();
            if (_this.Data.success == true) {
                _this.compData = _this.Data.data;
            }
        });
    };
    TodoComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__("../../../../../src/app/layout/todo/todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/todo/todo.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__constant_services__["a" /* ConstantService */],
            __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/todo/todo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_routing_module__ = __webpack_require__("../../../../../src/app/layout/todo/todo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_component__ = __webpack_require__("../../../../../src/app/layout/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_service__ = __webpack_require__("../../../../../src/app/layout/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








 //importing the module
 //importing the module
 // <-- import the module
var TodoModule = (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__todo_routing_module__["a" /* TodoRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__todo_component__["a" /* TodoComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]]
        })
    ], TodoModule);
    return TodoModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/todo/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = (function () {
    function TodoService(_http, ConstantService) {
        this._http = _http;
        this.ConstantService = ConstantService;
    }
    TodoService.prototype.addTodo = function (info) {
        //console.log(info)
        var url = this.ConstantService.API_ENDPOINT + 'createTodo';
        return this._http.post(url, info)
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.getLead = function () {
        var url = this.ConstantService.API_ENDPOINT + 'listTodo';
        return this._http.get(url);
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__constant_services__["a" /* ConstantService */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* unused harmony export slideToRight */
/* unused harmony export slideToLeft */
/* unused harmony export slideToBottom */
/* unused harmony export slideToTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

function routerTransition() {
    return slideToTop();
}
function slideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "../../../../../src/app/shared/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('isLoggedin') && localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/guard/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/shared/guard/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules__ = __webpack_require__("../../../../../src/app/shared/modules/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__modules__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__modules__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_shared_pipes_module__ = __webpack_require__("../../../../../src/app/shared/pipes/shared-pipes.module.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guard__ = __webpack_require__("../../../../../src/app/shared/guard/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__guard__["a"]; });






/***/ }),

/***/ "../../../../../src/app/shared/modules/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_header_page_header_module__ = __webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__page_header_page_header_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stat_stat_module__ = __webpack_require__("../../../../../src/app/shared/modules/stat/stat.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__stat_stat_module__["a"]; });




/***/ }),

/***/ "../../../../../src/app/shared/modules/page-header/page-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <h2 class=\"page-header\">\r\n            {{heading}}\r\n        </h2>\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/modules/page-header/page-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "heading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "icon", void 0);
    PageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/page-header/page-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_header_component__ = __webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageHeaderModule = (function () {
    function PageHeaderModule() {
    }
    PageHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]]
        })
    ], PageHeaderModule);
    return PageHeaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/stat/stat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-{{bgClass}}\">\r\n    <div class=\"card-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col col-xs-3\">\r\n                <i class=\"fa {{icon}} fa-5x\"></i>\r\n            </div>\r\n            <div class=\"col col-xs-9 text-right\">\r\n                <div class=\"d-block huge\">{{count}}</div>\r\n                <div class=\"d-block\">{{label}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <span class=\"float-left\">View Details {{data}}</span>\r\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\r\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/modules/stat/stat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/stat/stat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatComponent = (function () {
    function StatComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "bgClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StatComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StatComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], StatComponent.prototype, "event", void 0);
    StatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stat',
            template: __webpack_require__("../../../../../src/app/shared/modules/stat/stat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/stat/stat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StatComponent);
    return StatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/stat/stat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_component__ = __webpack_require__("../../../../../src/app/shared/modules/stat/stat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = (function () {
    function StatModule() {
    }
    StatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]]
        })
    ], StatModule);
    return StatModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/shared-pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SharedPipesModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedPipesModule = (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: []
        })
    ], SharedPipesModule);
    return SharedPipesModule;
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map