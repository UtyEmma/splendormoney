import React, { ButtonHTMLAttributes, ComponentProps, HTMLAttributes } from 'react'
import { SwalOptions, SweetAlert } from './SweetAlert'

interface SwalProps<P> extends HTMLAttributes<P> {
    element: React.ElementType<P>,
    status: "warning" | "success" | "danger",
    onSuccess: any,
    onCancel?: any
}

export const Swal = ({element: Element = 'button', text, status, children, confirm, cancel, button, onSuccess, onCancel, ...props}: SwalOptions & SwalProps<any>) => {    
    const options : SwalOptions = {
        text: text ?? "Are you sure you want to proceed?",
        status: status,
        confirm: confirm ?? "Yes, proceed!",
        cancel: cancel ?? "No, cancel",
        button: button ?? 'error',
        onSuccess: () => {
            return onSuccess && onSuccess()
        },
        onCancel: () => {
            return onCancel && onCancel()
        } 
    }

    const show = () => {
        SweetAlert(options)
    }

    return (
        <>
            <Element {...props} onClick={show} >{children}</Element>
        </>
    )
}
