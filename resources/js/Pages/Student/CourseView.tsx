import MainLayout from '@/Layouts/MainLayout'
import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { ICourse } from '@/Types/course'
import { Link } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React, { useState } from 'react'


export default function CourseView({course} : {course: ICourse}) {

    const defaultItem = {
        module: course.modules?.[0],
        lecture: course.modules?.[0].lectures[0],
        module_index: 0,
        index: 0
    }

    const [playing, setPlaying] = useState(defaultItem)

    const next = () => {
        const module_index = playing.index === (playing.module.lectures.length - 1) ? playing.module_index + 1 : playing.module_index
        if(module_index === (course.modules.length )) return setPlaying(defaultItem) // or set to course completed

        const lecture_index = (playing.index === (playing.module.lectures.length - 1)) ? 0 : playing.index + 1
        
        setPlaying({
            module: course.modules[module_index],
            lecture: course.modules[module_index].lectures[lecture_index],
            module_index, index: lecture_index
        })

    }

    return (
        <MainLayout title='Course'>
            <div className="container py-5">
                <div className='mb-5'>
                    <Link href='..' replace className='fs-5'> <span className="feather-chevron-left"></span> Back to Courses</Link>
                    <h2 className='fw-bold'>Course Content</h2>
                    <h4>{course.name}</h4>
                </div>

                <div className="row gap-4 gap-md-0">
                    <div className="col-lg-8">
                        <div className="student-widget lesson-introduction">
                            <div className="lesson-widget-group p-0">
                                <div className="introduct-video">
                                    <video src={playing.lecture.file} onEnded={() => next()} disableRemotePlayback className="img-fluid" controlsList="nodownload" autoPlay controls></video>
                                </div>
                                <div className="pt-3 px-3">
                                    <h4 style={{fontWeight: "600"}} >{playing.lecture.title}</h4>
                                    <p>{playing.lecture.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="lesson-group card bg-light">
                            <div className='card-header mb-3'>
                                <h4 style={{fontWeight: "600"}}>Course Content</h4>
                            </div>

                            <div className='p-2' style={{overflowY: "scroll",height: '500px',}}>
                                {
                                    course.modules.map((module, index) => (
                                        <div className="course-card">
                                            <h6 className="cou-title">
                                            <a className="collapsed" data-bs-toggle="collapse" href={"#collapseOne"+module.id} aria-expanded="false">Module {index+1} <span>{module.lectures.length} {pluralize('Lesson', module.lectures.length)}</span> </a>
                                            </h6>
                                            <div id={"collapseOne"+module.id} className="card-collapse collapse pt-0">
                                                <ul>
                                                    {
                                                        module.lectures.map((lecture, i) => (
                                                            <li className='d-flex justify-content-between' role={'button'} onClick={() => setPlaying({
                                                                module: module,
                                                                lecture: lecture,
                                                                index: i,
                                                                module_index: index
                                                            })}>
                                                                <p className="play-intro">{lecture.title}</p>

                                                                <div>
                                                                    {
                                                                        playing.lecture.id === lecture.id  &&
                                                                        <img src="/assets/img/icon/play-icon.svg" alt="" />
                                                                    }
                                                                    {/* <img src="/assets/img/icon/lock.svg" alt="" /> */}
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
            </div>
        </MainLayout>
    )
}
