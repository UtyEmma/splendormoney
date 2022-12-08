import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { IUser } from '@/Types/user'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

interface IStudentOverviewProps {
    user: IUser
}

export default function StudentOverview({user} : IStudentOverviewProps) {
    return (
        <StudentLayout title='Student Dashboard' >
            <div className="settings-top-widget student-deposit-blk">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                    <div className="card stat-info ttl-tickets">
                        <div className="card-body">
                        <div className="view-all-grp d-flex">
                            <div className="student-ticket-view">
                                <h3>{user.enrollments_count}</h3>
                                <p>Purchased Courses</p>
                                <Link href={route('student.courses')}>View All</Link>
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
                                <h3>{user.transactions_count}</h3>
                                <p>Transactions</p>
                                <Link href={route('student.transactions')}>View All</Link>
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
                                <h3>{user.referrals_count}</h3>
                                <p>Referrals</p>
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
        </StudentLayout>
    )
}
