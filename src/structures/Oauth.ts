import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"

export default class Oauth {
    BASE_URL: string
    accessToken: any
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
    }

    async update() {

    }
}