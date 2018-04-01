webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "main {\n    height: calc(100% - 64px);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<oasis-toolbar>MyOasis</oasis-toolbar>\n\n<main [@routerTransition]=\"getState(o)\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_animations_router_animations__ = __webpack_require__("./src/app/core/animations/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My Oasis';
    }
    AppComponent.prototype.getState = function (outlet) {
        if (outlet.activated) {
            return outlet.activatedRouteData.state;
        }
        return null;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oasis-root',
            animations: [__WEBPACK_IMPORTED_MODULE_1__core_animations_router_animations__["a" /* routerTransition */]],
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_module__ = __webpack_require__("./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */], data: { state: 'home' } },
                ]),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_8__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_module__["a" /* HomeModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/abi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ABI = /** @class */ (function () {
    function ABI() {
        // tslint:disable-next-line:max-line-length
        this.tokenAbi = [{ "constant": true, "inputs": [], "name": "mintingFinished", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "INITIAL_SUPPLY", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_subtractedValue", "type": "uint256" }], "name": "decreaseApproval", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "finishMinting", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_addedValue", "type": "uint256" }], "name": "increaseApproval", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [], "name": "MintFinished", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }];
        // tslint:disable-next-line:max-line-length
        this.crowdsale = [{ "constant": true, "inputs": [], "name": "rate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "cap", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "weiRaised", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "capReached", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "wallet", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_beneficiary", "type": "address" }], "name": "buyTokens", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "token", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_rate", "type": "uint256" }, { "name": "_cap", "type": "uint256" }, { "name": "_token", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "purchaser", "type": "address" }, { "indexed": true, "name": "beneficiary", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "TokenPurchase", "type": "event" }];
    }
    ABI = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ABI);
    return ABI;
}());



/***/ }),

/***/ "./src/app/core/animations/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var routerTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('routerTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('home => dashboard', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => home', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(-100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ])
]);


/***/ }),

