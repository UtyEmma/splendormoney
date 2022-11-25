import { ICourse } from "./course"

export interface ICategory {
    id: string
    name: string
    description: string
    slug: string
    image: string
    description: string
    courses: ICourse[]
}