import { InertiaProps } from '@/Types/app'
import { IUser, IUserRole } from '@/Types/user'
import { Ziggy } from '@/ziggy'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { UserDropdown } from './UserDropdown'

export const Header = ({index = false}: {index: boolean}) => {
    const {app, auth} = usePage().props as unknown as InertiaProps
    return (
        <header className={`header ${!index ? 'header-page' : ''}`} style={{height: !index ? '80px' : '0'}}>
            <div className="header-fixed ">
                <nav className="navbar navbar-expand-lg header-nav scroll-sticky">
                    <div className={`container ${index ? '' : 'header-border'}`}>
                        <div className="navbar-header">
                            <a id="mobile_btn" href="javascript:void(0);">
                                <span className="bar-icon">
                                <span />
                                <span />
                                <span />
                                </span>
                            </a>
                            <Link href={route('pages.home')} className="navbar-brand logo">
                                <img src={app.logo} className="img-fluid" alt="Logo" />
                            </Link>
                        </div>
                        <div className="main-menu-wrapper">
                            <div className="menu-header">
                                <Link href={route('pages.home')} className="menu-logo">
                                    <img src={app.logo} className="img-fluid" alt="Logo" />
                                </Link>
                                    <a id="menu_close" className="menu-close" href="javascript:void(0);">
                                    <i className="fas fa-times" />
                                </a>
                            </div>
                            <ul className="main-nav">
                                <li className={`${route().current() === 'pages.home' && 'active'} nav-item`}>
                                    <Link href={route('pages.home')}>Home</Link>
                                </li>
                                <li className={`${route().current() === 'pages.about' && 'active'} nav-item`}>
                                    <Link href={route('pages.about')}>About Us</Link>
                                </li>
                                <li className={`${route().current() === 'courses.list' && 'active'} nav-item`}>
                                    <Link href={route('courses.list')}>Courses</Link>
                                </li>
                                <li className={`${route().current() === 'pages.faq' && 'active'} nav-item`}>
                                    <Link href={route('pages.faq')}>FAQs</Link>
                                </li>
                                
                                {
                                    auth.user

                                    ?

                                    <>
                                        <li className={`login-link  d-md-none d-block`}>
                                            <Link href={route(DashboardLinks[auth.user?.role!])}>My Dashboard</Link>
                                        </li>
                                    </>

                                    :

                                    <li className={`login-link ${(route().current() === 'login' || route().current() === 'register') && 'active'}  d-md-none d-block`}>
                                        <Link href={route('login')}>Login / Signup</Link>
                                    </li>

                                }
                            </ul>
                        </div>
                        
                        <UserDropdown />
                    </div>
                </nav>
            </div>
        </header>

    )
}

const DashboardLinks : Record<IUserRole, keyof typeof Ziggy.routes>= {
    user: 'student.dashboard',
    admin: 'admin.dashboard',
    superadmin: 'admin.dashboard',
    instructor: 'instructor.dashboard',
}
