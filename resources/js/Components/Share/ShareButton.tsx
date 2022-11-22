import { IApp, InertiaProps } from '@/Types/app'
import { InertiaApp, usePage } from '@inertiajs/inertia-react'
import React from 'react'

interface IShareButtonProps {
    link: string
    title: string
}

interface IShareData {
    app: IApp,
    link: string
}

export const shareData = (data: IShareData) => {
    return {
        url: data.link
    }
}

export const ShareButton = ({link, title}: IShareButtonProps) => {

    const { app } = usePage().props as unknown as InertiaProps
    
    const share = () => {
        navigator.share({
            url: link
        })
    }

    return (
        <button onClick={share} className="btn btn-wish w-100">
            <i className="feather-share-2" /> Share
        </button>
    )
}
