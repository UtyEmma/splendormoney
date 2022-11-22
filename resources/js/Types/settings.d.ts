export interface ISettings {
    id: string
    commission: number
    address: string
    name: string
    logo: string
    phone: string
    email: string
    flutterwave_test_secret_key: string
    flutterwave_test_public_key: string
    flutterwave_live_secret_key: string
    flutterwave_live_public_key: string
    test_mode: boolean
}