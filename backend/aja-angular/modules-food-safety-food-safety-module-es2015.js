(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-food-safety-food-safety-module"],{

/***/ "./src/app/modules/food-safety/food-safety.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/food-safety/food-safety.component.ts ***!
  \**************************************************************/
/*! exports provided: FoodSafetyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodSafetyComponent", function() { return FoodSafetyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FoodSafetyComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FoodSafetyComponent.ɵfac = function FoodSafetyComponent_Factory(t) { return new (t || FoodSafetyComponent)(); };
FoodSafetyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoodSafetyComponent, selectors: [["app-food-safety"]], decls: 4, vars: 0, consts: [[1, "container", "py-5"], [1, "row"]], template: function FoodSafetyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "food-safety works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-top: 88px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mb29kLXNhZmV0eS9DOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXEFqYSByZWFsIGVzdGF0ZVxcYWphbm9kZS9zcmNcXGFwcFxcbW9kdWxlc1xcZm9vZC1zYWZldHlcXGZvb2Qtc2FmZXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Zvb2Qtc2FmZXR5L2Zvb2Qtc2FmZXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Zvb2Qtc2FmZXR5L2Zvb2Qtc2FmZXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDg4cHg7XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA4OHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodSafetyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-food-safety',
                templateUrl: './food-safety.component.html',
                styleUrls: ['./food-safety.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/food-safety/food-safety.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/food-safety/food-safety.module.ts ***!
  \***********************************************************/
/*! exports provided: FoodSafetyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodSafetyModule", function() { return FoodSafetyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _food_safety_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-safety.component */ "./src/app/modules/food-safety/food-safety.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    {
        path: '',
        component: _food_safety_component__WEBPACK_IMPORTED_MODULE_2__["FoodSafetyComponent"]
    }
];
class FoodSafetyModule {
}
FoodSafetyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FoodSafetyModule });
FoodSafetyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FoodSafetyModule_Factory(t) { return new (t || FoodSafetyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FoodSafetyModule, { declarations: [_food_safety_component__WEBPACK_IMPORTED_MODULE_2__["FoodSafetyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodSafetyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_food_safety_component__WEBPACK_IMPORTED_MODULE_2__["FoodSafetyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-food-safety-food-safety-module-es2015.js.map