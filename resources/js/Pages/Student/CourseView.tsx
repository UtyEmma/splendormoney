import MainLayout from '@/Layouts/MainLayout'
import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { ICourse, ILecture, IModule } from '@/Types/course'
import Date from '@/Utils/Date'
import { Link } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { ReviewModal } from './Components/ReviewModal'

interface ICourseViewProps {
    course: ICourse
    review: any,
    enrollment: any,
    video: string
}


export default function CourseView({course, review, enrollment, video} : ICourseViewProps ) {

    const defaultItem = {
        module: course.modules?.[0],
        lecture: course.modules?.[0].lectures[0],
        module_index: 0,
        index: 0
    }

    const [currentVideo, setCurrentVideo] = useState(video)
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
                <div className='col-md-10 mx-auto mb-5'>
                    <Link href='..' replace className='fs-6'> <span className="feather-chevron-left"></span> Back to Courses</Link>
                    <h3 className='fw-bold'>Course Content</h3>
                    <h5>{course.name}</h5>
                </div>

                <div className="row gap-4 gap-md-0">
                    <div className="col-lg-10 mx-auto">
                        <div className="card content-sec border-0">
                            <div className="introduct-video">
                                <ReactPlayer url={route('media.file', {
                                    path: video
                                })} width={'100%'} height="570px" playing  controls={true}  />
                            </div>

                            <div className="card-body px-0 py-2">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 style={{fontWeight: "600"}} >{playing.lecture.title}</h4>
                                        <p>{playing.lecture.description}</p>
                                    </div>
                                    <div>
                                        
                                    </div>  
                                </div>

                            </div>
                        </div>

                        <div className="card content-sec">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5 className="subs-title">Course Content</h5>
                                    </div>
                                    <div className="col-sm-6 text-sm-end">
                                    <h6>{course.lectures_count} Lectures {course.course_duration ? `- ${Date.secondsToHms(course.course_duration!)}` : ''}</h6>
                                    </div>
                                </div>

                                <div id="module-accordion">
                                    {
                                        course.modules.map((module, index) => (
                                            <div className="course-card">
                                                <h6 className="cou-title">
                                                    <a className="collapsed" data-bs-toggle="collapse" data-bs-accordion={"#module-accordion"} href={"#collapseOne"+module.id} aria-expanded="false">Module {index + 1}: {module.title}</a>
                                                </h6>

                                                <div id={"collapseOne"+module.id} className="card-collapse collapse pb-3" >
                                                    <ul className='px-3'>
                                                        {
                                                            module.lectures.map((lecture, i) => (
                                                                <li role={'button'} className={`${(playing.lecture.id === lecture.id) && 'text-primary'} `} onClick={() => setPlaying({
                                                                    module: module,
                                                                    lecture: lecture,
                                                                    index: i,
                                                                    module_index: index
                                                                })}>
                                                                    <Link href={route('lecture.load', {
                                                                        enrollment: enrollment.id,
                                                                        lecture: lecture.id
                                                                    })}>
                                                                        <img src="assets/img/icon/play.svg" alt="" className="me-2" />
                                                                        Lecture {index + 1}: {lecture.title}
                                                                    </Link>
                                                                    <div>
                                                                        {
                                                                            playing.lecture.id === lecture.id  &&
                                                                            <img src="/assets/img/icon/play-icon.svg" alt="" />
                                                                        }
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
                </div>

                <hr />
            </div>
        </MainLayout>
    )
}


interface ICourseModuleItemProps {
    module: IModule
    index: number
}

export const CourseModuleItem = ({module, index}: ICourseModuleItemProps) => {
    return (
        <div className="course-card">
            <h6 className="cou-title">
                <a className="collapsed" data-bs-toggle="collapse" data-bs-accordion={"#module-accordion"} href={"#collapseOne"+module.id} aria-expanded="false">{module.title}</a>
            </h6>

            <div id={"collapseOne"+module.id} className="card-collapse collapse" style={{}}>
                <ul>
                    {
                        module.lectures.map((lecture, i) => <ModuleLecture module_index={index} lecture={lecture} index={i + 1} />)
                    }
                </ul>
            </div>
        </div>
    )
}

interface IModuleLectureProps {
    lecture: ILecture
    index: number
    module_index: number
}

export const ModuleLecture = ({lecture, module_index, index}: IModuleLectureProps) => {
    return (
        <li>
            <p>
                <img src="assets/img/icon/play.svg" alt="" className="me-2" />Lecture {module_index}.{index} {lecture.title}</p>
            <div>
                <span>{lecture.duration}</span>
            </div>
        </li>
    )
}