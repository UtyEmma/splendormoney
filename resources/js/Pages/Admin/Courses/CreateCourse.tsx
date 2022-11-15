import { Button } from '@/Components/Buttons/Button'
import { Editor } from '@/Components/Forms/Editor'
import { InputError } from '@/Components/Forms/InputError'
import { Select } from '@/Components/Forms/Select'
import { SelectImgWithPreview } from '@/Components/Forms/SelectImgWithPreview'
import { SelectVideoWithPreview } from '@/Components/Forms/SelectVideoWithPreview'
import { Stepper } from '@/Components/Stepper/Stepper'
import { CourseProvider } from '@/Context/CourseContext'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { InertiaProps } from '@/Types/app'
import { IUser } from '@/Types/user'
import Form from '@/Utils/Form'
import { Link, useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { CourseContent } from './Components/CourseContent'
import { CourseDetails } from './Components/CourseDetails'

interface ICreateCourseProps extends InertiaProps {
    instructors: IUser[]
}

export default function CreateCourse({ instructors } : ICreateCourseProps) {

    const [step, setStep] = useState(1)
    const stepper = useRef(null)

    return (
        <AdminLayout title='Create Course'>
            <section className="">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                        <div className="widget-set">
                            <div className="widget-setcount">
                                <ul id="progressbar">
                                    <li className="progress-active">
                                        <p>Course Information</p>
                                    </li>
                                    <li>
                                        <p>Course Content</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-content multistep-form">
                                <div className="px-5">
                                    {
                                        instructors.length < 1

                                        &&

                                        <div className="alert alert-warning">
                                            <span className='fs-5 fw-bold'>You have not added any instructors.</span> <br/>
                                            Please create an instructor before proceeding to create a course. <Link className='text-primary' href={route('admin.instructors.create')}>Create an Instructor</Link>
                                        </div>
                                    }
                                </div>
                                <CourseProvider>
                                    <Stepper reference={stepper} activeStep={step} setActiveStep={setStep}>
                                        <CourseDetails instructors={instructors} />
                                        <CourseContent />
                                    </Stepper>
                                </CourseProvider>
                            <fieldset className="field-card">
                                <div className="add-course-info">
                                <div className="add-course-msg">
                                    <i className="fas fa-circle-check" />
                                    <h4>The Course Added Succesfully</h4>
                                    <p>Admin will be Approve soon.</p>
                                </div>
                                </div>
                            </fieldset>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>
    )
}
