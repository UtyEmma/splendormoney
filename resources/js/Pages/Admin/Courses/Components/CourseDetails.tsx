import { Button } from '@/Components/Buttons/Button'
import { Editor } from '@/Components/Forms/Editor'
import { InputError } from '@/Components/Forms/InputError'
import { SelectImgWithPreview } from '@/Components/Forms/SelectImgWithPreview'
import { SelectVideoWithPreview } from '@/Components/Forms/SelectVideoWithPreview'
import { useStepper } from '@/Components/Stepper/Stepper'
import { useCourse } from '@/Context/CourseContext'
import { ICategory } from '@/Types/category'
import { ICourse } from '@/Types/course'
import { IUser } from '@/Types/user'
import Form from '@/Utils/Form'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent } from 'react'

interface ICourseContentProps {
    instructors: IUser[]
    categories: ICategory[]
}

export const CourseDetails = ({instructors, categories} : ICourseContentProps ) => {

    const stepper = useStepper()
    const {setCourse, course} = useCourse()

    const {data, setData, post, errors, processing, put} = useForm({
        name: course?.name || '',
        instructor: course?.instructor.id || '',
        description: course?.description || '',
        price: course?.price || 0,
        discount: course?.discount || 0,
        image: '',
        video: course?.video || '',
        category: course?.category,
        status: course?.status || 'active'
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setData(e.currentTarget.name as keyof typeof data, Form.value(e.currentTarget as any) as any)
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(course){
            put(route('admin.courses.update', {
                course: course?.id
            }), 
            {
                onSuccess: (res) => {
                    setCourse(res.props.course as ICourse)
                    stepper?.next()
                }
            })
        }else{
            post(route('admin.courses.store'), {
                onSuccess: (res) => {
                    setCourse(res.props.course as ICourse)
                    stepper?.next()
                }
            })
        }
    }

    return (
        <fieldset id="first">
            <div className="add-course-info">
                <div className="add-course-inner-header">
                    <h4>Basic Information</h4>
                </div>
                <div className="add-course-form">
                    <form onSubmit={submit}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label className="add-course-label">Course Title</label>
                                    <input type="text" name='name' value={data.name}  onChange={handleChange} className="form-control" placeholder="Course Title" />
                                    <InputError message={errors.name} />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="add-course-label">Course Status</label>
                                    <select onChange={handleChange} defaultValue={data.status} className="form-select form-control" name='instructor' >
                                        <option value="active">Active</option>
                                        <option value="pending">Pending</option>
                                        <option value="inactive">Inactive</option>
                                    </select> 
                                    <InputError message={errors.category} />
                                </div>
                            </div>
        
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="add-course-label">Select Category</label>
                                    <select onChange={handleChange} defaultValue={data.category} className="form-select form-control" name='instructor' >
                                        <option value="">Select Category</option>
                                        { categories.map(category => <option value={category.id}>{category.name}</option>) }
                                    </select> 
                                    <InputError message={errors.category} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="add-course-label">Instructor</label>
                                    <select onChange={handleChange} defaultValue={data.instructor} className="form-select form-control" name='instructor' >
                                        <option value="">Select Instructor</option>
                                        { instructors.map(instructor => <option value={instructor.id}>{instructor.name}</option>) }
                                    </select> 
                                    <InputError message={errors.instructor} />
                                </div>
                            </div>
                        </div>
        

                        <div className="form-group mb-4">
                            <label className="add-course-label">Course Description</label>
                            <Editor name='description' defaultValue={data.description} onChange={handleChange} />
                            <InputError message={errors.description} />
                        </div>  

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="add-course-label">Price</label>
                                    <input type="number" onChange={handleChange} defaultValue={course?.price} placeholder='0.00' name='price' className="form-control" />
                                    <InputError message={errors.price} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="add-course-label">Discount</label>
                                    <input type="number" onChange={handleChange} defaultValue={course?.discount} placeholder='0.00' max={100} min={0}  name='discount' className="form-control" />
                                    <InputError message={errors.discount} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label className="add-course-label">Course cover image</label>
                                <SelectImgWithPreview onChange={handleChange} defaultValue={course?.image} name="image" >Select Course Image</SelectImgWithPreview>
                                <InputError message={errors.image} />
                            </div>

                            <div className="col-md-6">
                                <label className="add-course-label">Promotional Video URL (Youtube) </label>
                                <SelectVideoWithPreview name="video" defaultValue={course?.video} onChange={handleChange} />
                                <InputError message={errors.video} />
                            </div>
                        </div>

                        <div className="widget-btn justify-content-end d-flex px-0">
                            <Button type='submit' loading={processing} className="btn btn-info-light next_btn">Save and Proceed</Button>
                        </div>
                    </form>
                </div>
                </div>
            </fieldset>
    )
}
