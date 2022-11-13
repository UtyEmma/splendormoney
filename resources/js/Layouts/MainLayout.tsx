import React, { PropsWithChildren, useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { InertiaProps } from '@/Types/app';
import { CartContext } from '@/Context/CartContext';

interface IMainLayoutProps extends PropsWithChildren{
    title: string
    index?: boolean
}

export default function MainLayout({children, title, index = false} : IMainLayoutProps) {

    return (
        <>
            <CartContext>
                <Head title={title} />

                <div className="main-wrapper">
                    <Header index={index}/>

                    {children}
                        

                    <Footer />
                </div>    
            </CartContext>
        </>
    );
}
