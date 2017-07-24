webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pets/pets.module.ts": [
		"../../../../../src/app/pets/pets.module.ts"
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
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_components/log-in/log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/log-in/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Log In</h1>\n\n<!-- <div class=\"sub-container\" *ngIf=\"!(login || register)\">\n        <a class=\"btn btn-default btn-block\" href=\"/Users/Login\">Log In</a>\n        <a class=\"btn btn-default btn-block\" href=\"/Users/Register\">Register</a>\n</div> -->\n\n<form (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"email\">Email:</label>\n    <input type=\"text\" name=\"email\" [formControl]=\"form.controls['email']\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" name=\"password\" [formControl]=\"form.controls['password']\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Log In</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/_components/log-in/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/_services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogInComponent = (function () {
    function LogInComponent(_auth, _users, fb) {
        this._auth = _auth;
        this._users = _users;
        this.form = fb.group({
            "email": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            "password": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("")
        });
        this.authState = _auth.authState;
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.prototype.onSubmit = function () {
        debugger;
        this._users.logIn(this.form.get('email').value, this.form.get('password').value);
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-log-in',
        template: __webpack_require__("../../../../../src/app/_components/log-in/log-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/log-in/log-in.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object])
], LogInComponent);

var _a, _b, _c;
//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/register-user/register-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n\n<form (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"firstName\">First Name</label>\n    <input type=\"text\" name=\"firstName\" [formControl]=\"form.controls['firstName']\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"lastName\">Last Name</label>\n    <input type=\"text\" name=\"lastName\" [formControl]=\"form.controls['lastName']\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"emailAddress\">Email Address</label>\n    <input type=\"text\" name=\"emailAddress\" [formControl]=\"form.controls['email']\" class=\"form-control\">\n  </div>\n  <!-- <div class=\"form-group\">\n    <label for=\"confirmEmail\">Confirm Email Address</label>\n    <input type=\"text\" name=\"confirmEmail\" class=\"form-control\">\n  </div> -->\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" name=\"password\" [formControl]=\"form.controls['password']\" class=\"form-control\">\n  </div>\n  <!-- <div class=\"form-group\">\n    <label for=\"confirmPassword\">Confirm Password</label>\n    <input type=\"password\" name=\"confirmPassword\" class=\"form-control\">\n  </div> -->\n  <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/_components/register-user/register-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/register-user/register-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/_services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_newuser_model__ = __webpack_require__("../../../../../src/app/_models/newuser.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterUserComponent = (function () {
    function RegisterUserComponent(_auth, _users, fb) {
        this._auth = _auth;
        this._users = _users;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_4__models_newuser_model__["a" /* NewUser */];
        this.form = fb.group({
            "firstName": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            "lastName": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            "email": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            "password": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("")
        });
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
        // this.newUser.firstName = "butts";
    };
    RegisterUserComponent.prototype.onSubmit = function () {
        this._users.registerUser(this.form.get('email').value, this.form.get('password').value);
    };
    return RegisterUserComponent;
}());
RegisterUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'auth-register-user',
        template: __webpack_require__("../../../../../src/app/_components/register-user/register-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/register-user/register-user.component.scss")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object])
], RegisterUserComponent);

var _a, _b, _c;
//# sourceMappingURL=register-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/splash/splash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/splash/splash.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  splash works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/_components/splash/splash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashComponent = (function () {
    function SplashComponent() {
    }
    SplashComponent.prototype.ngOnInit = function () {
    };
    return SplashComponent;
}());
SplashComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-splash',
        template: __webpack_require__("../../../../../src/app/_components/splash/splash.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/splash/splash.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SplashComponent);

//# sourceMappingURL=splash.component.js.map

/***/ }),

/***/ "../../../../../src/app/_layouts/public/public.component.html":
/***/ (function(module, exports) {

module.exports = "this is public component"

/***/ }),

