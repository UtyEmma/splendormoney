import { Pagination } from '@/Components/Pagination/Pagination'
import { Rating } from '@/Components/Rating/Rating'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { ReviewModal } from '@/Pages/Student/Components/ReviewModal'
import { InertiaProps, IPagination } from '@/Types/app'
import { IReview } from '@/Types/review'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

interface IReviewsListProps extends InertiaProps{
    reviews: IPagination<IReview[]>
}

export default function ReviewsList({reviews} : IReviewsListProps) {
    return (
        <AdminLayout title='Reviews'>
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
                                                    <h5><a href="instructor-profile.html">{review.course.name}</a></h5>
                                                    <p>{review.course.instructor.name}</p>
                                                </div>
                                            </div>
                                            <Rating rating={review.rating} />
                                        </div>
                                        <p className="rev-info">{review.review}</p>

                                        <div className="d-flex gap-3">
                                            <ReviewModal course={review.course} review={review} ><span className="btn btn-reply"><i className="feather-edit-alt" /> Edit Review</span></ReviewModal>

                                            <Link href={route('admin.reviews.delete', {
                                                review: review.id
                                            })} className='btn btn-reply text-danger'>Delete Review</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        
                        :
                        
                        <div className="p-4">
                            <div className='border text-center p-5 rounded-3'>
                                <h2>There are no reviews to show at the moment!</h2>
                            </div>
                        </div>
                    
                    }

                    <Pagination pagination={reviews} />
                </div>
            </div>
        </AdminLayout>
    )
}
