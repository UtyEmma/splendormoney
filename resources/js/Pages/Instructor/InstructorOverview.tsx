import Naira from '@/Components/Currency/Naira'
import { InstructorLayout } from '@/Layouts/Instructor/InstructorLayout'
import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { InstructorModel, IUser } from '@/Types/user'
import Currency from '@/Utils/Currency'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

interface InstructorOverviewProps {
    user: InstructorModel
}

export default function InstructorOverview({user} : InstructorOverviewProps) {
    return (
        <InstructorLayout title='Instructor Dashboard' >
            <div className="settings-top-widget student-deposit-blk">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                    <div className="card stat-info ttl-tickets">
                        <div className="card-body">
                        <div className="view-all-grp d-flex">
                            <div className="student-ticket-view">
                                <h3>{user.students_count}</h3>
                                <p>Students</p>
                                <Link href={route('instructor.courses')}>View All</Link>
                            </div>
                            <div className="img-deposit-ticket">
                                <img src="assets/img/students/book.svg" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="card stat-info open-tickets">
                        <div className="card-body">
                        <div className="view-all-grp d-flex">
                            <div className="student-ticket-view">
                                <h3>{user.courses_count}</h3>
                                <p>Courses</p>
                                <Link href={route('student.reviews')}>View All</Link>
                            </div>
                            <div className="img-deposit-ticket">
                            <img src="assets/img/students/receipt-text.svg" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="card stat-info close-tickets">
                        <div className="card-body">
                        <div className="view-all-grp d-flex">
                            <div className="student-ticket-view">
                                <h3 className='text-success'><Naira className='fs-3 text-success' /> {user.earnings.toLocaleString()}</h3>
                                <p>Earnings</p>
                                <Link href={route('student.referrals')}>View All</Link>
                            </div>
                            <div className="img-deposit-ticket">
                                <img src="assets/img/students/empty-wallet-tick.svg" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </InstructorLayout>
    )
}
