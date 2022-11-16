import { ICourse } from "./course"
import { IUser } from "./user"

export interface IReview {
    user_id: string
    course_id: string
    course: ICourse
    student: IUser
    review: string
    rating: number
}