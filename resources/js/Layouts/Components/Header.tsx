import { InertiaProps } from '@/Types/app'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { UserDropdown } from './UserDropdown'

export const Header = ({index = false}: {index: boolean}) => {
    return (
        <header className={`header ${!index ? 'header-page' : ''}`} style={{height: !index ? '80px' : '0px'}}>
            <div className="header-fixed">
                <nav className="navbar navbar-expand-lg header-nav scroll-sticky">
                    <div className={`container `}>
                    {/* ${!index ? 'header-border' : ''} */}
                        <div className="navbar-header">
                            <a id="mobile_btn" href="javascript:void(0);">
                                <span className="bar-icon">
                                <span />
                                <span />
                                <span />
                                </span>
                            </a>
                            <Link href={route('pages.home')} className="navbar-brand logo">
                                <img src="/assets/logo.png" className="img-fluid" alt="Logo" />
                            </Link>
                        </div>
                        <div className="main-menu-wrapper">
                            <div className="menu-header">
                                <Link href={route('pages.home')} className="menu-logo">
                                    <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
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
                                    <Link href={route('courses.list')}>Find Courses</Link>
                                </li>
                                <li >
                                    <a href="#">Contact Us</a>
                                </li>
                                <li className="login-link">
                                <a href="/login">Login / Signup</a>
                                </li>
                            </ul>
                        </div>
                        
                        <UserDropdown />
                    </div>
                </nav>
            </div>
        </header>

    )
}
