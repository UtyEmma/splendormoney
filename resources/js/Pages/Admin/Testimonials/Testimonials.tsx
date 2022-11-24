import { Pagination } from '@/Components/Pagination/Pagination'
import { Swal } from '@/Components/SweetAlert/Swal'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { IPagination } from '@/Types/app'
import { ITestimonial } from '@/Types/testimonials'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'


interface ITestimonialsProp {
    testimonials: IPagination<ITestimonial[]>
}

export default function Testimonials({testimonials} : ITestimonialsProp) {
    return (
        <AdminLayout title='Testimonials'>
            <div className="settings-widget">
                <div className="settings-inner-blk p-0">
                    <div className="comman-space">
                        <div className="d-flex justify-content-between mb-3">
                            <div>

                            </div>

                            <div>
                                <Link href={route('admin.testimonials.create')} className="btn btn-primary">Create Testimonial</Link>
                            </div>
                        </div>
                        <div className="settings-tickets-blk course-instruct-blk table-responsive">
                            <table className="table table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th className='px-2'>Name</th>
                                        <th>Message</th>
                                        <th>Status</th>
                                        <th></th>
                                    <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        testimonials.total > 0

                                        ?

                                        testimonials.data.map(testimonial => (
                                            <tr>
                                                <td className="instruct-orders-info">
                                                    <p className='mb-0 pb-0'>{testimonial.name}</p>
                                                    <p className='fs-6 pt-0 mt-0'>{testimonial.title}</p>
                                                </td>

                                                <td><p style={{
                                                    lineClamp: 2,
                                                    WebkitLineClamp: 2
                                                }}>{testimonial.message}</p> </td>

                                                <td> 
                                                    <span className={`badge ${testimonial.status ? 'badge-success' : 'badge-warning'}`}>{testimonial.status ? 'Active' : 'Inactive'}</span> 
                                                </td>

                                                <td>
                                                    <div className='d-flex gap-2'>
                                                        <Link href={route('admin.testimonials.edit', {
                                                            testimonial: testimonial.id
                                                        })} className='btn btn-primary btn-sm btn-icon'>
                                                            <span className='feather-edit-2'></span>
                                                        </Link>
                                                        <Swal 
                                                            element={'span'} 
                                                            status='warning' 
                                                            title={'Are you sure?'}
                                                            text='Are you sure you wish to delete this testimonial?' 
                                                            onSuccess={() => Inertia.delete(route('admin.testimonials.delete', {
                                                                testimonial: testimonial.id
                                                            }))} 
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

                                                    <p>There are no Testimonials available! Click the button below to add a new Testimonial</p>
                                                    <div className='py-3'>
                                                        <Link href={route('admin.testimonials.create')} className='btn btn-primary'>Add Testimonial</Link>
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
                                <Pagination pagination={testimonials} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
