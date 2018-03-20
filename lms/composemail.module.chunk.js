webpackJsonp(["composemail.module"],{

/***/ "../../../../../src/app/layout/mail/composemail-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposemailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composemail_component__ = __webpack_require__("../../../../../src/app/layout/mail/composemail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__composemail_component__["a" /* ComposemailComponent */]
    }
];
var ComposemailRoutingModule = (function () {
    function ComposemailRoutingModule() {
    }
    ComposemailRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ComposemailRoutingModule);
    return ComposemailRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/mail/composemail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Mail Management'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <style>.fr-wrapper a {\r\n        display: none !important;\r\n        position: absolute;\r\n        top: -99999999px;\r\n      }</style>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\" style=\"padding: 0.25rem 1.25rem;\">\r\n                    New Compose\r\n                    <span style=\"float:right;\">\r\n                    <a [routerLink]=\"['/mail']\" class=\"btn btn-sm btn-primary\">\r\n                        <i class=\"fa fa fa-eye\"></i> Mail List\r\n                    </a> </span>\r\n                </div>\r\n\r\n                <div class=\"card-body table-responsive\">\r\n                    <div class=\"col-sm-10\">\r\n                        <form #tesst=\"ngForm\" (ngSubmit)=\"addMail()\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"formGroupExampleInput\">Name</label>\r\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.name\" name=\"name\" placeholder=\"Enter name\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label for=\"formGroupExampleInput2\">Email Id</label>\r\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.email\" name=\"email\" placeholder=\"Enter email id\">\r\n                            </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"formGroupExampleInput2\">Phone</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.phone\" name=\"phone\" placeholder=\"Enter phone\">\r\n               </div>\r\n               <div class=\"form-group\">\r\n                <label for=\"formGroupExampleInput2\">Project Size</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.size\" name=\"projectsize\" placeholder=\"Enter project size\">\r\n               </div>\r\n\r\n               <div class=\"form-group\">\r\n                <label for=\"formGroupExampleInput2\">Mail Subject</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.subject\" name=\"subject\" placeholder=\"Enter subject\">\r\n               </div>\r\n\r\n               <div class=\"form-group\">\r\n                <label for=\"formGroupExampleInput2\">Body</label>\r\n                <div [froalaEditor] name=\"body\" [(ngModel)]=\"model.body\">Hello, Froala!</div>\r\n              \r\n                <!-- <textarea class=\"form-control\" name=\"body\" [(ngModel)]=\"model.body\"></textarea> -->\r\n               </div>\r\n\r\n           <div class=\"form-group\">\r\n            <label for=\"formGroupExampleInput2\">Company</label>\r\n            <select class=\"form-control\" name=\"company\" [(ngModel)]=\"model.company\">\r\n                <option value=\"0\">Select option</option>\r\n                <option *ngFor=\"let company of compData\" value=\"{{company.id}}\" >{{company.name}}</option>\r\n            </select>\r\n           </div>\r\n        \r\n           <div class=\"form-group form-row\">\r\n            <div class=\"col\" *ngFor=\"let item of attachData;let i = index\">\r\n                <label for=\"formGroupExampleInput2\">\r\n                    <input type=\"checkbox\" name=\"attachment[]\" value=\"{{item.id}}\" (change)=\"onClicked(item.id, $event)\"></label>\r\n                <img src=\"{{item.filepath}}\">\r\n           </div>\r\n   \r\n          </div> \r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Send mail</button>\r\n        <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\r\n                          </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n         </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/mail/composemail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 80%; }\n\ncheckbox {\n  width: 19px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/mail/composemail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposemailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attachments_attachments_service__ = __webpack_require__("../../../../../src/app/layout/attachments/attachments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__companies_companies_service__ = __webpack_require__("../../../../../src/app/layout/companies/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_service__ = __webpack_require__("../../../../../src/app/layout/mail/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mail__ = __webpack_require__("../../../../../src/app/layout/mail/mail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ComposemailComponent = (function () {
    function ComposemailComponent(attachmentService, companiesService, mailService, cons, router) {
        this.attachmentService = attachmentService;
        this.companiesService = companiesService;
        this.mailService = mailService;
        this.cons = cons;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_5__mail__["a" /* Mail */]();
        this.chkArray = [];
    }
    ComposemailComponent.prototype.ngOnInit = function () {
        this.getAttachments();
        this.getCompanies();
    };
    ComposemailComponent.prototype.onClicked = function (option, event) {
        var i = 0;
        var flag = 1;
        for (i = 0; i <= this.chkArray.length; i++) {
            if (option == this.chkArray[i]) {
                flag = 0;
                delete this.chkArray[i];
            }
        }
        if (flag == 1) {
            this.chkArray.push(option);
        }
        // console.log(this.chkArray);
        this.chkArray;
    };
    ComposemailComponent.prototype.addMail = function () {
        var _this = this;
        var attachData = this.chkArray;
        var data = [];
        data.push(attachData);
        data.push(this.model);
        this.mailService.addMail(data).subscribe(function (res) {
            if (res.status == 'true') {
                setTimeout(function () {
                    _this.cons.setAlert('Lead added successfully', 1);
                    _this.router.navigate(['mail']);
                }, 1000);
            }
            else {
                _this.cons.setAlert('Opps something wrong!', 0);
            }
        });
    };
    ComposemailComponent.prototype.getAttachments = function () {
        var _this = this;
        this.attachmentService.getAttachments().subscribe(function (res) {
            _this.attachData = res.json();
        });
    };
    ComposemailComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companiesService.getCompanies().subscribe(function (res) {
            _this.compData = res.json();
        });
    };
    ComposemailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mail',
            template: __webpack_require__("../../../../../src/app/layout/mail/composemail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/mail/composemail.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__attachments_attachments_service__["a" /* AttachmentsService */],
            __WEBPACK_IMPORTED_MODULE_3__companies_companies_service__["a" /* CompaniesService */],
            __WEBPACK_IMPORTED_MODULE_4__mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_6__constant_services__["a" /* ConstantService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]])
    ], ComposemailComponent);
    return ComposemailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/mail/composemail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposemailModule", function() { return ComposemailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composemail_routing_module__ = __webpack_require__("../../../../../src/app/layout/mail/composemail-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__composemail_component__ = __webpack_require__("../../../../../src/app/layout/mail/composemail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComposemailModule = (function () {
    function ComposemailModule() {
    }
    ComposemailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__composemail_routing_module__["a" /* ComposemailRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_6_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__composemail_component__["a" /* ComposemailComponent */]]
        })
    ], ComposemailModule);
    return ComposemailModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/mail/mail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mail; });
var Mail = (function () {
    function Mail() {
    }
    return Mail;
}());



/***/ })

});
//# sourceMappingURL=composemail.module.chunk.js.map