/***/ "../../../../../src/app/_layouts/public/public.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layouts/public/public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PublicComponent = (function () {
    function PublicComponent() {
    }
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent.prototype.onSubmit = function () {
    };
    return PublicComponent;
}());
PublicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-public',
        template: __webpack_require__("../../../../../src/app/_layouts/public/public.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layouts/public/public.component.scss")],
    })
], PublicComponent);

//# sourceMappingURL=public.component.js.map

/***/ }),

/***/ "../../../../../src/app/_layouts/public/public.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_register_user_register_user_component__ = __webpack_require__("../../../../../src/app/_components/register-user/register-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_log_in_log_in_component__ = __webpack_require__("../../../../../src/app/_components/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_splash_splash_component__ = __webpack_require__("../../../../../src/app/_components/splash/splash.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PUBLIC_ROUTES; });



var PUBLIC_ROUTES = [
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_0__components_register_user_register_user_component__["a" /* RegisterUserComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__components_log_in_log_in_component__["a" /* LogInComponent */]
    },
    {
        path: 'splash',
        component: __WEBPACK_IMPORTED_MODULE_2__components_splash_splash_component__["a" /* SplashComponent */]
    },
];
//# sourceMappingURL=public.routing.js.map

/***/ }),

/***/ "../../../../../src/app/_layouts/secure/secure.component.html":
/***/ (function(module, exports) {

module.exports = "this is secure component"

/***/ }),

/***/ "../../../../../src/app/_layouts/secure/secure.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layouts/secure/secure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecureComponent = (function () {
    function SecureComponent() {
    }
    SecureComponent.prototype.ngOnInit = function () {
    };
    SecureComponent.prototype.onSubmit = function () {
    };
    return SecureComponent;
}());
SecureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-secure',
        template: __webpack_require__("../../../../../src/app/_layouts/secure/secure.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layouts/secure/secure.component.scss")],
    })
], SecureComponent);

//# sourceMappingURL=secure.component.js.map

/***/ }),

/***/ "../../../../../src/app/_layouts/secure/secure.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECURE_ROUTES; });
var SECURE_ROUTES = [
    {
        path: 'pets',
        loadChildren: './pets/pets.module.ts#PetsModule'
    }
];
//# sourceMappingURL=secure.routing.js.map

/***/ }),

/***/ "../../../../../src/app/_models/newuser.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUser; });
var NewUser = (function () {
    function NewUser() {
    }
    return NewUser;
}());

//# sourceMappingURL=newuser.model.js.map

/***/ }),

