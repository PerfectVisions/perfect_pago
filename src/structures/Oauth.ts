import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"
import OauthOptions from '../interfaces/oauth/OauthOptions'
export default class Oauth {
    BASE_URL: string
    accessToken: any
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
    }

    async update(body: OauthOptions) {
        const data = await fetch(`${this.BASE_URL}/oauth/token`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(body)
        })
        return await data.json()
    }
}