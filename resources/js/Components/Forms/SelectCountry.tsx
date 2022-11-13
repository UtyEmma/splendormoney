import { Countries } from '@/Utils/Country'
import React, { ComponentProps } from 'react'

export const SelectCountry = ({className, ...props} : ComponentProps<'select'>) => {
    return (
        <select aria-label="Select a Country" data-control="select2" data-placeholder="Select a language..." className={`form-select form-select-solid form-select-lg ${className}`} {...props} >
            {
                Countries.map(country => <option value={country.label}>{country.label}</option>)
            }
        </select>
    )
}
