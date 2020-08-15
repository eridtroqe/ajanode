function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-intermediation-intermediation-module"], {
  /***/
  "./src/app/modules/intermediation/intermediation.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/intermediation/intermediation.component.ts ***!
    \********************************************************************/

  /*! exports provided: IntermediationComponent */

  /***/
  function srcAppModulesIntermediationIntermediationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntermediationComponent", function () {
      return IntermediationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IntermediationComponent =
    /*#__PURE__*/
    function () {
      function IntermediationComponent() {
        _classCallCheck(this, IntermediationComponent);
      }

      _createClass(IntermediationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntermediationComponent;
    }();

    IntermediationComponent.ɵfac = function IntermediationComponent_Factory(t) {
      return new (t || IntermediationComponent)();
    };

    IntermediationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntermediationComponent,
      selectors: [["app-intermediation"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container", "py-5"], [1, "row"]],
      template: function IntermediationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "intermediation works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-top: 88px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9pbnRlcm1lZGlhdGlvbi9DOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXEFqYSByZWFsIGVzdGF0ZVxcYWphbm9kZS9zcmNcXGFwcFxcbW9kdWxlc1xcaW50ZXJtZWRpYXRpb25cXGludGVybWVkaWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2ludGVybWVkaWF0aW9uL2ludGVybWVkaWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ludGVybWVkaWF0aW9uL2ludGVybWVkaWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDg4cHg7XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA4OHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntermediationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-intermediation',
          templateUrl: './intermediation.component.html',
          styleUrls: ['./intermediation.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/intermediation/intermediation.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/intermediation/intermediation.module.ts ***!
    \*****************************************************************/

  /*! exports provided: IntermediationModule */

  /***/
  function srcAppModulesIntermediationIntermediationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntermediationModule", function () {
      return IntermediationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _intermediation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./intermediation.component */
    "./src/app/modules/intermediation/intermediation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _intermediation_component__WEBPACK_IMPORTED_MODULE_2__["IntermediationComponent"]
    }];

    var IntermediationModule = function IntermediationModule() {
      _classCallCheck(this, IntermediationModule);
    };

    IntermediationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IntermediationModule
    });
    IntermediationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IntermediationModule_Factory(t) {
        return new (t || IntermediationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IntermediationModule, {
        declarations: [_intermediation_component__WEBPACK_IMPORTED_MODULE_2__["IntermediationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntermediationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_intermediation_component__WEBPACK_IMPORTED_MODULE_2__["IntermediationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-intermediation-intermediation-module-es5.js.map