import React, { ElementType, HTMLAttributes, PropsWithChildren } from 'react'

interface IDiscloseProps extends PropsWithChildren {
    show: boolean
    as?: ElementType
}

export const Disclose = ({show, children, as: Element, ...props} : IDiscloseProps & HTMLAttributes<any>) => {
    return (
        <>
            {
                Element

                ?

                <Element {...props}>
                    {show && children}
                </Element>

:

                <>
                    {show && children}
                </>
            }
        </>
    )
}
