import Payments from "./src/structures/Payments";
import PaymentStructureOptions from "./src/interfaces/payments/PaymentStrucutureOptions";
import Refunds from "./src/structures/Refunds";

export default class PerfectPago {
    payments: Payments;
    refunds: Refunds;
    constructor(options: PaymentStructureOptions) {
        this.payments = new Payments({ accessToken: options.accessToken});
        this.refunds = new Refunds({ accessToken: options.accessToken})
    }
}