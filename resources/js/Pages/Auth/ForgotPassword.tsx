import React, { FormEvent } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { InputError } from '@/Components/Forms/InputError';
import { Button } from '@/Components/Buttons/Button';

export default function ForgotPassword({ status }: any) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event: FormEvent<HTMLInputElement>) => {
        setData(event.currentTarget.name as any, event.currentTarget.value);
    };

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />

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
                                    <h1>Recover your Password</h1>
                                    <form onSubmit={submit}>
                                    <div className="form-group">
                                        <label className="form-control-label">Email</label>
                                        <input type="email" className="form-control" name='email' value={data.email} onChange={onHandleChange} placeholder="Enter your email address" />
                                        <InputError message={errors.email} />
                                    </div>
                                    <div className="forgot">
                                        <span>
                                            <Link className="forgot-link" href={route('login')}>Proceed to Login</Link>
                                        </span>
                                    </div>
                                    <div className="d-grid">        
                                        <Button type='submit' loading={processing} >Send Password Reset Link</Button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
