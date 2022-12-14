import Naira from '@/Components/Currency/Naira'
import { Select } from '@/Components/Forms/Select'
import { Pagination } from '@/Components/Pagination/Pagination'
import { Swal } from '@/Components/SweetAlert/Swal'
import { useParams } from '@/Hooks/useParams'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { IPagination } from '@/Types/app'
import { IStudent, IUser } from '@/Types/user'
import Date from '@/Utils/Date'
import { debounce } from '@/Utils/Debounce'
import Form from '@/Utils/Form'
import { StatusColor } from '@/Utils/Status'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import pluralize from 'pluralize'
import React, { ChangeEvent, FormEvent } from 'react'

interface IUsersProps {
    users: IPagination<IStudent[]>
}

export default function Users({users}: IUsersProps) {

    const {filter, search} = useParams()

    const fetchUsers = (e: ChangeEvent<any>) => {
        Inertia.get(route('admin.users.list', {
            [e.currentTarget.name]: e.currentTarget.value
        }))
    }

    const searchUsers = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        Inertia.get(route('admin.users.list', Form.entries(e.currentTarget)))
    }

    const deleteUser = (id: string) => {

    }

    return (
        <AdminLayout title='Users'>
            <div className="settings-widget">
                <div className="settings-inner-blk p-0">
                    <div className="comman-space">
                        <div className="settings-tickets-blk course-instruct-blk table-responsive">
                            <div className="d-flex justify-content-between py-4">
                                <form onSubmit={searchUsers}>
                                    <div className="input-group mb-3">
                                            <input type="text" defaultValue={search} name="search" className="form-control" placeholder="Search User's Name or Email Address" aria-label="Search User's Name or Email Address" aria-describedby="button-addon2" />
                                            <button className="btn btn-outline-secondary btn-icon btn-primary" type="submit" id="button-addon2">
                                                <i className="feather-search"></i>
                                            </button>
                                    </div>
                                </form>

                                <div  className='bg-white'>
                                    <select name='filter' className='form-control form-select' onChange={fetchUsers} placeholder="Filter Users" >
                                        <option selected={!filter} value="">All</option>
                                        <option selected={filter === 'enrolled'} value="enrolled">Enrolled Users</option>
                                        <option selected={filter === 'notenrolled'} value="notenrolled">Unenrolled Users</option>
                                    </select>
                                </div>
                            </div>
                            <table className="table table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th className='px-2'>Name</th>
                                        <th>Courses</th>
                                        <th>Amount Spent</th>
                                        <th>Earnings</th>
                                        <th>Referrals</th>
                                        <th>Status</th>
                                        <th>Date Joined</th>
                                        <th></th>
                                    <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.total > 0

                                        ?

                                        users.data.map(user => (
                                            <tr>
                                                <td className="instruct-orders-info">
                                                    <p><a href={route('admin.instructors.edit', {
                                                        user: user.id
                                                    })}>{user.name}</a></p>
                                                    <a href={`mailto:${user.email}`} className='fs-6'>{user.email}</a>
                                                </td>

                                                <td>{user.enrollments_count.toLocaleString()}</td>
                                                <td><Naira /> {user.transactions_sum_amount?.toLocaleString() || 0}</td>
                                                <td><Naira /> {user.earnings.toLocaleString()}</td>
                                                <td>{user.referrals_count}</td>
                                                <td><span className={`badge badge-${StatusColor[user.status]}`}>{user.status}</span></td>
                                                
                                                <td>{Date.toDateString(user.created_at)}</td>
                                                
                                                <td>
                                                    <div className='d-flex gap-2'>
                                                        <Link href={route('admin.instructors.edit', {
                                                            user: user.id
                                                        })} className='btn btn-primary btn-sm btn-icon'>
                                                            <span className='feather-edit-2'></span>
                                                        </Link>
                                                        <Swal 
                                                            element={'span'} 
                                                            status='warning' 
                                                            title={'Are you sure?'}
                                                            text="Are you certain you want to delete this User's account." 
                                                            onSuccess={() => deleteUser(user.id)} 
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
                                            <td colSpan={8} className="text-center" >
                                                <div className='border p-4'>
                                                    <h3>Nothing to Display</h3>

                                                    <p>There are no Users available!</p>
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
                                <Pagination pagination={users} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
