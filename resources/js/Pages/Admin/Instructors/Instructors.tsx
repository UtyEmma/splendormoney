import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { InertiaProps } from '@/Types/app'
import { IUser } from '@/Types/user'
import React from 'react'

interface InstructorsProps extends InertiaProps{
    instructors: IUser[]
}

export default function Instructors({instructors} : InstructorsProps) {
    return (
        <AdminLayout title='Instructors'>
            <div className="row">
                <div className="col-md-12">
                    <div className="settings-widget">
                        <div className="settings-inner-blk p-0">
                            <div className="comman-space pb-0">
                            <div className="settings-tickets-blk course-instruct-blk table-responsive">
                                <table className="table table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Total Courses</th>
                                        <th>Total Students</th>
                                        <th>Earnings</th>
                                        <th>Date Added</th>
                                        <th></th>
                                    <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        instructors.length > 0

                                        ?

                                        instructors.map(instructor => (
                                            <tr>
                                                <td className="instruct-orders-info">
                                                    <p><a href={route('admin.instructors.edit', {
                                                        user: instructor.id
                                                    })}>{instructor.name}</a></p>
                                                </td>
                                                <td>34</td>
                                                <td>#10021</td>
                                                <td>10-05-20</td>
                                                <td>Mastercard</td>
                                                <td><a href="javascript:;"><i className="feather-more-vertical" /></a></td>
                                            </tr>
                                        ))

                                        :

                                        <tr>
                                            <td >
                                                <h3>Instructors not found</h3>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
