import { Button } from '@/Components/Buttons/Button'
import { Editor } from '@/Components/Forms/Editor'
import { InputError } from '@/Components/Forms/InputError'
import { SelectThumbnail } from '@/Components/Forms/SelectThumbnail'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { ICategory } from '@/Types/category'
import Form from '@/Utils/Form'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent, useRef } from 'react'

interface IEditCategoryProps {
    category?: ICategory
}

export default function EditCategory({category}: IEditCategoryProps) {
    const {data, processing, setData, errors, reset, post} = useForm({
        name: category?.name,
        image: '',
        description: category?.description,
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        setData(e.currentTarget.name as keyof typeof data, Form.value(e.currentTarget) as any)
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        post(route('admin.category.update', {
            category: category?.id
        }))
    }

    return (
        <AdminLayout title='Category'>
            <div className="settings-widget profile-details">
                <form onSubmit={submit} >
                    <div className="settings-menu p-0">
                        <div className="checkout-form personal-address add-course-info">
                            <div className="personal-info-head">
                                <h4>Category</h4>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className='course-group border-0 px-0 mb-0 d-flex'>
                                        <SelectThumbnail onChange={handleChange} defaultValue={category?.image} name='image' />
                                    </div>
                                    <InputError message={errors.image} />
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Name</label>
                                        <input type="text" name='name' onChange={handleChange} defaultValue={data.name} className="form-control" placeholder="Category Name" />
                                        <InputError message={errors.name} />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-control-label">Description</label>
                                        <Editor onChange={handleChange} name='description' defaultValue={data.description} />
                                        <InputError message={errors.description} />
                                    </div>
                                </div>

                                <div className="update-profile">
                                    <Button type="submit" className="btn btn-primary" loading={processing} >Submit</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}