/***/ "../../../../../src/app/_services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(_auth) {
        this._auth = _auth;
        this.user = _auth.authState;
    }
    UserService.prototype.registerUser = function (email, password) {
        debugger;
        return this._auth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    UserService.prototype.logIn = function (email, password) {
        debugger;
        this.result = this._auth.auth.signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
        return this.result;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Application says what?</h1>\n<ul *ngFor=\"let value of apiValues\">\n   <li>{{value}}</li>\n</ul>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Test Application';
        //constructor(private user: UserInfo) {
        //    this.user.checkAuthentication()
        //        .subscribe();
        //}
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pets_pets_module__ = __webpack_require__("../../../../../src/app/pets/pets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_splash_splash_component__ = __webpack_require__("../../../../../src/app/_components/splash/splash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_log_in_log_in_component__ = __webpack_require__("../../../../../src/app/_components/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_user_register_user_component__ = __webpack_require__("../../../../../src/app/_components/register-user/register-user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Services
//Components




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_splash_splash_component__["a" /* SplashComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_log_in_log_in_component__["a" /* LogInComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_register_user_register_user_component__["a" /* RegisterUserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__pets_pets_module__["PetsModule"],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRouting */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_public_public_routing__ = __webpack_require__("../../../../../src/app/_layouts/public/public.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_secure_secure_routing__ = __webpack_require__("../../../../../src/app/_layouts/secure/secure.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_public_public_component__ = __webpack_require__("../../../../../src/app/_layouts/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_secure_secure_component__ = __webpack_require__("../../../../../src/app/_layouts/secure/secure.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });

//Routes




var appRoutes = [
    {
        path: '',
        redirectTo: '/splash',
        pathMatch: 'full'
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__layouts_public_public_component__["a" /* PublicComponent */],
        children: __WEBPACK_IMPORTED_MODULE_1__layouts_public_public_routing__["a" /* PUBLIC_ROUTES */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__layouts_secure_secure_component__["a" /* SecureComponent */],
        children: __WEBPACK_IMPORTED_MODULE_2__layouts_secure_secure_routing__["a" /* SECURE_ROUTES */]
    }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pets/_models/pet.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pet; });
var Pet = (function () {
    function Pet(obj) {
        if (obj === void 0) { obj = {}; }
        var _a = obj.id, id = _a === void 0 ? null : _a, _b = obj.name, name = _b === void 0 ? "" : _b, _c = obj.sex, sex = _c === void 0 ? "" : _c;
        this.id = obj.id;
        this.name = obj.name;
        this.sex = obj.sex;
    }
    return Pet;
}());

//# sourceMappingURL=pet.model.js.map

/***/ }),

/***/ "../../../../../src/app/pets/_services/pets.data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsDataAccess; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetsDataAccess = (function () {
    function PetsDataAccess(http) {
        this.http = http;
        this._host = "http://localhost:4300";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    PetsDataAccess.prototype.getAllPets = function () {
        return this.http.get(this._host + '/api/pets')
            .map(function (res) { return res.json(); });
    };
    PetsDataAccess.prototype.getSinglePet = function (id) {
        return this.http.get(this._host + '/api/pets/' + id)
            .map(function (res) { return res.json(); });
    };
    PetsDataAccess.prototype.addPet = function (newPet) {
        console.log("post");
        return this.http.post(this._host + '/api/pets', newPet, { headers: this.headers });
        // .map((res: Response) => res.json());
    };
    PetsDataAccess.prototype.updatePet = function (petToUpdate) {
        // let body = {"id": petToUpdate.id.toString(), "pet": petToUpdate};
        // console.log("this is body");
        // console.log(body);
        return this.http.put(this._host + '/api/pets/' + petToUpdate.id, JSON.stringify(petToUpdate), { headers: this.headers });
    };
    PetsDataAccess.prototype.deletePet = function (id) {
        return this.http.delete(this._host + '/api/pets/' + id);
    };
    return PetsDataAccess;
}());
PetsDataAccess = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PetsDataAccess);

var _a;
//# sourceMappingURL=pets.data.service.js.map

/***/ }),

/***/ "../../../../../src/app/pets/_services/pets.repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pets_data_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pets_transform_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.transform.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsRepository; });
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


//Services


var PetsRepository = (function () {
    function PetsRepository(_dataAccess, _transform) {
        this._dataAccess = _dataAccess;
        this._transform = _transform;
    }
    PetsRepository.prototype.getAllPets = function () {
        var _this = this;
        var allPets = this._dataAccess.getAllPets()
            .map(function (data) { return _this._transform.createPets(data[0]); });
        // .subscribe(data => console.log(data));
        return allPets;
    };
    PetsRepository.prototype.getSinglePet = function (id) {
        var _this = this;
        var fetchedPet = this._dataAccess.getSinglePet(id)
            .map(function (data) { return _this._transform.createPet(data); });
        // .subscribe(data => console.log(data));
        return fetchedPet;
    };
    PetsRepository.prototype.updatePet = function () {
    };
    PetsRepository.prototype.deletePet = function (id) {
        this._dataAccess.deletePet(id)
            .subscribe(function (data) { return console.log(data); });
    };
    return PetsRepository;
}());
PetsRepository = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__pets_data_service__["a" /* PetsDataAccess */])),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__pets_transform_service__["a" /* PetsTransform */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__pets_data_service__["a" /* PetsDataAccess */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pets_data_service__["a" /* PetsDataAccess */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__pets_transform_service__["a" /* PetsTransform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pets_transform_service__["a" /* PetsTransform */]) === "function" && _b || Object])
], PetsRepository);

