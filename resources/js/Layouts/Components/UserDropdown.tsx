import { Symbol } from '@/Components/Avatar/Symbol'
import Naira from '@/Components/Currency/Naira'
import { useCart } from '@/Hooks/useCart'
import { InertiaProps } from '@/Types/app'
import Currency from '@/Utils/Currency'
import { percentageDiff } from '@/Utils/Math'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { Cart } from './Cart'

export const UserDropdown = () => {

    const {auth} = usePage().props as unknown as InertiaProps

    const cart = useCart()

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

                            <div className="wishes-list dropdown-menu dropdown-menu-right p-0">
                                <div className="wish-content p-0">
                                    <div className="p-3 ">
                                        <h5>Wishlist Courses</h5>
                                    </div>
                                    <ul>
                                        {
                                            auth.user.wishlists.length > 0

                                            ?

                                            auth.user.wishlists.map(wishlist => (
                                                <li>
                                                    <div className="media w-100">
                                                        <div className="d-flex media-wide w-100">
                                                            <div className="avatar">
                                                            <Link href={route('courses.single', {
                                                                course: wishlist.course?.slug
                                                            })}>
                                                                <img alt="" src={wishlist.course?.image} />
                                                            </Link>
                                                            </div>
                                                            <div className="media-body flex-fill">
                                                                <h6><Link href={route('courses.single', {
                                                                    course: wishlist.course?.slug
                                                                })} >{wishlist.course?.name}</Link></h6>
                                                                <p>By {wishlist.course?.instructor.name}</p>
                                                                {
                                                                    wishlist.course?.discount

                                                                    ?

                                                                    <>
                                                                        <h5>
                                                                            <Naira /> {percentageDiff(wishlist.course?.price, wishlist.course.discount).toLocaleString()} 
                                                                            <span className='ms-1'><Naira /> {wishlist.course?.price.toLocaleString()}</span>
                                                                        </h5>
                                                                    </>

                                                                    :

                                                                    <>
                                                                        <h5>
                                                                            <Naira /> {wishlist.course?.price.toLocaleString()} 
                                                                        </h5>
                                                                    </>
                                                                }
                                                                <div className="mt-2 d-flex justify-content-between">
                                                                    <button onClick={() => cart?.add(wishlist.course!)} className="btn btn-primary btn-rounded btn-sm" >Add to cart</button>
                                                                    <Link href={route('student.wishlist.toggle', {
                                                                        course: wishlist.course?.id
                                                                    })} className="btn btn-danger ms-2 btn-icon btn-sm">
                                                                        <i className='fa fa-trash'></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))

                                            :

                                            <li className='text-center p-3'>
                                                <h3 className='fs-4'>You have not added any courses to your Wishlist</h3>
                                                <Link href={route('courses.list')} className="mt-3 btn btn-primary">Find Courses</Link>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* <li className="nav-item noti-nav">
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
                        </li> */}
                        <li className="nav-item user-nav">
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                            <span className="user-img">
                                <Symbol image={auth.user.avatar} name={auth.user.name} />
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
            <Link className="dropdown-item" href={route('instructor.dashboard')}><i className="feather-user me-1" /> Dashboard</Link>
            <Link className="dropdown-item" href={route('instructor.courses')}><i className="feather-settings me-1" /> My Courses</Link>
        </>
    )
}

const StudentDropDownItems = () => {
    return (
        <>
            <Link className="dropdown-item" href={route('student.dashboard')}><i className="feather-user me-1" /> Dashboard</Link>
            <Link className="dropdown-item" href={route('student.courses')}><i className="feather-star me-1" />Enrolled Courses</Link>
            {/* <div className="dropdown-item night-mode">
                <span><i className="feather-moon me-1" /> Night Mode </span>
                <div className="form-check form-switch check-on m-0">
                <input className="form-check-input" type="checkbox" id="night-mode" />
                </div>
            </div> */}
        </>
    )
}
