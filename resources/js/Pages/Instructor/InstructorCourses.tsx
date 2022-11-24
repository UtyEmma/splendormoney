import Naira from '@/Components/Currency/Naira'
import { Pagination } from '@/Components/Pagination/Pagination'
import { Swal } from '@/Components/SweetAlert/Swal'
import { InstructorLayout } from '@/Layouts/Instructor/InstructorLayout'
import { InertiaProps, IPagination } from '@/Types/app'
import { ICourse } from '@/Types/course'
import Date from '@/Utils/Date'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React from 'react'
import { CourseItem } from '../Admin/Courses/Components/CourseItem'

interface IAdminCoursesProps extends InertiaProps {
    courses: IPagination<ICourse[]>
}

export default function InstructorCourses({courses} : IAdminCoursesProps) {

    return (
        <InstructorLayout title='Courses'>
            <div className="row">
                <div className="col-md-12">
                    <div className="settings-widget">
                    <div className="settings-inner-blk p-0">
                        <div className="sell-course-head comman-space">
                        <h3>Courses</h3>
                        <p>Manage your courses and its update like live, draft and insight.</p>
                        </div>
                        <div className="comman-space">
                            <div className="instruct-search-blk">
                                <div className="show-filter choose-search-blk">
                                    <form action="#">
                                        <div className="row gx-2 align-items-center">
                                            <div className="col-md-6 col-item">
                                                <div className=" search-group">
                                                <i className="feather-search" />
                                                <input type="text" className="form-control" placeholder="Search our courses" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-item">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="settings-tickets-blk course-instruct-blk table-responsive">
                                <table className="table table-nowrap mb-2">
                                    <thead >
                                        <tr >
                                            <th className='px-2'>Courses</th>
                                            <th>Students</th>
                                            <th>Earnings</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            courses.total > 0
                                            
                                            ?
                                            
                                            courses.data.map(course => {
                                                
                                                const deleteCourse = () => {
                                                    Inertia.delete(route('admin.courses.delete', {
                                                        course: course.id
                                                    }))
                                                }

                                                return (
                                                    <tr>
                                                        <td>
                                                            <div className="sell-table-group d-flex align-items-center">
                                                            <div className="sell-group-img overflow-hidden rounded-3">
                                                                <a href="course-details.html">
                                                                    <img src={course.image} className="img-fluid" style={{objectFit: 'cover'}} alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="sell-tabel-info">
                                                                <p><a href="course-details.html">{course.name}</a></p>
                                                                <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                                                                    <div className="rating-img d-flex align-items-center">
                                                                        <img src="/assets/img/icon/icon-01.svg" alt="" />
                                                                        <p>{course.lectures_count} {pluralize('Lesson', course.lectures_count)}</p>
                                                                    </div>
                                                                    <div className="course-view d-flex align-items-center">
                                                                        <img src="/assets/img/icon/timer-start.svg" alt="" />
                                                                        <p>{Date.secondsToHms(course.course_duration!) }</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </td>
                                                        <td>{course.enrollments_count}</td>
                                                        <td><Naira /> {course.transactions_sum_amount ? course.transactions_sum_amount.toLocaleString() : 0}</td>
                                                        <td><span className="badge info-low">{course.status.toUpperCase()}</span></td>
                                                    </tr> 
                                                )
                                            })

                                            :

                                            <tr>
                                                <td colSpan={5} className="text-center" >
                                                    <div className='border p-4'>
                                                        <h3>Nothing to Display</h3>

                                                        <p>There are no Courses available! Click the button below to create a new Course</p>
                                                        <div className='py-3'>
                                                            <Link href={route('admin.courses.create')} className='btn btn-primary'>Add New Course</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
    
                            <Pagination pagination={courses} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </InstructorLayout>
    )
}
