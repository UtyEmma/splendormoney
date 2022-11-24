import React, { ComponentProps } from 'react'

export default function Naira(props: ComponentProps<'span'>) {
    return (
        <span dangerouslySetInnerHTML={{__html: "&#x20A6;"}} {...props} />
    )
}
