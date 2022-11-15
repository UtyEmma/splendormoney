export interface ITransaction {
    user_id: string
    amount: number
    id: string
    reference: string
    courses: string[]
    status: 'pending' | 'completed',
    deleted_at: string
}