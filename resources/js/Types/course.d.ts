import { IReview } from "./review"
import { IUser } from "./user"

interface ICourse {
    id: string
    instructor: IUser
    name: string
    slug: string
    description: string
    category?: string
    image: string
    video: string
    price: number
    discount: number
    status: 'active' | 'inactive'
    modules: IModule[]
    enrollments_count: number,
    transactions_sum_amount: number
    course_duration?: number
    lectures_count: number
    created_at: string
    updated_at: string
    enrollment: any
    reviews_count: number
    reviews: IReview[]
    reviews_sum_rating: number,
    wishlist_count: number
}

interface IModule {
    id: string
    title: string
    course_id: string
    lectures: ILecture[]
}

interface ILecture {
    id: string
    module_id: string
    title: string
    file: any
    description?: string
    duration: number
}