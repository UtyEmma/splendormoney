import { Swal } from '@/Components/SweetAlert/Swal'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { InertiaProps } from '@/Types/app'
import { ICourse } from '@/Types/course'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { CourseItem } from './Components/CourseItem'

interface IAdminCoursesProps extends InertiaProps {
    courses: ICourse[]
}

export default function AdminCourses({courses} : IAdminCoursesProps) {
    console.table(courses)

    return (
        <AdminLayout title='Courses'>
            <div className="row">
                <div className="col-md-12">
                    <div className="settings-widget">
                    <div className="settings-inner-blk p-0">
                        <div className="sell-course-head comman-space">
                        <h3>Courses</h3>
                        <p>Manage your courses and its update like live, draft and insight.</p>
                        </div>
                        <div className="comman-space pb-0">
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
                                    <div className="form-group select-form mb-0">
                                    <select className="form-select select" name="sellist1">
                                        <option>Choose</option>
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
                        <div className="settings-tickets-blk course-instruct-blk table-responsive">
                            <table className="table table-nowrap mb-2">
                            <thead>
                                <tr>
                                    <th>Courses</th>
                                    <th>Students</th>
                                    <th>Earnings</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    courses.map(course => <CourseItem course={course} />)
                                }
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
