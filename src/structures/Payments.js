"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Payments {
    constructor(options) {
        this.accessToken = options.accessToken;
        this.BASE_URL = ' https://api.mercadopago.com';
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(`${this.BASE_URL}/v1/payments`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                },
                body: JSON.stringify(body)
            });
            return yield data.json();
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(`${this.BASE_URL}/v1/payments/${id}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                }
            });
            return yield data.json();
        });
    }
    cancel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(`${this.BASE_URL}/v1/payments/${id}`, {
                method: "PUT",
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                },
                body: JSON.stringify({ status: 'cancelled' })
            });
            return yield data.json();
        });
    }
}
exports.default = Payments;
