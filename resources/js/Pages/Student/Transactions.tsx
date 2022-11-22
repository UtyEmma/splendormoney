import Naira from '@/Components/Currency/Naira'
import { Pagination } from '@/Components/Pagination/Pagination'
import { Swal } from '@/Components/SweetAlert/Swal'
import { useParams } from '@/Hooks/useParams'
import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { IPagination } from '@/Types/app'
import { ITransaction } from '@/Types/transactions'
import Date from '@/Utils/Date'
import Form from '@/Utils/Form'
import { StatusColor } from '@/Utils/Status'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent } from 'react'

interface ITransactionProps {
    transactions: IPagination<ITransaction[]>
}

export default function Transactions({transactions}: ITransactionProps) {

    const {search, filter} = useParams()

    function searchTransactions (e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        Inertia.get(route('student.transactions', Form.entries(e.currentTarget)))
    }

    function fetchTransactions (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        Inertia.get(route('student.transactions', {
            [e.currentTarget.name]: e.currentTarget.value
        }))
    }

    return (
        <StudentLayout title='Transactions'>
            <div className="settings-widget">
                <div className="settings-inner-blk p-0">
                    <div className="comman-space">
                        <div className="personal-info-head border-bottom">
                            <h4>My Transactions</h4>
                            <p>Transaction / Purchase Records.</p>
                        </div>
                        <div className="settings-tickets-blk course-instruct-blk table-responsive">
                            <div className="d-flex justify-content-between py-4">
                                <form onSubmit={searchTransactions}>
                                    <div className="input-group mb-3">
                                            <input type="text" defaultValue={search} name="search" className="form-control" placeholder="Search By Reference" aria-label="Search User's Name or Email Address" aria-describedby="button-addon2" />

                                            <button className="btn btn-outline-secondary btn-icon btn-primary" type="submit" id="button-addon2">
                                                <i className="feather-search"></i>
                                            </button>
                                    </div>
                                </form>
                            </div>
                            <table className="table table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th className='ps-2'>Reference</th>
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
                                                <td className='ps-2'><span className='fw-bold'>{transaction.reference}</span></td>
                                                <td><Naira /> {transaction.amount.toLocaleString() || 0}</td>
                                                <td><span className={`badge badge-${StatusColor[transaction.status  as keyof typeof StatusColor]}`}>{transaction.status}</span></td>
                                                
                                                <td>{Date.toDateTimeString(transaction.created_at)}</td>
                                                <td>{Date.toDateTimeString(transaction.updated_at)}</td>
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
        </StudentLayout>
    )
}
