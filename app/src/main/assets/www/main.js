(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Leon\Codes\Angular\leon-ionic-learn\src\main.ts */"zUnb");


/***/ }),

/***/ "A6fv":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AuthInterceptor = class AuthInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('access_token');
        if (token) {
            let secureHeaders = req.headers;
            secureHeaders = secureHeaders.append('Authorization', `bearer ${token}`);
            const secureReq = req.clone({ headers: secureHeaders });
            return next.handle(secureReq);
        }
        return next.handle(req);
    }
};
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "AI8P":
/*!***********************************************************!*\
  !*** ./src/app/services/user-profile-provider.service.ts ***!
  \***********************************************************/
/*! exports provided: UserProfileProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileProviderService", function() { return UserProfileProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ "Edqf");
/* harmony import */ var _message_opsat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-opsat.service */ "qkpx");
/* harmony import */ var _user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.service */ "Q+Hy");





let UserProfileProviderService = class UserProfileProviderService {
    constructor(profileSrv, opsat) {
        this.profileSrv = profileSrv;
        this.opsat = opsat;
    }
    getProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.profileSrv.getProfile();
        });
    }
    resolve(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const profile = yield this.getProfile();
            localStorage.setItem('employeeId', profile.employeeId);
            localStorage.setItem('identityId', profile.identityId);
            localStorage.setItem('tenantId', profile.tenantId);
            this.opsat.publish(_enums__WEBPACK_IMPORTED_MODULE_2__["AppMessageTopicEnum"].profileReady);
            return profile;
        });
    }
};
UserProfileProviderService.ctorParameters = () => [
    { type: _user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"] },
    { type: _message_opsat_service__WEBPACK_IMPORTED_MODULE_3__["MessageOpsatService"] }
];
UserProfileProviderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserProfileProviderService);



/***/ }),

/***/ "AytR":
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
    apiServer: 'http://cxvpn.cxist.com:22504'
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

/***/ "E+OF":
/*!***************************************!*\
  !*** ./src/app/tokens/api-gateway.ts ***!
  \***************************************/
/*! exports provided: API_GATEWAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GATEWAY", function() { return API_GATEWAY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const API_GATEWAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('api gateway');


/***/ }),

/***/ "Edqf":
/*!********************************!*\
  !*** ./src/app/enums/index.ts ***!
  \********************************/
/*! exports provided: AppMessageTopicEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_message_topic_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-message-topic.enum */ "IAlE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppMessageTopicEnum", function() { return _app_message_topic_enum__WEBPACK_IMPORTED_MODULE_0__["AppMessageTopicEnum"]; });




/***/ }),

/***/ "IAlE":
/*!*************************************************!*\
  !*** ./src/app/enums/app-message-topic.enum.ts ***!
  \*************************************************/
/*! exports provided: AppMessageTopicEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMessageTopicEnum", function() { return AppMessageTopicEnum; });
var AppMessageTopicEnum;
(function (AppMessageTopicEnum) {
    AppMessageTopicEnum["profileReady"] = "profileReady";
    AppMessageTopicEnum["logout"] = "logout";
})(AppMessageTopicEnum || (AppMessageTopicEnum = {}));


/***/ }),

/***/ "Q+Hy":
/*!**************************************************!*\
  !*** ./src/app/services/user-profile.service.ts ***!
  \**************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.service */ "ZgYs");





