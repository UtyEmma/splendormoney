import React, { ComponentProps, PropsWithChildren } from 'react'

interface IDisplayProps extends PropsWithChildren{
    show: boolean
    display?: string
}

export const Display = ({show, display = 'block', children, ...props} : IDisplayProps & ComponentProps<'div'>) => {
    return (
        <div {...props} className={ props.className} style={{display: show ? `${display} !important` : 'none !important'}}  >
            {children}
        </div>
    )
}
