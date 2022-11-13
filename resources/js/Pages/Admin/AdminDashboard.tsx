import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import React from 'react'

export default function AdminDashboard() {
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
                            <h4 className="instructor-text-success">$467.34</h4>
                            <p>Earning this month</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card instructor-card w-100">
                        <div className="card-body">
                            <div className="instructor-inner">
                            <h6>STUDENTS ENROLLMENTS</h6>
                            <h4 className="instructor-text-info">12,000</h4>
                            <p>New this month</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card instructor-card w-100">
                        <div className="card-body">
                            <div className="instructor-inner">
                            <h6>COURSES RATING</h6>
                            <h4 className="instructor-text-warning">4.80</h4>
                            <p>Rating this month</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="card instructor-card">
                        <div className="card-header">
                            <h4>Earnings</h4>
                        </div>
                        <div className="card-body">
                            <div id="instructor_chart" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="card instructor-card">
                        <div className="card-header">
                            <h4>Order</h4>
                        </div>
                        <div className="card-body">
                            <div id="order_chart" />
                        </div>
                        </div>
                    </div>
                    </div>
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
                                    <tr>
                                    <td>
                                        <div className="sell-table-group d-flex align-items-center">
                                        <div className="sell-group-img">
                                            <a href="course-details.html">
                                            <img src="assets/img/course/course-10.jpg" className="img-fluid " alt="" />
                                            </a>
                                        </div>
                                        <div className="sell-tabel-info"><p />
                                            <p><a href="course-details.html">Information About UI/UX Design Degree</a>
                                            </p></div>
                                        </div>
                                    </td>
                                    <td>34</td>
                                    <td>$3,145.23</td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div className="sell-table-group d-flex align-items-center">
                                        <div className="sell-group-img">
                                            <a href="course-details.html">
                                            <img src="assets/img/course/course-11.jpg" className="img-fluid " alt="" />
                                            </a>
                                        </div>
                                        <div className="sell-tabel-info">
                                            <p><a href="course-details.html">Wordpress for Beginners - Master Wordpress Quickly</a></p>
                                        </div>
                                        </div>
                                    </td>
                                    <td>34</td>
                                    <td>$3,145.23</td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div className="sell-table-group d-flex align-items-center">
                                        <div className="sell-group-img">
                                            <a href="course-details.html">
                                            <img src="assets/img/course/course-12.jpg" className="img-fluid " alt="" />
                                            </a>
                                        </div>
                                        <div className="sell-tabel-info">
                                            <p><a href="course-details.html">Sketch from A to Z (2022): Become an app designer</a></p>
                                        </div>
                                        </div>
                                    </td>
                                    <td>34</td>
                                    <td>$3,145.23</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
