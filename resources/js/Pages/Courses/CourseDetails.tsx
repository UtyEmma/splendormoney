import MainLayout from '@/Layouts/MainLayout'
import { ICourse } from '@/Types/course'
import { getVideoId, YoutubeVideoEmbedURL } from '@/Utils/Youtube'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { CourseDetailsPrice } from './Components/CourseDetailsPrice'
import { CourseModuleItem } from './Components/CourseModuleItem'

interface ICourseDetailsProps {
    course: ICourse
}

export default function CourseDetails({course} : ICourseDetailsProps) {
    return (
        <MainLayout title={course.name}  >
            <div>
                <div className="breadcrumb-bar">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                        <div className="breadcrumb-list">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href={route('pages.home')}>Home</Link></li>
                                <li className="breadcrumb-item" aria-current="page"><Link href={route('courses.list')}>Courses</Link></li>
                                <li className="breadcrumb-item" aria-current="page">{course.name}</li>
                            </ol>
                            </nav>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="inner-banner" style={{backgroundImage: `url(${course.image})`}}>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                        <div className="instructor-wrap border-bottom-0 m-0">
                            <div className="about-instructor align-items-center">
                            <div className="abt-instructor-img">
                                <a href="instructor-profile.html"><img src={course.instructor.avatar || "/assets/img/user/user1.jpg"} alt="img" className="img-fluid" /></a>
                            </div>
                            <div className="instructor-detail me-3">
                                <h5><a href="instructor-profile.html">{course.instructor.name}</a></h5>
                                <p>UX/UI Designer</p>
                            </div>
                            <div className="rating mb-0">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span className="d-inline-block average-rating"><span>4.5</span> (15)</span>
                            </div>
                            </div>
                            {/* <span className="web-badge mb-3">WEB DEVELPMENT</span> */}
                        </div>
                        <h2>{course.name}</h2>
                        {/* <p>Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL &amp; more!</p> */}
                        <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                            <div className="cou-info">
                                <img src="/assets/img/icon/icon-01.svg" alt="" />
                                <p>12+ Lesson</p>
                            </div>
                            <div className="cou-info">
                                <img src="/assets/img/icon/timer-icon.svg" alt="" />
                                <p>9hr 30min</p>
                            </div>
                            <div className="cou-info">
                                <img src="/assets/img/icon/people.svg" alt="" />
                                <p>32 students enrolled</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <section className="page-content course-sec">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                        <div className="card overview-sec">
                            <div className="card-body">
                                <h5 className="subs-title">Overview</h5>
                                <h6>Course Description</h6>
                                <div dangerouslySetInnerHTML={{__html: course.description}} />
                            </div>
                        </div>
                        <div className="card content-sec">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                    <h5 className="subs-title">Course Content</h5>
                                    </div>
                                    <div className="col-sm-6 text-sm-end">
                                    <h6>92 Lectures 10:56:11</h6>
                                    </div>
                                </div>

                                <div id="module-accordion">
                                    {
                                        course.modules.map((module, index) => <CourseModuleItem module={module} index={index + 1} />)
                                    }
                                </div>
                                
                            </div>
                        </div>
                        <div className="card instructor-sec">
                            <div className="card-body">
                            <h5 className="subs-title">About the instructor</h5>
                            <div className="instructor-wrap">
                                <div className="about-instructor">
                                <div className="abt-instructor-img">
                                    <a href="instructor-profile.html"><img src={course.instructor.avatar || "/assets/img/user/user1.jpg"} alt="img" className="img-fluid" /></a>
                                </div>
                                <div className="instructor-detail">
                                    <h5><a href="instructor-profile.html">{course.instructor.name}</a></h5>
                                    {/* <p>UX/UI Designer</p> */}
                                </div>
                                </div>
                                <div className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span className="d-inline-block average-rating">4.5 Instructor Rating</span>
                                </div>
                            </div>

                            <div className="course-info d-flex align-items-center">
                                <div className="cou-info">
                                <img src="assets/img/icon/play.svg" alt="" />
                                <p>5 Courses</p>
                                </div>
                                <div className="cou-info">
                                <img src="assets/img/icon/icon-01.svg" alt="" />
                                <p>12+ Lesson</p>
                                </div>
                                <div className="cou-info">
                                <img src="assets/img/icon/icon-02.svg" alt="" />
                                <p>9hr 30min</p>
                                </div>
                                <div className="cou-info">
                                <img src="assets/img/icon/people.svg" alt="" />
                                <p>270,866 students enrolled</p>
                                </div>
                            </div>

                            <div dangerouslySetInnerHTML={{__html: course.instructor.description!}} />
                            </div>
                        </div>
                        <div className="card review-sec">
                            <div className="card-body">
                            <h5 className="subs-title">Reviews</h5>
                            <div className="instructor-wrap">
                                <div className="about-instructor">
                                <div className="abt-instructor-img">
                                    <a href="instructor-profile.html"><img src="assets/img/user/user1.jpg" alt="img" className="img-fluid" /></a>
                                </div>
                                <div className="instructor-detail">
                                    <h5><a href="instructor-profile.html">Nicole Brown</a></h5>
                                    <p>UX/UI Designer</p>
                                </div>
                                </div>
                                <div className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span className="d-inline-block average-rating">4.5 Instructor Rating</span>
                                </div>
                            </div>
                            <p className="rev-info">“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “</p>
                            <a href="javascript:;" className="btn btn-reply"><i className="feather-corner-up-left" /> Reply</a>
                            </div>
                        </div>
                        <div className="card comment-sec">
                            <div className="card-body">
                            <h5 className="subs-title">Post A comment</h5>
                            <form>
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Full Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                </div>
                                <div className="form-group">
                                <input type="email" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                <textarea rows={4} className="form-control" placeholder="Your Comments" defaultValue={""} />
                                </div>
                                <div className="submit-section">
                                <button className="btn submit-btn" type="submit">Submit</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="sidebar-sec">
                            <div className="video-sec vid-bg">
                            <div className="card">
                                <div className="card-body" >
                                <div>
                                    {
                                        course.video

                                        ?

                                        <button type="button" className="video-thumbnail border-0 p-0 rounded-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <div className="play-icon">
                                            <i className="fa-solid fa-play" />
                                            </div>
                                            <div className='overflow-hidden rounded-3' style={{height: '200px'}}>
                                                <img  src={course.image || "/assets/img/video.jpg"} alt="" />
                                            </div>
                                        </button>

                                        :

                                        <div className="video-thumbnail border-0 p-0 rounded-3">
                                            <div className='overflow-hidden rounded-3' style={{height: '200px'}}>
                                                <img  src={course.image || "/assets/img/video.jpg"} alt="" />
                                            </div>
                                        </div>

                                    }
                                </div>

                                <a href={YoutubeVideoEmbedURL(course.video)}  data-fancybox>
                                    
                                </a>
                                <div className="video-details">
                                    <div className="course-fee">
                                        <CourseDetailsPrice course={course} />
                                    </div>
                                    <div className="row gx-2">
                                    <div className="col-md-6">
                                        <a href="course-wishlist.html" className="btn btn-wish w-100"><i className="feather-heart" /> Add to Wishlist</a>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="javascript:;" className="btn btn-wish w-100"><i className="feather-share-2" /> Share</a>
                                    </div>
                                    </div>
                                    <a href="checkout.html" className="btn btn-enroll w-100">Enroll Now</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" >
                    <div className="modal-content" >
                        <div className="modal-header border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body" style={{height: '500px'}}>
                            <iframe width="100%" height="100%" className='h-100' src={YoutubeVideoEmbedURL(course.video)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    </div>
                </div>
        </MainLayout>
    )
}
