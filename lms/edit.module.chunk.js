webpackJsonp(["edit.module"],{

/***/ "../../../../../src/app/layout/companies/edit-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_component__ = __webpack_require__("../../../../../src/app/layout/companies/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__edit_component__["a" /* EditComponent */]
    }
];
var EditRoutingModule = (function () {
    function EditRoutingModule() {
    }
    EditRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EditRoutingModule);
    return EditRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/companies/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Edit Company'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\" style=\"padding: 0.25rem 1.25rem;\">\r\n                    Edit Company\r\n                    <span style=\"float:right;\">\r\n                    <a [routerLink]=\"['/companies']\" class=\"btn btn-sm btn-primary\">\r\n                        <i class=\"fa fa fa-eye\"></i> Companies\r\n                    </a> </span>\r\n                </div>\r\n\r\n                <div class=\"card-body table-responsive\">\r\n                    <div class=\"col-sm-10\">\r\n                        <form #tesst=\"ngForm\" (ngSubmit)=\"updateCompany()\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"formGroupExampleInput\">Name</label>\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" [(ngModel)]=\"model.name\" name=\"name\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label for=\"formGroupExampleInput2\">Email Id</label>\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Enter email id\" [(ngModel)]=\"model.email\" name=\"email\">\r\n                            </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"formGroupExampleInput2\">Phone</label>\r\n                    <input type=\"text\" class=\"form-control\"  placeholder=\"Enter phone\" [(ngModel)]=\"model.phone\" name=\"phone\">\r\n               </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"formGroupExampleInput2\">Address</label>\r\n                <textarea class=\"form-control\" placeholder=\"Enter address\" name=\"address\" [(ngModel)]=\"model.address\"></textarea>\r\n           </div>\r\n\r\n           <div class=\"form-group\">\r\n            <label>Attachment</label>\r\n            <input type=\"file\" class=\"form-control\" #file name=\"selectfile\" id=\"selectfile\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <div class='col-sm-4 col-xs-6 col-md-3' >\r\n              <img class=\"img-responsive\" src=\"{{model.image}}\">\r\n           </div>    \r\n        </div>\r\n           <div class=\"form-group\">\r\n            <label for=\"formGroupExampleInput2\">Status</label>\r\n            <select class=\"form-control\" name=\"status\" [(ngModel)]=\"model.status\">\r\n                <option value=\"1\" selected='selected'>Active</option>\r\n                <option value=\"0\">In Active</option>\r\n            </select>\r\n          </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\r\n                     </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n         </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/companies/edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/companies/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__companies_service__ = __webpack_require__("../../../../../src/app/layout/companies/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companies__ = __webpack_require__("../../../../../src/app/layout/companies/companies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant_services__ = __webpack_require__("../../../../../src/app/layout/constant.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditComponent = (function () {
    function EditComponent(router, route, empService, elem, cons) {
        this.router = router;
        this.route = route;
        this.empService = empService;
        this.elem = elem;
        this.cons = cons;
        this.onOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.model = new __WEBPACK_IMPORTED_MODULE_4__companies__["a" /* Companies */]();
        this.id = this.route.snapshot.params['id'];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.getSingleCompany();
    };
    EditComponent.prototype.getSingleCompany = function () {
        var _this = this;
        this.empService
            .getCompany(this.id)
            .subscribe(function (company) {
            _this.model = company[0];
        });
    };
    ;
    EditComponent.prototype.updateCompany = function () {
        var _this = this;
        var formData = new FormData();
        var fileList = this.file.nativeElement.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            formData.append('uploadFile', file, file.name);
            for (var item in this.model) {
                formData.append(item, this.model[item]);
            }
        }
        else {
            for (var item in this.model) {
                formData.append(item, this.model[item]);
            }
        }
        this.empService.updateCompany(formData).subscribe(function (res) {
            if (res.status == 'true') {
                //console.log(res.message);
                // this.alertservice.success('Commasdfasfs');
                setTimeout(function () {
                    _this.cons.setAlert('Company updated successfully', 1);
                    _this.router.navigate(['companies']);
                }, 1000);
            }
            else {
                _this.cons.setAlert('Opps something wrong!', 0);
                // this.alertservice.success(res.message);
                //alert('Opps something wrong!');
            }
        });
    };
    //   updateCompany(){
    //     this.empService
    //       .updateCompany(this.model)
    //       .subscribe(()=> this.goBack());
    // }
    EditComponent.prototype.goBack = function () {
        this.router.navigate(['/companies']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "onOutput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('file'),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "file", void 0);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/layout/companies/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/companies/edit.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__companies_service__["a" /* CompaniesService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_5__constant_services__["a" /* ConstantService */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/companies/edit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModule", function() { return EditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_routing_module__ = __webpack_require__("../../../../../src/app/layout/companies/edit-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_component__ = __webpack_require__("../../../../../src/app/layout/companies/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EditModule = (function () {
    function EditModule() {
    }
    EditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__edit_routing_module__["a" /* EditRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__edit_component__["a" /* EditComponent */]]
        })
    ], EditModule);
    return EditModule;
}());



/***/ })

});
//# sourceMappingURL=edit.module.chunk.js.map