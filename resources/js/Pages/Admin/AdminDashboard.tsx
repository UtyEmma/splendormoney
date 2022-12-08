import Naira from '@/Components/Currency/Naira'
import { Rating } from '@/Components/Rating/Rating'
import { Disclose } from '@/Components/Toggle/Disclose'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { InertiaProps } from '@/Types/app'
import { ICourse } from '@/Types/course'
import React from 'react'

interface IAdminDashboardProps extends InertiaProps {
    students: number
    courses: number
    revenue: number
    enrollments: number
    reviews: number, 
    rating: number
    top_courses: ICourse[]
}

export default function AdminDashboard({students, courses, revenue, enrollments, top_courses, reviews, rating}: IAdminDashboardProps) {
    return (
        <AdminLayout title='Admin Overview' >
            <div className="page-content instructor-page-content pt-0">
                <div className="">
                    <div className="row">
                    <div className="col-md-4 d-flex">
                        <div className="card instructor-card w-100">
                        <div className="card-body">
                            <div className="instructor-inner">
                            <h6>REVENUE</h6>
                            <h4 className="instructor-text-success"><Naira /> {revenue.toLocaleString()}</h4>
                            {/* <p>Earning this month</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card instructor-card w-100">
                        <div className="card-body">
                            <div className="instructor-inner">
                            <h6>STUDENTS</h6>
                            <h4 className="instructor-text-info">{students}</h4>
                            {/* <p>New this month</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card instructor-card w-100">
                        <div className="card-body">
                            <div className="instructor-inner">
                            <h6>ENROLLMENTS</h6>
                            <h4 className="instructor-text-warning">{enrollments}</h4>
                            {/* <p>Rating this month</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card instructor-card w-100">
                        <div className="card-body">
                            <div className="instructor-inner">
                            <h6>COURSES</h6>
                            <h4 className="instructor-text-warning">{courses}</h4>
                            {/* <p>Rating this month</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card instructor-card w-100">
                        <div className="card-body">
                            <div className="instructor-inner">
                            <h6>RATING</h6>
                            <Rating rating={rating || 1} count={reviews || 0} />
                            {/* <p>Rating this month</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <Disclose show={!!top_courses.length}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="settings-widget">
                                <div className="settings-inner-blk p-0">
                                    <div className="sell-course-head comman-space">
                                    <h3>Best Selling Courses</h3>
                                    </div>
                                    <div className="comman-space pb-0">
                                    <div className="settings-tickets-blk course-instruct-blk table-responsive">
                                        <table className="table table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                <th>COURSES</th>
                                                <th>SALES</th>
                                                <th>AMOUNT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    top_courses.map(course => (
                                                        <tr>
                                                            <td>
                                                                <div className="sell-table-group d-flex align-items-center">
                                                                <div className="sell-tabel-info"><p />
                                                                    <p><a href="course-details.html">{course.name}</a>
                                                                    </p></div>
                                                                </div>
                                                            </td>
                                                            <td>{course.enrollments_count}</td>
                                                            <td><Naira /> {course.transactions_sum_amount?.toLocaleString() || 0}</td>
                                                        </tr>
                                                    ))
                                                }                                        
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Disclose>
                </div>
            </div>
        </AdminLayout>
    )
}
