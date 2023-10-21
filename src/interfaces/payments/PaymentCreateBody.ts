interface ItensType {
    id?: string,
    title?: string,
    description?: string,
    picture_url?: string,
    category_id?: string,
    quantity?: number,
    unit_price?: number,
    type?: string,
    event_date?: string,
    warranty?: boolean,
    category_descriptor?: {
        passenger?: {
            first_name?: string,
            last_name?: string
        },
        route?: {
            departure?: string,
            destination?: string,
            departure_datE_time?: string,
            arrival_date_time?: string,
            company?: string
        }
    }
}

export default interface PaymentCreateBody {
    additional_info?: {
        ip_address?: string,
        items?: Array<ItensType>,
        payer: {
            phone?: {
                area_code?: string,
                number?: string
            },
            address?: {
                zip_code?: string,
                street_name?: string,
                street_number?: number
            },
            registration_date?: string,
            is_prime_user?: '1' | "0",
            is_first_purchase_online?: '1' | "0",
            last_purchase?: string,
            authentication_type?: "Gmail" | "Facebook" | "Native web" | "Other",
            shipments?: {
                receiver_address?: {
                    zip_code?: string,
                    state_name?: string,
                    city_name?: string,
                    street_name?: string,
                    street_number?: number,
                    floor?: string,
                    apartment?: string
                },
                width?: number,
                height?: number,
                express_shipment?: '1' | "0",
                pick_up_on_seller?: '1' | "0"
            },
        }
    },
    application_fee?: number,
    binary_mode?: boolean,
    callback_url?: string,
    campaign_id?: number,
    capture?: boolean,
    coupon_amount?: number,
    coupon_code?: string,
    date_of_expiration?: string,
    description: string,
    differential_pricing_id?: number,
    external_reference?: string,
    installments: number,
    issuer_id: string,
    metadata?: object,
    payer: {
        entity_type?: 'individual' | 'association',
        type?: 'customer' | 'guest',
        id?: string,
        email: string,
        indentification?: {
            type?: 'CPF' | 'CNPJ' | 'CUIT' | 'CUIL' | 'DNI' | 'CURP' | 'RFC' | 'CC' | 'RUT' | 'CI',
            number?: string,

        } 
        first_name?: string,
        last_name?: string,
    },
    payment_method_id: "Pix" | 'Account_money' | 'Debin_transfer' | 'Ted' | 'Cvu',
    statement_descriptor?: string,
    token?: string,
    transaction_amoun: number
}