var _a, _b;
//# sourceMappingURL=pets.repository.service.js.map

/***/ }),

/***/ "../../../../../src/app/pets/_services/pets.transform.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_pet_model__ = __webpack_require__("../../../../../src/app/pets/_models/pet.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsTransform; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Models

var PetsTransform = (function () {
    function PetsTransform() {
    }
    PetsTransform.prototype.transformKeyToId = function (data) {
        if (data.hasOwnProperty("Key")) {
            data.id = data.Key;
            delete data.Key;
        }
        if (data.hasOwnProperty("Name")) {
            data.name = data.Name;
            delete data.Name;
        }
        if (data.hasOwnProperty("Sex")) {
            data.sex = data.Sex;
            delete data.Sex;
        }
        return data;
    };
    PetsTransform.prototype.createPet = function (data) {
        data = this.transformKeyToId(data);
        data = new __WEBPACK_IMPORTED_MODULE_1__models_pet_model__["a" /* Pet */](data);
        return data;
    };
    PetsTransform.prototype.createPets = function (data) {
        data = JSON.parse(data);
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                data[i] = this.createPet(data[i]);
            }
        }
        return data;
    };
    PetsTransform.prototype.formCreatePet = function (form, pet) {
        console.log("Creating Pet");
        pet.name = form.get('name').value;
        pet.sex = form.get('sex').value;
        return pet;
    };
    return PetsTransform;
}());
PetsTransform = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PetsTransform);

//# sourceMappingURL=pets.transform.service.js.map

/***/ }),

/***/ "../../../../../src/app/pets/add-pet/add-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add New Pet</h3>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <input type=\"text\" [formControl]=\"form.controls['name']\" placeholder=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" [formControl]=\"form.controls['sex']\" placeholder=\"sex\" class=\"form-control\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/pets/add-pet/add-pet.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pets/add-pet/add-pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pets_transform_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.transform.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pets_data_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_pet_model__ = __webpack_require__("../../../../../src/app/pets/_models/pet.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Models

var AddPetComponent = (function () {
    function AddPetComponent(fb, _transform, _data) {
        this._transform = _transform;
        this._data = _data;
        this.newPet = new __WEBPACK_IMPORTED_MODULE_4__models_pet_model__["a" /* Pet */]();
        this.form = fb.group({
            "name": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            "id": null,
            "sex": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("")
        });
    }
    AddPetComponent.prototype.ngOnInit = function () {
    };
    //trying to take form controls and apply them to pet model
    AddPetComponent.prototype.onSubmit = function () {
        //figure out better structure using repository later?
        this.newPet = this._transform.formCreatePet(this.form, this.newPet);
        this._data.addPet(this.newPet)
            .subscribe(function (data) { return console.log(data); });
    };
    return AddPetComponent;
}());
AddPetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'add-pet',
        template: __webpack_require__("../../../../../src/app/pets/add-pet/add-pet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pets/add-pet/add-pet.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_pets_transform_service__["a" /* PetsTransform */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_pets_transform_service__["a" /* PetsTransform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pets_transform_service__["a" /* PetsTransform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_pets_data_service__["a" /* PetsDataAccess */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_pets_data_service__["a" /* PetsDataAccess */]) === "function" && _c || Object])
], AddPetComponent);

var _a, _b, _c;
//# sourceMappingURL=add-pet.component.js.map

/***/ }),

/***/ "../../../../../src/app/pets/delete-pet/delete-pet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pets/delete-pet/delete-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<form (ngSubmit)=\"onSubmit(id.value)\">\n  <button type=\"submit\">Submit</button>\n</form>-->\n\n<button type=\"button\" class=\"btn btn-danger\" (click)=\"onSubmit(petId)\">Delete</button>"

