import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"
import PaymentCreateBody from '../interfaces/payments/PaymentCreateBody'
export default class Payments {
    BASE_URL: string
    accessToken: any
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
    }

    async create(body: PaymentCreateBody) {
        const data = await fetch(`${this.BASE_URL}/v1/payments`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(body)
        })
        return await data.json()
    }

    async get(id: string) {
        const data = await fetch(`${this.BASE_URL}/v1/payments/${id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
        return await data.json()
    }

    async cancel(id: string) {
        const data = await fetch(`${this.BASE_URL}/v1/payments/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({ status: 'cancelled'})
        })
        return await data.json()
    }
}