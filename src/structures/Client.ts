import Payments from "./Payments";
import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions";
import Refunds from "./Refunds";

export default class PerfectPago {
    payments: Payments;
    refunds: Refunds;
    constructor(options: PaymentStructureOptions) {
        this.payments = new Payments({ accessToken: options.accessToken});
        this.refunds = new Refunds({ accessToken: options.accessToken})
    }
}