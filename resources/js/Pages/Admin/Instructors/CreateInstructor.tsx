import { Button } from '@/Components/Buttons/Button'
import { Editor } from '@/Components/Forms/Editor'
import { InputError } from '@/Components/Forms/InputError'
import { SelectThumbnail } from '@/Components/Forms/SelectThumbnail'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import Form from '@/Utils/Form'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent, useRef } from 'react'

export default function CreateInstructor() {

    const newInstructorForm = useRef<HTMLFormElement>(null)

    const {data, processing, setData, errors, post, reset} = useForm({
        name: '',
        email: '',
        description: '',
        password: '',
        password_confirmation: '',
        avatar: null
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData(e.currentTarget.name as keyof typeof data, Form.value(e.currentTarget) as any)
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post(route('admin.instructors.store'), {
            onSuccess: () => {
                newInstructorForm.current?.reset()
                reset()
            }
        })
    }

    return (
        <AdminLayout title='New Instructor'>
            <div className="settings-widget profile-details">
                <form onSubmit={submit} ref={newInstructorForm} >
                    <div className="settings-menu p-0">
                        <div className="checkout-form personal-address add-course-info">
                            <div className="personal-info-head">
                                <h4>Upload Instructor Details</h4>
                                <p>Edit your personal information and address.</p>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className='course-group border-0 px-0 mb-0 d-flex'>
                                        <SelectThumbnail onChange={handleChange} name='avatar' />
                                    </div>
                                    <InputError message={errors.avatar} />
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Full Name</label>
                                        <input type="text" name='name' onChange={handleChange} className="form-control" placeholder="Full Name" />
                                        <InputError message={errors.name} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Email</label>
                                        <input type="text" className="form-control" onChange={handleChange} name='email' placeholder="Enter your Email" />
                                        <InputError message={errors.email} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-control-label">About</label>
                                        <Editor onChange={handleChange} name='description' />
                                        <InputError message={errors.description} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-control-label">Password</label>
                                            <input type="password" name='password' onChange={handleChange} className="form-control" placeholder="Password" />
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
