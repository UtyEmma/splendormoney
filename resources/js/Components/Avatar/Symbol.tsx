import React from 'react'

interface ISymbolProps {
    image: string,
    name: string
    size?: number,
    className?: string
}

export const Symbol = ({image, name, size = 50, className}: ISymbolProps) => {

    const setName = () => {
        if(image || !name) return
        if(name.length <= 2) return name 
        const [first, second] = name.split(' ')
        if(!second) return `${first.charAt(0)}${first.charAt(1)}`
        return `${first.charAt(0)}${second.charAt(0)}`
    }

    return (
        <>
                {
                    image 
                    
                    ? 
                    
                    <img src={image} className="img-fluid" style={{objectFit: 'cover'}}  />

                    :

                    <span className={`rounded-circle overflow-hidden p-2 bg-secondary d-flex align-items-center justify-content-center ${className}`} style={{width: `${size}px`, height: `${size}px`}}>
                        <h4 className='my-0 text-white' style={{
                            fontSize: `${size / 2}px`
                        }} >{setName()}</h4>
                    </span>
                }
        </>
    )
}
