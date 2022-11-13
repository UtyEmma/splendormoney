import { useHttp } from '@/Hooks/useHttp';
import { FileByteFormat } from '@/Types/files';
import { btyesToFormat, formatBytes } from '@/Utils/Files';
import { useForm } from '@inertiajs/inertia-react';
import React, { FormEvent, useEffect, useRef, useState } from 'react'

interface IFileUploaderProps {
    max: number
    size?: number
    format?: FileByteFormat
    name?: string
    onChange?: any,
    defaultValue?: string[],
    autoUpload?: boolean
}

export const FileUploader = ({max = 1, size, format = 'MB', name, defaultValue, autoUpload = true, onChange}: IFileUploaderProps) => {

    const [files, setFiles] = useState<any[]>(defaultValue || []);
    const [error, setError] = useState("")
    const [urls, setUrls] = useState<string | string[]>('') 
    const request = useHttp()
    
    const {processing, progress, setData, post} = useForm({
        files: '' as any
    })
    
    const parseFiles = (e: FormEvent<HTMLInputElement>) => {
        setError('')
        setFiles([])

        const files = e.currentTarget.files as any
        
        if(files.length > max) return setError("Maximum File limit exceeded")
        const fileArray = [...files]
        
        if(size){
            if(fileArray.some(file => btyesToFormat(file?.size!, format) > size )) return setError("Files must not exceed "+ size+format)
        }

        setFiles(fileArray)
        onChange && onChange(e)
    }  

    const uploadAllFiles = async () => {
        if(!files.length) return setError('Please select files to upload')
        await request.authorize().headers({"Content-Type": "multipart/form-data"}).post(`/media/upload`, {
            files
        })
    }

    const removeAll = (e: any) => {
        e.preventDefault()
        setFiles([])
        setError('')
    }

    useEffect(() => {
        setData({files});
    }, [files])

    return (
        <div className="form-group row">
            <div className="">
                <div className="dropzone dropzone-queue mb-2" id="kt_dropzonejs_example_2">
                    <div className="dropzone-panel mb-lg-0 mb-2">
                        <label className="dropzone-select btn btn-sm btn-primary me-2">
                            Attach files
                            <input type="file" name={autoUpload ? '' : name} hidden multiple={max > 1} onChange={parseFiles} />
                        </label>

                        {
                            files.length > 0

                            ?

                            <>
                                {
                                    autoUpload

                                    &&

                                    <button type='button' onClick={uploadAllFiles} className="btn btn-sm btn-light-primary me-2">Upload All</button>
                                }

                                <button type='button' onClick={removeAll} className="btn btn-sm btn-light-primary">Remove All</button>
                            </>

                            :

                            <span>
                                {
                                    (max && !size) && <span>Maximum number of files is {max}.</span>
                                }
                                {
                                    (max && size) && <span className="form-text text-muted">Max file size is {size}{format} and Max number of files is {max}.</span>
                                }
                                {
                                    (!max && size) && <span>Maximum file size is {size}{format}.</span>
                                }
                            </span>
                        }
                    </div>

                    <div>
                        {
                            files.map((file, i) => <FilePreview file={file} index={i} max={max} setUrls={setUrls} setFiles={setFiles}  uploading={processing}/>)
                        }
                    </div>
                </div>
                
                <div>
                    {error && <span className='text-danger'>{error}</span>}
                </div>
            </div>
            <input type="text" hidden name={autoUpload ? name : ''} onChange={onChange} value={files.length ? JSON.stringify(files) : ''} />
        </div>
    )
}

interface IFilePreviewProps {
    file: any
    index: number
    setFiles: React.Dispatch<React.SetStateAction<any[]>>,
    uploading: boolean
    setUrls: React.Dispatch<React.SetStateAction<string | string[]>>
    max: number
}

const FilePreview = ({file, setFiles, index, uploading, setUrls, max}: IFilePreviewProps) => {

    const request = useHttp()

    const upload = async (e: any) => {
        e.preventDefault()
        await request.authorize().headers({"Content-Type": "multipart/form-data"}).post(`/media/upload`, {
            files: file
        })
        if(request.status) setUrls(request.data!.urls)
    }

    const removeFile = () => {
        setFiles(files => files.filter((file, i) => i !== index))
    }

    return (
        <div className="dropzone-item position-relative overflow-hidden">
            <div className="dropzone-file">
                <div className="dropzone-filename" title="some_image_file_name.jpg">
                    <span >{file?.name}</span>
                    <span className='ms-2 fw-bold'>({formatBytes(file?.size)})</span>
                </div>
                <div className="dropzone-error" data-dz-errormessage />
            </div>

            <div className="dropzone-toolbar">
                {
                    request.loading || uploading

                    &&

                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                }
                <span className="dropzone-start" onClick={upload}><i className="bi bi-play-fill fs-3" /></span>
                <span className="dropzone-cancel"  style={{display: 'none'}}><i className="bi bi-x fs-3" /></span>
                <span className="dropzone-delete" onClick={removeFile} data-dz-remove><i className="bi bi-x fs-1" /></span>
            </div>
        </div>
    )
}
