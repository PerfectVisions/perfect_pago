import PaymentStructureOptions from "../interfaces/payments/PaymentStrucutureOptions"

interface UserOptions {
    description: string,
    site_id: 'MPE' | 'MLU' | 'MLA' | 'MLC' | 'MCO' | 'MLB' | 'MLM'
}

export default class uSERS {
    BASE_URL: string
    accessToken: any
    constructor(options: PaymentStructureOptions) {
        this.accessToken = options.accessToken
        this.BASE_URL = ' https://api.mercadopago.com'
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