let UserProfileService = class UserProfileService {
    constructor(identitySrv) {
        this.identitySrv = identitySrv;
        this._profile$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    get profile$() {
        return this._profile$.asObservable();
    }
    getProfile(tenantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const lastProfile = this._profile$.getValue();
            if (lastProfile && (!tenantId || lastProfile.tenantId === tenantId)) {
                return Promise.resolve(lastProfile);
            }
            yield this.updateToken(tenantId);
            return this.identitySrv.identityProfile().pipe(this.transferProfile()).toPromise();
        });
    }
    updateProfile(tenantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.updateToken(tenantId);
            return this.identitySrv.identityProfile().pipe(this.transferProfile()).toPromise();
        });
    }
    updateToken(tenantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!tenantId) {
                return;
            }
            let res = yield this.identitySrv.refreshToken(tenantId).toPromise();
            localStorage.setItem('access_token', res.access_token);
            localStorage.setItem('refresh_token', res.refresh_token);
        });
    }
    transferProfile() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            var _a;
            // tslint:disable-next-line: prefer-immediate-return
            let profile = {
                identityId: res.identityId,
                employeeId: res.employeeId,
                employeeName: res.name,
                roleIds: res.roleIds ? res.roleIds.split(',') : [],
                departmentIds: res.departmentIds ? (_a = res.departmentIds) === null || _a === void 0 ? void 0 : _a.split(',') : [],
                name: res.name, tenantId: res.tenantId,
                isTenantAdmin: res.isTenantAdmin,
                isPlatformAdmin: res.isPlatformAdmin
            };
            return profile;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(profile => this.identitySrv.queryTenantList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ts => {
            let tenant = ts.find(t => t.id === profile.tenantId);
            return Object.assign(Object.assign({}, profile), { tenantName: tenant.name });
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(profile => this._profile$.next(profile)));
    }
};
UserProfileService.ctorParameters = () => [
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"] }
];
UserProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserProfileService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! subsink */ "33Jv");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums */ "Edqf");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @env/environment */ "AytR");










let AppComponent = class AppComponent {
    constructor(platform, messagingSrv, opsat, toastController) {
        this.platform = platform;
        this.messagingSrv = messagingSrv;
        this.opsat = opsat;
        this.toastController = toastController;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_6__["SubSink"]();
        this.subs.sink = this.opsat.message$.pipe(Object(_services__WEBPACK_IMPORTED_MODULE_8__["topicFilter"])(_enums__WEBPACK_IMPORTED_MODULE_7__["AppMessageTopicEnum"].profileReady), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(200)).subscribe(() => {
            // let employeeId = localStorage.getItem('employeeId');
            // console.log('employeeId:', employeeId);
            this.startupMessaging();
        });
        this.subs.sink = this.opsat.message$.pipe(Object(_services__WEBPACK_IMPORTED_MODULE_8__["topicFilter"])(_enums__WEBPACK_IMPORTED_MODULE_7__["AppMessageTopicEnum"].logout)).subscribe(() => {
            this.shutdownMessaging();
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    ngOnInit() {
        //
    }
    startupMessaging() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let config = {
                gateway: _env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiServer,
                token: localStorage.getItem('access_token'),
                expiresIn: localStorage.getItem('expires_in'),
                refreshToken: localStorage.getItem('refresh_token'),
                tenantId: localStorage.getItem('tenantId'),
                identityId: localStorage.getItem('identityId'),
                employeeId: localStorage.getItem('employeeId'),
                aliase: undefined,
            };
            if (typeof cordova === 'undefined') {
                this.showMessage('当前应用不在手机端运行,前台服务将不会启动');
                return;
            }
            const startupMessaingPro = () => {
                return new Promise((res, rej) => {
                    cordova.plugins.Messaging.startup(JSON.stringify(config), () => {
                        res(null);
                    }, err => {
                        rej(err);
                    });
                });
            };
            try {
                config.aliase = yield this.messagingSrv.getAliase(config.employeeId).toPromise();
                console.log('config:', config.aliase);
                yield startupMessaingPro();
                this.showMessage(`服务启动成功`);
            }
            catch (err) {
                this.showMessage(`服务启动失败:${err}`, 1000 * 60 * 2);
            }
        });
    }
    shutdownMessaging() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (typeof cordova === 'undefined') {
                return;
            }
            const shutdownMessaingPro = () => {
                return new Promise((res, rej) => {
                    cordova.plugins.Messaging.shutdown(null, () => {
                        res(null);
                    }, err => {
                        rej(err);
                    });
                });
            };
            try {
                yield shutdownMessaingPro();
                this.showMessage(`服务停止成功`);
            }
            catch (err) {
                this.showMessage(`服务停止失败:${err}`, 1000 * 60 * 2);
            }
        });
    }
    showMessage(msg, duration = 2000) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration
            });
            toast.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["MessagingService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["MessageOpsatService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tokens */ "nDUn");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @env/environment */ "AytR");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [
            _services__WEBPACK_IMPORTED_MODULE_8__["IdentityService"],
            _services__WEBPACK_IMPORTED_MODULE_8__["UserProfileService"],
            _services__WEBPACK_IMPORTED_MODULE_8__["UserProfileProviderService"],
            _services__WEBPACK_IMPORTED_MODULE_8__["MessagingService"],
            _services__WEBPACK_IMPORTED_MODULE_8__["MessageOpsatService"],
            { provide: _tokens__WEBPACK_IMPORTED_MODULE_9__["API_GATEWAY"], useValue: _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiServer },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _services__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _services__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZgYs":
/*!**********************************************!*\
  !*** ./src/app/services/identity.service.ts ***!
  \**********************************************/
/*! exports provided: IdentityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return IdentityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "cr+I");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens */ "nDUn");





