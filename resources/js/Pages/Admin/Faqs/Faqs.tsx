import { Button } from '@/Components/Buttons/Button'
import { InputError } from '@/Components/Forms/InputError'
import Modal from '@/Components/Modals/Modal'
import { Pagination } from '@/Components/Pagination/Pagination'
import { Swal } from '@/Components/SweetAlert/Swal'
import { AdminLayout } from '@/Layouts/Admin/AdminLayout'
import { InertiaProps, IPagination } from '@/Types/app'
import { IFaq } from '@/Types/faqs'
import Form from '@/Utils/Form'
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/inertia-react'
import React, { ChangeEvent, FormEvent, useEffect } from 'react'

interface IFaqsProps extends InertiaProps {
    faqs: IPagination<IFaq[]>
}

export default function Faqs({faqs}: IFaqsProps) {
    console.log(faqs);
    
    return (
        <AdminLayout title='Frequently Asked Questions'>
            <div className='mb-4'>
            </div>

            <div className='card'>
                <div className="card-header align-items-center justify-content-between">
                    <div>
                    </div>
                    <div className=''>
                        <FaqModal className='btn-enroll' />
                    </div>
                </div>
                <div className="card-body">
                    {
                        faqs.total

                        ?

                        faqs.data.map(faq => {
                            return (
                                <div className="faq-card">
                                    <h6 className="faq-title">
                                        <a className="collapsed" data-bs-toggle="collapse" href={`#faqone-${faq.id}`} aria-expanded="false">
                                            <div className="d-flex justify-content-between">
                                                <span className="me-3">{faq.question}</span>

                                            </div>
                                        </a>
                                    </h6>
                                    <div id={`faqone-${faq.id}`} className="collapse">
                                        <div className="faq-detail pb-3">
                                            <div>
                                                <FaqModal className='btn btn-sm btn-primary me-3 ' id={`faq-moda-${faq.id}`} faq={faq}  title='Edit Faq' />
                                                <Swal 
                                                    className='btn btn-sm btn-danger'
                                                    element={'button'} 
                                                    text='Are you sure you wish to delete this Faq'
                                                    onSuccess={() => Inertia.delete(route('admin.faq.delete', {
                                                        faq: faq.id
                                                    }))} 
                                                    status='warning'   
                                                >Delete Faq</Swal>
                                            </div>
                                            <div className='mt-3'>
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                        :

                        <div className='border p-4'>
                            <h4 className='mb-0'>No Frequently Asked Questions Added</h4>
                        </div>
                    }

                    <Pagination pagination={faqs} />
                </div>


            </div>
        </AdminLayout>
    )
}

interface IFaqModalProps {
    id?: string, 
    faq?: IFaq, 
    title?: string, 
    className: string
}

const FaqModal = ({id = 'faq-modal', faq, title = 'Add Faq', className}: IFaqModalProps) => {
    
    const {data, setData, errors, processing, post} = useForm({
        answer: faq?.answer,
        question: faq?.question,
        status: faq?.status || true
    })

    const handleChange = (e: ChangeEvent<any>) => {
        setData(e.currentTarget.name as keyof typeof data, Form.value(e.currentTarget) as any)
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        post(route('admin.faq.update', {
            faq: faq?.id
        }))
    }

    return (
        <>
            <Modal.Button className={className} id={id}>{title}</Modal.Button>

            <Modal id={id} title={title}>
                <form onSubmit={submit}>
                    
                    <div className="form-group">
                        <label htmlFor="">FAQ Status <span className={`badge p-2 badge-${data.status ? 'primary' : 'warning'}`}>{data.status ? 'Active' : 'Inactive'}</span> </label>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" name='status' role="switch" id="flexSwitchCheckChecked" onChange={handleChange} defaultChecked={data.status}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Status</label>
                        </div>
                        <InputError message={errors.status} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="" className="form-label">Question</label>
                        <input type="text" onChange={handleChange}  className="form-control" defaultValue={data?.question} name='question' />
                        <InputError message={errors.question} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Answer</label>
                        <textarea className="form-control"  onChange={handleChange}  name='answer' >{data.answer}</textarea>
                        <InputError message={errors.answer} />
                    </div>   

                    <div className="d-flex gap-4 justify-content-end">
                        <button type={'button'} data-bs-target={id} data-bs-toggle="modal" className='btn btn-light'>Cancel</button>    
                        <Button type='submit' className='btn btn-primary' loading={processing}>Submit</Button>    
                    </div>                 
                </form>
            </Modal>
        </>
    )
}
