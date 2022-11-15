import { Button } from '@/Components/Buttons/Button'
import { InputError } from '@/Components/Forms/InputError'
import { useCourse } from '@/Context/CourseContext'
import { ICourse, ILecture } from '@/Types/course'
import Form from '@/Utils/Form'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent, useEffect } from 'react'


export const NewLecture = ({setShowNew, module} : any) => {

    
    const {data, setData, processing, post, errors} = useForm({
        title: '',
        file: '',
        description: '',
        duration: 0
    })
    const {course, setCourse} = useCourse()
    
    
    const handleChange = (e: ChangeEvent<any>) => {
        setData(e.currentTarget.name, Form.value(e.currentTarget))
    }

    const createLecture = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(data)
        post(route('admin.courses.modules.lecture.store', {
            course: course!.id,
            module: module.id
        }), {
            onSuccess: res => {
                setCourse(res.props.course as ICourse)
                setShowNew(false)
            }
        })
    }

    const handleFileChange = (e: ChangeEvent<any>) => {
        const file = e.currentTarget.files[0]        
        const url = URL.createObjectURL(file)
        var video = document.createElement('video');
        video.preload = 'metadata';
        video.src = url;
      
        video.onloadedmetadata = function() {
          window.URL.revokeObjectURL(video.src)          
          setData('duration', video.duration);
          setData('file', file)
        }
    }

    return (
        <div>
            <form onSubmit={createLecture}>
                <div>
                    <h5 className='mb-2'>New Lecture</h5>
                </div>
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
                            <textarea name="description" onChange={handleChange} className='form-control'></textarea>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <button className="btn btn-white" onClick={() => setShowNew(false)} type='button'>Cancel</button>
                    <Button loading={processing} className="btn btn-primary">Create Lecture</Button>
                </div>
            </form>
        </div>
    )
}
