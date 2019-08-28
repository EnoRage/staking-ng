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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _pos_delegators_pos_delegators_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pos-delegators/pos-delegators.component */ "./src/app/pos-delegators/pos-delegators.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");






var routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
    },
    {
        path: 'delegators/:blockchainId',
        component: _pos_delegators_pos_delegators_component__WEBPACK_IMPORTED_MODULE_4__["PosDelegatorsComponent"],
    },
    {
        path: 'details/:validatorId',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-2 blue-custom\">\n  <div class=\"row small pt-2\">\n    <div class=\"text-center col-12 d-flex justify-content-around mb-2\">\n      <div *ngIf=\"!showBack\" style=\"width: 50px;display: inline-block; height: 40px\">\n        <img src=\"/assets/images/trust_logo.svg\" alt=\"trust\">\n      </div>\n      <div *ngIf=\"showBack\" >\n        <div style=\" height: 40px; margin-left: -5px\" class=\"text-center col-12 d-flex justify-content-around pb-2 pt-1\">\n          <div (click)=\"goBack()\"><i class=\"fas fa-arrow-left fa-2x navigation-icons\"></i></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container p-0 pt-2 pb-3\">\n    <div class=\"container \">\n      <div class=\"row small\">\n        <div class=\"col-12 card\">\n          <app-account-info></app-account-info>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container pt-3\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(http, activatedRoute, router, location) {
        // activatedRoute.url.subscribe((url) => {
        //   console.log(url);
        // });
        var _this = this;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.title = 'staking';
        // TODO: do without subscription
        this.router.events.pipe().subscribe(function (event) {
            if (!event.url) {
                return;
            }
            _this.showBack = event.url !== '/main';
        });
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
            ? 'https://blockatlas.trustwalletapp.com/'
            : 'http://142.93.172.157:9000/blockatlas/'; // http://localhost:9000/blockatlas/
        this.getValidatorsOnce$().subscribe(function (resp) {
            // console.log(resp);
        });
    }
    AppComponent.prototype.goBack = function () {
        // window.history.back();
        this.location.back();
    };
    // @ts-ignore
    AppComponent.prototype.getValidatorsOnce$ = function () {
        return this.http.get(this.endpoint + "v2/cosmos/staking/validators");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_account_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/account-info.component */ "./src/app/layout/account-info.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pos_delegators_pos_delegators_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pos-delegators/pos-delegators.component */ "./src/app/pos-delegators/pos-delegators.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _layout_account_info_component__WEBPACK_IMPORTED_MODULE_5__["AccountInfoComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _pos_delegators_pos_delegators_component__WEBPACK_IMPORTED_MODULE_8__["PosDelegatorsComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cosmos.service.ts":
/*!***********************************!*\
  !*** ./src/app/cosmos.service.ts ***!
  \***********************************/
/*! exports provided: CosmosService, CosmosServiceInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CosmosService", function() { return CosmosService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CosmosServiceInstance", function() { return CosmosServiceInstance; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _trustwallet_rpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @trustwallet/rpc */ "./node_modules/@trustwallet/rpc/lib/index.js");
/* harmony import */ var _trustwallet_rpc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_trustwallet_rpc__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var CosmosService = /** @class */ (function () {
    function CosmosService(http) {
        this.http = http;
        this.mapping = {};
    }
    CosmosService.prototype.getInstance = function (address) {
        if (this.mapping[address]) {
            return this.mapping[address];
        }
        var instance = new CosmosServiceInstance(this.http, address);
        this.mapping[address] = instance;
        return instance;
    };
    CosmosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CosmosService);
    return CosmosService;
}());