/***/ "./src/app/core/coin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
var Coin = /** @class */ (function () {
    function Coin() {
    }
    return Coin;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web3_service__ = __webpack_require__("./src/app/core/web3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_service__ = __webpack_require__("./src/app/core/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__web_func_service__ = __webpack_require__("./src/app/core/web-func.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__("./src/app/core/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__abi__ = __webpack_require__("./src/app/core/abi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toolbar_toolbar_component__ = __webpack_require__("./src/app/core/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_wei_to_eth_pipe__ = __webpack_require__("./src/app/core/pipes/wei-to-eth.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_currency_format_pipe__ = __webpack_require__("./src/app/core/pipes/currency-format.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["m" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_wei_to_eth_pipe__["a" /* WeiToEthPipe */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_currency_format_pipe__["a" /* CurrencyFormatPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__web3_service__["b" /* Web3Service */],
                __WEBPACK_IMPORTED_MODULE_7__firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_8__web_func_service__["a" /* WebFuncService */],
                __WEBPACK_IMPORTED_MODULE_9__utils__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_10__abi__["a" /* ABI */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_currency_format_pipe__["a" /* CurrencyFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["m" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_wei_to_eth_pipe__["a" /* WeiToEthPipe */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Actions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Actions;
(function (Actions) {
    Actions["ACC_RETRIEVAL_PKEY"] = "Account_retrieved_via_public_key";
    Actions["TOKEN_PURCHASE_TX_CREATED"] = "Token_purchase_initialised";
    Actions["TOKEN_PURCHASE_TX_SENT"] = "Token_purchase_tx_sent";
    Actions["TOKEN_PURCHASE_SUCCESS"] = "Token_purchase_success";
    Actions["TOKEN_PURCHASE_ERROR"] = "Token_purchase_error";
    Actions["EXTERNAL_URL_CLICKED"] = "External_url_clicked";
})(Actions || (Actions = {}));
var FirebaseService = /** @class */ (function () {
    function FirebaseService(http, db) {
        var _this = this;
        this.http = http;
        this.db = db;
        this.coins = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.coins$ = this.coins.asObservable();
        db.collection('coins').valueChanges().subscribe(function (res) {
            _this.coins.next(res);
        });
    }
    FirebaseService.prototype.logAction = function (userAddr, actionType, contents) {
        if (contents === void 0) { contents = {}; }
        var id = this.db.createId();
        var action = Object.assign({ id: id, userAddr: userAddr, action: actionType }, contents);
        console.log(JSON.stringify(action));
        this.db.collection('actions').doc(id).set(action);
    };
    FirebaseService.prototype.logAccountRetrieval = function (userAddr) {
        this.logAction(userAddr, Actions.ACC_RETRIEVAL_PKEY);
    };
    FirebaseService.prototype.logTokenPurchaseTxCreated = function (userAddr, transaction) {
        this.logAction(userAddr, Actions.TOKEN_PURCHASE_TX_CREATED, { transaction: transaction });
    };
    FirebaseService.prototype.logTokenPurchaseTxSent = function (userAddr, transactionHex) {
        this.logAction(userAddr, Actions.TOKEN_PURCHASE_TX_SENT, { transactionHex: transactionHex });
    };
    FirebaseService.prototype.logTokenPurchaseSuccess = function (userAddr, receipt) {
        this.logAction(userAddr, Actions.TOKEN_PURCHASE_SUCCESS, { receipt: receipt });
    };
    FirebaseService.prototype.logTokenPurchaseError = function (userAddr, error) {
        this.logAction(userAddr, Actions.TOKEN_PURCHASE_ERROR, { error: error });
    };
    FirebaseService.prototype.logExternalUrlClicked = function (userAddr, url) {
        this.logAction(userAddr, Actions.EXTERNAL_URL_CLICKED, { url: url });
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/core/pipes/currency-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyFormatPipe = /** @class */ (function () {
    function CurrencyFormatPipe() {
    }
    CurrencyFormatPipe.prototype.transform = function (value, args) {
        var parts = value.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };
    CurrencyFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'currencyFormat'
        })
    ], CurrencyFormatPipe);
    return CurrencyFormatPipe;
}());



/***/ }),

/***/ "./src/app/core/pipes/wei-to-eth.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeiToEthPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Web3 = __webpack_require__("./node_modules/web3/src/index.js");
var WeiToEthPipe = /** @class */ (function () {
    function WeiToEthPipe() {
    }
    WeiToEthPipe.prototype.transform = function (wei, args) {
        // const weiString = Web3.utils.toBN(Web3.utils.toHex(wei)).toString();
        return Web3.utils.fromWei(wei, 'ether');
    };
    WeiToEthPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'weiToEth'
        })
    ], WeiToEthPipe);
    return WeiToEthPipe;
}());



/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.css":
/***/ (function(module, exports) {

module.exports = ".toolbar-icon{\n    width: 24px;\n    height:24px;\n    cursor: pointer;\n}\n\n.provider{\n    font-size: 0.5em;\n    line-height: 1;\n    padding-right: 20px;\n    text-align: center;\n}\n\n.toolbar-title{\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\t<mat-toolbar>\n\t\t<button *ngIf=\"showMenu\" mat-icon-button (click)=\"navService.toggleMenu()\">\n\t\t\t<mat-icon>menu</mat-icon>\n\t\t</button>\n\t\t<span class=\"toolbar-title\" [routerLink]=\"['/']\">\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t\t<span fxFlex></span>\n\t\t<span class=\"provider\">\n\t\t\tProvider\n\t\t\t<br/>\n\t\t\t{{web3Provider}}\n\t\t</span>\n\t\t<span (click)=\"navigateToGithub()\" class=\"toolbar-icon\">\n\t\t\t<img src=\"assets/GitHub-Mark-Light-64px.png\" class=\"toolbar-icon\">\n\t\t</span>\n\t</mat-toolbar>\n</header>"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_service__ = __webpack_require__("./src/app/core/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web3_service__ = __webpack_require__("./src/app/core/web3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(firebase, router, web3) {
        var _this = this;
        this.firebase = firebase;
        this.router = router;
        this.web3 = web3;
        this.showMenu = false;
        this.githubUrl = 'http://www.github.com/alsco77/erc20-web-wallet';
        this.web3.currentProvider$.subscribe(function (provider) {
            if (provider != null) {
                console.log(JSON.stringify(provider));
                _this.web3Provider = provider;
            }
        });
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.navigateToGithub = function () {
        var acc = this.web3.authenticatedAccount.getValue();
        var addr = acc == null || acc === undefined ? null : acc.address;
        this.firebase.logExternalUrlClicked(addr, this.githubUrl);
        window.location.href = this.githubUrl;
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oasis-toolbar',
            template: __webpack_require__("./src/app/core/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("./src/app/core/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__web3_service__["b" /* Web3Service */]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/core/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Web3 = __webpack_require__("./node_modules/web3/src/index.js");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.prefixHex = function (hex) {
        return hex.substring(0, 2) === '0x' ? hex : '0x' + hex;
    };
    Utils.prototype.sanitizeHex = function (hex) {
        hex = hex.substring(0, 2) === '0x' ? hex.substring(2) : hex;
        if (hex === '') {
            return '';
        }
        return '0x' + this.padLeftEven(hex);
    };
    Utils.prototype.padLeftEven = function (hex) {
        hex = hex.length % 2 !== 0 ? '0' + hex : hex;
        return hex;
    };
    Utils.prototype.getNakedAddress = function (address) {
        return address.toLowerCase().replace('0x', '');
    };
    Utils.prototype.getFunctionSignature = function (name) {
        return Web3.utils.sha3(name).substr(0, 10);
    };
    Utils.prototype.hexToDecimal = function (hex) {
        return parseInt(hex, 16);
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Utils);
    return Utils;
}());



/***/ }),

/***/ "./src/app/core/web-func.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebFuncService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var WebFuncService = /** @class */ (function () {
    function WebFuncService(http) {
        this.http = http;
        this.coinMarketCapApi = 'https://api.coinmarketcap.com/v1/';
    }
    WebFuncService.prototype.getCurrentPriceAsync = function (coinId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // const res = await this.http.get(this.coinMarketCapApi + '/ticker/' + coinId).toPromise();
                // console.log(res);
                // console.log(JSON.stringify(res));
                // if (res) {
                //   return Promise.resolve(parseFloat(res['price_usd']));
                // }
                return [2 /*return*/, Promise.resolve(null)];
            });
        });
    };
    WebFuncService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebFuncService);
    return WebFuncService;
}());



