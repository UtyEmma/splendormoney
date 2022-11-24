import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export const InstructorSidebar = () => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
            <div className="settings-widget account-settings">
                <div className="settings-menu">
                <h3>DASHBOARD</h3>
                <ul>
                    <li className={`${route().current() === 'instructor.dashboard' && 'active'} nav-item`}>
                    <Link href={route('instructor.dashboard')} >
                        <i className="feather-home" /> Dashboard
                    </Link>
                    </li>
                    <li className={`${route().current() === 'instructor.courses' && 'active'} nav-item`}>
                        <Link href={route('instructor.courses')} >
                            <i className="feather-book" /> Courses
                        </Link>
                    </li>
                   <li className={`${route().current() === 'instructor.students' && 'active'} nav-item`}>
                        <Link href={route('instructor.students')} >
                            <i className="feather-users" /> Students
                        </Link>
                    </li>
                    <li className={`${route().current() === 'instructor.reviews' && 'active'} nav-item`}>
                        <Link href={route('instructor.reviews')} className="nav-link">
                            <i className="feather-star" /> Reviews
                        </Link>
                    </li>
                </ul>

                <div className="instructor-title">
                    <h3>SETTINGS</h3>
                </div>
                
                <ul>
                    <li className={`${route().current() === 'instructor.profile' && 'active'} nav-item`}>
                        <Link href={route('instructor.profile')} >
                            <i className="feather-refresh-cw" /> Profile
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
