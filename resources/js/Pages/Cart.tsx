import { useCart } from '@/Hooks/useCart'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'
import { CartCard } from './Cart/CartCard'

export default function Cart() {
    
    const cart = useCart()

    useEffect(() => {
        console.log(cart)
    }, [])

    return (
        <MainLayout title='Cart'>
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="breadcrumb-list">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href={route('pages.home')}>Home</Link></li>
                                        <li className="breadcrumb-item" aria-current="page">Cart</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="course-content cart-widget">
                <div className="container">
                    <div className="student-widget">
                        <div className="student-widget-group">
                            <CartCard />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