/***/ }),

/***/ "../../../../../src/app/pets/delete-pet/delete-pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pets_repository_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.repository.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletePetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Services

var DeletePetComponent = (function () {
    function DeletePetComponent(_repo, _router) {
        this._repo = _repo;
        this._router = _router;
    }
    DeletePetComponent.prototype.ngOnInit = function () {
    };
    DeletePetComponent.prototype.onSubmit = function (id) {
        console.log(id);
        this._repo.deletePet(id);
        this.goToAllPets();
    };
    DeletePetComponent.prototype.goToAllPets = function () {
        this._router.navigate(['pets']);
    };
    ;
    return DeletePetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], DeletePetComponent.prototype, "petId", void 0);
DeletePetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'delete-pet',
        template: __webpack_require__("../../../../../src/app/pets/delete-pet/delete-pet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pets/delete-pet/delete-pet.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_pets_repository_service__["a" /* PetsRepository */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_pets_repository_service__["a" /* PetsRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pets_repository_service__["a" /* PetsRepository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DeletePetComponent);

var _a, _b;
//# sourceMappingURL=delete-pet.component.js.map

/***/ }),

/***/ "../../../../../src/app/pets/pet-detail/pet-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>{{pet?.name}}</h2>\n<p>This pet has id number: {{petId}}</p>\n\n<delete-pet [petId]=\"petId\"></delete-pet>\n<button class=\"btn btn-primary\" (click)=\"goToUpdate()\">Edit Pet</button>\n"

/***/ }),

/***/ "../../../../../src/app/pets/pet-detail/pet-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pets/pet-detail/pet-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pets_repository_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.repository.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//services

var PetDetailComponent = (function () {
    function PetDetailComponent(_route, _location, _repo, _router) {
        this._route = _route;
        this._location = _location;
        this._repo = _repo;
        this._router = _router;
        this.petId = null;
        this.isComplete = false;
    }
    PetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this.petId = params['id'];
        });
        this._repo.getSinglePet(this.petId)
            .subscribe(function (data) { return _this.pet = data; }, function (error) { return console.log("error"); }, function () { return _this.isComplete = true; });
    };
    PetDetailComponent.prototype.goToUpdate = function () {
        this._router.navigate(['pets', this.petId, 'update']);
    };
    return PetDetailComponent;
}());
PetDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'pet-detail',
        template: __webpack_require__("../../../../../src/app/pets/pet-detail/pet-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pets/pet-detail/pet-detail.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_pets_repository_service__["a" /* PetsRepository */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_pets_repository_service__["a" /* PetsRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_pets_repository_service__["a" /* PetsRepository */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PetDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=pet-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/pets/pet-tile/pet-tile.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 (click)=\"goToDetailPage(pet)\">{{pet.name}}</h3>\n<h5>{{pet.id}}</h5>"

/***/ }),

/***/ "../../../../../src/app/pets/pet-tile/pet-tile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pets/pet-tile/pet-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_pet_model__ = __webpack_require__("../../../../../src/app/pets/_models/pet.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetTileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetTileComponent = (function () {
    function PetTileComponent(_router) {
        this._router = _router;
    }
    PetTileComponent.prototype.ngOnInit = function () {
    };
    PetTileComponent.prototype.goToDetailPage = function (clickedPet) {
        this._router.navigate(['pets', clickedPet.id]);
    };
    ;
    return PetTileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_pet_model__["a" /* Pet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_pet_model__["a" /* Pet */]) === "function" && _a || Object)
], PetTileComponent.prototype, "pet", void 0);
PetTileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'pet-tile',
        template: __webpack_require__("../../../../../src/app/pets/pet-tile/pet-tile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pets/pet-tile/pet-tile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PetTileComponent);

var _a, _b;
//# sourceMappingURL=pet-tile.component.js.map

/***/ }),

