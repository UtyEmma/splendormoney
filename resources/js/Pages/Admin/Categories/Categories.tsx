import { Pagination } from '@/Components/Pagination/Pagination'
import { Swal } from '@/Components/SweetAlert/Swal'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { IPagination } from '@/Types/app'
import { ICategory } from '@/Types/category'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React from 'react'

interface ICategoriesProps {
    categories: IPagination<ICategory[]>
}

export default function Categories({categories} : ICategoriesProps ) {
    return (
        <AdminLayout title='Categories'>
            <div className="row">
                <div className="col-md-12">
                    <div className="settings-widget">
                    <div className="settings-inner-blk p-0">
                        <div className="sell-course-head comman-space">
                        <h3>Categories</h3>
                        <p>Manage your categories and its update like live, draft and insight.</p>
                        </div>
                        <div className="comman-space">
                            <div className="instruct-search-blk">
                                <div className="show-filter choose-search-blk">
                                <form action="#">
                                    <div className="row gx-2 align-items-center">
                                        <div className="col-md-6 col-item">
                                            <div className=" search-group">
                                                <i className="feather-search" />
                                                <input type="text" className="form-control" placeholder="Search our categories" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-item d-flex justify-content-end">
                                            <Link href={route('admin.category.edit')} className="btn btn-enroll">Add Category</Link>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="settings-tickets-blk course-instruct-blk table-responsive">
                                <table className="table table-nowrap mb-2">
                                    <thead >
                                        <tr >
                                            <th className='px-2'>Category</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            categories.total > 0
                                            
                                            ?
                                            
                                            categories.data.map(category => {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <div className="sell-table-group d-flex align-items-center">
                                                            <div className="sell-group-img overflow-hidden rounded-3">
                                                                <Link href={route('admin.category.edit', {
                                                                    category: category.id
                                                                })}>
                                                                    <img src={category.image} className="img-fluid" style={{objectFit: 'cover'}} alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="sell-tabel-info">
                                                                <p><Link href={route('admin.category.edit', {
                                                                    category: category.id
                                                                })}>{category.name}</Link></p>
                                                                <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                                                                    <div className="rating-img d-flex align-items-center">
                                                                        <img src={"/assets/img/icon/icon-01.svg"} alt="" />
                                                                        <p>{category.courses.length} {pluralize('Courses', category.courses.length)}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </td>                                                        
                                                        <td >
                                                            <div className='d-flex gap-2'>
                                                                <Link href={route('admin.category.edit', {
                                                                    category: category.id
                                                                })} className='btn btn-primary btn-sm btn-icon'>
                                                                    <span className='feather-edit-2'></span>
                                                                </Link>
                                                                <Swal element={'span'} status='warning' text='Are you sure you want to delete this Category?' onSuccess={() => Inertia.delete(route('admin.category.delete', {
                                                                    category: category.id
                                                                }))} className='btn btn-danger btn-sm btn-icon'>
                                                                    <span className='feather-trash-2'></span>
                                                                </Swal>
                                                            </div>
                                                        </td>
                                                    </tr> 
                                                )
                                            })

                                            :

                                            <tr>
                                                <td colSpan={5} className="text-center" >
                                                    <div className='border p-4'>
                                                        <h3>Nothing to Display</h3>

                                                        <p>There are no categories available! Click the button below to create a new Category</p>
                                                        <div className='py-3'>
                                                            <Link href={route('admin.category.edit')} className='btn btn-primary'>Add New Category</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
    
                            <Pagination pagination={categories} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
