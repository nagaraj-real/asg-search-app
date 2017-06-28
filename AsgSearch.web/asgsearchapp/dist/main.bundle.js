webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page2Component = (function () {
    function Page2Component() {
    }
    Page2Component.prototype.ngOnInit = function () {
    };
    return Page2Component;
}());
Page2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-page2',
        template: __webpack_require__(163),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [])
], Page2Component);

//# sourceMappingURL=page2.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stackoverflowsearch_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page3Component = (function () {
    function Page3Component(stackoverflowsearchService) {
        var _this = this;
        this.stackoverflowsearchService = stackoverflowsearchService;
        this.onRefresh = function () {
            _this.error = false;
            _this.stackoverflowsearchService.fetchRecentSearches().subscribe(function (result) {
                if (result.status === 200 && result.json().length > 0) {
                    _this.queries = result.json();
                }
                else if (result.status === 200 && result.json().length > 0) {
                    _this.queries.Questions = [];
                }
            }, function (error) {
                _this.error = true;
            });
        };
    }
    Page3Component.prototype.ngOnInit = function () {
    };
    return Page3Component;
}());
Page3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-page3',
        template: __webpack_require__(164),
        styles: [__webpack_require__(159)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__stackoverflowsearch_service__["a" /* StackoverflowsearchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stackoverflowsearch_service__["a" /* StackoverflowsearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stackoverflowsearch_service__["a" /* StackoverflowsearchService */]) === "function" && _a || Object])
], Page3Component);

var _a;
//# sourceMappingURL=page3.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultComponent = (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ;
    return ResultComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ResultComponent.prototype, "questions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], ResultComponent.prototype, "error", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], ResultComponent.prototype, "responselimit", void 0);
ResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-result',
        template: __webpack_require__(165),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [])
], ResultComponent);

