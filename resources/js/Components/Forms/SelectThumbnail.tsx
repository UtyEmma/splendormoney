import React, { ChangeEvent, FormEvent, InputHTMLAttributes, PropsWithRef, useRef, useState } from 'react'

type ImageSelectType = {
    name: string,
    defaultValue?: string
}

export const SelectThumbnail = ({name, defaultValue, ...props} : InputHTMLAttributes<HTMLInputElement> ) => {

    const [src, setSrc] = useState(defaultValue)

    const imgInput = useRef<HTMLInputElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0]
        const url = URL.createObjectURL(file!)
        setSrc(url)
        props.onChange!(e)
    }

    const remove = () => {
        imgInput.current!.value = ""
        // imgInput.current!.files = null
        setSrc('')
    }

    return (
        <div className="image-input image-input-empty image-input-outline  mb-3" data-kt-image-input="true" style={{backgroundImage: `url(${src || "/assets/img/user/user11.jpg"})`}}>
            <div className="image-input-wrapper w-150px h-150px position-relative">
                <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                    <i className="feather-edit-2 fs-7" />
                    <input  {...props} ref={imgInput} type="file" name={name} onChange={handleChange} accept=".png,.jpg,.jpeg" />
                    {/* <input type="hidden" name="avatar_remove" /> */}
                </label>

                {
                    src

                    &&

                    <span onClick={remove} className="btn btn-icon btn-circle btn-active-color-primary bottom-5 position-absolute w-25px h-25px bg-body shadow" data-bs-toggle="tooltip" title="Remove avatar">
                        <i className="feather-x fs-7" />
                    </span>
                }
            </div>
        </div>
    )
}