/***/ }),

/***/ "./src/app/core/web3.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthAccount; });
/* unused harmony export TransactionReceipt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Web3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_service__ = __webpack_require__("./src/app/core/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./src/app/core/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abi__ = __webpack_require__("./src/app/core/abi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Web3 = __webpack_require__("./node_modules/web3/src/index.js");
var Tx = __webpack_require__("./node_modules/ethereumjs-tx/es5/index.js");
var EthAccount = /** @class */ (function () {
    function EthAccount() {
    }
    return EthAccount;
}());

var TransactionReceipt = /** @class */ (function () {
    function TransactionReceipt() {
    }
    return TransactionReceipt;
}());

var Web3Service = /** @class */ (function () {
    function Web3Service(utils, abi, firebase) {
        this.utils = utils;
        this.abi = abi;
        this.firebase = firebase;
        this.currentProvider = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentProvider$ = this.currentProvider.asObservable();
        this.authenticatedAccount = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.authenticatedAccount$ = this.authenticatedAccount.asObservable();
        if (typeof this.web3 !== 'undefined') {
            this.setProvider(this.web3.currentProvider);
        }
        else {
            this.setProvider(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
        }
    }
    Web3Service.prototype.setProvider = function (provider) {
        this.web3 = new Web3(provider);
        this.currentProvider.next(provider.host);
    };
    Web3Service.prototype.getAccountFromPKeyAsync = function (pkey) {
        return __awaiter(this, void 0, void 0, function () {
            var acc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web3.eth.accounts.privateKeyToAccount(pkey)];
                    case 1:
                        acc = _a.sent();
                        if (acc != null) {
                            this.authenticatedAccount.next(acc);
                            this.firebase.logAccountRetrieval(acc.address);
                        }
                        return [2 /*return*/, Promise.resolve(acc)];
                }
            });
        });
    };
    Web3Service.prototype.getTokenBalanceAsync = function (userAddress, tokenAddr) {
        return __awaiter(this, void 0, void 0, function () {
            var parsedUserAddress, functionHash, contractData, balanceHex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parsedUserAddress = this.utils.getNakedAddress(userAddress);
                        functionHash = this.utils.getFunctionSignature('balanceOf(address)');
                        contractData = functionHash + '000000000000000000000000' + parsedUserAddress;
                        return [4 /*yield*/, this.web3.eth.call({
                                to: tokenAddr,
                                data: contractData
                            })];
                    case 1:
                        balanceHex = _a.sent();
                        if (balanceHex) {
                            return [2 /*return*/, Promise.resolve(this.web3.utils.toBN(balanceHex).toString())];
                        }
                        return [2 /*return*/, Promise.reject(null)];
                }
            });
        });
    };
    Web3Service.prototype.getEthBalanceAsync = function (userAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var balance, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web3.eth.getBalance(userAddress)];
                    case 1:
                        balance = _a.sent();
                        if (balance) {
                            console.log(balance);
                            tokens = this.web3.utils.toBN(balance).toString();
                            console.log('Eth Owned: ' + this.web3.utils.fromWei(tokens, 'ether'));
                            return [2 /*return*/, Promise.resolve(tokens)];
                        }
                        return [2 /*return*/, Promise.reject(null)];
                }
            });
        });
    };
    Web3Service.prototype.estimateGasAsync = function (rawTransaction) {
        return __awaiter(this, void 0, void 0, function () {
            var gasCost;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web3.eth.estimateGas(rawTransaction)];
                    case 1:
                        gasCost = _a.sent();
                        console.log('Gascost: ' + gasCost);
                        return [2 /*return*/, Promise.resolve(gasCost)];
                }
            });
        });
    };
    Web3Service.prototype.getPurchaseTokensTransaction = function (userAddress, saleContractAddress, weiAmountHex, gasPriceGwei, gasLimit) {
        return __awaiter(this, void 0, void 0, function () {
            var contract, count, chainId, rawTransaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userAddress = this.utils.prefixHex(userAddress);
                        saleContractAddress = this.utils.prefixHex(saleContractAddress);
                        contract = new this.web3.eth.Contract(this.abi.crowdsale, saleContractAddress, {
                            from: userAddress
                        });
                        return [4 /*yield*/, this.web3.eth.getTransactionCount(userAddress)];
                    case 1:
                        count = _a.sent();
                        return [4 /*yield*/, this.web3.eth.net.getId()];
                    case 2:
                        chainId = _a.sent();
                        rawTransaction = {
                            'from': userAddress,
                            'nonce': '0x' + count.toString(16),
                            'gasPrice': this.web3.utils.toHex(gasPriceGwei * 1e9),
                            'gasLimit': this.web3.utils.toHex(gasLimit),
                            'to': saleContractAddress,
                            'value': weiAmountHex,
                            'data': contract.methods.buyTokens(userAddress).encodeABI(),
                            'chainId': chainId
                        };
                        return [2 /*return*/, Promise.resolve(rawTransaction)];
                }
            });
        });
    };
    Web3Service.prototype.purchaseTokensAsync = function (userAddress, userPrivKey, saleContractAddress, weiAmountHex, gasPriceGwei, gasLimit, successCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var rawTransaction, privKey, tx, serializedTxHex, receipt, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getPurchaseTokensTransaction(userAddress, saleContractAddress, weiAmountHex, gasPriceGwei, gasLimit)];
                    case 1:
                        rawTransaction = _a.sent();
                        console.log("Raw tx: \n" + JSON.stringify(rawTransaction, null, '\t'));
                        this.firebase.logTokenPurchaseTxCreated(userAddress, rawTransaction);
                        userPrivKey = this.utils.getNakedAddress(userPrivKey);
                        privKey = new Buffer(userPrivKey, 'hex');
                        tx = new Tx(rawTransaction);
                        tx.sign(privKey);
                        serializedTxHex = tx.serialize().toString('hex');
                        console.log("Sending signed tx: " + serializedTxHex.toString('hex'));
                        this.firebase.logTokenPurchaseTxSent(userAddress, serializedTxHex.toString('hex'));
                        return [4 /*yield*/, this.web3.eth.sendSignedTransaction('0x' + serializedTxHex.toString('hex'))
                                .on('transactionHash', function (hash) {
                                successCallback(hash);
                            })];
                    case 2:
                        receipt = _a.sent();
                        console.log("Receipt: \n" + JSON.stringify(receipt, null, '\t'));
                        this.firebase.logTokenPurchaseSuccess(userAddress, JSON.stringify(receipt));
                        return [2 /*return*/, Promise.resolve(receipt)];
                    case 3:
                        e_1 = _a.sent();
                        this.firebase.logTokenPurchaseError(userAddress, JSON.stringify(e_1));
                        return [2 /*return*/, Promise.reject(null)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Web3Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_4__abi__["a" /* ABI */], __WEBPACK_IMPORTED_MODULE_2__firebase_service__["a" /* FirebaseService */]])
    ], Web3Service);
    return Web3Service;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/app/dashboard/coin-summary/coin-summary.component.css":
