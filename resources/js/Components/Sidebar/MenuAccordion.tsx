import React, { PropsWithChildren } from 'react'

interface IMenuAccordionProps{
    title: string
}

export const MenuAccordion = ({title, children} : PropsWithChildren<IMenuAccordionProps>) => {
    return (
        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
                <span className="menu-icon">
                {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                <span className="svg-icon svg-icon-5">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                    </svg>
                </span>
                {/*end::Svg Icon*/}
                </span>
                <span className="menu-title">{title}</span>
                <span className="menu-arrow" />
            </span>

            <div className="menu-sub menu-sub-accordion">
                {children}
            </div>
        </div>
    )
}
