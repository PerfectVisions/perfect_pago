export default interface CustomersCreateOptions {
    address?: {
        id?: string,
        zip_code?: string,
        street_name?: string,
        street_number?: number,
        city?: {
            name?: string
        }
    },
    date_registered?: Date,
    default_address?: string,
    default_card?: string,
    description?: string,
    email?: string,
    first_name?: string,
    identification?: {
        type?: string,
        number?: string
    },
    last_name?: string,
    phone?: {
        area_code?: string,
        number?: string
    },

}