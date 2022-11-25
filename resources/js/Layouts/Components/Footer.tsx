import { Disclose } from '@/Components/Toggle/Disclose'
import { InertiaProps } from '@/Types/app'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export const Footer = () => {

    const {app} = usePage().props as unknown as InertiaProps

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                    <div className="footer-widget footer-about">
                        <div className="footer-logo">
                        <img src={app.logo} alt="logo" />
                        </div>
                        <div className="footer-about-content">
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</p> */}
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Quick Menu</h2>
                        <ul>
                        <li><Link href={route('login')}>Login</Link></li>
                        <li><Link href={route('register')}>Register</Link></li>
                        <li><Link href={route('pages.about')}>About Us</Link></li>
                        <li><Link href={route('pages.faq')}>Frequently Asked Questions</Link></li>
                        <li><Link href={"deposit-instructor-dashboard.html"}> Contact Us</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="footer-widget footer-contact">
                        <h2 className="footer-title">Contact Information</h2>
                        {/* <div className="news-letter">
                            <form>
                                <input type="text" className="form-control" placeholder="Enter your email address" name="email" />
                            </form>
                        </div> */}
                        <div className="footer-contact-info">

                        <Disclose as={'div'} show={!!app.address} className="footer-address">
                            <img src="assets/img/icon/icon-20.svg" alt="" className="img-fluid" />
                            <p> {app.address}</p>
                        </Disclose>
                        <Disclose show={!!app.email}>
                            <p>
                                <img src="assets/img/icon/icon-19.svg" alt="" className="img-fluid" />
                                <a href={`mailto:${app.email}`} className="__cf_email__" data-cfemail="21455344404c524d4c52614459404c514d440f424e4c">{app.email}</a>
                            </p>
                        </Disclose>

                        <Disclose as={'p'} show={!!app.phone} className="mb-0">
                            <img src="assets/img/icon/icon-21.svg" alt="" className="img-fluid" />
                            {app.phone}
                        </Disclose>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                <div className="copyright">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="privacy-policy">
                        <ul>
                            <li><a href="term-condition.html">Terms</a></li>
                            <li><a href="privacy-policy.html">Privacy</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="copyright-text">
                        <p className="mb-0">© {new Date().getFullYear()} {app.name}. All rights reserved.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </footer>

    )
}
