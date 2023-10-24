import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"
export default class PaymentMethods {
    BASE_URL: string
    accessToken: any
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
    }


    /**
     * 
     * @returns {object}
     */
    async get(): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/v1/payment_methods`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
        return await data.json()
    }

}