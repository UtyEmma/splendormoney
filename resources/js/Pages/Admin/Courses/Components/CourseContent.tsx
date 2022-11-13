import { Button } from '@/Components/Buttons/Button'
import { useStepper } from '@/Components/Stepper/Stepper'
import { Disclose } from '@/Components/Toggle/Disclose'
import { useCourse } from '@/Context/CourseContext'
import { Inertia } from '@inertiajs/inertia'
import React, { useState } from 'react'
import { CourseModule } from './CourseContent/CourseModule'
import { NewModule } from './CourseContent/NewModule'

export const CourseContent = () => {
    const stepper = useStepper()
    const { course, setCourse } = useCourse()

    const [showNew, setShowNew] = useState(false)
    const [loading, setLoading] = useState(false);

    const publishCourse = () => {
        Inertia.put(route('admin.courses.status', {
            course: course?.id
        }), {
            status: 'active'
        }, {
            onStart: () => setLoading(true),
            onFinish: () => setLoading(false),
            onSuccess: res => setCourse(res.props.course as any)
        })
    }

    return (
        <fieldset id='first' className="">
            <div className="add-course-info">
                <div className="add-course-inner-header">
                    <h4>Curriculum</h4>
                    <h5>{course?.name}</h5>
                </div>

                <div className="add-course-form">
                    <div id="module-accordion">
                        {
                            course?.modules?.map((module, i) => <CourseModule index={i + 1} module={module} />)
                        }
                    </div>

                    <div className="">
                        <div className='mb-0 d-flex justify-content-between'>
                            <button onClick={() => setShowNew(true)} className="btn btn-primary">Add Module</button>
                            <Disclose show={showNew}>
                                <button onClick={() => setShowNew(false)} className="btn btn-light">Cancel</button>
                            </Disclose>
                        </div>

                        <Disclose show={showNew} >
                            <NewModule setShowNew={setShowNew} />
                        </Disclose>
                    </div>
                </div>
                <div className="widget-btn">
                    <button className="btn btn-black prev_btn" onClick={() => stepper?.previous()} >Previous</button>
                    <Button onClick={publishCourse} loading={loading} className="btn btn-info-light next_btn">Publish Course</Button>
                </div>
            </div>
        </fieldset>
    )
}
