import { Disclose } from '@/Components/Toggle/Disclose'
import MainLayout from '@/Layouts/MainLayout'
import { InertiaProps } from '@/Types/app'
import { ICategory } from '@/Types/category'
import { ICourse } from '@/Types/course'
import { ITestimonial } from '@/Types/testimonials'
import { InstructorModel } from '@/Types/user'
import Form from '@/Utils/Form'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React, { FormEvent } from 'react'
import { CategoryItem } from './Categories/Component/CategoryItem'
import { CourseCard } from './Courses/Components/CourseCard'

interface IHomeProps extends InertiaProps{
    courses: ICourse[]
    categories: ICategory[]
    testimonials: ITestimonial[]
    instructors: InstructorModel[]
}   

export default function Home({auth, courses, categories, testimonials, instructors} : IHomeProps) {
    const search  = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        Inertia.get(   
            route('courses.list', Form.entries(e.currentTarget))
        )
    }
    return (
        <MainLayout title='Home' index>
            <section className="home-slide d-flex align-items-center">
                <div className="container">
                <div className="row ">
                    <div className="col-md-7">
                    <div className="home-slide-face aos" data-aos="fade-up">
                        <div className="home-slide-text ">
                        <h5>The Leader in Online Learning</h5>
                        <h1>Engaging &amp; Accessible Online Courses For All</h1>
                        <p>Own your future learning new skills online</p>
                        </div>
                        <div className="banner-content">
                        <form className="form" onSubmit={search}>
                            <div className="form-inner">
                            <div className="input-group">
                                <i className="fa-solid fa-magnifying-glass search-icon" />
                                <input type="text" name='keyword' className="form-control" placeholder="Search for Courses..." />
                                <span className="drop-detail">
                                <select name='category'  className="form-select ">
                                    <option value={''}>Category</option>
                                    {
                                        categories.map(category => <option value={category.slug}>{category.name}</option>)
                                    }
                                </select>
                                </span>
                                <button className="btn btn-primary sub-btn " type="submit"><i className="fas fa-arrow-right" /></button>
                            </div>
                            </div>
                        </form>
                        </div>
                        <div className="trust-user">
                        <p>Trusted by over 15K Users <br />worldwide since 2022</p>
                        <div className="trust-rating d-flex align-items-center">
                            <div className="rate-head">
                            <h2><span>1000</span>+</h2>
                            </div>
                            <div className="rating d-flex align-items-center">
                            <h2 className="d-inline-block average-rating">4.4</h2>
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-center">
                    <div className="girl-slide-img aos" data-aos="fade-up">
                        <img src="assets/img/object.png" alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="section student-course">
                <div className="container">
                <div className="course-widget">
                    <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="course-full-width">
                        <div className="blur-border course-radius align-items-center aos" data-aos="fade-up">
                            <div className="online-course d-flex align-items-center">
                            <div className="course-img">
                                <img src="assets/img/pencil-icon.svg" alt="" />
                            </div>
                            <div className="course-inner-content">
                                <h4><span>10</span>K</h4>
                                <p>Online Courses</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex">
                        <div className="course-full-width">
                        <div className="blur-border course-radius aos" data-aos="fade-up">
                            <div className="online-course d-flex align-items-center">
                            <div className="course-img">
                                <img src="assets/img/cources-icon.svg" alt="" />
                            </div>
                            <div className="course-inner-content">
                                <h4><span>200</span>+</h4>
                                <p>Expert Tutors</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex">
                        <div className="course-full-width">
                        <div className="blur-border course-radius aos" data-aos="fade-up">
                            <div className="online-course d-flex align-items-center">
                            <div className="course-img">
                                <img src="assets/img/certificate-icon.svg" alt="" />
                            </div>
                            <div className="course-inner-content">
                                <h4><span>6</span>K+</h4>
                                <p>Ceritified Courses</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex">
                        <div className="course-full-width">
                        <div className="blur-border course-radius aos" data-aos="fade-up">
                            <div className="online-course d-flex align-items-center">
                            <div className="course-img">
                                <img src="assets/img/gratuate-icon.svg" alt="" />
                            </div>
                            <div className="course-inner-content">
                                <h4><span>60</span>K +</h4>
                                <p>Online Students</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <Disclose show={categories.length > 0}>
                <section className="section how-it-works">
                    <div className="container">
                    <div className="section-header aos" data-aos="fade-up">
                        <div className="section-sub-head">
                        <span>Favourite Course</span>
                        <h2>Top Category</h2>
                        </div>
                        <div className="all-btn all-category d-flex align-items-center">
                        <a href="job-category.html" className="btn btn-primary">All Categories</a>
                        </div>
                    </div>
                    <div className="section-text aos" data-aos="fade-up">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                    </div>
                    <div className="owl-carousel mentoring-course owl-theme aos" data-aos="fade-up">
                        {
                            categories.map(category => <CategoryItem category={category} />)
                        }
                    </div>
                    </div>
                </section>
            </Disclose>

            <Disclose show={!!false}>
                <section className="section new-course">
                    <div className="container">
                        <div className="section-header aos" data-aos="fade-up">
                            <div className="section-sub-head">
                                <span>What’s New</span>
                                <h2>Featured Courses</h2>
                            </div>
                            <div className="all-btn all-category d-flex align-items-center">
                                <Link href={route('courses.list')} className="btn btn-primary">All Courses</Link>
                            </div>
                        </div>
                        <div className="section-text aos" data-aos="fade-up">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                        </div>
                        <div className="course-feature">
                            <div className="row">
                                {
                                    courses.map(course => 
                                        <div className="col-lg-4 col-md-6 d-flex">
                                            <CourseCard course={course} />
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </section>
            </Disclose>

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
            
            <section className="section trend-course">
                <div className="container">
                    <div className="section-header aos" data-aos="fade-up">
                        <div className="section-sub-head">
                        <span>What’s New</span>
                        <h2>TRENDING COURSES</h2>
                        </div>
                        <div className="all-btn all-category d-flex align-items-center">
                        <a href="course-list.html" className="btn btn-primary">All Courses</a>
                        </div>
                    </div>
                    <div className="section-text aos" data-aos="fade-up">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                    </div>
                    <div className="owl-carousel trending-course owl-theme aos" data-aos="fade-up">
                        {
                            courses.map(course => <CourseCard course={course} />)
                        }
                    </div>
                   
                    <div className="feature-instructors">
                        <div className="section-header aos" data-aos="fade-up">
                        <div className="section-sub-head feature-head text-center">
                            <h2>Featured Instructor</h2>
                            <div className="section-text aos" data-aos="fade-up">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                            </div>
                        </div>
                        </div>
                        <div className="owl-carousel instructors-course owl-theme aos" data-aos="fade-up">
                            {
                                instructors.map(instructor => (
                                    <div className="instructors-widget">
                                        <div className="instructors-img ">
                                        <a href="#">
                                            <img className="img-fluid" alt="" src={instructor.avatar || '/assets/img/blank-user.png'} />
                                        </a>
                                        </div>
                                        <div className="instructors-content text-center">
                                        <h5><a href="#">{instructor.name}</a></h5>
                                        <div className="student-count d-flex justify-content-center">
                                            <i className="fa-solid fa-book" />
                                            <span>{instructor.courses_count} {pluralize('Courses', instructor.courses_count)}</span>
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="section lead-companies">
                <div className="container">
                <div className="section-header aos" data-aos="fade-up">
                    <div className="section-sub-head feature-head text-center">
                    <span>Trusted By</span>
                    <h2>500+ Leading Universities And Companies</h2>
                    </div>
                </div>
                <div className="lead-group aos" data-aos="fade-up">
                    <div className="lead-group-slider owl-carousel owl-theme">
                    <div className="item">
                        <div className="lead-img">
                        <img className="img-fluid" alt="" src="assets/img/lead-01.png" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="lead-img">
                        <img className="img-fluid" alt="" src="assets/img/lead-02.png" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="lead-img">
                        <img className="img-fluid" alt="" src="assets/img/lead-03.png" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="lead-img">
                        <img className="img-fluid" alt="" src="assets/img/lead-04.png" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="lead-img">
                        <img className="img-fluid" alt="" src="assets/img/lead-05.png" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="lead-img">
                        <img className="img-fluid" alt="" src="assets/img/lead-06.png" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="section share-knowledge">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div className="knowledge-img aos" data-aos="fade-up">
                        <img src="assets/img/share.png" alt="" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                    <div className="join-mentor aos" data-aos="fade-up">
                        <h2>Want to share your knowledge? Join us a Mentor</h2>
                        <p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                        <ul className="course-list">
                        <li><i className="fa-solid fa-circle-check" />Best Courses</li>
                        <li><i className="fa-solid fa-circle-check" />Top rated Instructors</li>
                        </ul>
                        <div className="all-btn all-category d-flex align-items-center">
                        <a href="instructor-list.html" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            <Disclose show={!!testimonials.length}>
                <section className="section user-love">
                    <div className="container">
                    <div className="section-header white-header aos" data-aos="fade-up">
                        <div className="section-sub-head feature-head text-center">
                        <span>Check out these real reviews</span>
                        <h2>Users-love-us Don't take it from us.</h2>
                        </div>
                    </div>
                    </div>
                </section>

                <section  className="testimonial-four">
                    <div className="review">
                    <div className="container">
                        <div className="testi-quotes">
                            <img src="/assets/img/qute.png" alt="" />
                        </div>
                            <div className="mentor-testimonial lazy slider aos" data-aos="fade-up" data-sizes="50vw ">
                            
                            {
                                testimonials.map(testimonial => (
                                    <div className="d-flex justify-content-center">
                                        <div className="testimonial-all d-flex justify-content-center">
                                        <div className="testimonial-two-head text-center align-items-center d-flex">
                                            <div className="testimonial-four-saying ">
                                            <div className="testi-right">
                                                <img src={testimonial.image} alt="" />
                                            </div>
                                            <p>{testimonial.message}</p>
                                            <div className="four-testimonial-founder">
                                                <div className="fount-about-img">
                                                <a href="instructor-profile.html"><img src="assets/img/user/user1.jpg" alt="" className="img-fluid" /></a>
                                                </div>
                                                <h3><a href="instructor-profile.html">{testimonial.name}</a></h3>
                                                <span>{testimonial.title}</span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </section>
            </Disclose>

            <section className="section become-instructors aos" data-aos="fade-up">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex">
                    <div className="student-mentor cube-instuctor ">
                        <h4>Become An Instructor</h4>
                        <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="top-instructors">
                            <p>Top instructors from around the world teach millions of students on Mentoring.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="mentor-img">
                            <img className="img-fluid" alt="" src="assets/img/become-02.png" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                    <div className="student-mentor yellow-mentor">
                        <h4>Transform Access To Education</h4>
                        <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="top-instructors">
                            <p>Create an account to receive our newsletter, course recommendations and promotions.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="mentor-img">
                            <img className="img-fluid" alt="" src="assets/img/become-01.png" />
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
