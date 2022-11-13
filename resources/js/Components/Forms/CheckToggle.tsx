import React from 'react'

interface ICheckToggleProps {
    condition: boolean, 
    toogle: any, 
    title: string, 
    defaultValue?: any, 
    onChange?: any
    name: string
    className?: string
    description?: string
}

export const CheckToggle = ({toogle, condition, title, defaultValue, name, onChange, className, description}: ICheckToggleProps) => {
    return (
        <label className={`btn btn-outline btn-outline-dashed btn-outline-default ${condition && "active bg-light-primary"} d-flex text-start px-6 py-4 ${className}`} data-kt-button="true">
            <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                <input className="form-check-input form-check-input-sm" type="radio" onChange={toogle} name={name} defaultValue={defaultValue} defaultChecked={condition} />
            </span>
            <span className="ms-5">
                <span className="text-gray-800 d-block">{title}</span>
                {
                    description

                    &&


                <div>
                <span className='text-muted fw-normal mb-0'>{description}</span>
                </div>
                }
            </span>
        </label>
    )
}
