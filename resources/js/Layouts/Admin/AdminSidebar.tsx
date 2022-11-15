import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export const AdminSidebar = () => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
            <div className="settings-widget account-settings">
                <div className="settings-menu">
                <h3>DASHBOARD</h3>
                <ul>
                    <li className={`${route().current() === 'admin.dashboard' && 'active'} nav-item`}>
                    <Link href={route('admin.dashboard')} >
                        <i className="feather-home" /> Dashboard
                    </Link>
                    </li>
                    <li className={`${route().current() === 'admin.courses.list' && 'active'} nav-item`}>
                        <Link href={route('admin.courses.list')} >
                            <i className="feather-book" /> Courses
                        </Link>
                    </li>
                    <li className={`${route().current() === 'admin.courses.create' && 'active'} nav-item`}>
                        <Link href={route('admin.courses.create')} >
                            <i className="feather-book" /> Add Course
                        </Link>
                    </li>
                    <li className={`${route().current() === 'admin.instructors.list' && 'active'} nav-item`}>
                        <Link href={route('admin.instructors.list')} >
                            <i className="feather-users" /> Instructors
                        </Link>
                    </li>
                    <li className={`${route().current() === 'admin.instructors.create' && 'active'} nav-item`}>
                        <Link href={route('admin.instructors.create')} >
                            <i className="feather-user" /> Add Instructor
                        </Link>
                    </li>
                    <li className={`${route().current() === 'admin.users.list' && 'active'} nav-item`}>
                        <Link href={route('admin.users.list')} className="nav-link">
                            <i className="feather-users" /> Users
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="instructor-reviews.html" className="nav-link">
                            <i className="feather-star" /> Reviews
                        </a>
                    </li>
                    <li className={`${route().current() === 'admin.transactions.list' && 'active'} nav-item`}>
                        <Link href={route('admin.transactions.list')} className="nav-link">
                            <i className="feather-dollar-sign" /> Transactions
                        </Link>
                    </li>
                </ul>

                <div className="instructor-title">
                    <h3>SETTINGS</h3>
                </div>
                
                <ul>
                    <li className="nav-item">
                        <a href="instructor-edit-profile.html" className="nav-link ">
                            <i className="feather-users" /> Admins
                        </a>
                    </li>
                    <li className={`${route().current() === 'admin.profile' && 'active'} nav-item`}>
                        <Link href={route('admin.profile')} >
                            <i className="feather-refresh-cw" /> Profile
                        </Link>
                    </li>
                    <li className={`${route().current() === 'admin.settings' && 'active'} nav-item`}>
                        <Link href={route('admin.settings')} >
                            <i className="feather-settings" /> Site Settings
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={route('logout')} className="nav-link">
                            <i className="feather-power" /> Sign Out
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}
