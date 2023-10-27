export default interface CreateStoreOptions {
    user_id: string;
    business_hours?: {
    monday?: [
        {
            open?: string,
            close?: string
        }
    ],
    tuesday?: [
        {
            open?: string,
            close?: string
        }
    ]
    },
    external_id?: string,
    location?: {
        street_number?: string,
        street_name?: string,
        city_name?: string,
        state_name?: string,
        latitude?: number,
        longitude?: number,
        reference?: string
    },
    name?: string
}