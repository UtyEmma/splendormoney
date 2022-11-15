import { useCart } from '@/Hooks/useCart'
import { InertiaProps } from '@/Types/app'
import Currency from '@/Utils/Currency'
import { percentageDiff } from '@/Utils/Math'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { Cart } from './Cart'

export const UserDropdown = () => {

    const {auth} = usePage().props as unknown as InertiaProps

    return (
        <>
            {
                auth.user

                ?
                
                <>
                    <ul className="nav header-navbar-rht">                        
                        <Cart />

                        <li className="nav-item wish-nav">
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                <img src="/assets/img/icon/wish.svg" alt="img" />
                            </a>
                            <div className="wishes-list dropdown-menu dropdown-menu-right">
                            <div className="wish-content">
                                <ul>
                                <li>
                                    <div className="media">
                                    <div className="d-flex media-wide">
                                        <div className="avatar">
                                        <a href="course-details.html">
                                            <img alt="" src="/assets/img/course/course-04.jpg" />
                                        </a>
                                        </div>
                                        <div className="media-body">
                                        <h6><a href="course-details.html">Learn Angular...</a></h6>
                                        <p>By Dave Franco</p>
                                        <h5>$200 <span>$99.00</span></h5>
                                        <div className="remove-btn">
                                            <a href="#" className="btn">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                    <div className="d-flex media-wide">
                                        <div className="avatar">
                                        <a href="course-details.html">
                                            <img alt="" src="/assets/img/course/course-14.jpg" />
                                        </a>
                                        </div>
                                        <div className="media-body">
                                        <h6><a href="course-details.html">Build Responsive Real...</a></h6>
                                        <p>Jenis R.</p>
                                        <h5>$200 <span>$99.00</span></h5>
                                        <div className="remove-btn">
                                            <a href="#" className="btn">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                    <div className="d-flex media-wide">
                                        <div className="avatar">
                                        <a href="course-details.html">
                                            <img alt="" src="/assets/img/course/course-15.jpg" />
                                        </a>
                                        </div>
                                        <div className="media-body">
                                        <h6><a href="course-details.html">C# Developers Double ...</a></h6>
                                        <p>Jesse Stevens</p>
                                        <h5>$200 <span>$99.00</span></h5>
                                        <div className="remove-btn">
                                            <a href="#" className="btn">Remove</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </li>
                        <li className="nav-item noti-nav">
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                <img src="/assets/img/icon/notification.svg" alt="img" />
                            </a>
                            <div className="notifications dropdown-menu dropdown-menu-right">
                                <div className="topnav-dropdown-header">
                                    <span className="notification-title">Notifications
                                        <select>
                                            <option>All</option>
                                            <option>Unread</option>
                                        </select>
                                    </span>
                                    <a href="javascript:void(0)" className="clear-noti">Mark all as read <i className="fa-solid fa-circle-check" /></a>
                                </div>
                                <div className="noti-content">
                                    <ul className="notification-list">
                                        <li className="notification-message">
                                            <div className="media d-flex">
                                            <div>
                                                <a href="notifications.html" className="avatar">
                                                <img className="avatar-img" alt="" src="assets/img/user/user1.jpg" />
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h6><a href="notifications.html">Lex Murphy requested <span>access to</span> UNIX directory tree hierarchy </a></h6>
                                                <button className="btn btn-accept">Accept</button>
                                                <button className="btn btn-reject">Reject</button>
                                                <p>Today at 9:42 AM</p>
                                            </div>
                                            </div>
                                        </li>
                                        <li className="notification-message">
                                            <div className="media d-flex">
                                            <div>
                                                <a href="notifications.html" className="avatar">
                                                <img className="avatar-img" alt="" src="assets/img/user/user2.jpg" />
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h6><a href="notifications.html">Ray Arnold left 6 <span>comments on</span> Isla Nublar SOC2 compliance report</a></h6>
                                                <p>Yesterday at 11:42 PM</p>
                                            </div>
                                            </div>
                                        </li>
                                        <li className="notification-message">
                                            <div className="media d-flex">
                                            <div>
                                                <a href="notifications.html" className="avatar">
                                                <img className="avatar-img" alt="" src="assets/img/user/user3.jpg" />
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h6><a href="notifications.html">Dennis Nedry <span>commented on</span> Isla Nublar SOC2 compliance report</a></h6>
                                                <p className="noti-details">“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”</p>
                                                <p>Yesterday at 5:42 PM</p>
                                            </div>
                                            </div>
                                        </li>
                                        <li className="notification-message">
                                            <div className="media d-flex">
                                            <div>
                                                <a href="notifications.html" className="avatar">
                                                <img className="avatar-img" alt="" src="assets/img/user/user1.jpg" />
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h6><a href="notifications.html">John Hammond <span>created</span> Isla Nublar SOC2 compliance report </a></h6>
                                                <p>Last Wednesday at 11:15 AM</p>
                                            </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item user-nav">
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                            <span className="user-img">
                                <img src="/assets/img/user/user11.jpg" alt="" />
                                <span className="status online" />
                            </span>
                            </a> 
                            <div className="users dropdown-menu dropdown-menu-right" data-popper-placement="bottom-end">
                            <div className="user-header px-0 pt-4">
                                <div className="user-text">
                                    <h6>{auth.user?.name}</h6>
                                    <span className="text-muted mb-0 text-capitalize">{auth.user.role}</span>
                                </div>
                            </div>
                            { auth.user.role === 'user' && <StudentDropDownItems /> }
                            { auth.user.role === 'instructor' && <InstructorDropdownItems /> }
                            { (auth.user.role === 'admin' || auth.user.role === 'superadmin') && <AdminDropDownItems /> }
                            <Link method='POST' className="dropdown-item" href={route('logout')}><i className="feather-log-out me-1" /> Logout</Link>
                            </div>
                        </li>
                    </ul>
                </>

                :

                <ul className="nav header-navbar-rht">
                    <li className="nav-item">
                        <Link className="nav-link header-sign" href="/login">Sign in</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link header-login" href="/register">Sign up</Link>
                    </li>
                </ul>
            }
        </>
    )
}

const AdminDropDownItems = () => {
    return (
        <>
            <Link className="dropdown-item" href={route('admin.dashboard')}><i className="feather-user me-1" /> Dashboard</Link>
            <Link className="dropdown-item" href={route('admin.settings')}><i className="feather-settings me-1" /> Settings</Link>
        </>
    )
}

const InstructorDropdownItems = () => {
    return (
        <>
            <Link className="dropdown-item" href={route('admin.dashboard')}><i className="feather-user me-1" /> Dashboard</Link>
            <Link className="dropdown-item" href={route('admin.settings')}><i className="feather-settings me-1" /> My Courses</Link>
        </>
    )
}

const StudentDropDownItems = () => {
    return (
        <>
            <Link className="dropdown-item" href={route('student.dashboard')}><i className="feather-user me-1" /> Dashboard</Link>
            <Link className="dropdown-item" href={route('student.courses')}><i className="feather-star me-1" />Enrolled Courses</Link>
            <div className="dropdown-item night-mode">
                <span><i className="feather-moon me-1" /> Night Mode </span>
                <div className="form-check form-switch check-on m-0">
                <input className="form-check-input" type="checkbox" id="night-mode" />
                </div>
            </div>
        </>
    )
}
