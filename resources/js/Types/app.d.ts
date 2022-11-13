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