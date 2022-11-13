import React, { ComponentProps } from "react";

interface InputErrorsProps extends ComponentProps<'p'>{
    message: string
}

export function InputError({ message, className = '' }: InputErrorsProps) {
    return message ? <small className={'text-danger fw-normal' + className}>{message}</small> : null;
}