var CosmosServiceInstance = /** @class */ (function () {
    function CosmosServiceInstance(http, account) {
        this.http = http;
        this.account = account;
        this.rpc = new _trustwallet_rpc__WEBPACK_IMPORTED_MODULE_5__["CosmosRPC"]('https://cosmos-rpc.trustwalletapp.com');
        // this.rpc = new CosmosRPC('https://stargate.cosmos.network');
        this.currentAccount = account;
        var timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 5000);
        var balance$ = this.getBalance(account);
        this.balance$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([timer$, balance$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (x) {
            var timer = x[0], balance = x[1];
            var denominator = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(1000000);
            // @ts-ignore
            return (balance / denominator).toString();
        }));
    }
    CosmosServiceInstance.prototype.getBalance = function (address) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.rpc.getAccount(address)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (account) {
            var balances = account.coins;
            // @ts-ignore
            var result = balances.find(function (coin) { return coin.denom.toUpperCase() === 'UATOM'; });
            return result.amount;
        }));
    };
    CosmosServiceInstance.prototype.getPrice = function () {
        var body = {
            'currency': 'USD',
            'tokens': [
                {
                    'contract': '0x0000000000000000000000000000000000000076'
                }
            ]
        };
        return this.http.post('https://api.trustwallet.com/prices', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (result) {
            var currency = result.docs;
            // @ts-ignore
            var coin = currency.find(function (coin) { return coin.contract == '0x0000000000000000000000000000000000000076'; });
            return coin.price;
        }));
    };
    CosmosServiceInstance.prototype.getLargestRate = function () {
        var url = 'https://blockatlas.trustwalletapp.com/v2/cosmos/staking/validators';
        // const url = ' http://142.93.172.157:9000/blockatlas//v2/cosmos/staking/validators';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (x) {
            // console.log(x);
            return x;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (docs) {
            var annualRates = [];
            // console.log(docs);
            // @ts-ignore
            docs.forEach(function (i) {
                // @ts-ignore
                annualRates.push(docs[i].reward.annual);
            });
            return annualRates;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (annualRates) {
            // @ts-ignore
            var largestRateToDisplay = Math.max.apply(annualRates);
            return largestRateToDisplay.toFixed(2);
        }));
    };
    CosmosServiceInstance.prototype.getStakedAmount = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.rpc.listDelegations(this.account)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (delegations) {
            console.log(delegations);
            var sums = [];
            // @ts-ignore
            if (delegations) {
                // @ts-ignore
                for (var i = 0; i < delegations.length; i++) {
                    // @ts-ignore
                    sums.push(delegations[i].shares);
                }
                return (bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a.sum.apply(bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a, sums).toNumber() / 1000000);
            }
            return 0;
        }));
    };
    CosmosServiceInstance.prototype.getDelegations = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.rpc.listDelegations(this.account));
    };
    CosmosServiceInstance.prototype.getValidators = function () {
        var url = 'https://blockatlas.trustwalletapp.com/v2/cosmos/staking/validators';
        // const url = 'http://142.93.172.157:9000/blockatlas/v2/cosmos/staking/validators';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
            // console.log(response);
            return response;
        }));
    };
    return CosmosServiceInstance;
}());



