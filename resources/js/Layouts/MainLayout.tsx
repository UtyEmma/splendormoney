import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { InertiaProps } from '@/Types/app';
import { CartContext } from '@/Context/CartContext';
import { AffiliateProvider } from '@/Context/AffiliateContext';
import { Notify } from 'notiflix';

interface IMainLayoutProps extends PropsWithChildren{
    title: string
    index?: boolean
}

export default function MainLayout({children, title, index = false} : IMainLayoutProps) {

    const { props } = usePage()

    useEffect(() => {
        if(props.message) Notify.success(props.message as string)
        if(props.error) Notify.failure(props.error as string)
    }, [])

    return (
        <AffiliateProvider>
            <CartContext>
                <Head title={title} />

                <div className="main-wrapper pt-0">
                    <Header index={index}/>

                    {children}
                        

                    <Footer />
                </div>    
            </CartContext>
        </AffiliateProvider>
    );
}
