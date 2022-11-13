import React from 'react'

export const Input = (props) => {
    return (
        <input {...props} className={`form-control bg-transparent ${props.className}`}  />
    )
}
