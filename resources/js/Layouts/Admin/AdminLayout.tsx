import React, { PropsWithChildren } from 'react'
import MainLayout from '../MainLayout'
import { AdminSidebar } from './AdminSidebar'

interface IAdminLayoutProps extends PropsWithChildren {
    title: string
}

export const AdminLayout = ({title, children}: IAdminLayoutProps) => {
    return (
        <MainLayout title={title} >
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <AdminSidebar />

                        <div className="col-xl-9 col-md-8">
                            <div className='mb-3'>
                                <h3>{title}</h3>
                            </div>

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
