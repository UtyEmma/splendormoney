import React, { FormEvent, useEffect, useState } from 'react';import {InputError} from '@/Components/Forms/InputError';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Button } from '@/Components/Buttons/Button';

export default function Login({ status, canResetPassword }: any) {

    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password')

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event: FormEvent<HTMLInputElement>) => {
        setData(event.currentTarget.name as any, event.currentTarget.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value);
    };

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>  
            <Head title="Log in" />

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
                            <img src="/assets/img/login-img.png" className="img-fluid" alt="Logo" />
                        </div>
                        <div className="mentor-course text-center">
                            <h2>Welcome to <br />DreamsLMS Courses.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        </div>
                        <div className="welcome-login">
                        <div className="login-banner">
                            <img src="/assets/img/login-img.png" className="img-fluid" alt="Logo" />
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
                        <div className="loginbox">
                            <div className="w-100">
                                <div className="img-logo">
                                    <Link href={route('pages.home')}>
                                        <img src="/assets/img/logo.svg" className="img-fluid" alt="Logo" />
                                    </Link>
                                <div className="back-home">
                                    <Link href={route('pages.home')}>Back to Home</Link>
                                </div>
                                </div>
                                <h1>Sign into Your Account</h1>
                                <form onSubmit={submit}>
                                <div className="form-group">
                                    <label className="form-control-label">Email</label>
                                    <input type="email" className="form-control" name='email' value={data.email} onChange={onHandleChange} placeholder="Enter your email address" />
                                    <InputError message={errors.email} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Password</label>
                                    <div className="pass-group">
                                    <input type={passwordType} className="form-control pass-input" name='password' value={data.password} onChange={onHandleChange} placeholder="Enter your password" />
                                    <span role={'button'}  onClick={() => setPasswordType(passwordType === 'password' ? 'text' : 'password')} className="feather-eye toggle-password" />
                                    </div>
                                    <InputError message={errors.password} />
                                </div>
                                <div className="forgot">
                                    <span>
                                        <Link className="forgot-link" href={route('password.request')}>Forgot Password ?</Link>
                                    </span>
                                </div>
                                <div className="remember-me">
                                    <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Remember me
                                        <input type="checkbox" name="remember" checked={data.remember} onChange={onHandleChange} />
                                        <span className="checkmark" />
                                    </label>
                                    <InputError message={errors.remember} />
                                </div>
                                <div className="d-grid">        
                                    <Button type='submit' loading={processing} >Login</Button>
                                </div>
                                </form>
                            </div>
                        </div>

                        <div className="google-bg text-center">
                            <p className="mb-0">Do not have an account? <Link href="/register">Create an Account</Link></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </>
    );
}