let IdentityService = class IdentityService {
    constructor(gateway, httpClient) {
        this.gateway = gateway;
        this.httpClient = httpClient;
        this.uri = `${this.gateway}`;
    }
    login(account) {
        let url = `${this.uri}/ids/connect/token`;
        const body = new FormData();
        body.set('grant_type', 'password');
        body.set('client_id', 'server');
        body.set('username', account.username);
        body.set('password', account.password);
        return this.httpClient.post(url, body);
    }
    identityProfile() {
        let url = `${this.uri}/ids/Identity/Profile`;
        return this.httpClient.get(url);
    }
    queryTenantList(queryParam = {}) {
        const queryPart = query_string__WEBPACK_IMPORTED_MODULE_3__["stringify"](queryParam);
        return this.httpClient.get(`${this.uri}/ids/Identity/tenant?${queryPart}`);
    }
    refreshToken(tenantId) {
        let refreshToken = localStorage.getItem('refresh_token');
        const body = new FormData();
        body.set('grant_type', 'refresh_token');
        body.set('client_id', 'server');
        body.set('refresh_token', refreshToken);
        if (tenantId) {
            body.set('tenantId', tenantId);
        }
        return this.httpClient.post(`${this.uri}/ids/connect/token`, body);
    }
};
IdentityService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_tokens__WEBPACK_IMPORTED_MODULE_4__["API_GATEWAY"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
IdentityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], IdentityService);



/***/ }),

/***/ "c7tv":
/*!***********************************************!*\
  !*** ./src/app/services/messaging.service.ts ***!
  \***********************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens */ "nDUn");




let MessagingService = class MessagingService {
    constructor(gateway, httpClient) {
        this.gateway = gateway;
        this.httpClient = httpClient;
    }
    getAliase(employeeId) {
        let info = { type: 'user', info: employeeId };
        return this.httpClient.get(`${this.gateway}/message/alias?bizObjId=${JSON.stringify(info)}`);
    }
    sendMessage(title, message, link) {
        let info = { title, content: message, link };
        let data = {
            sender: {
                type: "user",
                info: "11111"
            },
            receiver: {
                type: "user",
                info: localStorage.getItem('employeeId')
            },
            message: {
                type: "plain",
                info: JSON.stringify(info)
            },
            options: {
                notSaveInBox: false
            }
        };
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('tenantId', localStorage.getItem('tenantId'));
        // let options = new RequestOptions({ headers: headers });
        return this.httpClient.post(`${this.gateway}/message/send`, data, {
            headers: {
                'Content-Type': 'application/json',
                'tenantId': localStorage.getItem('tenantId')
            }
        });
    }
};
MessagingService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_tokens__WEBPACK_IMPORTED_MODULE_3__["API_GATEWAY"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MessagingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], MessagingService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "nDUn":
/*!*********************************!*\
  !*** ./src/app/tokens/index.ts ***!
  \*********************************/
