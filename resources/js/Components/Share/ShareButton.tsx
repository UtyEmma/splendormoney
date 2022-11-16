import React from 'react'

interface IShareButtonProps {
    link: string
    title: string
}

export const ShareButton = ({link, title}: IShareButtonProps) => {

    const share = () => {
        const shareData = {
            title: `'Hi, come join Libraclass'`,
            text: 'I am inviting you to join Libraclass',
            url: link
        }

        navigator.share(shareData)
    }

    return (
        <button onClick={share} className="btn btn-wish w-100">
            <i className="feather-share-2" /> Share
        </button>
    )
}
