import { Symbol } from '@/Components/Avatar/Symbol'
import { Rating } from '@/Components/Rating/Rating'
import { ICourse } from '@/Types/course'
import { IReview } from '@/Types/review'
import React from 'react'

interface ICourseReviewProps {
    review: IReview
}

export const CourseReview = ({review} : ICourseReviewProps) => {
    return (
        <>
            <div className="instructor-wrap d-flex align-items-start">
                <div className="about-instructor">
                    <div className="abt-instructor-img">
                        <Symbol image={review.student?.avatar} name={review.student.name}  />
                    </div>
                    <div className="instructor-detail">
                        <h5>{review.student?.name}</h5>
                    </div>
                </div>

                <Rating  rating={review.rating} />
            </div>
            <p className="rev-info">“ {review.review} “</p>
        </>
    )
}
