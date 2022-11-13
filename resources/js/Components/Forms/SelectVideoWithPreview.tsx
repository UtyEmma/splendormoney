import { getVideoId } from '@/Utils/Youtube'
import React, { ChangeEvent, PropsWithChildren, useEffect, useState } from 'react'

interface ISelectVideoWithPreview extends PropsWithChildren<any> {
    defaultValue?: string
}

export const SelectVideoWithPreview = ({children, ...props}: ISelectVideoWithPreview) => {

    const [video, setVideo] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const url = getVideoId(e.currentTarget.value) 
        if(url) setVideo(`https://www.youtube.com/embed/${url!}`)
        props.onChange && props.onChange(e)
    }

    useEffect(() => {
        if(props.defaultValue) setVideo(props.defaultValue)
    }, [])
    

    return (
        <>
            <div className="form-group">
                <input type="text" className='form-control' name={props.name} placeholder='https://' defaultValue={props.defaultValue} onChange={handleChange} />
            </div>
            <div className="form-group p-0">
                <div className="add-image-box p-0 position-relative overflow-hidden" style={{height: '40px'}}>
                    <iframe width="560" height="100%" src={video} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}