/*! exports provided: API_GATEWAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_gateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-gateway */ "E+OF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_GATEWAY", function() { return _api_gateway__WEBPACK_IMPORTED_MODULE_0__["API_GATEWAY"]; });




/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: IdentityService, AuthInterceptor, ErrorInterceptor, UserProfileService, MessagingService, topicFilter, topicFilters, topicExpressionFilter, dataMap, topicMap, MessageOpsatService, UserProfileProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.service */ "ZgYs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return _identity_service__WEBPACK_IMPORTED_MODULE_0__["IdentityService"]; });

/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.interceptor */ "A6fv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "puwc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });

/* harmony import */ var _user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.service */ "Q+Hy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return _user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"]; });

/* harmony import */ var _messaging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messaging.service */ "c7tv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return _messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"]; });

/* harmony import */ var _message_opsat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-opsat.service */ "qkpx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topicFilter", function() { return _message_opsat_service__WEBPACK_IMPORTED_MODULE_5__["topicFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topicFilters", function() { return _message_opsat_service__WEBPACK_IMPORTED_MODULE_5__["topicFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topicExpressionFilter", function() { return _message_opsat_service__WEBPACK_IMPORTED_MODULE_5__["topicExpressionFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dataMap", function() { return _message_opsat_service__WEBPACK_IMPORTED_MODULE_5__["dataMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topicMap", function() { return _message_opsat_service__WEBPACK_IMPORTED_MODULE_5__["topicMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageOpsatService", function() { return _message_opsat_service__WEBPACK_IMPORTED_MODULE_5__["MessageOpsatService"]; });

/* harmony import */ var _user_profile_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile-provider.service */ "AI8P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfileProviderService", function() { return _user_profile_provider_service__WEBPACK_IMPORTED_MODULE_6__["UserProfileProviderService"]; });










/***/ }),

/***/ "puwc":
/*!***********************************************!*\
  !*** ./src/app/services/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(response => {
            const returnUrl = encodeURIComponent(this.router.url);
            if (response.status === 401) {
                // tslint:disable-next-line: no-floating-promises
                this.router.navigateByUrl(`/login?return=${returnUrl}`);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(response);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "qkpx":
/*!***************************************************!*\
  !*** ./src/app/services/message-opsat.service.ts ***!
  \***************************************************/
/*! exports provided: topicFilter, topicFilters, topicExpressionFilter, dataMap, topicMap, MessageOpsatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicFilter", function() { return topicFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicFilters", function() { return topicFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicExpressionFilter", function() { return topicExpressionFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataMap", function() { return dataMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicMap", function() { return topicMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageOpsatService", function() { return MessageOpsatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




// @dynamic
function topicFilter(topic) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((x) => x.topic === topic);
}
// @dynamic
function topicFilters(...topics) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((x) => topics.indexOf(x.topic) > -1);
}
// @dynamic
function topicExpressionFilter(expression) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((x) => expression(x.topic));
}
// @dynamic
const dataMap = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ms) => ms.data);
// @dynamic
const topicMap = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ms) => ms.topic);
let MessageOpsatService = class MessageOpsatService {
    constructor() {
        this._message$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](10);
    }
    get message$() {
        return this._message$.asObservable();
    }
    ngOnDestroy() {
        this._message$.complete();
        this._message$.unsubscribe();
    }
    publish(topic, data) {
        this._message$.next({ topic, data });
    }
};
MessageOpsatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MessageOpsatService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "o0su");




const routes = [
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginModule)
    },
    {
        path: '',
        resolve: {
            profile: _services__WEBPACK_IMPORTED_MODULE_3__["UserProfileProviderService"]
        },
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map