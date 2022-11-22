import { Button } from '@/Components/Buttons/Button'
import { InputError } from '@/Components/Forms/InputError'
import { SelectThumbnail } from '@/Components/Forms/SelectThumbnail'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import MainLayout from '@/Layouts/MainLayout'
import { InertiaProps } from '@/Types/app'
import { ISettings } from '@/Types/settings'
import Form from '@/Utils/Form'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent, useRef } from 'react'

interface ISettingsProps extends InertiaProps{
    settings: ISettings
}

export default function Settings({settings} : ISettingsProps) {

    const {data, setData, errors, post, processing} = useForm<ISettings>({...settings, logo: ""})
    const updateSettingsForm = useRef<HTMLFormElement>(null)

    function handleChange (e: ChangeEvent<HTMLInputElement>){
        setData(e.currentTarget.name as keyof ISettings, Form.value(e.currentTarget) as any)
    }

    function submit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(data)
        post(route('admin.settings.update', {
            setting: settings.id
        }))
    }

    return (
        <AdminLayout title='Site Settings' >
            <div className="settings-widget profile-details">
                <form onSubmit={submit} autoComplete="off" ref={updateSettingsForm} >
                    <div className="settings-menu p-0">
                        <div className="checkout-form personal-address add-course-info">
                            <div className="personal-info-head">
                                <h4>Update Profile</h4>
                                <p>Edit your personal information and address.</p>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className='course-group border-0 px-0 mb-0 d-flex'>
                                        <SelectThumbnail onChange={handleChange} defaultValue={settings.logo} name='logo' />
                                    </div>
                                    <InputError message={errors.logo} />
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label">App Name</label>
                                        <input type="text" name='name' onChange={handleChange} defaultValue={data.name} className="form-control" placeholder="App Name" />
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
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Phone Number</label>
                                        <input type="text" className="form-control" onChange={handleChange} defaultValue={data.phone} name='phone' placeholder="Enter Phone Number" />
                                        <InputError message={errors.phone} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Address</label>
                                        <input type="text" className="form-control" onChange={handleChange} defaultValue={data.address} name='address' placeholder="Enter Address" />
                                        <InputError message={errors.address} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className='mb-3'>Payment Keys</h3>
                                    <div>
                                        <div className="form-group checkbox-toggle">
                                            <input type="checkbox" defaultChecked={data.test_mode} name="test_mode" className='checkbox-toggle' id="" />
                                            <span className='ms-2'>Test Mode</span>
                                        </div>

                                        <InputError message={errors.test_mode} />
                                    </div>
                                </div>

                                <div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-control-label">Flutterwave Public Test Key</label>
                                                <input type="password" name='flutterwave_test_public_key' onChange={handleChange} defaultValue={data.flutterwave_test_public_key} autoComplete={'off'} className="form-control" placeholder="Flutterwave Public Test Key" />
                                                <InputError message={errors.flutterwave_test_public_key} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-control-label">Flutterwave Secret Test Key</label>
                                                <input type="password" name='flutterwave_test_secret_key' defaultValue={data.flutterwave_test_secret_key} autoComplete="off" onChange={handleChange}  className="form-control" placeholder="Flutterwave Secret Test Key" />
                                                <InputError message={errors.flutterwave_test_secret_key} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-control-label">Flutterwave Public Live Keys</label>
                                                <input type="password" name='oldpassword' defaultValue={data.flutterwave_live_public_key} onChange={handleChange} autoComplete={'off'} className="form-control" placeholder="Flutterwave Public Live Keys" />
                                                <InputError message={errors.flutterwave_live_public_key} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-control-label">Flutterwave Secret Live Keys</label>
                                                <input type="password" name='flutterwave_live_secret_key' defaultValue={data.flutterwave_live_secret_key} autoComplete="off" onChange={handleChange} className="form-control" placeholder="Flutterwave Private Live Keys" />
                                                <InputError message={errors.flutterwave_live_secret_key} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className='mb-3'>Referral Settings</h3>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="" className="form-label">Referral Commission</label>
                                            <input type="number" name='commission' className='form-control' placeholder='Comission' defaultValue={data.commission} />
                                            <InputError message={errors.commission} />
                                        </div>
                                    </div>
                                </div>

                                <div className="update-profile">
                                    <Button type="submit" className="btn btn-primary" loading={processing} >Update Settings</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}
