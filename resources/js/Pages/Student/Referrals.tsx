import { ShareButton } from '@/Components/Share/ShareButton'
import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { InertiaProps } from '@/Types/app'
import { Navigator } from '@/Utils/Navigator'
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Referrals() {
    const {auth} = usePage().props as unknown as InertiaProps

    return (
        <StudentLayout title='Referrals'>
            <div>
                <div className="settings-top-widget">
                    <div className="row">
                    <div className="col-xl-3 col-lg-6">
                        <div className="card stat-info net-earn">
                        <div className="card-body">
                            <span>Net Earnings</span>
                            <h3>$ 63,240</h3>
                            <p>Earning this month</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <div className="card stat-info bal">
                        <div className="card-body">
                            <span>Balance</span>
                            <h3>$ 8,530</h3>
                            <p>Earning this month</p>
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
                                }))} className='btn btn-icon'>
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
                    <div className="settings-inner-blk p-0">
                    <div className="comman-space pb-0">
                        <div className="filter-grp user-referred table-select-blk d-flex align-items-center justify-content-between">
                        <h3>Referred Users</h3>
                        <div className="filter-blk d-flex">
                            <div className="form-group select-form mb-0">
                            <select className="form-select select" id="datefilter" name="datefilterby">
                                <option>Month</option>
                                <option>Daily</option>
                                <option>Week</option>
                            </select>
                            </div>
                            <div className="form-group select-form mb-0">
                            <select className="form-select select" id="filterpicker" name="filterpickerby">
                                <option>Oct 2020</option>
                                <option>Jan 2020</option>
                                <option>Feb 2020</option>
                                <option>Mar 2020</option>
                            </select>
                            </div>
                        </div>
                        </div>
                        <div className="settings-referral-blk table-responsive">
                        <table className="table table-nowrap mb-0">
                            <thead>
                            <tr>
                                <th>Referrals</th>
                                <th>Referred ID</th>
                                <th>URL</th>
                                <th>&nbsp;</th>
                                <th className="text-center">Visits</th>
                                <th className="text-end">Total earned</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                    <a href="student-profile.html" className="refer-avatar-blk d-flex align-items-center">
                                        <img src="assets/img/students/refer-img1.png" className="rounded-circle me-2" alt="Referred User Info" />
                                        <p>Guy Hawkins</p>
                                    </a>
                                    </td>
                                    <td>09341</td>
                                    <td><span className="text-wrap">https://dreamslmscourse.com/reffer/?refid=345re667877k9</span></td>
                                    <td><a href="javascript:;" className="btn-style"><i className="feather-clipboard" /></a></td>
                                    <td className="text-center">10</td>
                                    <td className="text-end">$45.00</td>
                                </tr>
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
