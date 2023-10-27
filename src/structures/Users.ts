import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"
import Stores from "./Stores"

interface UserOptions {
    description: string,
    site_id: 'MPE' | 'MLU' | 'MLA' | 'MLC' | 'MCO' | 'MLB' | 'MLM'
}

export default class Users {
    BASE_URL: string
    accessToken: string
    stores: Stores
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
        this.stores = new Stores({ accessToken: this.accessToken})
    }

    /**
     * 
     * @param {UserOptions} options - Test User Options
     * @returns 
     */

    async create(options: UserOptions): Promise<void> {
        const data = await fetch(`${this.BASE_URL}/v1/users/test`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({ 
                description: options.description,
                site_id: options.site_id
             })
        })
        return await data.json()
    }
}