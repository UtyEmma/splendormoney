import { InertiaProps } from '@/Types/app'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export const StudentSidebar = () => {

    const {auth} = usePage().props as unknown as InertiaProps

    

    return (
        <div className="col-xl-3 col-md-4"  >
            <div className="card border-0 bg-transparent" style={{position: 'sticky', top: "10px"}}>
                <div className="settings-widget dash-profile mb-3" >
                    <div className="settings-menu p-0">
                        <div className="profile-bg">
                            <img src="/assets/img/profile-bg.jpg" alt="" />
                            <div className="profile-img">
                                <a href="student-profile.html"><img src="/assets/img/user/user11.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div className="profile-group">
                        <div className="profile-name text-center">
                            <h4><a href="student-profile.html">{auth?.user?.name}</a></h4>
                            <p>Student</p>
                        </div>
                        <div className="go-dashboard text-center">
                            <Link href={route('student.dashboard')} className="btn btn-primary">Go to Dashboard</Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="settings-widget account-settings">
                    <div className="settings-menu">
                        <h3>Student Area</h3>
                        <ul>
                            <li className={`nav-item ${route().current() === 'student.dashboard' && 'active'}`}>
                                <Link href={route('student.dashboard')} className="nav-link">
                                    <i className="feather-home" /> Dashboard
                                </Link>
                            </li>
                            <li className={`${route().current() === 'student.courses' && 'active'} nav-item`}>
                                <Link href={route('student.courses')} className="nav-link">
                                    <i className="feather-user" /> My Courses
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="setting-student-referral.html" className="nav-link">
                                <i className="feather-heart" /> Wishlist
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="setting-student-referral.html" className="nav-link">
                                <i className="feather-user-plus" /> Referrals
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="setting-student-referral.html" className="nav-link">
                                <i className="feather-settings" /> Settings
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link method='POST' href={route('logout')} className="nav-link">
                                <i className="feather-power" /> Sign Out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
