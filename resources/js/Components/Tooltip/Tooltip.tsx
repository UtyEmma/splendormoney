import React from 'react'

interface ITooltip extends React.PropsWithChildren<any> {
    element?: React.ElementType, 
    tip: string, 
    className?: string
}

export const Tooltip = ({element: Element, tip, className, children} : ITooltip) => {
    return (
        Element

        ?
            <Element tip={tip} className={className} data-bs-toggle="tooltip" title={tip} ></Element>
        :

        <>
            {
                children

                ?

                <span data-bs-toggle="tooltip" title={tip}>
                    {children}
                </span>

                :                

                <i className={`fas fa-exclamation-circle ms-1 fs-7 ${className}`} data-bs-toggle="tooltip" title={tip} />
            }
        </>

    )
}
