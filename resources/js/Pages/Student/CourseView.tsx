import { Disclose } from '@/Components/Toggle/Disclose'
import MainLayout from '@/Layouts/MainLayout'
import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { ICourse, ILecture, IModule } from '@/Types/course'
import Date from '@/Utils/Date'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React, { useEffect, useMemo, useState } from 'react'
import ReactPlayer from 'react-player'
import { ReviewModal } from './Components/ReviewModal'

interface ICourseViewProps {
    course: ICourse
    review: any,
    enrollment: any,
    video: string
    lecture: ILecture
    lectures: ILecture[]
}


export default function CourseView({course, review, lecture, lectures, enrollment} : ICourseViewProps ) {

    const currentLecture = lecture

    const progress = useMemo(() => {
        return Math.floor((enrollment.progress + 1) * (100 / course.lectures_count))  
    }, [enrollment.progress])

    return (
        // <MainLayout title='Course'>
            <div className='vh-100'>
                <div style={{height: '10%'}} className='card-body bg-warning d-md-flex justify-content-between align-items-center'>
                    <div className='d-flex  align-items-center gap-3'>
                        <Link href={route('student.courses')} className='btn btn-light' >Back to Dashboard</Link>
                        <div>
                            <h3 className='mb-0' >{course?.name}</h3>
                            <Disclose show={!!lecture} >
                                <p className='fs-5 mb-0'>Lecture: {lecture?.title}</p>
                            </Disclose>
                        </div>
                    </div>

                    <div>
                        <ReviewModal {...{course, review}} >Course Review</ReviewModal>
                    </div>
                </div>

                <div style={{height: '90%'}}>
                    <div className="row h-100">
                        <div className="col-md-8 h-100 mx-0 px-0">
                            <div className="h-100 ratio ratio-16x9 position-relative">
                                <ReactPlayer url={route('media.file', {
                                    path: lecture?.file
                                })} width={'100%'} height="100%" playing  controls={true}  />
                            </div>
                        </div>

                        <div className="col-md-4 h-100 px-0" style={{overflowY: 'scroll'}}  >
                            <div className="bg-light h-100 ">
                                    <div className="card-body d-flex flex-column">
                                        <div >
                                            <div className='mb-2'>
                                                <p className='fs-6 mb-0'>Your Progress - <span className='fw-bold'>{progress}%</span></p>
                                                <div className="progress-stip mb-0">
                                                    <div className="progress-bar bg-success mb-0  progress-bar-striped active-stip" style={{width: `${progress}%`}} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h5 className="">Course Content</h5>
                                                </div>
                                                <div className="col-sm-6 text-sm-end">
                                                <h6>{course.lectures_count} Lectures {course.course_duration ? `- ${Date.secondsToHms(course.course_duration!)}` : ''}</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex-1'>
                                            <div>
                                                {
                                                    course.modules.map((module, index) => (
                                                        <div className="course-card mt-2 d-flex flex-column ">
                                                            <h5 className="cou-title mb-0">
                                                                Module {index + 1}: {module.title}
                                                            </h5>
                                                        
                                                            <ul className='d-flex flex-column flex-1'>
                                                                {
                                                                    module.lectures.map((lecture, i) => (
                                                                        <li role={'button'} className={`${(currentLecture?.id === lecture.id) && 'text-primary'} px-0 py-3 mt-0`} >
                                                                            <div className='d-flex'>
                                                                                <img src="/assets/img/icon/play.svg" alt="" />
                                                                                
                                                                                <div className='ms-3'>
                                                                                    <Link href={route('student.courses.single', {
                                                                                        enrollment: enrollment.id,
                                                                                        course: course.slug,
                                                                                        lecture: lecture.id
                                                                                    })} style={{fontWeight: '600'}} className="text-decoration-none">
                                                                                        <span  className='ms-0'>Lecture {i + 1}: {lecture.title}</span>
                                                                                    </Link>
                                                                                    <p className='mb-0' >{Date.secondsToHms(lecture.duration!)}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                {
                                                                                    currentLecture?.id === lecture.id  &&
                                                                                    <img src="/assets/img/icon/play-icon.svg" alt="" />
                                                                                }
                                                                            </div>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        // </MainLayout>
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