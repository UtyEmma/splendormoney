import { Button } from '@/Components/Buttons/Button'
import { useCourse } from '@/Context/CourseContext'
import { ICourse } from '@/Types/course'
import Form from '@/Utils/Form'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent } from 'react'

export const NewModule = ({setShowNew} : any) => {

    const {data, setData, processing, post} = useForm()
    const {course, setCourse} = useCourse()

    const handleChange = (e: ChangeEvent<any>) => {
        setData(e.currentTarget.name, Form.value(e.currentTarget))
    }

    const createModule = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post(route('admin.courses.modules.store', {
            course: course?.id
        }), {
            onSuccess: res => {
                setCourse(res.props.course as ICourse)
                setShowNew(false)
            }
        })
    }

    return (
        <form className='mt-3' onSubmit={createModule}>
            <label htmlFor="" className='form-label'>New Module</label>
            <div className="d-flex gap-4">
                <div className='flex-fill'>
                    <input name='title' onChange={handleChange} className='form-control form-control-lg w-100'  />
                </div>
                <Button loading={processing} className="btn-primary btn-sm" >Create Module</Button>
            </div>
        </form>
    )
}
