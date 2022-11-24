import React, { PropsWithChildren } from 'react'
import MainLayout from '../MainLayout'
import { InstructorSidebar } from './InstructorSidebar'

interface InstructorLayoutProps extends PropsWithChildren {
    title: string
}

export const InstructorLayout = ({title, children}: InstructorLayoutProps) => {
    return (
        <MainLayout title={title} >
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <InstructorSidebar />

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