/***/ "../../../../../src/app/pets/petlist/petlist.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Get All Pets-->\r\n<button (click)=\"retrievePets()\">Click for pets</button>\r\n\r\n<!--Get Pet By Id-->\r\n<div>\r\n    <input #petId (keyup.enter)=\"retrieveSinglePet(petId.value)\">\r\n    <button (click)=\"retrieveSinglePet(petId.value)\">Click to find pet</button>\r\n</div>\r\n\r\n<div id=\"results\" *ngIf=\"isComplete\">\r\n    <p *ngIf=\"!isMultiple\"> {{result.name}}, {{result.id}}</p>\r\n\r\n    <div class=\"container\" *ngIf=\"isMultiple\">\r\n        <div *ngFor=\"let pet of result\">\r\n            <pet-tile [pet]=\"pet\"></pet-tile>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<add-pet></add-pet>\r\n"

/***/ }),

/***/ "../../../../../src/app/pets/petlist/petlist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  padding: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pets/petlist/petlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pets_repository_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.repository.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Services

var PetListComponent = (function () {
    function PetListComponent(_repo) {
        this._repo = _repo;
        this.isComplete = false;
        this.isMultiple = false;
    }
    PetListComponent.prototype.ngOnInit = function () {
        this.retrievePets();
    };
    //NEXT STEP: FORM VALIDATION
    //json returns this with extra array, not sure why
    PetListComponent.prototype.retrievePets = function () {
        var _this = this;
        this.result = null;
        this.isComplete = false;
        this._repo.getAllPets()
            .subscribe(function (data) { return _this.result = data; }, function (error) { return console.log("You borked it"); }, function () {
            _this.isComplete = true;
            _this.isMultiple = true;
            console.log(_this.result);
        });
    };
    PetListComponent.prototype.retrieveSinglePet = function (id) {
        var _this = this;
        this.isMultiple = false;
        this.isComplete = false;
        this._repo.getSinglePet(id)
            .subscribe(function (data) { return _this.result = data; }, function (error) { return console.log("You borked it"); }, function () { return _this.isComplete = true; });
    };
    return PetListComponent;
}());
PetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'pet-list',
        template: __webpack_require__("../../../../../src/app/pets/petlist/petlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pets/petlist/petlist.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_pets_repository_service__["a" /* PetsRepository */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pets_repository_service__["a" /* PetsRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pets_repository_service__["a" /* PetsRepository */]) === "function" && _a || Object])
], PetListComponent);

var _a;
//# sourceMappingURL=petlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/pets/pets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pets_routing__ = __webpack_require__("../../../../../src/app/pets/pets.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__petlist_petlist_component__ = __webpack_require__("../../../../../src/app/pets/petlist/petlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_pet_add_pet_component__ = __webpack_require__("../../../../../src/app/pets/add-pet/add-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delete_pet_delete_pet_component__ = __webpack_require__("../../../../../src/app/pets/delete-pet/delete-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pet_tile_pet_tile_component__ = __webpack_require__("../../../../../src/app/pets/pet-tile/pet-tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pet_detail_pet_detail_component__ = __webpack_require__("../../../../../src/app/pets/pet-detail/pet-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__update_pet_update_pet_component__ = __webpack_require__("../../../../../src/app/pets/update-pet/update-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_pets_data_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_pets_transform_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.transform.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsModule", function() { return PetsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Components






//Services


var PetsModule = (function () {
    function PetsModule() {
    }
    return PetsModule;
}());
PetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__pets_routing__["a" /* PetsRouting */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__petlist_petlist_component__["a" /* PetListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__add_pet_add_pet_component__["a" /* AddPetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__delete_pet_delete_pet_component__["a" /* DeletePetComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pet_tile_pet_tile_component__["a" /* PetTileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pet_detail_pet_detail_component__["a" /* PetDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__update_pet_update_pet_component__["a" /* UpdatePetComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_pets_data_service__["a" /* PetsDataAccess */],
            __WEBPACK_IMPORTED_MODULE_10__services_pets_transform_service__["a" /* PetsTransform */]
        ]
    })
], PetsModule);

