import Payments from "./src/structures/Payments";
import PaymentStructureOptions from "./src/interfaces/payments/PaymentStrucutureOptions";

export default class PerfectPago {
    payments: Payments;
    constructor(options: PaymentStructureOptions) {
        this.payments = new Payments({ accessToken: options.accessToken})
    }
}