/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-2\">\n  <div class=\"row small\">\n    <div class=\"col-12 pt-2\">\n      <div *ngIf=\"validator\" class=\"card\">\n        <div  class=\"card-body p-2\">\n          <div class=\"col-12 text-center\">\n            <img style=\"width: 90px\"\n                 src=\"{{validator.info.image || '...'}}\"\n                 alt=\"{{validator.info.name || '...'}}\">\n          </div>\n          <div class=\"text-center pt-1\">\n            <p class=\"description\">{{validator.info.description || '...'}}</p>\n          </div>\n          <div style=\"display: grid; grid-template: 1fr 1fr  / 1fr 1fr;\"\n               class=\"col-12 text-center pt-2\">\n            <div>\n              <h5>Annual Rate (APR)</h5>\n            </div>\n            <div>\n              <h5>Staked amount</h5>\n            </div>\n            <div>\n              <p class=\"metric\">{{validator.reward.annual.toFixed(2) + '%' || '...'}}</p>\n            </div>\n            <div>\n              <p class=\"metric\">{{(stakedSum | async) || '...'}}</p>\n            </div>\n          </div>\n          <div class=\"col-12 text-center pt-2\">\n            <div class=\"input-group input-group-lg\">\n              <div class=\"input-group-prepend\">\n              </div>\n              <input placeholder=\"Enter ATOM to stake\" type=\"number\" class=\"form-control\" aria-label=\"Large\"\n                     aria-describedby=\"inputGroup-sizing-sm\">\n            </div>\n          </div>\n          <div class=\"col-12 text-center pt-4 pb-4\">\n            <button class=\"btn btn-info btn-lg col-12\">STAKE</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cosmos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cosmos.service */ "./src/app/cosmos.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(activatedRoute, http, cosmos) {
        this.http = http;
        this.cosmos = cosmos;
        this.validatorId = activatedRoute.snapshot.params.validatorId;
        this.cosmosInstance = this.cosmos.getInstance('cosmos1cj7u0wpe45j0udnsy306sna7peah054upxtkzk');
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getValidator(this.validatorId).subscribe(function (validator) {
            _this.validator = validator;
        });
        this.stakedSum = this.getStakedAmount(this.validatorId);
    };
    DetailsComponent.prototype.getValidator = function (validatorId) {
        // @ts-ignore
        return this.cosmosInstance.getValidators().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) {
            // @ts-ignore
            var a = [];
            // @ts-ignore
            x.docs.forEach(function (i) {
                if (i.id == validatorId) {
                    // @ts-ignore
                    a.push(i);
                }
            });
            return a[0];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    DetailsComponent.prototype.getStakedAmount = function (validatorId) {
        return this.cosmosInstance.getDelegations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response) {
                var stakedSumArray_1 = [];
                response.forEach(function (i) {
                    // @ts-ignore
                    stakedSumArray_1.push(Number(i.shares) / 1000000);
                });
                // @ts-ignore
                return stakedSumArray_1.reduce(function (a, b) { return a + b; }, 0).toFixed(6);
            }
            return "0";
        }));
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _cosmos_service__WEBPACK_IMPORTED_MODULE_3__["CosmosService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/account-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/layout/account-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"balances-box card-body p-0 d-flex justify-content-between\">\n  <div>\n    <div>My Balance</div>\n    <div>Staked</div>\n  </div>\n\n  <!-- TODO: *ngIf else -->\n  <div *ngIf=\"!(fiatDetails$ | async)\">\n    <div>... </div>\n    <div>...</div>\n  </div>\n\n  <div *ngIf=\"(fiatDetails$ | async)\">\n    <div>{{(fiatDetails$ | async).balance || '...' }} </div>\n    <div>{{(fiatDetails$ | async).staked || '...' }}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/account-info.component.scss":
/*!****************************************************!*\
  !*** ./src/app/layout/account-info.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin: 0.1rem 0 0.1rem 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmFnZS9EZXNrdG9wL3N0YWtpbmctbmcvc3JjL2FwcC9sYXlvdXQvYWNjb3VudC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYWNjb3VudC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgbWFyZ2luOiAwLjFyZW0gMCAwLjFyZW0gMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/account-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/account-info.component.ts ***!
  \**************************************************/
/*! exports provided: AccountInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountInfoComponent", function() { return AccountInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trust_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trust-provider.service */ "./src/app/trust-provider.service.ts");
/* harmony import */ var _cosmos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cosmos.service */ "./src/app/cosmos.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AccountInfoComponent = /** @class */ (function () {
    function AccountInfoComponent(trustProvider, cosmos) {
        this.trustProvider = trustProvider;
        this.cosmos = cosmos;
        // this.subscription = this.trustProvider.currentAccount$.subscribe(( account ) => {
        this.cosmosInstance = this.cosmos.getInstance('cosmos1cj7u0wpe45j0udnsy306sna7peah054upxtkzk');
        this.fiatDetails$ =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.cosmosInstance.getPrice(), this.cosmosInstance.balance$, this.cosmosInstance.getStakedAmount()]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
                var price = x[0], rawBalance = x[1], rawStaked = x[2];
                // TODO: move to pipe
                // @ts-ignore
                var balance = '$' + (Number(price) * Number(rawBalance)).toFixed(2);
                // @ts-ignore
                var staked = '$' + (Number(price) * Number(rawStaked)).toFixed(2);
                var fiatDetails = { balance: balance, staked: staked };
                return fiatDetails;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
        // });
    }
    AccountInfoComponent.prototype.ngOnInit = function () {
    };
    AccountInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-info',
            template: __webpack_require__(/*! ./account-info.component.html */ "./src/app/layout/account-info.component.html"),
            styles: [__webpack_require__(/*! ./account-info.component.scss */ "./src/app/layout/account-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_trust_provider_service__WEBPACK_IMPORTED_MODULE_2__["TrustProviderService"], _cosmos_service__WEBPACK_IMPORTED_MODULE_3__["CosmosService"]])
    ], AccountInfoComponent);
    return AccountInfoComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(myStakeHolders | async)\" class=\"row small\">\n  <div class=\"col-12 pt-2\">\n    <div class=\"card\">\n      <div class=\"card-body p-2\">\n        <h6 class=\"card-title\"> Staking</h6>\n        <table class=\"table\">\n          <tbody>\n          <ng-template ngFor let-item [ngForOf]=\"(myStakeHolders | async)\" let-i=\"index\">\n            <tr (click)=\"navigateToMyStakeHoldersList(item)\">\n              <td>\n                <img class=\"icon\" src=\"{{item.info.image}}\" alt=\"cosmos\">\n              </td>\n              <td>{{item.info.name}}</td>\n              <td>{{item.reward.annual.toFixed(2)}} %</td>\n<!--              <td>{{(this.getStakedAmount(item.id) | async) || '...'}}</td>-->\n              <td>ATOM</td>\n              <td>\n                <i class=\"fas fa-chevron-right\"></i>\n              </td>\n            </tr>\n          </ng-template>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row small\">\n  <div class=\"col-12 pt-2\">\n    <div class=\"card\">\n      <div class=\"card-body p-2\">\n        <h6 class=\"card-title\">Blockhains</h6>\n        <table class=\"table\">\n          <tbody>\n\n          <ng-template ngFor let-item [ngForOf]=\"blockchains\" let-i=\"index\">\n            <tr (click)=\"navigateToPosDelegatorsList(item)\">\n              <td>\n                <img class=\"icon\" src=\"{{item.iconUri}}\" alt=\"cosmos\">\n              </td>\n              <td>{{item.currencyName}}</td>\n              <td>{{item.annualRate * 100}} %</td>\n              <td>{{item.currencySymbol}}</td>\n              <td>\n                <i class=\"fas fa-chevron-right\"></i>\n              </td>\n            </tr>\n          </ng-template>\n\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cosmos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cosmos.service */ "./src/app/cosmos.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






