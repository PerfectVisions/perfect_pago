"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Payments_1 = __importDefault(require("./src/structures/Payments"));
class PerfectPago {
    constructor(options) {
        this.payments = new Payments_1.default({ accessToken: options.accessToken });
    }
}
exports.default = PerfectPago;