//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "div#results{\r\n    margin-top: 20px;\r\n}\r\n\r\n.panel{\r\n    box-shadow: 0 0 5px black;\r\n}\r\n\r\nul{\r\n    list-style: none;\r\n}\r\n\r\n.img-avatar div{\r\n    height: 50px;\r\n    width:50px;\r\n    background-size:cover;\r\n    margin-bottom:10px;\r\n}\r\n\r\n.link{\r\n    margin-top:10px;\r\n}\r\n\r\n.link:before{\r\n    content:'';\r\n    display: block;\r\n}\r\n\r\nhr{\r\n    border:1px solid #ccc;\r\n}\r\n\r\n\r\nli.answerbody{\r\n    overflow: hidden;\r\n}\r\n\r\nspan.tag{\r\n    background-color: #ccc;\r\n    border-radius: 20px;\r\n    margin-right: 10px;\r\n    padding: 5px 10px 5px 10px;\r\n}\r\n\r\nh3.answertitle{\r\n    padding-left:40px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = " <div class=\"navbar navbar-inverse navbar-fixed-top\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a routerLink=\"/\" class=\"navbar-brand\">ASG search</a>\n            </div>\n            <div class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li><a routerLink=\"/\">Home</a></li>\n                    <li><a routerLink=\"/page1\" routerLinkActive=\"active\">Step1</a></li>\n                    <li><a routerLink=\"/page2\" routerLinkActive=\"active\">Step2</a></li>\n                    <li><a routerLink=\"/page3\" routerLinkActive=\"active\">Step3</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"container body-content\">\n        <router-outlet></router-outlet>\n        <hr />\n        <footer>\n            <p>&copy; {{'23-10-190'}} - My ASP.NET Application</p>\n        </footer>\n  </div>\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<h1>Step 1</h1>\n\nWhen a user enters some text in the textbox below and clicks 'Search', the application should show the first 40 Stackoverflow\nquestions, with accepted answers, containing search terms terms in the title, body or tags. Along with the link, you must\nshow:\n<ul>\n  <li>question title</li>\n  <li>time</li>\n  <li>number of responses</li>\n  <li>author name</li>\n  <li>tags</li>\n  <li>avatar image</li>\n  <li>accepted answer text, author and avatar</li>\n  <li>link to accepted response in stackoverflow site</li>\n</ul>\n\n<p><strong>We prefer ajax calls</strong>, but in the end it's up to you if you use an ajax call or a full page refresh. It's\n  also up to you if you implement it client or server-side. In any case, you have to modify the HomeController and StackExchangeSearch\n  classes. Needless to say, you can add files if necessary.</p>\n<h3>Hints:</h3>\n<ul>\n  <li>\n    You'll have to use the Stack exchange API. Check <a href=\"https://api.stackexchange.com/docs\">https://api.stackexchange.com/docs</a>\n  </li>\n  <li>\n    Depending on how you implement this, maybe you'll need to use this: <a href=\"http://msdn.microsoft.com/en-us/library/bb355316.aspx\">http://msdn.microsoft.com/en-us/library/bb355316.aspx</a>\n  </li>\n  <li>\n    Check this online tool to generate suitable classes from JSON payload: <a href=\"http://json2csharp.com/\">http://json2csharp.com/</a>\n  </li>\n</ul>\n\n<input #query type=\"text\" />\n<button (click)=\"onSearch(query.value)\">Search!</button>\n<app-result [questions]=\"Queries.Questions\" [error]=\"error\"></app-result>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "\n<h1>Step 2</h1>\n<p>We want to keep historic information on what queries are performed by our users. So, every search performed by our application must be saved in a SQL server database. The first result obtained (only the first) should also be saved into the database, including all information rendered in step 1.</p>\n<h3>Hints:</h3>\n<ul>\n    <li>\n        You'll have to modify the HomeController class and use QueryService.SaveQuery method. Maybe you have to modify few things.\n    </li>\n    <li>\n        By default, the database used is .\\localhost\\NTRsearchDB (maybe you have to uncomment something ;P). You can connect to it with the SQL Server Management Studio or the Database explorer in VS with SQL Server Authentication user:sa password:ntrglobal\n    </li>\n    <li>\n        Feel free to remove the existing database if tou run into problems while changing the schema since EF automatically re-creates it as needed. We don't care about migrations or database upgrades.\n    </li>\n</ul>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<h1>Step 3</h1>\n<p>This page should show the last 5 queries submitted by the users and their corresponding first result. Show all data that is rendered in step 1.</p>\n<h3>Hints:</h3>\n<ul>\n    <li>\n        You will need to modify the HomeController and QueryService classes.\n    </li>\n</ul>\n\n<button (click)=\"onRefresh()\">Refresh history</button>\n\n<p></p>\n<p></p>\n\n<div *ngFor=\"let query of queries\">\n<hr/>\n<h3>Query : {{query.QueryText}}</h3>\n<app-result [questions]=\"query.Questions\" [error]=\"error\" [responselimit]=\"1\"></app-result>\n</div>"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<div id=\"results\" >\n  <ng-template [ngIf]=\"!error && questions && questions.length>0\">\n  <div class=\"panel panel-default\" *ngFor=\"let question of questions.slice(0,responselimit);let i = index\">\n      <div class=\"panel-body\">\n      <ul>\n        <li>\n           <h3 *ngIf=\"!responselimit\" [innerHTML]=\"'Question '+ (i+1) + ' - '+ question.QuestionTitle\"></h3>\n           <h3 *ngIf=\"responselimit\" [innerHTML]=\"'Question '+ ' - '+ question.QuestionTitle\"></h3>\n        </li>\n        <hr/> \n        <li  class=\"img-avatar pull-left\">\n          <div [style.backgroundImage]=\"'url('+ question.QuestionOwnerImage +')'\"></div>\n          <span [innerHTML]=\"question.QuestionOwnerName\"></span>\n        </li>\n        <li class=\"pull-right\">\n           <span class=\"tag\" *ngFor=\"let tag of question.tags\">{{tag}}</span>\n        </li>\n        <br/><br/><br/><br/> \n        <li>\n          <span class=\"pull-left\"> {{question.QuestionDate*1000|date}} </span> \n          <span class=\"pull-right\">Answer Count : <b>{{question.AnswerCount}}</b></span>\n        </li>\n      </ul>\n      <br/><br/>\n      <h3 class=\"answertitle\">Answers</h3>   \n      <ul *ngFor=\"let answer of question.Answers\">\n        <hr/>   \n        <li  class=\"img-avatar pull-left\">\n          <div [style.backgroundImage]=\"'url('+ answer.AnswerOwnerImage +')'\"></div>\n          <span [innerHTML]=\"answer.AnswerOwnerName\"></span>\n        </li>\n        <br/><br/><br><br/><br/>\n         <li class='answerbody'>\n           <span [innerHTML]=\"answer.AnswerBody\"></span>\n           <img/>\n        </li>\n      </ul>\n\n      <ul><li>view more at <a [href]=\"question.link\" target=\"_blank\">{{question.QuestionLink}}</a></li></ul>\n    </div>\n\n  </div>\n  </ng-template>\n  <ng-template [ngIf]=\"!error && questions && questions.length===0\">\n    <div class=\"text-center\"><span class=\"error\">No results found</span></div>\n  </ng-template>\n  <ng-template [ngIf]=\"error\">\n    <div class=\"text-center\"><span class=\"span-error\">Some Error Occured</span></div>\n  </ng-template>\n</div>"

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackoverflowsearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StackoverflowsearchService = (function () {
    function StackoverflowsearchService(http) {
        var _this = this;
        this.http = http;
        this.fetchQuestions = function (searchTerm) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
            params.set('order', 'desc');
            params.set('sort', 'activity');
            params.set('q', searchTerm);
            params.set('pagesize', '40');
            params.set('site', 'stackoverflow');
            params.set('accepted', 'true');
            var rs = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
            rs.search = params;
            return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].questionapi, rs);
        };
        this.fetchAnswerForId = function (id) {
            return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].answerapi(id.toString()));
        };
        this.postRecentSearches = function (queries) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var requestoptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
            requestoptions.headers = headers;
            return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].savesearchapi, queries, __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]);
        };
        this.fetchRecentSearches = function () {
            return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].savesearchapi);
        };
    }
    return StackoverflowsearchService;
}());
StackoverflowsearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], StackoverflowsearchService);