//# sourceMappingURL=pets.module.js.map

/***/ }),

/***/ "../../../../../src/app/pets/pets.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__petlist_petlist_component__ = __webpack_require__("../../../../../src/app/pets/petlist/petlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pet_detail_pet_detail_component__ = __webpack_require__("../../../../../src/app/pets/pet-detail/pet-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_pet_update_pet_component__ = __webpack_require__("../../../../../src/app/pets/update-pet/update-pet.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsRouting; });

//Components



var petsRoutes = [
    {
        path: 'pets',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__petlist_petlist_component__["a" /* PetListComponent */]
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_2__pet_detail_pet_detail_component__["a" /* PetDetailComponent */]
            },
            {
                path: ':id/update',
                component: __WEBPACK_IMPORTED_MODULE_3__update_pet_update_pet_component__["a" /* UpdatePetComponent */]
            }
        ]
    },
];
var PetsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(petsRoutes);
//# sourceMappingURL=pets.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pets/update-pet/update-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Update Pet</h3>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [formControl]=\"form.controls['name']\" placeholder=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"sex\">Sex</label>\n    <input type=\"text\" [formControl]=\"form.controls['sex']\" placeholder=\"sex\" class=\"form-control\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/pets/update-pet/update-pet.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pets/update-pet/update-pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pets_repository_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_pets_transform_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.transform.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pets_data_service__ = __webpack_require__("../../../../../src/app/pets/_services/pets.data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Services



var UpdatePetComponent = (function () {
    function UpdatePetComponent(fb, _transform, _data, _route, _location, _repo) {
        this._transform = _transform;
        this._data = _data;
        this._route = _route;
        this._location = _location;
        this._repo = _repo;
        this.petId = null;
        this.isComplete = false;
        this.form = fb.group({
            "name": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            "id": null,
            "sex": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("")
        });
    }
    UpdatePetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this.petId = params['id'];
        });
        this._repo.getSinglePet(this.petId)
            .subscribe(function (data) { return _this.currentPet = data; }, function (error) { return console.log("error"); }, function () {
            _this.isComplete = true;
            _this.setUpForm();
        });
    };
    //trying to take form controls and apply them to pet model
    UpdatePetComponent.prototype.onSubmit = function () {
        //figure out better structure using repository later?
        this.currentPet = this._transform.formCreatePet(this.form, this.currentPet);
        this._data.updatePet(this.currentPet)
            .subscribe(function (data) { return console.log(data); });
    };
    UpdatePetComponent.prototype.setUpForm = function () {
        this.form.controls['name'].setValue(this.currentPet.name);
        this.form.controls['sex'].setValue(this.currentPet.sex);
    };
    return UpdatePetComponent;
}());
UpdatePetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'update-pet',
        template: __webpack_require__("../../../../../src/app/pets/update-pet/update-pet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pets/update-pet/update-pet.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_pets_repository_service__["a" /* PetsRepository */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_pets_transform_service__["a" /* PetsTransform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_pets_transform_service__["a" /* PetsTransform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_pets_data_service__["a" /* PetsDataAccess */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_pets_data_service__["a" /* PetsDataAccess */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_pets_repository_service__["a" /* PetsRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_pets_repository_service__["a" /* PetsRepository */]) === "function" && _f || Object])
], UpdatePetComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=update-pet.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* CommonModule */]
        ],
        providers: []
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBWVfgdsM73yr_7U5bg1wd7WsORpPJYSTI",
        authDomain: "usingwithcsharp.firebaseapp.com",
        databaseURL: "https://usingwithcsharp.firebaseio.com",
        projectId: "usingwithcsharp",
        storageBucket: "usingwithcsharp.appspot.com",
        messagingSenderId: "22108741224"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map