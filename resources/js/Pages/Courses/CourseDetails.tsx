import { Rating } from '@/Components/Rating/Rating'
import { ShareButton } from '@/Components/Share/ShareButton'
import { useCart } from '@/Hooks/useCart'
import { useRave } from '@/Hooks/useRave'
import MainLayout from '@/Layouts/MainLayout'
import { InertiaProps } from '@/Types/app'
import { ICourse } from '@/Types/course'
import { IReview } from '@/Types/review'
import Date from '@/Utils/Date'
import { getVideoId, YoutubeVideoEmbedURL } from '@/Utils/Youtube'
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React from 'react'
import { CourseDetailsPrice } from './Components/CourseDetailsPrice'
import { CourseModuleItem } from './Components/CourseModuleItem'
import { CourseReview } from './Components/CourseReview'

interface ICourseDetailsProps {
    course: ICourse
    enrolled: any
    reviews: IReview[]
}

export default function CourseDetails({course, enrolled,reviews} : ICourseDetailsProps) {    

    const { auth } = usePage().props as unknown as InertiaProps

    return (
        <MainLayout title={course.name} >
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

                <div className="inner-banner" style={{backgroundImage: `url(${course.image})`,}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            <div className="instructor-wrap border-bottom-0 m-0 pt-0">
                                <div className="about-instructor align-items-center">
                                    <div className="abt-instructor-img">
                                        <a href="instructor-profile.html">
                                            <img src={course.instructor.avatar || "/assets/img/user/user1.jpg"} alt="img" className="img-fluid" />
                                        </a>
                                    </div>
                                    <div className="instructor-detail me-3">
                                        <h5><a href="instructor-profile.html">{course.instructor.name}</a></h5>
                                    </div>
                                </div>

                                <Rating rating={(course.reviews_sum_rating / course.reviews.length)} count={course.reviews.length} />
                            </div>
                            <h2>{course.name}</h2>
                            {/* <p>Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL &amp; more!</p> */}
                            <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                                <div className="cou-info">
                                    <img src="/assets/img/icon/icon-01.svg" alt="" />
                                    <p>{course.lectures_count} {pluralize('Lessons', course.lectures_count)}</p>
                                </div>

                                {
                                    course.course_duration

                                    &&

                                    <div className="cou-info">
                                        <img src="/assets/img/icon/timer-icon.svg" alt="" />
                                        <p>{course.course_duration && Date.secondsToHms(course.course_duration)}</p>
                                    </div>
                                }
                                {
                                    course.enrollments_count > 0

                                    &&

                                    <div className="cou-info">
                                        <img src="/assets/img/icon/people.svg" alt="" />
                                        <p>{course.enrollments_count} students enrolled</p>
                                    </div>
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="page-content course-sec pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card overview-sec mt-0">
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
                                            <h6>{course.lectures_count} Lectures {course.course_duration ? `- ${Date.secondsToHms(course.course_duration!)}` : ''}</h6>
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
                                            </div>
                                        </div>

                                        {/* <Rating rating={3} count={2} /> */}
                                    </div>
                                    
                                    {/* <div className="course-info d-flex align-items-center">
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
                                    </div> */}

                                    <div dangerouslySetInnerHTML={{__html: course.instructor.description!}} />
                                    </div>
                                </div>
                                <div className="card review-sec">
                                    <div className="card-body">
                                        <h5 className="subs-title">Reviews</h5>
                                        
                                        { reviews.map(review => <CourseReview review={review} />) }
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

                                                <a href={YoutubeVideoEmbedURL(course.video)}  data-fancybox></a>

                                                <div className="video-details">
                                                    <div className="course-fee">
                                                        <CourseDetailsPrice course={course} />
                                                    </div>
                                                    <div className="row gx-2">
                                                        <div className="col-md-6">
                                                            <a href="course-wishlist.html" className="btn btn-wish w-100"><i className="feather-heart" /> Add to Wishlist</a>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <ShareButton title={course.name} link={route('courses.single', {
                                                                slug: course.slug,
                                                                ref: auth.user?.affiliate_id
                                                            })} />
                                                        </div>
                                                    </div>
                                                    {
                                                        enrolled

                                                        ?
                                                        
                                                        <div className='alert alert-info rounded text-center'>
                                                            <h5>You are Enrolled for this Course</h5>
                                                            <Link href={route('student.courses.single', {
                                                                enrollment: enrolled.id,
                                                                course: course.slug
                                                            })} className='btn btn-outline-primary btn-outline btn-lg mt-4'>View Course</Link>
                                                        </div>

                                                        :

                                                        <>
                                                            <CourseEnrollBtn course={course} />
                                                            <AddTOCartBtn course={course} />
                                                        </>
                                                    }
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

const CourseEnrollBtn = ({course}: {course: ICourse}) => {

    const cart = useCart()
    const rave = useRave()

    function onClose (){

    }

    function onSuccess(res: any){
        const reference = res.tx_ref
        const amount = res.amount
        const flutterwave_id = res.transaction_id

        Inertia.post(route('payment.enroll'), {
            reference, amount, flutterwave_id
        }, {
            onSuccess: (res) => {
                cart?.remove(course.id)
                Inertia.get(route('student.courses'))
            }
        })
    }

    const initiateCheckout = () => {
        const data = {courses: [course.id]} as any
        
        if(course.price){
            Inertia.post(route('payment.initiate'), data, {
                onSuccess: (res) => rave.init(res.props.details, onSuccess, onClose),
                onFinish: (res) => console.log(res)
            })
        }else{
            Inertia.post(route('payment.free'), data, {
                onSuccess: (res) => Inertia.get(route('student.courses'))
            })
        }
    }

    return (
        <button onClick={initiateCheckout} className='btn btn-enroll w-100 mb-3'>Enroll Now</button>
    )
}

const AddTOCartBtn = ({course}: {course: ICourse}) => {
    const cart = useCart()
    return (
        <button onClick={() => cart?.add(course)} className="btn btn-enroll btn-outline-primary btn-rounded  btn-outline w-100">Add to Cart</button>
    )
}
