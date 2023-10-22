import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"
import CustomersCreateOptions from '../interfaces/customers/CustomersCreateOptions'
import Cards from "./Cards"
export default class Customers {
    BASE_URL: string
    accessToken: any
    cards: Cards
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
        this.cards = new Cards({ accessToken: this.accessToken })
    }

    async create(options: CustomersCreateOptions) {
        const data = await fetch(`${this.BASE_URL}/v1/customers`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(options)
        })
        return await data.json()
    }

    async get(id: string) {
        const data = await fetch(`${this.BASE_URL}/v1/customers/${id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
        })
        return await data.json()
    }

    async fetch(email: string) {
        const data = await fetch(`${this.BASE_URL}/v1/customers/search?email=${email}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
        })
        return await data.json()
    }

    async update(id: string,options: CustomersCreateOptions) {
        const data = await fetch(`${this.BASE_URL}/v1/customers/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(options)
        })
        return await data.json()
    }
}