import MainLayout from '@/Layouts/MainLayout'
import { IFaq } from '@/Types/faqs'
import React from 'react'

interface IFaqsProps {
    faqs: IFaq[]
}

export default function Faqs({faqs}: IFaqsProps) {
    return (
        <MainLayout title='Frequently Asked Questions'>
            <div>
                <div className="page-banner">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                        <h1 className="mb-0">Most frequently asked questions</h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="help-sec">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="help-title">
                            <h1>Most frequently asked questions</h1>
                            <p>
                            Here are the most frequently asked questions you may check
                            before getting started
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            faqs.map(faq => (
                                <div className="col-lg-6">
                                    <div className="faq-card">
                                        <h6 className="faq-title">
                                        <a className="collapsed" data-bs-toggle="collapse" href="#faqone" aria-expanded="false">{faq.question}</a>
                                        </h6>
                                        <div id="faqone" className="collapse">
                                        <div className="faq-detail">
                                            {faq.answer}
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))


                        }
                    </div>
                    </div>
                </div>
                </div>

        </MainLayout>
    )
}
