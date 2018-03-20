webpackJsonp(["add.module.1"],{

/***/ "../../../../../src/app/layout/companies/add-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_component__ = __webpack_require__("../../../../../src/app/layout/companies/add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__add_component__["a" /* AddComponent */]
    }
];
var AddRoutingModule = (function () {
    function AddRoutingModule() {
    }
    AddRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AddRoutingModule);
    return AddRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/companies/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n        <div *ngIf=\"cons.SUCCESS_MSG\" class=\"alert alert-success\">\r\n                {{cons.SUCCESS_MSG}}\r\n            </div>\r\n    <app-page-header [heading]=\"'Add Company'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n   \r\n                <div class=\"card-header\" style=\"padding: 0.25rem 1.25rem;\">\r\n                    New Company\r\n                    <span style=\"float:right;\">\r\n                    <a [routerLink]=\"['/companies']\" class=\"btn btn-sm btn-primary\">\r\n                        <i class=\"fa fa fa-eye\"></i> Companies\r\n                    </a> </span>\r\n                </div>\r\n  \r\n                <div class=\"card-body table-responsive\">\r\n                    <div class=\"col-sm-10\">\r\n                        <form #tesst=\"ngForm\" (ngSubmit)=\"addCompany()\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"formGroupExampleInput\">Name</label>\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" [(ngModel)]=\"model.name\" name=\"name\" required>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label for=\"formGroupExampleInput2\">Email Id</label>\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Enter email id\" [(ngModel)]=\"model.email\" name=\"email\">\r\n                            </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"formGroupExampleInput2\">Phone</label>\r\n                    <input type=\"text\" class=\"form-control\"  placeholder=\"Enter phone\" [(ngModel)]=\"model.phone\" name=\"phone\">\r\n               </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"formGroupExampleInput2\">Address</label>\r\n                <textarea class=\"form-control\" placeholder=\"Enter address\" name=\"address\" [(ngModel)]=\"model.address\"></textarea>\r\n           </div>\r\n\r\n           <div class=\"form-group\">\r\n            <label>Attachment</label>\r\n            <input type=\"file\" class=\"form-control\" #file name=\"selectfile\" id=\"selectfile\">\r\n          </div>\r\n \r\n           <div class=\"form-group\">\r\n            <label for=\"formGroupExampleInput2\">Status</label>\r\n            <select class=\"form-control\" name=\"status\" [(ngModel)]=\"model.status\">\r\n                <option value=\"1\" selected='selected'>Active</option>\r\n                <option value=\"0\">In Active</option>\r\n            </select>\r\n          </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\r\n                     </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n         </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/companies/add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/companies/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__companies_service__ = __webpack_require__("../../../../../src/app/layout/companies/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companies__ = __webpack_require__("../../../../../src/app/layout/companies/companies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_service__ = __webpack_require__("../../../../../src/app/layout/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddComponent = (function () {
    function AddComponent(router, route, empService, alertservice, elem, cons) {
        this.router = router;
        this.route = route;
        this.empService = empService;
        this.alertservice = alertservice;
        this.elem = elem;
        this.cons = cons;
        this.formInfo = {
            name: '',
            email: '',
            phone: ''
        };
        this.onOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.model = new __WEBPACK_IMPORTED_MODULE_4__companies__["a" /* Companies */]();
    }
    AddComponent.prototype.ngOnInit = function () {
        this.onOutput.emit(this.formInfo);
        this.empService.getCompanies();
    };
    AddComponent.prototype.addCompany = function () {
        var _this = this;
        var fileList = this.file.nativeElement.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            for (var item in this.model) {
                formData.append(item, this.model[item]);
            }
            this.empService.addCompany(formData).subscribe(function (res) {
                if (res.status == 'true') {
                    //console.log(res.message);
                    // this.alertservice.success('Commasdfasfs');
                    setTimeout(function () {
                        _this.cons.setAlert('Company added successfully', 1);
                        _this.router.navigate(['companies']);
                    }, 1000);
                }
                else {
                    _this.cons.setAlert('Opps something wrong!', 0);
                    // this.alertservice.success(res.message);
                    //alert('Opps something wrong!');
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddComponent.prototype, "onOutput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('file'),
        __metadata("design:type", Object)
    ], AddComponent.prototype, "file", void 0);
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add',
            template: __webpack_require__("../../../../../src/app/layout/companies/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/companies/add.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__companies_service__["a" /* CompaniesService */],
            __WEBPACK_IMPORTED_MODULE_5__alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_6__constant_services__["a" /* ConstantService */]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/companies/add.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModule", function() { return AddModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_routing_module__ = __webpack_require__("../../../../../src/app/layout/companies/add-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_component__ = __webpack_require__("../../../../../src/app/layout/companies/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddModule = (function () {
    function AddModule() {
    }
    AddModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__add_routing_module__["a" /* AddRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__add_component__["a" /* AddComponent */]],
        })
    ], AddModule);
    return AddModule;
}());



/***/ })

});
//# sourceMappingURL=add.module.1.chunk.js.map