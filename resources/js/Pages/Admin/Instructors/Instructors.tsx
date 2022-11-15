import Naira from '@/Components/Currency/Naira'
import { Pagination } from '@/Components/Pagination/Pagination'
import { Swal } from '@/Components/SweetAlert/Swal'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { InertiaProps, IPagination } from '@/Types/app'
import { InstructorModel } from '@/Types/user'
import Date from '@/Utils/Date'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import moment from 'moment'
import React from 'react'

interface InstructorsProps extends InertiaProps{
    instructors: IPagination<InstructorModel[]>
}

export default function Instructors({instructors} : InstructorsProps) {
    
    const deleteInstructor = (id: string) => {
        Inertia.delete(route('admin.instructors.delete', {
            user: id
        }))
    }

    return (
        <AdminLayout title='Instructors'>
            <div className="row">
                <div className="col-md-12">
                    <div className="settings-widget">
                        <div className="settings-inner-blk p-0">
                            <div className="comman-space">
                                <div className="settings-tickets-blk course-instruct-blk table-responsive">
                                    <table className="table table-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th className='px-2'>Name</th>
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
                                                instructors.total > 0

                                                ?

                                                instructors.data.map(instructor => (
                                                    <tr>
                                                        <td className="instruct-orders-info">
                                                            <p className='mb-0 pb-0'><a className='mb-0' href={route('admin.instructors.edit', {
                                                                user: instructor.id
                                                            })}>{instructor.name}</a></p>
                                                            <a href={`mailto:${instructor.email}`} className='fs-6 pt-0 mt-0'>{instructor.email}</a>
                                                        </td>
                                                        <td>{instructor.courses_count}</td>
                                                        <td>{instructor.students_count}</td>
                                                        <td><Naira /> {instructor.students_sum_amount || 0}</td>
                                                        <td>{Date.toDateString(instructor.created_at)}</td>
                                                        <td>
                                                            <div className='d-flex gap-2'>
                                                                <Link href={route('admin.instructors.edit', {
                                                                    user: instructor.id
                                                                })} className='btn btn-primary btn-sm btn-icon'>
                                                                    <span className='feather-edit-2'></span>
                                                                </Link>
                                                                <Swal 
                                                                    element={'span'} 
                                                                    status='warning' 
                                                                    title={'Are you sure?'}
                                                                    text='All Courses owned by this instructor will be automatically assigned to the Super Admin when their account is deleted.' 
                                                                    onSuccess={() => deleteInstructor(instructor.id)} 
                                                                    className='btn btn-danger btn-sm btn-icon'
                                                                >
                                                                    <span className='feather-trash-2'></span>
                                                                </Swal>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))

                                                :

                                                <tr>
                                                    <td colSpan={6} className="text-center" >
                                                        <div className='border p-4'>
                                                            <h3>Nothing to Display</h3>

                                                            <p>There are no Instructors available! Click the button below to add a new Instructor</p>
                                                            <div className='py-3'>
                                                                <Link href={route('admin.instructors.create')} className='btn btn-primary'>Add New Instructor</Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex justify-content-between border-t">
                                    <div>

                                    </div>

                                    <div>
                                        <Pagination pagination={instructors} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