// interface IStakeHolderDto {
//
// }
var MainComponent = /** @class */ (function () {
    function MainComponent(router, cosmos) {
        this.router = router;
        this.cosmos = cosmos;
        // @ts-ignore
        this.blockchains = [];
        this.cosmosAnnualRate = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('9%');
        this.cosmosInstance = this.cosmos.getInstance('cosmos1cj7u0wpe45j0udnsy306sna7peah054upxtkzk');
        this.myStakeHolders = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 10000), this.cosmosInstance.getValidators(), this.cosmosInstance.getDelegations()]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
            var timer = x[0], validators = x[1], delegators = x[2];
            var delegatorsAddresses = [];
            if (delegators && validators) {
                delegators.forEach(function (delegator) {
                    // @ts-ignore
                    delegatorsAddresses.push(delegator.validatorAddress);
                });
                // @ts-ignore
                var res_1 = delegatorsAddresses.filter(function (item, pos, self) {
                    return self.indexOf(item) == pos;
                });
                //
                //   let sums = [];
                //   res.forEach(( i, index ) => {
                //     if (i == delegators[index].validatorAddress
                //       // @ts-ignore
                //       && !sums.find(( s ) => {
                //         s.validatorAddress == delegators[index].validatorAddress
                //       })) {
                //       // @ts-ignore
                //       sums.push({validatorAddress: delegators[index].validatorAddress, sum: Number(delegators[index].shares)})
                //     } else if (i == delegators[index].validatorAddress
                //       // @ts-ignore
                //       && sums.find(( s ) => {
                //         s.validatorAddress == delegators[index].validatorAddress
                //       })) {
                //       sums[index]({validatorAddress: delegators[index].validatorAddress, sum: Number(delegators[index].shares)})
                //     }
                //   })
                // )
                // @ts-ignore
                var validatorsFinal_1 = [];
                validators.docs.forEach(function (validator) {
                    var f = res_1.find(function (element) { return element == validator.id; });
                    if (f) {
                        // @ts-ignore
                        validatorsFinal_1.push(validator);
                    }
                });
                return validatorsFinal_1;
            }
        }));
    }
    MainComponent.prototype.ngOnInit = function () {
        this.blockchains = [
            {
                blockchainId: 'cosmos',
                currencyName: 'Cosmos',
                currencySymbol: 'ATOM',
                annualRate: 0.09,
                iconUri: 'https://assets.trustwalletapp.com/blockchains/cosmos/info/logo.png'
            }
        ];
    };
    MainComponent.prototype.navigateToPosDelegatorsList = function (item) {
        this.router.navigate(["/delegators/" + item.blockchainId]);
    };
    MainComponent.prototype.navigateToMyStakeHoldersList = function (item) {
        this.router.navigate(["/details/" + item.id]);
    };
    MainComponent.prototype.getValidator = function (validatorId) {
        // @ts-ignore
        return this.cosmosInstance.getValidators().pipe(
        // @ts-ignore
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["find"])(function (validator) { return validator.id == validatorId; }));
    };
    MainComponent.prototype.getStakedAmount = function (validatorId) {
        return this.cosmosInstance.getDelegations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            var stakedSumArray = [];
            response.forEach(function (i) {
                // @ts-ignore
                stakedSumArray.push(Number(i.shares) / 1000000);
            });
            // @ts-ignore
            return stakedSumArray.reduce(function (a, b) { return a + b; }, 0).toFixed(6);
        }));
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _cosmos_service__WEBPACK_IMPORTED_MODULE_4__["CosmosService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pos-delegators/pos-delegators.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pos-delegators/pos-delegators.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row small\">\n  <div class=\"col-12 pt-4\">\n    <div class=\"card\">\n      <div class=\"card-body p-2\">\n        <h6 class=\"card-title\"> All Stakers</h6>\n        <table class=\"table\">\n          <tbody>\n          <ng-template ngFor let-item [ngForOf]=\"(validators)\" let-i=\"index\">\n            <tr  (click)=\"navigateToMyStakeHoldersList(item)\">\n              <th scope=\"row\"><img class=\"icon\"\n                                   src=\"{{item.info.image}}\"\n                                   alt=\"{{item.info.name}}\">\n              </th>\n              <td>\n                {{item.info.name}}\n              </td>\n              <td>{{item.reward.annual.toFixed(2)}}%</td>\n              <td><i class=\"fas fa-chevron-right\"></i></td>\n            </tr>\n            <tr>\n          </ng-template>\n\n          <!--            <th scope=\"row\"><img class=\"icon \"-->\n          <!--                                 src=\"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cosmos/validators/assets/cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys/logo.png\">-->\n          <!--            </th>-->\n          <!--            <td>Certus One-->\n          <!--            </td>-->\n          <!--            <td>9.08%</td>-->\n          <!--            <td><i class=\"fas fa-chevron-right\"></i></td>-->\n          <!--          </tr>-->\n\n          <!--          <tr>-->\n          <!--            <th scope=\"row\"><img class=\"icon\" src=\"../../assets/img/cosmos.png\" alt=\"Cosmos\"></th>-->\n          <!--            <td>Polychain Labs-->\n          <!--            </td>-->\n          <!--            <td>8.30%</td>-->\n          <!--            <td><i class=\"fas fa-chevron-right\"></i></td>-->\n          <!--          </tr>-->\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pos-delegators/pos-delegators.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pos-delegators/pos-delegators.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvcy1kZWxlZ2F0b3JzL3Bvcy1kZWxlZ2F0b3JzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pos-delegators/pos-delegators.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pos-delegators/pos-delegators.component.ts ***!
  \************************************************************/
/*! exports provided: PosDelegatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosDelegatorsComponent", function() { return PosDelegatorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cosmos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cosmos.service */ "./src/app/cosmos.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PosDelegatorsComponent = /** @class */ (function () {
    function PosDelegatorsComponent(activatedRoute, http, cosmos, router) {
        var _this = this;
        this.http = http;
        this.cosmos = cosmos;
        this.router = router;
        // @ts-ignore
        this.validators = [];
        this.blockchain = activatedRoute.snapshot.params.blockchainId;
        this.cosmosInstance = this.cosmos.getInstance('cosmos1cj7u0wpe45j0udnsy306sna7peah054upxtkzk');
        // @ts-ignore
        this.getValidators().subscribe(function (validators) {
            _this.validators = validators;
        });
    }
    PosDelegatorsComponent.prototype.ngOnInit = function () {
    };
    // @ts-ignore
    PosDelegatorsComponent.prototype.getValidators = function () {
        // @ts-ignore
        return this.cosmosInstance.getValidators().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
            // @ts-ignore
            return x.docs;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    };
    PosDelegatorsComponent.prototype.navigateToMyStakeHoldersList = function (item) {
        this.router.navigate(["/details/" + item.id]);
    };
    PosDelegatorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pos-delegators',
            template: __webpack_require__(/*! ./pos-delegators.component.html */ "./src/app/pos-delegators/pos-delegators.component.html"),
            styles: [__webpack_require__(/*! ./pos-delegators.component.scss */ "./src/app/pos-delegators/pos-delegators.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _cosmos_service__WEBPACK_IMPORTED_MODULE_4__["CosmosService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PosDelegatorsComponent);
    return PosDelegatorsComponent;
}());



/***/ }),

/***/ "./src/app/trust-provider.service.ts":
/*!*******************************************!*\
  !*** ./src/app/trust-provider.service.ts ***!
  \*******************************************/
/*! exports provided: TrustProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustProviderService", function() { return TrustProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TrustProviderService = /** @class */ (function () {
    function TrustProviderService() {
        this.network = 118; // Cosmos
        this.currentAccount$ = this.getAddressOnce(this.network).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        this.currentAccount$.subscribe();
    }
    TrustProviderService.prepareTransaction = function (coin, addressTo, addressFrom, smount) {
        return '';
    };
    TrustProviderService.signTransaction = function () {
        return '';
    };
    TrustProviderService.prototype.getAddressOnce = function (network) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).pipe(
        // @ts-ignore
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !!window.trustProvider; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            // @ts-ignore
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(window.trustProvider.getAccounts());
        }), 
        // @ts-ignore
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (accounts) {
            var accountRaw = accounts.find(function (account) { return account.network === network; });
            // @ts-ignore
            return JSON.stringify(accountRaw.address)
                .replace('"', '')
                .replace('"', '');
        }));
    };
    TrustProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrustProviderService);
    return TrustProviderService;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/erage/Desktop/staking-ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map