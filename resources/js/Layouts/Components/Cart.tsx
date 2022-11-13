import { useCart } from '@/Hooks/useCart'
import { percentageDiff } from '@/Utils/Math';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'

export const Cart = () => {
    const cart = useCart();

    return (
        <li className="nav-item cart-nav position-relative">
            <span className="badge badge-primary badge-circle position-absolute badge-sm" style={{top: '-3px', right: '5px'}}>{cart?.courses.length}</span>
            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                <img src="/assets/img/icon/cart.svg" alt="img" />
            </a>
            <div className="wishes-list dropdown-menu dropdown-menu-right">
            <div className="wish-header">
                <button onClick={() => cart?.reset()} className='btn btn-light'>Clear</button>
                <Link href={route('payment.cart')} className="btn btn-primary float-end">Checkout</Link>
            </div>
            <div className="wish-content">
                <ul>
                    {
                        cart?.courses.map(course => {
                            return (
                                <li>
                                    <div className="media">
                                        <div className="d-flex media-wide">
                                            <div className="avatar">
                                            <a href="course-details.html">
                                                <img alt="" src={course.image} />
                                            </a>
                                            </div>
                                            <div className="media-body">
                                            <h6><a href="course-details.html">{course.name}</a></h6>
                                            <p>{course.instructor?.name}</p>
                                            <h5>&#x20A6; {percentageDiff(course.price, course.discount).toLocaleString()} <span><del>&#x20A6; {course.price.toLocaleString()}</del></span></h5>
                                            </div>
                                        </div>
                                        <div className="remove-btn">
                                            <button onClick={() => cart.remove(course.id)} className="btn btn-icon btn-light btn-sm">
                                                <i className='feather-trash' />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="total-item">
                    <h5>Total : &#x20A6; {cart?.amount.toLocaleString()}</h5>
                </div>
            </div>
            </div>
        </li>
    )
}
