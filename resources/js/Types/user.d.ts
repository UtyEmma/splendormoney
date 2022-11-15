import { StatusColor } from "@/Utils/Status"
export interface IUser {
    id: string
    name: string
    email: string
    avatar: string
    description?: string
    role: string,
    created_at: string
    earnings: number
    status: keyof typeof StatusColor
}

export interface IStudent extends IUser{
    enrollments_count: number,
    transactions_sum_amount?: number
    referrals_count: number
}

export interface InstructorModel extends IUser{
    courses_count?: number
    students_count?: number
    students_sum_amount?: number
}