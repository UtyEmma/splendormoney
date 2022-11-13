import { PriceDiscount } from '@/Components/Price/PriceDiscounts'
import { useCart } from '@/Hooks/useCart'
import { useRave } from '@/Hooks/useRave'
import { ICourse } from '@/Types/course'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React from 'react'

export const CartCard = () => {

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
                Inertia.get(route('student.courses'))
                cart?.reset()
            }
        })

    }

    const initiateCheckout = () => {
        if(cart?.courses.length! < 1) return console.log("No Items selected");
        const data = {courses: cart?.courses.map(course => course.id)} as any
        Inertia.post(route('payment.initiate'), data, {
            onSuccess: (res) => {
                rave.init(res.props.details, onSuccess, onClose)
            }
        })
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="cart-head">
                    <h4>Your cart ({cart?.courses.length} {pluralize('items', cart!.courses.length)} )</h4>
                </div>
                <div className="cart-group">
                    <div className="row">
                        {

                            cart?.courses.length

                            ?

                            cart?.courses.map((course: ICourse) => {
                                return (
                                    <div className="col-lg-12 col-md-12 d-flex">
                                        <div className="course-box course-design list-course d-flex">
                                            <div className="product">
                                            
                                                <div className="product-img overflow-hidden" style={{height: '150px'}}>
                                                    <a href="course-details.html">
                                                        <img className="img-fluid" alt="" src={course.image || "assets/img/course/course-10.jpg"} />
                                                    </a>
                                                    <div className="price">
                                                        <PriceDiscount course={course} />
                                                    </div>
                                                </div>

                                                <div className="product-content">
                                                    <div className="head-course-title">
                                                        <h3 className="title"><a href="course-details.html">{course.name}</a></h3>
                                                    </div>
                                                
                                                    <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                                                        <div className="rating-img d-flex align-items-center">
                                                            <img src="assets/img/icon/icon-01.svg" alt="" />
                                                            <p>12+ Lesson</p>
                                                        </div>
                                                        <div className="course-view d-flex align-items-center">
                                                            <img src="assets/img/icon/icon-02.svg" alt="" />
                                                            <p>9hr 30min</p>
                                                        </div>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star"></i>
                                                        <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                                                    </div>
                                                </div>

                                                <div className="cart-remove">
                                                    <button onClick={() => cart.remove(course.id)} className="btn btn-primary">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                            :

                            <div>
                                <h1>There are no courses in your cart</h1>
                            </div>
                        }
                    </div>
                </div>
                <div className="cart-total">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="cart-subtotal">
                            <p>Total <span>&#x20A6; {cart?.amount.toLocaleString()}</span></p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="condinue-shop">
                                <Link href={route('courses.list')} className="btn btn-primary">Find More Courses</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="check-outs">
                                <button onClick={initiateCheckout} className="btn btn-primary">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
