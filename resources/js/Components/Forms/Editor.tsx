// import DOMPurify from 'dompurify'
import React, { FormEvent, useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import ReactQuill from 'react-quill'

interface EditorModel {
    name: string,
    placeholder?: string,
    className?: string,
    defaultValue?: string
    minHeight?: number
    onChange? : (e: {
        target: {
            name: string
            value: string
        },
        currentTarget: {
            name: string
            value: string
        }
    } | any) => any
}

export const Editor = ({name, placeholder, className, onChange, defaultValue = "", minHeight = 200} : EditorModel) => {
    const [content, setContent] = useState(defaultValue)
    const editor : any = useRef()
    const inputRef = useRef<HTMLInputElement>(null)

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    useEffect(() => {
        editor.current.editor.container.classList.add(`min-h-${minHeight}px`)
        editor.current.editor.container.children[0].style.maxHeight = `${minHeight + 30}px`
        editor.current.editor.container.children[0].style.overflowY = "scroll"
    }, [])

    const handleChange = (value: string) => {
        setContent(value)
        onChange && onChange({
            currentTarget: {name, value},
            target: {name, value}
        })
    }

    useEffect(() => {
        if(!inputRef.current?.value) setContent("")
    }, [inputRef.current?.value])

    return (
        <div className='position-relative'>
            <ReactQuill theme="snow"  defaultValue={defaultValue} onChange={handleChange} formats={formats} ref={editor} placeholder={placeholder} />
            <input name={name} value={content} ref={inputRef} hidden />
        </div>
    )
}