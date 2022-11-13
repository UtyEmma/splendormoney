import React from 'react'
import { ButtonHTMLAttributes } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean
}

export const Button = ({loading = false, children, ...props}: React.PropsWithChildren<IButtonProps>) => {
    return (
        <button {...props} className={`btn btn-primary btn-start ${props.className}`}>
            {children}

            {loading && <span className="spinner-border spinner-border-sm align-middle ms-2" />}
        </button>
    )
}
