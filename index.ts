import Client from './src/structures/Client'
import Refunds from './src/structures/Refunds'
import Payments from './src/structures/Payments'
import Cards from './src/structures/Cards'
import Customers from './src/structures/Customers'
import PaymentStructureOptions from './src/interfaces/payments/PaymentStrucutureOptions'
import PaymentMethods from './src/structures/PaymentsMethods'
import Oauth from './src/structures/Oauth'
export default class PerfectPago {
    payments: Payments;
    refunds: Refunds;
    customers: Customers;
    oauth: Oauth;
    constructor(options: PaymentStructureOptions) {
        this.payments = new Payments({ accessToken: options.accessToken});
        this.refunds = new Refunds({ accessToken: options.accessToken});
        this.customers = new Customers({ accessToken: options.accessToken});
        this.oauth = new Oauth({ accessToken: options.accessToken});
    }
}

export {
    Refunds,
    Payments,
    Cards,
    Customers,
    Client,
    PaymentMethods
}