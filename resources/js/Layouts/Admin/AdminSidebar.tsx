import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export const AdminSidebar = () => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
            <div className="settings-widget account-settings">
                <div className="settings-menu">
                <h3>DASHBOARD</h3>
                <ul>
                    <li className="nav-item active">
                    <Link href={route('admin.dashboard')} className="nav-link">
                        <i className="feather-home" /> Dashboard
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={route('admin.courses.list')} className="nav-link">
                            <i className="feather-book" /> Courses
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={route('admin.courses.create')} className="nav-link">
                            <i className="feather-book" /> Add Course
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={route('admin.instructors.list')} className="nav-link">
                            <i className="feather-users" /> Instructors
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={route('admin.instructors.create')} className="nav-link">
                            <i className="feather-user" /> New Instructor
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="instructor-student-grid.html" className="nav-link">
                            <i className="feather-users" /> Students
                        </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-reviews.html" className="nav-link">
                        <i className="feather-star" /> Reviews
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-earnings.html" className="nav-link">
                        <i className="feather-pie-chart" /> Earnings
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-orders.html" className="nav-link">
                        <i className="feather-shopping-bag" /> Orders
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-payouts.html" className="nav-link">
                        <i className="feather-dollar-sign" /> Payouts
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-tickets.html" className="nav-link">
                        <i className="feather-server" /> Support Tickets
                    </a>
                    </li>
                </ul>
                <div className="instructor-title">
                    <h3>ACCOUNT SETTINGS</h3>
                </div>
                <ul>
                    <li className="nav-item">
                    <a href="instructor-edit-profile.html" className="nav-link ">
                        <i className="feather-settings" /> Edit Profile
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-security.html" className="nav-link">
                        <i className="feather-user" /> Security
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-social-profiles.html" className="nav-link">
                        <i className="feather-refresh-cw" /> Social Profiles
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-notification.html" className="nav-link">
                        <i className="feather-bell" /> Notifications
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-profile-privacy.html" className="nav-link">
                        <i className="feather-lock" /> Profile Privacy
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-delete-profile.html" className="nav-link">
                        <i className="feather-trash-2" /> Delete Profile
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="instructor-linked-account.html" className="nav-link">
                        <i className="feather-user" /> Linked Accounts
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="index.html" className="nav-link">
                        <i className="feather-power" /> Sign Out
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}
