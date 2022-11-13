import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import Dropzone, { useDropzone } from 'react-dropzone'
// import { formatBytes } from '../../helpers/_file';
// import { useRequest } from '../../hooks/_request';
// import { FileUploadErrorIcon, FileUploadSuccessIcon } from '../icons';
import pluralize from 'pluralize'
import { useForm } from '@inertiajs/inertia-react';
import { blobUrlToFile, formatBytes } from '@/Utils/Files';
import { useHttp } from '@/Hooks/useHttp';

interface IDropZone {
    max?: number, 
    defaultFiles?: string[], 
    name?: string,
    onChange?: any
}

interface DropZoneProps {
    files: any[],
    setFiles: Dispatch<SetStateAction<any[]>>,
    setFileNames: Dispatch<SetStateAction<string[]>>
}

export const DropZone = ({max, defaultFiles = [], name, onChange} : IDropZone) => {
    const [files, setFiles] = useState<any[]>([]);
    const [error, setError] = useState("")
    const dropzone : any = useRef(null)
    const [fileNames, setFileNames] = useState<string[]>(defaultFiles)

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
          'image/*': []
        },
        maxFiles: max,
        onDragOver: (e) => {
            dropzone.current.style.borderStyle = "solid"
            const message = dropzone.current.getElementsByClassName('dz-message')[0]
            message.classList.add("opacity-25")
        },
        onDragLeave: (e) => {
            dropzone.current.style.borderStyle = "dashed"
            const message = dropzone.current.getElementsByClassName('dz-message')[0]
            message.classList.remove("opacity-25")
        },
        onDropRejected: files => {
            if(files.length > max!) return setError(`Files must not be more than ${max}`)
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file),
            })));

            resetContainer()
            setError("")
        }
    });
    
    const resetContainer = () => {
        dropzone.current.style.borderStyle = "dashed"
        const message = dropzone.current.getElementsByClassName('dz-message')[0]
        message.classList.remove("opacity-50")
    }

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    useEffect(() => {
        parseFiles()
    },[])

    const parseFiles = async () => {
        const files = defaultFiles.map(async (file) => blobUrlToFile(file))
        const items = await Promise.all(files)
        if (files.length > 0) setFiles(items.map(file => {
            Object.assign(file, { preview: URL.createObjectURL(file) })
        }))
    }

    return (
        <>
            <div ref={dropzone} className="dropzone">
                <input {...getInputProps()} multiple={max! > 1} onChange={onChange} />
                
                {
                    files.length < 1

                    ?

                    <div {...getRootProps()} className="dz-message needsclick">
                        <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                        <div className="ms-4">
                            <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                            {
                                max && <span className="fs-7 fw-bold text-gray-400">Upload up to {max} {pluralize('file', max)}</span>
                            }
                        </div>
                    </div>

                    :

                    <FileThumbnail files={files} setFiles={setFiles} setFileNames={setFileNames} />
                }
            </div>
            <input name={name} hidden value={fileNames} onChange={onChange} />
            <small className='text-danger'>{error}</small>
        </>
    )
}

const FileThumbnail = ({files, setFiles, setFileNames} : DropZoneProps) => {

    useEffect(() => {
        setFileNames([])
    }, [])
    
    return (
        <>
            {
                files.map((file, index) => <Thumbnail setFileNames={setFileNames} file={file} files={files} setFiles={setFiles} index={index} />)
            }
        </>
    )
}

interface ThumbnailProps extends DropZoneProps {
    file: any,
    index: number
}

const Thumbnail = ({file, files, setFiles, index, setFileNames} : ThumbnailProps) => {

    const [status, setStatus] = useState(false)
    const request = useHttp()

    const removeFile = (e : any, index: number) => {
        e.preventDefault()
        const array : any[] = []
        files.map((file : any, i : number) => i !== index && array.push(file))
        setFiles(array)
    }

    useEffect(() => {
        uploadFile()
    }, [])

    const uploadFile = async () => {
        await request.authorize().headers({"Content-Type": "multipart/form-data"}).post(`/media/upload`, {
            files: file
        })

        setFileNames((prevState) => [...prevState, request.data?.urls])
        setStatus(request.status)
    }

    return (
        <div className={`dz-preview dz-processing dz-image-preview ${request.loading ? '' : `dz-complete ${status ? 'dz-success' : 'dz-error'}`}`}> 
            <div className="dz-image">
                <img data-dz-thumbnail="" alt={file?.name} src={file?.preview} style={{
                    minWidth: "100%", 
                    minHeight: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    maxHeight: "100%",
                    maxWidth: "100%"
                }} />
            </div> 
            <div className="dz-details"> 
                <div className="dz-size">
                    <span data-dz-size="">
                        <small className='fw-bold fs-6'>{formatBytes(file?.size)}</small>
                    </span>
                </div> 
                <div className="dz-filename">
                    <span data-dz-name="">{file?.name}</span>
                </div> 
            </div> 
            <div className="dz-progress"> 
                <span className="dz-upload" data-dz-uploadprogress=""></span> 
            </div> 
            <div className="dz-error-message">
                <span data-dz-errormessage="">{request.errors.file}</span>
            </div> 
            <div className="dz-success-mark "> 
                {/* <FileUploadSuccessIcon /> */}
            </div> 
            <div className="dz-error-mark "> 
                {/* <FileUploadErrorIcon /> */}
            </div> 
            <button onClick={(e) => removeFile(e, index)} className="dz-remove"  data-dz-remove="">Remove file</button>
        </div>
    )
}