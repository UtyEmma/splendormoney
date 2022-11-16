import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { ICourse } from '@/Types/course'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

interface IEnrolledCoursesProps {
    enrollments: any
}

export default function EnrolledCourses ({enrollments} : IEnrolledCoursesProps) {
    return (
        <StudentLayout title='Enrolled Courses'>
                <div className="student-widget">
                    <div className="student-widget-group">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="showing-list">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="show-filter choose-search-blk">
                                    <form action="#">
                                    <div className="mycourse-student align-items-center">
                                        <div className="student-search">
                                        <div className=" search-group">
                                            <i className="feather-search" />
                                            <input type="text" className="form-control" placeholder="Search our courses" />
                                        </div>
                                        </div>
                                        <div className="student-filter">
                                        <div className="form-group select-form mb-0">
                                            <select className="form-select select" name="sellist1">
                                            <option>Newly published </option>
                                            <option>Angular</option>
                                            <option>React</option>
                                            <option>Node</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                {
                                    enrollments?.map((enrollment: any) => (
                                        <div className="col-xl-6 col-lg-4 col-md-6 d-flex">
                                            <div className="course-box course-design  p-3">
                                                <div className="product p-0 m-0">
                                                    <div className="row mb-3">
                                                        <div className="col-md-4">
                                                            <div className="product-img ratio-1x1 overflow-hidden" style={{height: '100px !important'}}>
                                                                <a href="course-details.html">
                                                                    <img className="img-fluid" alt="" src={enrollment.course.image || "/assets/img/course/course-10.jpg"} />
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <div className="product-content p-0">
                                                                <h3 className="title"><a href="course-details.html">{enrollment.course.name}</a></h3>
                                                                <div className="rating-student">
                                                                    <div className="rating">
                                                                    <i className="fas fa-star filled" />
                                                                    <i className="fas fa-star filled" />
                                                                    <i className="fas fa-star filled" />
                                                                    <i className="fas fa-star filled" />
                                                                    <i className="fas fa-star" />
                                                                    <span className="d-inline-block average-rating"><span>4.0</span></span>
                                                                    </div>
                                                                    <div className="edit-rate">
                                                                        <a href="javascript:;">Edit rating</a>
                                                                    </div>
                                                                </div>
                                                                <div className="progress-stip mb-0">
                                                                    <div className="progress-bar bg-success mb-0 progress-bar-striped active-stip" />
                                                                </div>
                                                                <div className="student-percent">
                                                                    <p className='m-0'>35% Completed</p>
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
                                }
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </StudentLayout>
    )
}
