"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app/app.component");
var router_1 = require("@angular/router");
// import routeConfig from './app/route';
var route_1 = __importDefault(require("./app/route"));
(0, platform_browser_1.bootstrapApplication)(app_component_1.AppComponent, {
    providers: [(0, platform_browser_1.provideProtractorTestingSupport)(), (0, router_1.provideRouter)(route_1.default)],
}).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map