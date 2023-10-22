import Payments from "./Payments";
import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions";
import Refunds from "./Refunds";
import Customers from "./Customers";

export default class PerfectPago {
    payments: Payments;
    refunds: Refunds;
    customers: Customers;
    constructor(options: PaymentStructureOptions) {
        this.payments = new Payments({ accessToken: options.accessToken});
        this.refunds = new Refunds({ accessToken: options.accessToken})
        this.customers = new Customers({ accessToken: options.accessToken})
    }
}