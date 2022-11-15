import { Pagination } from '@/Components/Pagination/Pagination'
import { Swal } from '@/Components/SweetAlert/Swal'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { InertiaProps, IPagination } from '@/Types/app'
import { ICourse } from '@/Types/course'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { CourseItem } from './Components/CourseItem'

interface IAdminCoursesProps extends InertiaProps {
    courses: IPagination<ICourse[]>
}

export default function AdminCourses({courses} : IAdminCoursesProps) {

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
                                            
                                            courses.data.map(course => <CourseItem course={course} />)

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
        </AdminLayout>
    )
}
