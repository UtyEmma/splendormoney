import { Button } from '@/Components/Buttons/Button'
import { InputError } from '@/Components/Forms/InputError'
import { SelectThumbnail } from '@/Components/Forms/SelectThumbnail'
import { StudentLayout } from '@/Layouts/Student/StudentLayout'
import { InertiaProps } from '@/Types/app'
import Form from '@/Utils/Form'
import { useForm, usePage } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent, useRef } from 'react'

export default function Profile() {

    const {auth} = usePage().props as unknown as InertiaProps

    const updateProfileForm = useRef<HTMLFormElement>(null)

    const {data, processing, setData, errors, post, reset} = useForm({
        name: auth.user?.name,
        email: auth.user?.email,
        description: auth.user?.description,
        password: '',
        password_confirmation: '',
        oldpassword: '',
        avatar: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData(e.currentTarget.name as keyof typeof data, Form.value(e.currentTarget) as any)
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post(route('student.profile.update', {
            user: auth.user?.id
        }))
    }

    return (
        <StudentLayout title='Profile' >
            <div className="settings-widget profile-details">
                <form onSubmit={submit} autoComplete="off" ref={updateProfileForm} >
                    <div className="settings-menu p-0">
                        <div className="checkout-form personal-address add-course-info">
                            <div className="personal-info-head">
                                <h4>Update Profile</h4>
                                <p>Edit your personal information and address.</p>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className='course-group border-0 px-0 mb-0 d-flex'>
                                        <SelectThumbnail onChange={handleChange} defaultValue={auth.user?.avatar} name='avatar' />
                                    </div>
                                    <InputError message={errors.avatar} />
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

                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group">
                                            <label className="form-control-label">Old Password</label>
                                            <input type="password" name='oldpassword' onChange={handleChange} autoComplete={'off'} className="form-control" placeholder="Old Password" />
                                            <InputError message={errors.password} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group">
                                            <label className="form-control-label">Password</label>
                                            <input type="password" name='password' autoComplete="off" onChange={handleChange} className="form-control" placeholder="Password" />
                                            <InputError message={errors.password} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group">
                                            <label className="form-control-label">Confirm Password</label>
                                            <input type="password" className="form-control" autoComplete="off" onChange={handleChange} name='password_confirmation' placeholder="Confirm Password" />
                                            <InputError message={errors.password_confirmation} />
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
        </StudentLayout>
    )
}