var _a;
//# sourceMappingURL=stackoverflowsearch.service.js.map

/***/ }),

/***/ 60:
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
    questionapi: 'https://api.stackexchange.com/2.2/search/advanced',
    answerapi: function (questionid) {
        return "https://api.stackexchange.com/2.2/questions/" + questionid + "/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody";
    },
    savesearchapi: 'http://localhost:2697/api/PastSearches'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(60);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(161),
        styles: [__webpack_require__(156)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page1_page1_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page2_page2_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page3_page3_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_result_result_component__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'page1', component: __WEBPACK_IMPORTED_MODULE_6__page1_page1_component__["a" /* Page1Component */] },
    { path: 'page2', component: __WEBPACK_IMPORTED_MODULE_7__page2_page2_component__["a" /* Page2Component */] },
    { path: 'page3', component: __WEBPACK_IMPORTED_MODULE_8__page3_page3_component__["a" /* Page3Component */] },
    { path: '',
        redirectTo: '/page1',
        pathMatch: 'full'
    },
    { path: '**',
        redirectTo: '/page1',
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__page1_page1_component__["a" /* Page1Component */],
            __WEBPACK_IMPORTED_MODULE_7__page2_page2_component__["a" /* Page2Component */],
            __WEBPACK_IMPORTED_MODULE_8__page3_page3_component__["a" /* Page3Component */],
            __WEBPACK_IMPORTED_MODULE_9__shared_result_result_component__["a" /* ResultComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = (function () {
    function Answer() {
    }
    return Answer;
}());

//# sourceMappingURL=answer.model.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__queries_model__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__queries_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questions_model__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__questions_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer_model__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__answer_model__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Queries; });
var Queries = (function () {
    function Queries() {
    }
    return Queries;
}());

//# sourceMappingURL=queries.model.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question() {
    }
    return Question;
}());

//# sourceMappingURL=questions.model.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stackoverflowsearch_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Page1Component = (function () {
    function Page1Component(stackoverflowsearchService) {
        var _this = this;
        this.stackoverflowsearchService = stackoverflowsearchService;
        this.onSearch = function (querytext) {
            _this.error = false;
            _this.Queries = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Queries */]();
            _this.stackoverflowsearchService.fetchQuestions(querytext).subscribe(function (response) {
                console.log(response);
                if (response.json().items && response.json().items.length > 0) {
                    _this.questions = response.json().items;
                    if (_this.questions.length > 40) {
                        _this.questions = _this.questions.slice(0, 40);
                    }
                    _this.questions.map(function (res, index) {
                        res.answers = [];
                        _this.stackoverflowsearchService.fetchAnswerForId(res.question_id).subscribe(function (answers) {
                            res.answers = answers.json().items;
                            if (index === _this.questions.length - 1) {
                                console.log(_this.questions);
                                _this.mapQueries(_this.questions, _this.Queries, querytext);
                                console.log(_this.Queries);
                                _this.stackoverflowsearchService.postRecentSearches(_this.Queries).subscribe(function (response) {
                                    console.log(response);
                                });
                            }
                        });
                    });
                }
                else if (response.status === 200) {
                    _this.Queries.Questions = [];
                }
                else {
                    _this.error = true;
                }
            }, function (error) {
                _this.error = true;
            });
        };
        this.mapQueries = function (questions, queries, querytext) {
            var Questions = [];
            questions.forEach(function (question) {
                var Answers = [];
                question.answers.forEach(function (answer) {
                    var _answer = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Answer */]();
                    _answer.AnswerBody = answer.body;
                    _answer.AnswerOwnerImage = answer.owner.profile_image;
                    _answer.AnswerOwnerName = answer.owner.display_name;
                    Answers.push(_answer);
                });
                var _question = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Question */]();
                _question.AnswerCount = question.answer_count;
                _question.QuestionDate = new Date(question.creation_date * 1000);
                _question.QuestionLink = question.link;
                _question.QuestionOwnerImage = question.owner.profile_image;
                _question.QuestionOwnerName = question.owner.display_name;
                _question.Tags = question.tags;
                _question.Answers = Answers;
                _question.QuestionTitle = question.title;
                Questions.push(_question);
            });
            queries.Questions = Questions;
            queries.Time = new Date();
            queries.QueryText = querytext;
        };
    }
    Page1Component.prototype.ngOnInit = function () {
        this.Queries = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Queries */]();
    };
    ;
    return Page1Component;
}());
Page1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-page1',
        template: __webpack_require__(162),
        styles: [__webpack_require__(157)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__stackoverflowsearch_service__["a" /* StackoverflowsearchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stackoverflowsearch_service__["a" /* StackoverflowsearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stackoverflowsearch_service__["a" /* StackoverflowsearchService */]) === "function" && _a || Object])
], Page1Component);

var _a;
//# sourceMappingURL=page1.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.bundle.js.map