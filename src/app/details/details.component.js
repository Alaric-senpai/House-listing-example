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
exports.DetailsComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var housing_service_1 = require("../housing.service");
var forms_1 = require("@angular/forms");
// import { RouterModule } from '@angular/router';
var DetailsComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-details',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, router_1.RouterModule],
            template: "\n    <article>\n      <img [src]=\"housingLocation?.photo\" alt=\"\" class=\"listing-photo\">\n      <section class=\"listing-description\">\n        <h2 class=\"listing-heading\">{{ housingLocation?.name }}</h2>\n        <p class=\"listing-location\">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>\n      </section>\n      <section class=\"listing-features\">\n        <h2 class=\"section-heading\">About this location</h2>\n        <ul>\n          <li>Units available: {{ housingLocation?.availableUnits }}</li>\n          <li>Is wifi available: {{ housingLocation?.wifi }}</li>\n          <li>Is laundry service available: {{ housingLocation?.laundry }}</li>\n        </ul>\n      </section>\n      <section class=\"listing-apply\">\n        <h2 class=\"section-heading\">Apply now to live here</h2>\n        <form [formGroup]=\"applyform\" (ngSubmit)=\"submitApplication()\">\n          <label for=\"firstname\">Firstname</label>\n          <input type=\"text\" id=\"firstname\" formControlName=\"firstname\">\n          <label for=\"lastname\">Lastname</label>\n          <input type=\"text\" id=\"lastname\" formControlName=\"lastname\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" id=\"email\" formControlName=\"email\">\n          <button type=\"submit\" class=\"primary\">Submit</button>\n        </form>\n      </section>\n      </article>\n      <section class=\"w3-panel\">\n        <a [routerLink]=\"['/home']\" class=\"w3-button w3-deep-purple\">Go back</a>\n      </section>\n  ",
            styleUrls: ['./details.component.css'],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DetailsComponent = _classThis = /** @class */ (function () {
        function DetailsComponent_1() {
            this.route = (0, core_1.inject)(router_1.ActivatedRoute);
            this.housingService = (0, core_1.inject)(housing_service_1.HousingService);
            this.applyform = new forms_1.FormGroup({
                firstname: new forms_1.FormControl(''),
                lastname: new forms_1.FormControl(''),
                email: new forms_1.FormControl(''),
            });
            var housingLocationId = Number(this.route.snapshot.params['id']);
            this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
        }
        DetailsComponent_1.prototype.submitApplication = function () {
            var _b, _d, _f;
            if (this.applyform.valid) {
                this.housingService.submitApplication((_b = this.applyform.value.firstname) !== null && _b !== void 0 ? _b : '', (_d = this.applyform.value.lastname) !== null && _d !== void 0 ? _d : '', (_f = this.applyform.value.email) !== null && _f !== void 0 ? _f : '');
            }
        };
        return DetailsComponent_1;
    }());
    __setFunctionName(_classThis, "DetailsComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DetailsComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DetailsComponent = _classThis;
}();
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map