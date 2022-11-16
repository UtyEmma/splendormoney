import { PriceDiscount } from '@/Components/Price/PriceDiscounts'
import { Rating } from '@/Components/Rating/Rating'
import { useCart } from '@/Hooks/useCart'
import { ICourse } from '@/Types/course'
import Date from '@/Utils/Date'
import { Link } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React from 'react'

interface ICourseCard {
    course: ICourse
}

export const CourseCard = ({course} : ICourseCard) => {
    const cart = useCart()

    console.log(course)

    return (
        <div className="col-lg-4 col-md-6 d-flex">
            <div className="course-box course-design d-flex ">
                <div className="product">
                <div className="product-img overflow-hidden" style={{height: '250px'}}>
                    <Link href={route('courses.single', {
                        course: course.slug
                    })}>
                        <img className="img-fluid" style={{objectFit: 'cover', minHeight: '100%', minWidth: '100%'}} alt="" src={course.image} />
                    </Link>
                    <div className="price ">
                        <h3 ><PriceDiscount course={course} /></h3>
                    </div>
                </div>
                <div className="product-content">
                    <div className="course-group d-flex">
                    <div className="course-group-img d-flex align-items-center">
                        <a href="instructor-profile.html"><img src={course.instructor.avatar || "/assets/img/user/user1.jpg"} alt="" className="img-fluid" /></a>
                        <div className="course-name pb-0 mb-0">
                            <h4 className='mb-0'><a href="instructor-profile.html">{course.instructor.name}</a></h4>
                            <p className='mb-0'>Instructor</p>
                        </div>
                    </div>
                    <div className="course-share d-flex align-items-center justify-content-center">
                        <a href="#rate"><i className="fa-regular fa-heart" /></a>
                    </div>
                    </div>
                    <h3 className="title"><Link href={route('courses.single', {
                        course: course.slug
                    })}>{course.name}</Link></h3>
                    <div className="course-info d-flex align-items-center">
                        <div className="rating-img d-flex align-items-center">
                            <img src="assets/img/icon/icon-01.svg" alt="" />
                            <p>{course.lectures_count}+ {pluralize('Lesson', course.lectures_count)}</p>
                        </div>

                        <div className="course-view d-flex align-items-center">
                            {
                                course.course_duration

                                &&

                                <>
                                    <img src="assets/img/icon/icon-02.svg" alt="" />
                                    <p>{Date.secondsToHms(course.course_duration)}</p>
                                </>
                            }
                        </div>
                    </div>

                        <Rating count={course.reviews_count} rating={(course.reviews_sum_rating / course.reviews.length)} />

                        <div className="mt-4 d-flex flex-column gap-3">
                            <button onClick={() => cart?.add(course)} className="btn btn-lg rounded-pill btn-primary btn-outline btn-outline-primary  w-100">Add To Cart</button>
                            <Link href={route('courses.single', {
                                course: course.slug
                            })} className="btn btn-enroll w-100">Enroll Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
