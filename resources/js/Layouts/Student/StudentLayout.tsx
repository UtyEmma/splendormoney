import React, { PropsWithChildren } from 'react'
import MainLayout from '../MainLayout'
import { StudentSidebar } from './StudentSidebar'

interface IStudentLayoutProps extends PropsWithChildren {
     title: string
}

export const StudentLayout = ({children, title}: IStudentLayoutProps) => {
    return (
        <MainLayout title={title} >
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <StudentSidebar />

                        <div className="col-xl-9 col-md-8">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
