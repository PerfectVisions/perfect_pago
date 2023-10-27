import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"
import CreateStoreOptions from "../interfaces/stores/CreateStoreOptions"
export default class Stores {
    BASE_URL: string
    accessToken: any
    user_id?: string | null
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
        this.user_id = null
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
     * @param {string} user_id  - CARD ID
     * @param {CardUpdateOptions} options - Options
     * @returns 
     */

    async create(user_id: string, options: CreateStoreOptions): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/users/${user_id || this.user_id}/stores`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(options)
        })
        return await data.json()
    }

    async update(user_id: string, id: string,  options: CreateStoreOptions): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/users/${user_id  || this.user_id}/stores/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(options)
        })
        return await data.json()
    }

    async delete( id: string, user_id?: string): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/users/${user_id || this.user_id}/stores/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
        return await data.json()
    }

    async fetch(user_id?: string): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/users/${user_id || this.user_id}/stores/search`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
        return await data.json()
    }
}