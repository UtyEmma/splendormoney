import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function About() {
    return (
        <MainLayout title='About Us'>
            <div>
                <div className="breadcrumb-bar">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                        <div className="breadcrumb-list">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href={route('pages.home')}>Home</Link></li>
                                <li className="breadcrumb-item">About</li>
                            </ol>
                            </nav>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="page-banner">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                        <h1 className="mb-0">About</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            <section className="section master-skill">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="section-header aos" data-aos="fade-up">
                                <div className="section-sub-head">
                                <span>What’s New</span>
                                <h2>Master the skills to drive your career</h2>
                                </div>
                            </div>
                            <div className="section-text aos" data-aos="fade-up">
                                <p>Get certified, master modern tech skills, and level up your career — whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</p>
                            </div>
                            <div className="career-group aos" data-aos="fade-up">
                                <div className="row">
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="certified-group blur-border d-flex">
                                    <div className="get-certified d-flex align-items-center">
                                        <div className="blur-box">
                                        <div className="certified-img ">
                                            <img src="assets/img/icon/icon-1.svg" alt="" className="img-fluid" />
                                        </div>
                                        </div>
                                        <p>Stay motivated with engaging instructors</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="certified-group blur-border d-flex">
                                    <div className="get-certified d-flex align-items-center">
                                        <div className="blur-box">
                                        <div className="certified-img ">
                                            <img src="assets/img/icon/icon-2.svg" alt="" className="img-fluid" />
                                        </div>
                                        </div>
                                        <p>Keep up with in the latest in cloud</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="certified-group blur-border d-flex">
                                    <div className="get-certified d-flex align-items-center">
                                        <div className="blur-box">
                                        <div className="certified-img ">
                                            <img src="assets/img/icon/icon-3.svg" alt="" className="img-fluid" />
                                        </div>
                                        </div>
                                        <p>Get certified with 100+ certification courses</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="certified-group blur-border d-flex">
                                    <div className="get-certified d-flex align-items-center">
                                        <div className="blur-box">
                                        <div className="certified-img ">
                                            <img src="assets/img/icon/icon-4.svg" alt="" className="img-fluid" />
                                        </div>
                                        </div>
                                        <p>Build skills your way, from labs to courses</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 d-flex align-items-end">
                            <div className="career-img aos" data-aos="fade-up">
                                <img src="/assets/img/join.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section latest-blog">
                <div className="container">
                <div className="enroll-group aos" data-aos="fade-up">
                    <div className="row ">
                    <div className="col-lg-4 col-md-6">
                        <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                            <div className="enroll-img ">
                            <img src="assets/img/icon/icon-07.svg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="course-count">
                            <h3><span className="counterUp">253,085</span></h3>
                            <p>STUDENTS ENROLLED</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                            <div className="enroll-img ">
                            <img src="assets/img/icon/icon-08.svg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="course-count">
                            <h3><span className="counterUp">1,205</span></h3>
                            <p>TOTAL COURSES</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                            <div className="enroll-img ">
                            <img src="assets/img/icon/icon-09.svg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="course-count">
                            <h3><span className="counterUp">127</span></h3>
                            <p>COUNTRIES</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="lab-course">
                    <div className="section-header aos" data-aos="fade-up">
                    <div className="section-sub-head feature-head text-center">
                        <h2>Unlimited access to 360+ courses <br />and 1,600+ hands-on labs</h2>
                    </div>
                    </div>
                    <div className="icon-group aos" data-aos="fade-up">
                    <div className="offset-lg-1 col-lg-12">
                        <div className="row">
                        <div className="col-lg-1 col-3">
                            <div className="total-course d-flex align-items-center">
                            <div className="blur-border">
                                <div className="enroll-img ">
                                <img src="assets/img/icon/icon-09.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-3">
                            <div className="total-course d-flex align-items-center">
                            <div className="blur-border">
                                <div className="enroll-img ">
                                <img src="assets/img/icon/icon-10.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-3">
                            <div className="total-course d-flex align-items-center">
                            <div className="blur-border">
                                <div className="enroll-img ">
                                <img src="assets/img/icon/icon-16.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-3">
                            <div className="total-course d-flex align-items-center">
                            <div className="blur-border">
                                <div className="enroll-img ">
                                <img src="assets/img/icon/icon-12.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-3">
                            <div className="total-course d-flex align-items-center">
                            <div className="blur-border">
                                <div className="enroll-img ">
                                <img src="assets/img/icon/icon-13.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-3">
                            <div className="total-course d-flex align-items-center">
                            <div className="blur-border">
                                <div className="enroll-img ">
                                <img src="assets/img/icon/icon-14.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-3">
                            <div className="total-course d-flex align-items-center">
                            <div className="blur-border">
                                <div className="enroll-img ">
                                <img src="assets/img/icon/icon-15.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-3">
                            <div className="total-course d-flex align-items-center">
                            <div className="blur-border">
                                <div className="enroll-img ">
                                <img src="assets/img/icon/icon-16.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-3">
                            <div className="total-course d-flex align-items-center">
                            <div className="blur-border">
                                <div className="enroll-img ">
                                <img src="assets/img/icon/icon-17.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-3">
                            <div className="total-course d-flex align-items-center">
                            <div className="blur-border">
                                <div className="enroll-img ">
                                <img src="assets/img/icon/icon-18.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </MainLayout>
    )
}
