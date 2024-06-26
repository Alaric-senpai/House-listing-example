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
exports.HousingService = void 0;
var core_1 = require("@angular/core");
var HousingService = function () {
    var _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var HousingService = _classThis = /** @class */ (function () {
        // readonly url ="http://localhost:3000/locations"
        function HousingService_1() {
            this.housinglocationList = [
                {
                    id: 0,
                    name: 'Acme Fresh Start Housing',
                    city: 'Chicago',
                    state: 'IL',
                    photo: '/assets/apartment4.jpeg',
                    availableUnits: 4,
                    wifi: true,
                    laundry: true
                },
                {
                    id: 1,
                    name: 'A113 Transitional Housing',
                    city: 'Santa Monica',
                    state: 'CA',
                    photo: '/assets/apartment4.jpeg',
                    availableUnits: 0,
                    wifi: false,
                    laundry: true
                },
                {
                    id: 2,
                    name: 'Warm Beds Housing Support',
                    city: 'Juneau',
                    state: 'AK',
                    photo: '/assets/apartment4.jpeg',
                    availableUnits: 1,
                    wifi: false,
                    laundry: false
                },
                {
                    id: 3,
                    name: 'Homesteady Housing',
                    city: 'Chicago',
                    state: 'IL',
                    photo: '/assets/apartment4.jpeg',
                    availableUnits: 1,
                    wifi: true,
                    laundry: false
                },
                {
                    id: 4,
                    name: 'Happy Homes Group',
                    city: 'Gary',
                    state: 'IN',
                    photo: '/assets/apartment4.jpeg',
                    availableUnits: 1,
                    wifi: true,
                    laundry: false
                },
                {
                    id: 5,
                    name: 'Hopeful Apartment Group',
                    city: 'Oakland',
                    state: 'CA',
                    photo: '/assets/apartment4.jpeg',
                    availableUnits: 2,
                    wifi: true,
                    laundry: true
                },
                {
                    id: 6,
                    name: 'Seriously Safe Towns',
                    city: 'Oakland',
                    state: 'CA',
                    photo: '/assets/apartment4.jpeg',
                    availableUnits: 5,
                    wifi: true,
                    laundry: true
                },
                {
                    id: 7,
                    name: 'Hopeful Housing Solutions',
                    city: 'Oakland',
                    state: 'CA',
                    photo: '/assets/apartment4.jpeg',
                    availableUnits: 2,
                    wifi: true,
                    laundry: true
                },
                {
                    id: 8,
                    name: 'Seriously Safe Towns',
                    city: 'Oakland',
                    state: 'CA',
                    photo: '/assets/apartment4.jpeg',
                    availableUnits: 10,
                    wifi: false,
                    laundry: false
                },
                {
                    id: 9,
                    name: 'Capital Safe Towns',
                    city: 'Portland',
                    state: 'OR',
                    photo: '/assets/apartment4.jpeg',
                    availableUnits: 6,
                    wifi: true,
                    laundry: true
                }
            ];
        }
        HousingService_1.prototype.getAllHousingLocations = function () {
            return this.housinglocationList;
        };
        // async getAllHousingLocations(): Promise<HousingLocation[]>{
        //   // return this.housinglocationList;
        //   const data = await fetch(this.url);
        //   return await data.json() ?? [];
        // }
        HousingService_1.prototype.getHousingLocationById = function (id) {
            return this.housinglocationList.find(function (housinglocation) { return housinglocation.id === id; });
        };
        // async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined> {
        //   // return this.housinglocationList.find(housinglocation => housinglocation.id === id)
        //   const data  = await fetch('${this.url}/${id}')
        //   return await data.json() ?? {};
        // }
        HousingService_1.prototype.submitApplication = function (firstname, lastname, email) {
            alert(firstname + lastname + email);
        };
        return HousingService_1;
    }());
    __setFunctionName(_classThis, "HousingService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HousingService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HousingService = _classThis;
}();
exports.HousingService = HousingService;
//# sourceMappingURL=housing.service.js.map