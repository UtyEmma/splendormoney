import { Button } from '@/Components/Buttons/Button'
import { InputError } from '@/Components/Forms/InputError'
import { SelectThumbnail } from '@/Components/Forms/SelectThumbnail'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { InertiaProps } from '@/Types/app'
import { ITestimonial } from '@/Types/testimonials'
import Form from '@/Utils/Form'
import { StatusColor } from '@/Utils/Status'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent } from 'react'

interface INewTestimonialProps extends InertiaProps {
    testimonial: ITestimonial | null
}

export default function NewTestimonial({testimonial} :INewTestimonialProps ) {
    
    const {data, setData, errors, processing, post, put, reset} = useForm({
        name: testimonial?.name,
        image: '',
        message: testimonial?.message,
        title: testimonial?.title,
        status: testimonial?.status ?? true
    })

    const handleChange = (e: ChangeEvent<any>) => {
        setData(e.currentTarget.name as keyof typeof data, Form.value(e.currentTarget) as any)
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        testimonial ?
            post(route('admin.testimonials.update', {
                testimonial: testimonial.id
            }))
        : post(route('admin.testimonials.store'), {
            onSuccess: () => {
                reset()
            }
        })
    }

    return (
        <AdminLayout title='Add Testimonial'>
            <div className="settings-widget profile-details">
                <form onSubmit={submit} >
                    <div className="settings-menu p-0">
                        <div className="checkout-form personal-address add-course-info">
                            <div className="personal-info-head">
                                <h4>Testimonials</h4>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className='course-group border-0 px-0 mb-0 d-flex'>
                                        <SelectThumbnail onChange={handleChange} defaultValue={testimonial?.image} name='image' />
                                    </div>
                                    <InputError message={errors.image} />
                                </div>

                                <div className="col-12">
                                    <div className="form-group w-25">
                                        <label htmlFor="">Testimonial Status <span className={`badge p-2 badge-${data.status ? 'primary' : 'warning'}`}>{data.status ? 'Active' : 'Inactive'}</span> </label>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" name='status' role="switch" id="flexSwitchCheckChecked" onChange={handleChange} defaultChecked={data.status}/>
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Status</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Name</label>
                                        <input type="text" name='name' onChange={handleChange} defaultValue={data.name} className="form-control" placeholder="Full Name" />
                                        <InputError message={errors.name} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Title</label>
                                        <input type="text" className="form-control" onChange={handleChange} name='title' defaultValue={data.title} placeholder="Enter Title" />
                                        <InputError message={errors.title} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-control-label">Message</label>
                                        <textarea onChange={handleChange} rows={5} className="form-control" name="message" >{data.message}</textarea>
                                        <InputError message={errors.message} />
                                    </div>
                                </div>


                                <div className="update-profile">
                                    <Button type="submit" className="btn btn-primary" loading={processing} >Update Testimonial</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}
