import { Button } from '@/Components/Buttons/Button'
import { InputError } from '@/Components/Forms/InputError'
import { useCourse } from '@/Context/CourseContext'
import { ILecture } from '@/Types/course'
import Form from '@/Utils/Form'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent } from 'react'

interface ICourseLecture {
    lecture: ILecture
    index: number
    module_no: number
}

export const CourseLecture = ({lecture, index, module_no}: ICourseLecture) => {

    const {data, setData, errors, processing, put, ...form} = useForm({
        title: lecture.title,
        file: "",
        description: lecture.description,
        duration: 0
    })
    const {course, setCourse} = useCourse()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(e.currentTarget.name as any, Form.value(e.currentTarget as any))
    }

    const updateLecture = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        put(route('admin.courses.modules.lecture.update', {
            lecture: lecture.id,
            course: course?.id,
            module: lecture.module_id
        }), {
            onSuccess: (res) => {
                setCourse(res.props.course as any)
            }
        })
    }

    const deleteLecture = () => {
        form.delete(route('admin.courses.modules.lecture.delete', {
            lecture: lecture.id,
            course: course?.id,
            module: lecture.module_id
        }), {
            onSuccess: (res) => {
                setCourse(res.props.course as any)
            }
        })
    }

    const handleFileChange = (e: ChangeEvent<any>) => {
        const file = e.currentTarget.files[0]
        if(file.type.split('/')[0] == 'video'){
            const url = URL.createObjectURL(file)
            var video = document.createElement('video');
            video.preload = 'metadata';
            video.src = url;
          
            video.onloadedmetadata = function() {
              window.URL.revokeObjectURL(video.src)
              setData('duration', video.duration);
              setData(file, file)
            }
        }
        
        setData('file', file)
    }

    return (
        <div className="faq-grid">
            <div className="faq-header d-flex justify-content-between">
                <a className="collapsed faq-collapse" data-bs-toggle="collapse" href={"#collapseOne-"+lecture.id}>
                    <i className="fas fa-align-justify" /> Lecture: {module_no}:{index} {lecture.title}
                </a>

                <div className="faq-right">
                    <a className='btn btn-outline btn-outline-primary btn-sm btn-icon p-0' data-bs-toggle="collapse" href={"#collapseOne-"+lecture.id}>
                        <i className="far fa-pen-to-square" />
                    </a>
                    <button onClick={deleteLecture} className="btn btn-outline btn-outline-danger btn-icon">
                        <i className="far fa-trash-can" />
                    </button>
                </div>
            </div>
            <div id={"collapseOne-"+lecture.id} className="collapse" data-bs-parent={"#lecture-accordion"}>
                <div className="faq-body">
                    <form onSubmit={updateLecture}>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Lecture Title</label>
                                    <input type="text" onChange={handleChange} name="title" defaultValue={data.title} className='form-control' />
                                    <InputError message={errors.title} />
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Lecture File</label>
                                    <input type="file" name="file" onChange={handleFileChange} className='form-control' />
                                    <InputError message={errors.file} />
                                </div>
                            </div>

                            <div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Lecture Description</label>
                                    <textarea name="description" defaultValue={data.description} onChange={handleChange} className='form-control'></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <Button loading={processing} className="btn btn-primary">Update Lecture</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
