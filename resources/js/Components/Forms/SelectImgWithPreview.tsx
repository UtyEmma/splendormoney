import React, { ChangeEvent, PropsWithChildren, useState } from 'react'

interface ISelectImgWithPreview extends PropsWithChildren<any> {
    defaultValue?: string
}

export const SelectImgWithPreview = ({children, ...props}: ISelectImgWithPreview) => {

    const [src, setSrc] = useState(props.defaultValue || '')

    const updateImg = (e: ChangeEvent<HTMLInputElement>) => {
        const file = URL.createObjectURL(e.currentTarget.files![0])
        if(file) setSrc(file)
        props.onChange && props.onChange(e)
    }

    return (
        <>
            <div className="form-group">
                <div>
                    <label className='btn btn-block border mb-0'>
                        <input type="file" name={props.name} onChange={updateImg} hidden />
                        {children}
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="add-image-box position-relative overflow-hidden" style={{height: '40px'}}>
                    {
                        src &&

                        <img src={src} alt="" className='w-100 h-100' style={{objectFit: 'cover'}} />
                    }
                </div>
            </div>
        </>
    )
}
