import Naira from '@/Components/Currency/Naira'
import { ShareButton } from '@/Components/Share/ShareButton'
import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { InertiaProps, IPagination } from '@/Types/app'
import { IStudent, IUser } from '@/Types/user'
import { Navigator } from '@/Utils/Navigator'
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'

interface IReferralsProps extends InertiaProps {
    referrals: IPagination<IStudent[]>
    total_earnings: number
}

export default function Referrals({referrals, total_earnings} : IReferralsProps) {
    const {auth} = usePage().props as unknown as InertiaProps    
    
    
    return (
        <StudentLayout title='Referrals'>
            <div>
                <div className="settings-top-widget">
                    <div className="row">
                    <div className="col-xl-3 col-lg-6">
                        <div className="card stat-info net-earn">
                        <div className="card-body">
                            <span>All Time Earnings</span>
                            <h3><Naira /> {total_earnings.toLocaleString()}</h3>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <div className="card stat-info bal">
                        <div className="card-body">
                            <span>Balance</span>
                            <h3><Naira /> {auth.user?.earnings}</h3>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6 d-flex">
                        <div className="card link-box flex-fill">
                        <div className="card-body">
                            <h5 className='mb-2 text-primary'>Your Referral Link</h5>
                            <p>Share your referral link with your friends and earn a commission every time they purchase a course.</p>
                            <div className="form-group d-flex gap-3">
                                <input type="text" className="form-control flex-fill" defaultValue={`${route('register', {
                                    ref: auth.user?.affiliate_id
                                })}`} />

                                <div className="d-flex gap-2">
                                    <button onClick={() => Navigator.copy(route('register', {
                                    ref: auth.user?.affiliate_id
                                }))} className='btn btn-icon btn-primary'>
                                        <span className='feather-copy' />
                                    </button>
                                    <button onClick={() => Navigator.share(route('register', {
                                    ref: auth.user?.affiliate_id
                                }))} className='btn btn-icon btn-info'>
                                        <span className='feather-share-2' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="settings-widget">
                    <div className="settings-inner-blk">
                    <div className="comman-space">
                        <div className="filter-grp user-referred table-select-blk d-flex align-items-center justify-content-between">
                        <h3>Referred Users</h3>
                        
                        </div>
                        <div className="settings-referral-blk table-responsive">
                            <table className="table table-nowrap mb-0">
                                <thead >
                                    <tr>
                                        <th className='ps-3'>Referred User</th>
                                        <th>Total Enrollments</th>
                                        <th className="text-end pe-3">Amount Earned</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        referrals.data.map(referral => (
                                            <tr>
                                                <td>
                                                    <p>{referral.name}</p>
                                                </td>
                                                <td className="text-end">{referral.enrollments_count || 0}</td>
                                                <td className="text-end"><Naira />{referral.referred_sum_earnings.toLocaleString()}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </StudentLayout>
    )
}
