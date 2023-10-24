import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"
import PaymentCreateBody from '../interfaces/payments/PaymentCreateBody'
import PaymentMethods from "./PaymentsMethods"
export default class Payments {
    BASE_URL: string
    accessToken: any
    payment_methods: PaymentMethods
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
        this.payment_methods = new PaymentMethods({ accessToken: this.accessToken })
    }

    /**
     * 
     * @param {PaymentCreateBody} body - Payment Body
     * @returns 
     */

    async create(body: PaymentCreateBody): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/v1/payments`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(body)
        })
        return await data.json()
    }

    /**
     * 
     * @param {string} id - Payment ID 
     * @returns 
     */

    async get(id: string): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/v1/payments/${id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
        return await data.json()
    }


    /**
     * 
     * @param {string} id - Payment ID
     * @returns 
     */
    async cancel(id: string): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/v1/payments/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({ status: 'cancelled'})
        })
        return await data.json()
    }

    /**
     * 
     * @param {string} id - Payment ID
     * @param {number} amount - Refund Amount or null for refund all
     * @returns 
     */

    async refund(id: string, amount?: number): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/v1/payments/${id}/refunds`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({ 
                id: id,
                amount: amount ? amount : null
             })
        })
        return await data.json()
    }
}