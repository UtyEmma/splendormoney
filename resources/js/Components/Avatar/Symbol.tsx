import React from 'react'

interface ISymbolProps {
    image: string,
    name: string
    size?: number
}

export const Symbol = ({image, name, size = 50}: ISymbolProps) => {

    const setName = () => {
        if(image || !name) return
        if(name.length <= 2) return name 
        const [first, second] = name.split(' ')
        if(!second) return `${first.charAt(0)}${first.charAt(1)}`
        return `${first.charAt(0)}${second.charAt(0)}`
    }

    return (
        <>
            <div className="rounded-circle overflow-hidden p-1 bg-primary d-flex align-items-center justify-content-center" style={{width: `${size}px`, height: `${size}px`}}>
                {
                    image 
                    
                    ? 
                    
                    <img src={image} className="img-fluid" style={{objectFit: 'cover'}}  />

                    :

                    <h4 className='my-0 text-white'>{setName()}</h4>
                }
            </div>
        </>
    )
}
