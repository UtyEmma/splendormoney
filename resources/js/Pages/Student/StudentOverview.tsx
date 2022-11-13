import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import React from 'react'

export default function StudentOverview() {
    return (
        <StudentLayout title='Student Dashboard' >
            <div className="settings-top-widget student-deposit-blk">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                    <div className="card stat-info ttl-tickets">
                        <div className="card-body">
                        <div className="view-all-grp d-flex">
                            <div className="student-ticket-view">
                            <h3>50</h3>
                            <p>Purchased Courses</p>
                            <a href="purchase-history.html">View All</a>
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
                            <h3>30</h3>
                            <p>Total Transactions</p>
                            <a href="deposit-student.html">View All</a>
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
                            <h3>20</h3>
                            <p>Total Deposit</p>
                            <a href="transactions-student.html">View All</a>
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
