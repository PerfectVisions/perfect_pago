import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"
import CardUpdateOptions from '../interfaces/customers/Cards'
export default class Cards {
    BASE_URL: string
    accessToken: any
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
    }

    /**
     * 
     * @param {string} id - Card ID
     * @returns 
     */

    async get(id: string): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/stores${id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
        return await data.json()
    }

    /**
     * 
     * @param {string} id  - CARD ID
     * @param {CardUpdateOptions} options - Options
     * @returns 
     */

    async create(id: string, options: CardUpdateOptions): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/users/${id}/stores`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(options)
        })
        return await data.json()
    }



    /**
     * 
     * @param {string} customer_id - Customer ID
     * @param {string} id - Card ID
     * @returns 
     */

    async delete(customer_id: string, id: string): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/v1/customers/${customer_id}/cards/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
        })
        return await data.json()
    }
}