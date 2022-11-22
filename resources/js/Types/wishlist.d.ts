import { ICourse } from "./course"
import { IUser } from "./user"

export interface IWishlist {
    user_id: string
    course_id: string
    course?: ICourse
    user?: IUser 
}