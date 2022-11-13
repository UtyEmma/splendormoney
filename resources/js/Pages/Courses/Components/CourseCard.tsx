import { PriceDiscount } from '@/Components/Price/PriceDiscounts'
import { useCart } from '@/Hooks/useCart'
import { ICourse } from '@/Types/course'
import { Link } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React from 'react'

interface ICourseCard {
    course: ICourse
}

export const CourseCard = ({course} : ICourseCard) => {
    const courseLessons = () => {
        const count = course.modules.reduce((prev, item) => prev + item.lectures.length, 0)
        return count;
    }

    const cart = useCart()

    return (
        <div className="col-lg-4 col-md-6 d-flex">
            <div className="course-box course-design d-flex ">
                <div className="product">
                <div className="product-img overflow-hidden" style={{height: '250px'}}>
                    <Link href={route('courses.single', {
                        course: course.slug
                    })}>
                        <img className="img-fluid" alt="" src={course.image} />
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
                        <p>{courseLessons()}+ {pluralize('Lesson', courseLessons())}</p>
                    </div>
                    <div className="course-view d-flex align-items-center">
                        <img src="assets/img/icon/icon-02.svg" alt="" />
                        <p>9hr 30min</p>
                    </div>
                    </div>
                    <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <button onClick={() => cart?.add(course)} className="btn btn-outline btn-outline-primary">Add To Cart</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
