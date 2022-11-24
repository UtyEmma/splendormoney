import { Pagination } from '@/Components/Pagination/Pagination'
import { Rating } from '@/Components/Rating/Rating'
import { Swal } from '@/Components/SweetAlert/Swal'
import { InstructorLayout } from '@/Layouts/Instructor/InstructorLayout'
import { IPagination } from '@/Types/app'
import { IReview } from '@/Types/review'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

interface InstructorReviewsProps{
    reviews: IPagination<IReview[]>
}

export default function InstructorReviews({reviews}: InstructorReviewsProps) {
    return (
        <InstructorLayout title='Reviews'>
            <div className="settings-widget">
                <div className="settings-inner-blk p-0">
                    <div className="sell-course-head comman-space">
                        <h3>Reviews</h3>
                        <p>View your Reviews.</p>
                    </div>

                    {
                        reviews.total > 0

                        ?


                        reviews.data.map(review => (
                            <div className="comman-space bdr-bottom-line">
                                <div className="instruct-review-blk ">
                                    <div className="review-item">
                                        <div className="instructor-wrap border-0 m-0">
                                            <div className="about-instructor">
                                                <div className="instructor-detail">
                                                    <h5><Link href={route('courses.single', {
                                                        course: review.course.id
                                                    })}>{review.course.name}</Link></h5>
                                                    <p>by {review.student.name}</p>
                                                </div>
                                            </div>
                                            <Rating rating={review.rating} />
                                        </div>
                                        <p className="rev-info">{review.review}</p>

                                        <div className="d-flex gap-3">
                                            <Swal 
                                                element={'span'}
                                                status='warning'
                                                text='Are you sure you wish to delete this review' 
                                                onSuccess={() => Inertia.delete(route('admin.reviews.delete', {
                                                    review: review.id
                                                }))} 
                                                className='btn btn-reply text-danger'
                                            >Delete Review</Swal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        
                        :
                        
                        <div className="p-4">
                            <div className='border text-center p-5 rounded-3'>
                                <div className='mb-5'>
                                    <h2>You have not reviewed any courses yet!</h2>
                                    <h5>Click the link below to find courses you are enrolled in!</h5>
                                </div>

                                <Link className="btn btn-reply" href={route('student.courses')}>Find Courses</Link>
                            </div>
                        </div>
                    
                    }

                    <Pagination pagination={reviews} />
                </div>
            </div>
        </InstructorLayout>
    )
}
