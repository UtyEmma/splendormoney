import { Pagination } from '@/Components/Pagination/Pagination'
import { PriceDiscount } from '@/Components/Price/PriceDiscounts'
import { Rating } from '@/Components/Rating/Rating'
import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { IPagination } from '@/Types/app'
import { IWishlist } from '@/Types/wishlist'
import { percentageDiff } from '@/Utils/Math'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

interface IWishlistProps {
    wishlists: IPagination<IWishlist[]>
}

export default function Wishlist({wishlists} : IWishlistProps) {
    return (
        <StudentLayout title='Wishlist'>
            <div className="card wish-card">
                <div className="card-header">
                    <h5>Your Wishlist ({wishlists.total} items)</h5>
                </div>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            {
                                wishlists.total > 0

                                ?

                                wishlists.data.map(wishlist => (
                                    <div className="wishlist-item">
                                        <div className="row align-items-center">
                                            <div className="col-md-9">
                                            <div className="wishlist-detail">
                                                <div className="wishlist-img">
                                                <Link href={route('courses.single', {
                                                    course: wishlist.course?.slug
                                                })}>
                                                    <img alt="" src={wishlist.course?.image} />
                                                </Link>
                                                <div className="price-amt">
                                                    {
                                                        wishlist.course?.price

                                                        ?

                                                        <h4>&#x20A6; {percentageDiff(wishlist.course?.price, wishlist.course?.discount).toLocaleString()} {<del className='fs-5 text-dark' >&#x20A6; {wishlist.course?.price.toLocaleString()}</del>}</h4>
                                                    
                                                        :

                                                        <h4 className='free-color'>FREE</h4>
                                                    }
                                                </div>
                                                </div>
                                                <div className="wishlist-info">
                                                    <h4>
                                                        <Link href={route('courses.single', {
                                                                course: wishlist.course?.slug
                                                            })}>{wishlist.course?.name}</Link>
                                                    </h4>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="remove-btn">
                                                    <Link href={route('student.wishlist.toggle', {
                                                        course: wishlist.course?.id
                                                    })} className="btn">Remove</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))

                                :

                                <div className='border text-center p-5 rounded'>
                                    <div className='mb-5'>
                                        <h2>You are not added any courses to your Wishlists!</h2>
                                        <h5>Click the link below to find amazing courses you might be interested in!</h5>
                                    </div>

                                    <Link className="btn btn-reply" href={route('courses.list')}>Find Courses</Link>
                                </div>
                            }
                        </div>
                    </div>

                    <Pagination pagination={wishlists} />
                </div>
            </div>
        </StudentLayout>
    )
}
