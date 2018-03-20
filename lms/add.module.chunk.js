webpackJsonp(["add.module"],{

/***/ "../../../../../src/app/layout/todo/add-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_component__ = __webpack_require__("../../../../../src/app/layout/todo/add.component.ts");
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

/***/ "../../../../../src/app/layout/todo/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'To Do Management'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <style>.fr-wrapper a {\r\n        display: none !important;\r\n        position: absolute;\r\n        top: -99999999px;\r\n      }</style>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\" style=\"padding: 0.25rem 1.25rem;\">\r\n                    New To Do\r\n                    <span style=\"float:right;\">\r\n                    <a [routerLink]=\"['/todo']\" class=\"btn btn-sm btn-primary\">\r\n                        <i class=\"fa fa fa-eye\"></i> To Do List\r\n                    </a> </span>\r\n                </div>\r\n\r\n                <div class=\"card-body table-responsive\">\r\n                    <div class=\"col-sm-10\">\r\n                        <form #tesst=\"ngForm\" (ngSubmit)=\"addTodo()\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"formGroupExampleInput\">Title</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.title\" name=\"title\" placeholder=\"Enter title\">\r\n                    </div>          \r\n                    <div class=\"form-group\">\r\n                        <label for=\"formGroupExampleInput2\">Descriptions</label>\r\n                        <div [froalaEditor] name=\"desc\" [(ngModel)]=\"model.desc\"></div>\r\n                    </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\r\n                          </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n         </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/todo/add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 80%; }\n\ncheckbox {\n  width: 19px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/todo/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attachments_attachments_service__ = __webpack_require__("../../../../../src/app/layout/attachments/attachments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__companies_companies_service__ = __webpack_require__("../../../../../src/app/layout/companies/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_service__ = __webpack_require__("../../../../../src/app/layout/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo__ = __webpack_require__("../../../../../src/app/layout/todo/todo.ts");
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








var AddComponent = (function () {
    function AddComponent(attachmentService, companiesService, todoService, cons, router) {
        this.attachmentService = attachmentService;
        this.companiesService = companiesService;
        this.todoService = todoService;
        this.cons = cons;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_5__todo__["a" /* Todo */]();
        this.chkArray = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        this.getAttachments();
        this.getCompanies();
    };
    AddComponent.prototype.onClicked = function (option, event) {
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
    AddComponent.prototype.addTodo = function () {
        var _this = this;
        this.todoService.addTodo(this.model).subscribe(function (res) {
            if (res.success == true) {
                setTimeout(function () {
                    _this.cons.setAlert(res.msg, 1);
                    _this.router.navigate(['todo']);
                }, 1000);
            }
            else {
                _this.cons.setAlert(res.msg, 0);
            }
        });
    };
    AddComponent.prototype.getAttachments = function () {
        var _this = this;
        this.attachmentService.getAttachments().subscribe(function (res) {
            _this.attachData = res.json();
        });
    };
    AddComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companiesService.getCompanies().subscribe(function (res) {
            _this.compData = res.json();
        });
    };
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add',
            template: __webpack_require__("../../../../../src/app/layout/todo/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/todo/add.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__attachments_attachments_service__["a" /* AttachmentsService */],
            __WEBPACK_IMPORTED_MODULE_3__companies_companies_service__["a" /* CompaniesService */],
            __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_6__constant_services__["a" /* ConstantService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/todo/add.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModule", function() { return AddModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_routing_module__ = __webpack_require__("../../../../../src/app/layout/todo/add-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_component__ = __webpack_require__("../../../../../src/app/layout/todo/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
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
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__add_routing_module__["a" /* AddRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_6_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__add_component__["a" /* AddComponent */]]
        })
    ], AddModule);
    return AddModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/todo/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ })

});
//# sourceMappingURL=add.module.chunk.js.map