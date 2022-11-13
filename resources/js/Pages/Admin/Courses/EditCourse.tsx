import { Stepper } from '@/Components/Stepper/Stepper'
import { CourseProvider } from '@/Context/CourseContext'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { ICourse } from '@/Types/course'
import { IUser } from '@/Types/user'
import React, { useRef, useState } from 'react'
import { CourseContent } from './Components/CourseContent'
import { CourseDetails } from './Components/CourseDetails'

interface IEditCourseProps  {
    course: ICourse
    instructors: IUser[]
}

export default function EditCourse({course, instructors}: IEditCourseProps) {

    const [step, setStep] = useState(1)
    const stepper = useRef(null)

    return (
        <AdminLayout title={course.name} >
            <section className="">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                        <div className="widget-set">
                            <div className="widget-setcount">
                                <ul id="progressbar">
                                    <li className={`${step === 1 && 'progress-active'}`}>
                                        <p>Course Information</p>
                                    </li>
                                    <li className={`${step === 2 && 'progress-active'}`}>
                                        <p>Course Content</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-content multistep-form">
                                <CourseProvider defaultCourse={course}>
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
