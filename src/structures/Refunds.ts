import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"
export default class Refunds {
    BASE_URL: string
    accessToken: any
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
    }


    /**
     * 
     * @param {string} id - Payment ID
     * @param {string} refund_id - Refund ID
     * @returns PaymentData
     */

    async get(id: string, refund_id: string): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/v1/payments/${id}/refunds/${refund_id}`, {
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

    async getAll(id: string): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/v1/payments/${id}/refunds`, {
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
     * @param {string} amount - Refund Value or null for refund all
     * @returns 
     */

    async create(id: string, amount?: number): Promise<void> {
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