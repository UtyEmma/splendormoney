import { Rating } from '@/Components/Rating/Rating'
import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { ICourse } from '@/Types/course'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { ReviewModal } from './Components/ReviewModal'

interface IEnrolledCoursesProps {
    enrollments: any
}

const progress = (progress: number, lectures: number) => {
    return Math.floor((progress + 1) * (100 / lectures))  
}

export default function EnrolledCourses ({enrollments} : IEnrolledCoursesProps) {
    return (
        <StudentLayout title='Enrolled Courses'>
                <div className="student-widget">
                    <div className="student-widget-group p-5">
                            <div className="showing-list">
                                <h3>Enrolled Courses</h3>
                            </div>
                            <div className="row">
                                {
                                    enrollments.length > 0

                                    ?

                                    enrollments?.map((enrollment: any) => (
                                        <div className="col-xl-6 col-lg-4 col-md-6 d-flex">
                                            <div className="course-box course-design  p-3">
                                                <div className="product p-0 m-0">
                                                    <div className="row mb-3">
                                                        <div className="col-md-4">
                                                            <div className="product-img ratio-1x1 h-100 overflow-hidden" >
                                                                <img className="img-fluid" style={{objectFit: 'cover', minHeight: '100%'}} alt="" src={enrollment.course.image || "/assets/img/course/course-10.jpg"} />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <div className="product-content p-0">
                                                                <h3 className="title"><Link href={route('student.courses.single', {
                                                                    enrollment: enrollment.id,
                                                                    course: enrollment.course.slug
                                                                })}>{enrollment?.course.name}</Link></h3>
                                                                <div className="progress-stip mb-0">
                                                                    <div className="progress-bar bg-success mb-0  progress-bar-striped active-stip" style={{width: `${progress(enrollment.progress, enrollment.course.lectures?.length)}%`}} />
                                                                </div>
                                                                <div className="student-percent">
                                                                    <p className='m-0'>{progress(enrollment.progress, enrollment.course.lectures?.length)}% Completed</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="start-leason">
                                                    <Link href={route('student.courses.single', {
                                                        enrollment: enrollment.id,
                                                        course: enrollment.course.slug
                                                    })} className="btn btn-primary">Start Lesson</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                    :

                                    <div className='border text-center p-5 rounded'>
                                        <div className='mb-5'>
                                            <h2>You are not enrolled for any courses yet!</h2>
                                            <h5>Click the link below to find amazing courses you might be interested in!</h5>
                                        </div>

                                        <Link className="btn btn-reply" href={route('courses.list')}>Find Courses</Link>
                                    </div>
                                }
                            </div>
                        </div>
                </div>
        </StudentLayout>
    )
}
