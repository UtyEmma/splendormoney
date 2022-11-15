import {IUser} from './user'

export interface IAppContext {
    user: IUser | null
}

export interface InertiaProps {
    auth: {
        user: IUser | null
    },
    errors: Record<string, any>
    ziggy: any,
    url: string,
    version: string 
}

export type IProductType = 'product' | 'event' | 'course'

export type IPaginationLink = {
    url: string
    label: number
    active: boolean
}
export interface IPagination <T> {
    current_page : number,
    first_page_url: string
    from: number
    data: T,
    last_page: number
    last_page_url: string
    links: IPaginationLink[]
    next_page_url?: string
    path: string
    per_page: number
    prev_page_url?: string
    to: number
    total: number
}