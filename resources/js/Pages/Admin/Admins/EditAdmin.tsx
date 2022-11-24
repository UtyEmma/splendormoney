import { Button } from '@/Components/Buttons/Button'
import { Editor } from '@/Components/Forms/Editor'
import { InputError } from '@/Components/Forms/InputError'
import { SelectThumbnail } from '@/Components/Forms/SelectThumbnail'
import { SweetAlert } from '@/Components/SweetAlert/SweetAlert'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { InertiaProps } from '@/Types/app'
import Form from '@/Utils/Form'
import { StatusColor } from '@/Utils/Status'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent } from 'react'
import { IUser } from '@/Types/user'

interface IEditadminProps extends InertiaProps {
    title: string
    admin: IUser | null
}

export default function Editadmin({title, admin}: IEditadminProps) {
    const {data, processing, setData, errors, reset, post} = useForm<any>({
        name: admin?.name,
        email: admin?.email,
        password: '',
        password_confirmation: '',
        status: admin?.status,
        avatar: '',
        admin_id: admin?.id
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        setData(e.currentTarget.name as keyof typeof data, Form.value(e.currentTarget) as any)
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        admin

        ?

        SweetAlert({
            title: "Are you sure you wish to update this Admin's details",
            status: 'warning',
            text: 'Click "Confirm" to continue',
            onSuccess: () => {
                post(route('admin.admins.update', {
                    user: admin?.id
                }), {
                    onSuccess: () => {
                        reset()
                    }
                })
            }
        })

        :

        post(route('admin.admins.store'))

    }

    return (
        <AdminLayout title={title}>
            <div className="settings-widget profile-details">
                <form onSubmit={submit} >
                    <div className="settings-menu p-0">
                        <div className="checkout-form personal-address add-course-info">
                            <div className="personal-info-head">
                                <h4>Edit Admin Details</h4>
                                <p>Edit your personal information and address.</p>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className='course-group border-0 px-0 mb-0 d-flex'>
                                        <SelectThumbnail onChange={handleChange} defaultValue={admin?.avatar} name='avatar' />
                                    </div>
                                    <InputError message={errors.avatar} />
                                </div>

                                <div className="col-12">
                                    <div className="form-group w-25">
                                        <label htmlFor="">Admin Status <span className={`badge p-2 badge-${StatusColor[data?.status as keyof typeof StatusColor]}`}>{data?.status}</span> </label>
                                        <select className='form-select form-control' name='status' onChange={handleChange}>
                                            <option selected={admin?.status === 'active'} value="active">Active</option>
                                            <option selected={admin?.status === 'inactive'} value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Full Name</label>
                                        <input type="text" name='name' onChange={handleChange} defaultValue={data.name} className="form-control" placeholder="Full Name" />
                                        <InputError message={errors.name} />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Email</label>
                                        <input type="text" className="form-control" onChange={handleChange} defaultValue={data.email} name='email' placeholder="Enter your Email" />
                                        <InputError message={errors.email} />
                                    </div>
                                </div>

                                <div>
                                    <h4>Reset Admin's Password</h4>
                                    
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-control-label">Password</label>
                                                <input type="password" name='password' onChange={handleChange}  className="form-control" placeholder="Password" />
                                                <InputError message={errors.password} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-control-label">Confirm Password</label>
                                                <input type="password" className="form-control" onChange={handleChange} name='password_confirmation' placeholder="Confirm Password" />
                                                <InputError message={errors.password_confirmation} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="update-profile">
                                    <Button type="submit" className="btn btn-primary" loading={processing} >Update Profile</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}
