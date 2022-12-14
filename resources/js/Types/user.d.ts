import { StatusColor } from "@/Utils/Status"
import { IWishlist } from "./wishlist"
export interface IUser {
    id: string
    name: string
    email: string
    avatar: string
    description?: string
    role: IUserRole,
    created_at: string
    earnings: number
    status: keyof typeof StatusColor
    affiliate_id: string
    enrollments_count?: number
    transactions_count?: number
    referrals_count?: number
    wishlists: IWishlist[]
}

export type IUserRole = 'admin' | 'superadmin' | 'user' | 'instructor' 

export interface IStudent extends IUser{
    enrollments_count: number,
    transactions_sum_amount?: number
    referrals_count: number
    referred_sum_earnings: number
    enrollments?: any[] 
}

export interface InstructorModel extends IUser{
    courses_count?: number
    students_count?: number
    students_sum_amount?: number
    earnings: number
}