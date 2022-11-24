import { Button } from '@/Components/Buttons/Button'
import { Editor } from '@/Components/Forms/Editor'
import { InputError } from '@/Components/Forms/InputError'
import { SelectThumbnail } from '@/Components/Forms/SelectThumbnail'
import { SweetAlert } from '@/Components/SweetAlert/SweetAlert'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { InstructorModel } from '@/Types/user'
import Form from '@/Utils/Form'
import { StatusColor } from '@/Utils/Status'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent, useRef } from 'react'

interface IEditInstructorProps {
    instructor: InstructorModel
}

export default function EditInstructor({instructor}: IEditInstructorProps) {

    const {data, processing, setData, errors, reset, post} = useForm<any>({
        name: instructor.name,
        email: instructor.email,
        description: instructor.description,
        password: '',
        password_confirmation: '',
        status: instructor.status,
        avatar: '',
        instructor_id: instructor.id
    })

    const editInstructorForm = useRef<HTMLFormElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        setData(e.currentTarget.name as keyof typeof data, Form.value(e.currentTarget) as any)
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        SweetAlert({
            title: "Are you sure you wish to update this Instructors's details",
            status: 'warning',
            text: 'Click "Confirm" to continue',
            onSuccess: () => {
                post(route('admin.instructors.update', {
                    user: instructor.id
                }), {
                    onSuccess: () => {
                        editInstructorForm.current?.reset()
                        reset()
                    }
                })
            }
        })

    }

    return (
        <AdminLayout title={`Edit Instructor - ${instructor.name}`}>
            <div className="settings-widget profile-details">
                <form onSubmit={submit} ref={editInstructorForm} >
                    <div className="settings-menu p-0">
                        <div className="checkout-form personal-address add-course-info">
                            <div className="personal-info-head">
                                <h4>Edit Instructor Details</h4>
                                <p>Edit your personal information and address.</p>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className='course-group border-0 px-0 mb-0 d-flex'>
                                        <SelectThumbnail onChange={handleChange} defaultValue={instructor.avatar} name='avatar' />
                                    </div>
                                    <InputError message={errors.avatar} />
                                </div>

                                <div className="col-12">
                                    <div className="form-group w-25">
                                        <label htmlFor="">Instructor Status <span className={`badge p-2 badge-${StatusColor[instructor.status as keyof typeof StatusColor]}`}>{instructor.status}</span> </label>
                                        <select className='form-select form-control' name='status' onChange={handleChange}>
                                            <option selected={instructor.status === 'active'} value="active">Active</option>
                                            <option selected={instructor.status === 'inactive'} value="inactive">Inactive</option>
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

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-control-label">About</label>
                                        <Editor onChange={handleChange} name='description' defaultValue={data.description} />
                                        <InputError message={errors.description} />
                                    </div>
                                </div>

                                <div>
                                    <h4>Reset Instructor's Password</h4>
                                    
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
