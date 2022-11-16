import Naira from '@/Components/Currency/Naira'
import { Pagination } from '@/Components/Pagination/Pagination'
import { Swal } from '@/Components/SweetAlert/Swal'
import { useParams } from '@/Hooks/useParams'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { IPagination } from '@/Types/app'
import { ITransaction } from '@/Types/transactions'
import Date from '@/Utils/Date'
import Form from '@/Utils/Form'
import { StatusColor } from '@/Utils/Status'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent } from 'react'

interface ITransactionsProps {
    transactions: IPagination<ITransaction[]>
}

export default function Transactions({transactions} : ITransactionsProps) {
    
    const {search, filter} = useParams()

    function searchTransactions (e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        Inertia.get(route('admin.transactions.list', Form.entries(e.currentTarget)))
    }

    function fetchTransactions (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        Inertia.get(route('admin.transactions.list', {
            [e.currentTarget.name]: e.currentTarget.value
        }))
    }

    function deleteTransaction (id: string) {
        Inertia.delete(route('admin.transactions.delete', {
            transaction: id
        }))
    }

    return (
        <AdminLayout title='Transactions'>
            <div className="row">
                    <div className="col-md-12">
                        <div className="settings-widget">
                            <div className="settings-inner-blk p-0">
                                <div className="comman-space">
                                    <div className="settings-tickets-blk course-instruct-blk table-responsive">
                                        <div className="d-flex justify-content-between py-4">
                                            <form onSubmit={searchTransactions}>
                                                <div className="input-group mb-3">
                                                        <input type="text" defaultValue={search} name="search" className="form-control" placeholder="Search User's Name or Reference" aria-label="Search User's Name or Email Address" aria-describedby="button-addon2" />

                                                        <button className="btn btn-outline-secondary btn-icon btn-primary" type="submit" id="button-addon2">
                                                            <i className="feather-search"></i>
                                                        </button>
                                                </div>
                                            </form>

                                            <div  className='bg-white'>
                                                <select name='filter' className='form-control form-select' onChange={fetchTransactions} placeholder="Filter Users" >
                                                    <option selected={!filter} value="">All</option>
                                                    <option selected={filter === 'enrolled'} value="enrolled">Deleted Transactions</option>
                                                    <option selected={filter === 'notenrolled'} value="notenrolled">Unenrolled Users</option>
                                                </select>
                                            </div>
                                        </div>
                                        <table className="table table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th className='px-2'>User's Name</th>
                                                    <th>Reference</th>
                                                    <th>Amount</th>
                                                    <th>Status</th>
                                                    <th>Created At</th>
                                                    <th>Modified At</th>
                                                    <th></th>
                                                <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    transactions.total > 0

                                                    ?

                                                    transactions.data.map((transaction: any) => (
                                                        <tr>
                                                            <td className="instruct-orders-info">
                                                                <Link href=''>{transaction.user.name}</Link>
                                                            </td>

                                                            <td><span className='fw-bold'>{transaction.reference}</span></td>
                                                            <td><Naira /> {transaction.amount.toLocaleString() || 0}</td>
                                                            <td><span className={`badge badge-${StatusColor[transaction.status  as keyof typeof StatusColor]}`}>{transaction.status}</span></td>
                                                            
                                                            <td>{Date.toDateTimeString(transaction.created_at)}</td>
                                                            <td>{Date.toDateTimeString(transaction.updated_at)}</td>
                                                            
                                                            <td>
                                                                <div className='d-flex gap-2'>
                                                                    <Swal 
                                                                        element={'span'} 
                                                                        status='warning' 
                                                                        title={'Are you sure?'}
                                                                        text="Are you certain you want to delete this Transaction." 
                                                                        onSuccess={() => deleteTransaction(transaction.id)} 
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

                                                                <p>There are no Transactions available!</p>
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
                                            <Pagination pagination={transactions} />
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
