export default interface CardUpdateOptions {
    expiration_month?: number,
    expiration_year?: number,
    cardholder?: {
        name?: string,
        identification?: string
    },
    token?: string
}