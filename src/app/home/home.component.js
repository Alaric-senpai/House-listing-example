"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var housing_location_component_1 = require("../housing-location/housing-location.component");
var housing_service_1 = require("../housing.service");
var HomeComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-home',
            standalone: true,
            imports: [housing_location_component_1.HousingLocationComponent, common_1.CommonModule],
            template: "\n    <section>\n      <form>\n        <input type=\"text\" placeholder=\"Filter by city\" #filter />\n        <button class=\"primary\" type=\"button\" (click)=\"filterResults(filter.value)\" >Search</button>\n        <!-- <button class=\"primary\" type=\"button\" (click)=\"filterResults(filter.value)\">Search</button> -->\n      </form>\n      <section class=\"results\">\n          <app-housing-location  *ngFor=\"let housingLocation of filteredLocationList\" [housingLocation]=\"housingLocation\"></app-housing-location>\n      </section>\n    </section>\n  ",
            styleUrls: ['./home.component.css'],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var HomeComponent = _classThis = /** @class */ (function () {
        function HomeComponent_1() {
            this.baseUrl = 'https://angular.dev/assets/tutorials/common';
            this.housingLocationList = [];
            this.housingService = (0, core_1.inject)(housing_service_1.HousingService);
            // filteredLocationList: HousingLocation[] = []
            this.filteredLocationList = [];
            this.housingLocationList = this.housingService.getAllHousingLocations();
            this.filteredLocationList = this.housingLocationList;
        }
        HomeComponent_1.prototype.filterResults = function (text) {
            if (!text) {
                this.filteredLocationList = this.housingLocationList;
                return;
            }
            this.filteredLocationList = this.housingLocationList.filter(function (housingLocation) {
                return housingLocation === null || housingLocation === void 0 ? void 0 : housingLocation.city.toLowerCase().includes(text.toLowerCase());
            });
        };
        return HomeComponent_1;
    }());
    __setFunctionName(_classThis, "HomeComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HomeComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HomeComponent = _classThis;
}();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map