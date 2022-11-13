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