import Payments from "./Payments";
import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions";
import Refunds from "./Refunds";
import Customers from "./Customers";
import Stores from "./Stores";

export default class PerfectPago {
    payments: Payments;
    refunds: Refunds;
    customers: Customers;
    stores: Stores;
    constructor(options: PaymentStructureOptions) {
        this.payments = new Payments({ accessToken: options.accessToken});
        this.refunds = new Refunds({ accessToken: options.accessToken});
        this.customers = new Customers({ accessToken: options.accessToken});
        this.stores = new Stores({ accessToken: options.accessToken})
    }
}