/***/ (function(module, exports) {

module.exports = ".coin-card {\n  text-align: left;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n::ng-deep .coin-card .mat-card-header-text {\n  margin: 0 auto;\n}\n\nimg.coin-emblem {\n  max-width: 100px;\n  max-height: 100px;\n  margin: auto 0px;\n  cursor: pointer;\n}\n\ndiv.content {\n  margin: auto 0 auto 40px;\n}\n\ndiv.content .title {\n  font-size: 1.6em;\n}\n\nmat-card.coin-card div.actions {\n  text-align: right;\n  margin: auto 0;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/coin-summary/coin-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"coin-card\"  fxLayoutAlign=\"row\">\n  <img fxFlex=\"100px\" (click)=\"setBalanceAsync()\" mat-card-image class=\"coin-emblem\" src=\"assets/token-images/{{coin.id}}.png\" alt=\"{{coin.name}} emblem\">\n  <div class=\"content\" fxFlex=\"40\">\n    <span class=\"title\">{{coin.name}} ({{coin.symbol}})</span>\n    <br/>\n    <span class=\"balance\">Balance: <span *ngIf=\"balanceLoaded\">{{balance | weiToEth | currencyFormat}}</span> {{coin.symbol}}</span>\n    <span *ngIf=\"price != null\">{{(balance | weiToEth )* price}} USD</span>\n\n  </div>\n  <div fxFlex></div>\n  <div fxFlex=\"40\" class=\"actions\">\n    <button mat-button [disabled]=\"true\">SEND</button>\n    <button mat-button [disabled]=\"true\">RECEIVE</button>\n    <button mat-button [disabled]=\"coin.saleContractAddress == null || !balanceLoaded\" (click)=\"purchaseTokens()\">EXCHANGE</button>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/dashboard/coin-summary/coin-summary.component.scss-theme.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/dashboard/coin-summary/coin-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_web3_service__ = __webpack_require__("./src/app/core/web3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_web_func_service__ = __webpack_require__("./src/app/core/web-func.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_coin__ = __webpack_require__("./src/app/core/coin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__purchase_token_dialog_purchase_token_dialog_component__ = __webpack_require__("./src/app/dashboard/coin-summary/purchase-token-dialog/purchase-token-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CoinSummaryComponent = /** @class */ (function () {
    function CoinSummaryComponent(web3Service, webFunc, dialog) {
        this.web3Service = web3Service;
        this.webFunc = webFunc;
        this.dialog = dialog;
        this.price = null;
        this.balanceLoaded = false;
    }
    CoinSummaryComponent.prototype.isEthereum = function () {
        return this.coin.id === 'ethereum';
    };
    CoinSummaryComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // subscribe to block even to keep balance up to date
                        // const filter = this.web3Service.web3.eth.subscribe('latest');
                        this.setBalanceAsync();
                        _a = this;
                        return [4 /*yield*/, this.webFunc.getCurrentPriceAsync(this.coin.id)];
                    case 1:
                        _a.price = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinSummaryComponent.prototype.setBalanceAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.balanceLoaded = false;
                        if (!this.isEthereum()) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.web3Service.getEthBalanceAsync(this.account.address)];
                    case 1:
                        _a.balance = _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, this.web3Service.getTokenBalanceAsync(this.account.address, this.coin.contractAddress)];
                    case 3:
                        _b.balance = _c.sent();
                        _c.label = 4;
                    case 4:
                        this.balanceLoaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinSummaryComponent.prototype.ngOnChanges = function (changes) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CoinSummaryComponent.prototype.purchaseTokens = function (watchListName) {
        var _this = this;
        var tokenPurchaseDialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__purchase_token_dialog_purchase_token_dialog_component__["a" /* PurchaseTokenDialogComponent */], {
            width: '500px',
            data: {
                coin: this.coin,
                account: this.account
            }
        });
        tokenPurchaseDialog.afterClosed().subscribe(function (res) {
            if (res !== undefined && res === true) {
                _this.setBalanceAsync();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__core_coin__["a" /* Coin */])
    ], CoinSummaryComponent.prototype, "coin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__core_web3_service__["a" /* EthAccount */])
    ], CoinSummaryComponent.prototype, "account", void 0);
    CoinSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oasis-coin-summary',
            template: __webpack_require__("./src/app/dashboard/coin-summary/coin-summary.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/coin-summary/coin-summary.component.css"), __webpack_require__("./src/app/dashboard/coin-summary/coin-summary.component.scss-theme.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_web3_service__["b" /* Web3Service */], __WEBPACK_IMPORTED_MODULE_3__core_web_func_service__["a" /* WebFuncService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], CoinSummaryComponent);
    return CoinSummaryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/coin-summary/purchase-token-dialog/purchase-token-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".form {\n  min-width: 150px;\n  max-width: 70vw;\n  width: 100%;\n  min-height: 80px;\n}\n\n.eth-input {\n  width: 100%;\n  padding: 15px 5px;\n}\n\nmat-spinner.spinner {\n  margin: 0 auto;\n  display: -webkit-inline-box;\n  color: orange;\n}\n\nmat-icon.green-icon {\n  color: greenyellow;\n}\n\nspan#spinnerContainer,\nspan#iconContainer {\n  display: -ms-inline-grid;\n  display: inline-grid;\n}\n\n.tx-link {\n  font-size: 0.8em;\n  color: lightskyblue;\n  word-wrap: break-word;\n}\n\n.errorMessage {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/coin-summary/purchase-token-dialog/purchase-token-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\n  Purchase {{coin.symbol}}\n  <small class=\"ethBalance\" *ngIf=\"ethBalance && !transactionSent\">ETH balance: {{ethBalance | weiToEth}}</small>\n</h1>\n<div mat-dialog-content *ngIf=\"!transactionSent\">\n  <div class=\"form\">\n\n    <mat-form-field color=\"accent\" class=\"eth-input\">\n      <input matInput [disabled]=\"sending\" placeholder=\"ETH Amount\" (blur)=\"estimateGas(purchaseAmountEth, gweiAmount, gasLimit)\"\n        [(ngModel)]=\"purchaseAmountEth\" />\n    </mat-form-field>\n    <div class=\"gwei-amount\" fxLayoutAlign=\"row\">\n      <span fxFlex=\"60px\">Gwei: {{gweiAmount}}</span>\n\n      <mat-slider fxFlex class=\"\" [disabled]=\"sending\" [invert]=\"invert\" [max]=\"100\" [min]=\"1\" [step]=\"1\" [thumb-label]=\"true\"\n        [(ngModel)]=\"gweiAmount\" [vertical]=\"false\">\n      </mat-slider>\n    </div>\n\n    <mat-form-field color=\"accent\" class=\"eth-input\">\n      <input matInput [disabled]=\"sending || calculatingGas\" placeholder=\"GAS Limit\" [(ngModel)]=\"gasLimit\" />\n    </mat-form-field>\n    <p class=\"tx-cost\">Tx cost: {{getGasCostEth(gasLimit, gweiAmount)}} ETH</p>\n    <p class=\"token-amount\">\n      <b>You will get: {{getTokenAmount()}} {{coin.symbol}}</b>\n    </p>\n\n  </div>\n  <div [hidden]=\"!error\" class=\"errorMessage\">\n    {{errorMessage}}\n  </div>\n</div>\n<div mat-dialog-content *ngIf=\"transactionSent\">\n  Transaction sent successfully, track it here:\n  <a class=\"tx-link\" href=\"{{getTxLink(txHash)}}\" target=\"txInfo\">{{getTxLink(txHash)}}</a>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close [disabled]=\"sending\" (click)=\"onNoClick()\">\n    Cancel\n  </button>\n  <button mat-raised-button color=\"accent\" (click)=\"transactionSent ? onNoClick() : purchaseTokensAsync(purchaseAmountEth, gweiAmount, gasLimit)\"\n    [disabled]=\"sending|| calculatingGas\">\n    <span id=\"spinnerContainer\" *ngIf=\"sending && !transactionSent\">\n      <mat-spinner [diameter]=\"20\" class=\"spinner\">\n      </mat-spinner>\n    </span>\n    <span *ngIf=\"!sending && !transactionSent\">\n      PURCHASE\n    </span>\n    <span id=\"iconContainer\" *ngIf=\"transactionSent\">\n      <mat-icon class=\"green-icon\">done</mat-icon>\n    </span>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/coin-summary/purchase-token-dialog/purchase-token-dialog.component.scss-theme.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/dashboard/coin-summary/purchase-token-dialog/purchase-token-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseTokenDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_web3_service__ = __webpack_require__("./src/app/core/web3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var PurchaseTokenDialogComponent = /** @class */ (function () {
    function PurchaseTokenDialogComponent(dialogRef, data, web3Service) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.web3Service = web3Service;
        this.purchaseAmountEth = '0.000';
        this.gweiAmount = 11;
        this.gasLimit = 25000;
        this.calculatingGas = false;
        this.error = false;
        this.sending = false;
        this.transactionSent = false;
        this.coin = data.coin;
        this.account = data.account;
    }
    PurchaseTokenDialogComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.web3Service.getEthBalanceAsync(this.account.address)];
                    case 1:
                        _a.ethBalance = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PurchaseTokenDialogComponent.prototype.getTokenAmount = function () {
        return (parseFloat(this.purchaseAmountEth) * this.coin.ratio).toFixed(8);
    };
    PurchaseTokenDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PurchaseTokenDialogComponent.prototype.getGasCostEth = function (gas, gwei) {
        var costInGwei = gas * gwei;
        var costInWei = this.web3Service.web3.utils.toWei(costInGwei.toString(), 'gwei');
        return this.web3Service.web3.utils.fromWei(costInWei);
    };
    PurchaseTokenDialogComponent.prototype.estimateGas = function (ethAmount, gasPriceGwei, gasLimit) {
        return __awaiter(this, void 0, void 0, function () {
            var tx, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(parseFloat(ethAmount) > 0)) return [3 /*break*/, 3];
                        this.calculatingGas = true;
                        return [4 /*yield*/, this.web3Service.getPurchaseTokensTransaction(this.account.address, this.coin.saleContractAddress, this.web3Service.web3.utils.toHex(this.web3Service.web3.utils.toWei(ethAmount)), gasPriceGwei, 250000)];
                    case 1:
                        tx = _b.sent();
                        console.log('evaluating cost of tx:' + JSON.stringify(tx));
                        _a = this;
                        return [4 /*yield*/, this.web3Service.estimateGasAsync(tx)];
                    case 2:
                        _a.gasLimit = _b.sent();
                        this.calculatingGas = false;
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseTokenDialogComponent.prototype.setTransactionAsSent = function (txHash) {
        this.transactionSent = true;
        this.sending = false;
        this.txHash = txHash;
    };
    PurchaseTokenDialogComponent.prototype.getTxLink = function (txHash) {
        // To modularise can base this on provider
        return 'https://ropsten.etherscan.io/tx/' + txHash;
    };
    PurchaseTokenDialogComponent.prototype.purchaseTokensAsync = function (ethAmount, gasPriceGwei, gasLimit) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(parseFloat(ethAmount) > 0)) return [3 /*break*/, 5];
                        this.sending = true;
                        this.error = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.web3Service.purchaseTokensAsync(this.account.address, this.account.privateKey, this.coin.saleContractAddress, this.web3Service.web3.utils.toHex(this.web3Service.web3.utils.toWei(ethAmount)), gasPriceGwei, gasLimit, this.setTransactionAsSent.bind(this))];
                    case 2:
                        result = _a.sent();
                        if (!result || parseInt(result.status, 16) === 0) {
                            this.setError('Transaction sending failed');
                        }
                        else {
                            this.setTransactionAsSent(result.transactionHash);
                            setTimeout(function () { return _this.dialogRef.close(true); }, 10000);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.setError('Transaction sending failed');
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.setError('Purchase amount must be a positive number');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseTokenDialogComponent.prototype.setError = function (message) {
        if (!this.transactionSent) {
            this.sending = false;
            this.error = true;
            this.errorMessage = message;
        }
    };
    PurchaseTokenDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oasis-purchase-token-dialog',
            template: __webpack_require__("./src/app/dashboard/coin-summary/purchase-token-dialog/purchase-token-dialog.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/coin-summary/purchase-token-dialog/purchase-token-dialog.component.css"), __webpack_require__("./src/app/dashboard/coin-summary/purchase-token-dialog/purchase-token-dialog.component.scss-theme.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__core_web3_service__["b" /* Web3Service */]])
    ], PurchaseTokenDialogComponent);
    return PurchaseTokenDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".dashboard-title {\n  margin: 0px auto;\n  padding: 40px 0px 10px 0px;\n  text-align: center;\n}\n\n.coin-container {\n  width: 75%;\n  margin: 0 auto;\n}\n\noasis-coin-summary {\n  margin: 30px 15px;\n}\n\n@media screen and (max-width: 959px) {\n  div.coin-container {\n    width: 100%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"dashboard-title\">Dashboard</h1>\n\n<div class=\"coin-container\" fxLayout=\"column\" fxLayoutAlign=\"center\" *ngIf=\"account\">\n      <div fxFlex=\"20\">\n\n      </div>\n      <oasis-coin-summary fxFlex=\"60\" *ngFor=\"let coin of coins\" [coin]=\"coin\" [account]=\"account\"></oasis-coin-summary>\n      <div fxFlex=\"20\">\n\n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_web3_service__ = __webpack_require__("./src/app/core/web3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_firebase_service__ = __webpack_require__("./src/app/core/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(web3, router, firebase) {
        this.web3 = web3;
        this.router = router;
        this.firebase = firebase;
        this.coins = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.web3.authenticatedAccount$.subscribe(function (acc) {
            if (acc == null) {
                _this.router.navigate(['/']);
            }
            else {
                _this.account = acc;
                _this.firebase.coins.subscribe(function (arr) {
                    console.log(JSON.stringify(arr));
                    _this.coins = arr;
                });
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oasis-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_web3_service__["b" /* Web3Service */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__core_firebase_service__["a" /* FirebaseService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coin_summary_coin_summary_component__ = __webpack_require__("./src/app/dashboard/coin-summary/coin-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coin_summary_purchase_token_dialog_purchase_token_dialog_component__ = __webpack_require__("./src/app/dashboard/coin-summary/purchase-token-dialog/purchase-token-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot([
                    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */], data: { state: 'dashboard' } },
                ]),
                __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSliderModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__coin_summary_purchase_token_dialog_purchase_token_dialog_component__["a" /* PurchaseTokenDialogComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__coin_summary_coin_summary_component__["a" /* CoinSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_6__coin_summary_purchase_token_dialog_purchase_token_dialog_component__["a" /* PurchaseTokenDialogComponent */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/home/authenticate/authenticate.component.css":
/***/ (function(module, exports) {

module.exports = ".pkey-input{\n    width: 80%;\n}\n\n.pkey-submit{\n    height:40px;\n    margin:auto;\n}\n\n.errorMessage{\n    color: #E53935;\n    font-size: 0.9em;\n}"

/***/ }),

/***/ "./src/app/home/authenticate/authenticate.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form>\n    <mat-form-field color=\"accent\" class=\"pkey-input\">\n      <textarea matInput placeholder=\"Private key\" name=\"privateKey\" [(ngModel)]=\"privateKey\"></textarea>\n    </mat-form-field>\n    <span fxFlex></span>\n    <button type=\"button\" [disabled]=\"retrievingKey\" mat-raised-button color=\"accent\" class=\"pkey-submit\" (click)=\"retrieveAccountAsync(privateKey)\">\n      GO\n    </button>\n  </form>\n  <span class=\"errorMessage\" *ngIf=\"showError\">{{error}}</span>\n</mat-card>"

/***/ }),

/***/ "./src/app/home/authenticate/authenticate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_web3_service__ = __webpack_require__("./src/app/core/web3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthenticateComponent = /** @class */ (function () {
    function AuthenticateComponent(web3, router) {
        this.web3 = web3;
        this.router = router;
        this.retrievingKey = false;
        this.showError = false;
    }
    AuthenticateComponent.prototype.ngOnInit = function () {
    };
    AuthenticateComponent.prototype.isHexString = function (str) {
        if (str === '') {
            return true;
        }
        str = str.substring(0, 2) === '0x' ? str.substring(2).toUpperCase() : str.toUpperCase();
        var re = /^[0-9A-F]+$/g;
        return re.test(str);
    };
    AuthenticateComponent.prototype.retrieveAccountAsync = function (pkey) {
        return __awaiter(this, void 0, void 0, function () {
            var acc, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showError = false;
                        if (!this.isHexString(pkey)) return [3 /*break*/, 5];
                        this.retrievingKey = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.web3.getAccountFromPKeyAsync(pkey)];
                    case 2:
                        acc = _a.sent();
                        if (acc != null) {
                            this.router.navigate(['/dashboard']);
                        }
                        this.retrievingKey = false;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.retrievingKey = false;
                        this.showError = true;
                        this.error = 'Error retrieving associated account';
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.showError = true;
                        this.error = 'Private key must be a hex string';
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AuthenticateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oasis-authenticate',
            template: __webpack_require__("./src/app/home/authenticate/authenticate.component.html"),
            styles: [__webpack_require__("./src/app/home/authenticate/authenticate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_web3_service__["b" /* Web3Service */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthenticateComponent);
    return AuthenticateComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%\n}\n\n.home-container {\n  height: calc(100% - 64px);\n}\n\n.oasis-title-container {\n  margin-left: -75px;\n}\n\n.oasis-title {\n  margin: auto 0px 0px 0px;\n  font-size: 4em;\n}\n\n.rpo-link{\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <div fxFlex=\"10\"></div>\n  <div fxFlex=\"150px\" fxLayoutAlign=\"row\" class=\"oasis-title-container\">\n    <img src=\"assets/palm-tree.png\" fxFlex=\"150px\" class=\"oasis-icon\">\n    <h1 class=\"oasis-title\">My Oasis</h1>\n  </div>\n  <div fxFlex=\"50px\">\n    <p>Keep your Credits safe in this sleek wallet then explore the limits of your imagination in the Oasis</p>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width: 80%\" fxFlexOffset=\"6\">\n    <button fxFlex=\"150px\" mat-raised-button color=\"accent\" class=\"auth-button\" (click)=\"authViaPkey()\">\n      Enter Private Key\n    </button>\n    <button [disabled]=\"true\" fxFlexOffset=\"40px\" fxFlex=\"150px\" mat-raised-button color=\"accent\" class=\"auth-button\" (click)=\"createAccount()\">\n      Create account\n    </button>\n  </div>\n  <div *ngIf=\"authType == 'pKey'\" [@authTransition]  style=\"width: 80%\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlexOffset=\"40px\">\n    <oasis-authenticate fxFlex=\"80\"></oasis-authenticate>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.authType = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.createAccount = function () {
    };
    HomeComponent.prototype.authViaPkey = function () {
        if (this.authType === 'pKey') {
            this.authType = '';
        }
        else {
            this.authType = 'pKey';
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oasis-home',
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* trigger */])('authTransition', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ transform: 'translateY(200%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ transform: 'translateY(0%)' }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ transform: 'translateY(0%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ transform: 'translateY(200%)' }))
                    ])
                ])],
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenticate_authenticate_component__ = __webpack_require__("./src/app/home/authenticate/authenticate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__core_core_module__["a" /* CoreModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__authenticate_authenticate_component__["a" /* AuthenticateComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBdo33SThPU1avpGmcZALK3TQhD1Jk8Urg',
        authDomain: 'mycrypto-web-wallet.firebaseapp.com',
        databaseURL: 'https://mycrypto-web-wallet.firebaseio.com',
        projectId: 'mycrypto-web-wallet',
        storageBucket: 'mycrypto-web-wallet.appspot.com',
        messagingSenderId: '972262680456'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map