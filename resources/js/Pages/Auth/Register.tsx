import React, { FormEvent, useEffect, useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';
import Form from '@/Utils/Form';
import {Button} from '@/Components/Buttons/Button'
import { InputError } from '@/Components/Forms/InputError';
import { Inertia } from '@inertiajs/inertia';
import { useAffiliate } from '@/Context/AffiliateContext';
import { InertiaProps } from '@/Types/app';

export default function Register() {

    const {getReferrer} = useAffiliate()
    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password')
    const {app} = usePage().props as unknown as InertiaProps
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        terms: '',
        referrer: ''
    });

    const onHandleChange = (event: FormEvent<HTMLInputElement>) => {
        setData(event.currentTarget.name as keyof typeof data, Form.value(event.currentTarget) as any);
    };


    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('register'));
    };

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    useEffect(() => {
        setData('referrer', getReferrer())
    }, [])

    return (
        <>
            <Head title="Register" />
            <div className="main-wrapper log-wrap">
                <div className="row">
                    <div className="col-md-6 login-bg">
                    <div className="owl-carousel login-slide owl-theme">
                        <div className="welcome-login">
                        <div className="login-banner">
                            <img src="/assets/img/login-img.png" className="img-fluid" alt="Logo" />
                        </div>
                        <div className="mentor-course text-center">
                            <h2>Welcome to <br />DreamsLMS Courses.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        </div>
                        <div className="welcome-login">
                        <div className="login-banner">
                            <img src="assets/img/login-img.png" className="img-fluid" alt="Logo" />
                        </div>
                        <div className="mentor-course text-center">
                            <h2>Welcome to <br />DreamsLMS Courses.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        </div>
                        <div className="welcome-login">
                        <div className="login-banner">
                            <img src="assets/img/login-img.png" className="img-fluid" alt="Logo" />
                        </div>
                        <div className="mentor-course text-center">
                            <h2>Welcome to <br />DreamsLMS Courses.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 login-wrap-bg">
                        <div className="login-wrapper">
                            <div className="loginbox pb-5">
                                <div className="img-logo">
                                    <img src={app.logo} className="img-fluid" alt="Logo" />
                                    <div className="back-home">
                                        <a href="/">Back to Home</a>
                                    </div>
                                </div>

                                <h1>Sign up</h1>
                            
                                <form onSubmit={submit}>
                                    <div className="form-group">
                                        <label className="form-control-label">Full Name</label>
                                        <input type="text" className="form-control" value={data.name} onChange={onHandleChange} name='name' placeholder="Enter your Full Name" />
                                        <InputError message={errors.name} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">Email</label>
                                        <input type="email" className="form-control" value={data.email} onChange={onHandleChange} name='email' placeholder="Enter your email address" />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-control-label">Password</label>
                                        <div className="pass-group" id="passwordInput">
                                            <input type={passwordType} name='password' value={data.password} onChange={onHandleChange} className="form-control pass-input" placeholder="Enter your password" />
                                            <span role={'button'}  onClick={() => setPasswordType(passwordType === 'password' ? 'text' : 'password')} className={"toggle-password feather-eye"} />
                                        </div>
                                        <InputError message={errors.password} />
                                    </div>
                                    <div className="form-check remember-me">
                                        <label className="form-check-label mb-0">
                                            <input className="form-check-input" value={data.terms} onChange={onHandleChange} type="checkbox" name="terms" /> I agree to the <Link href="/terms">Terms of Service</Link> and <a href="privacy-policy.html">Privacy Policy.</a>
                                        </label>
                                        <InputError message={errors.terms} />
                                    </div>
                                    <div className="d-grid">
                                        <Button loading={processing}  >Create Account</Button>
                                    </div>
                                </form>
                            </div>

                            <div className="google-bg text-center">
                                <p className="mb-0">Already have an account? <Link href="/login">Sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
