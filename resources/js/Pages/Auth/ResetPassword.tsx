import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Button } from '@/Components/Buttons/Button';
import { InputError } from '@/Components/Forms/InputError';

export default function ResetPassword({ token, email }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event: any) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: any) => {
        e.preventDefault();

        post(route('password.update'));
    };

    return (
        <>
            <Head title="Reset Password" />

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
                                    <h1>Reset your Password</h1>
                                    <form onSubmit={submit}>
                                    <div className="form-group">
                                        <label className="form-control-label">Email</label>
                                        <input type="email" className="form-control" name='email' value={data.email} onChange={onHandleChange} placeholder="Enter your email address" />
                                        <InputError message={errors.email} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">Password</label>
                                        <div className="pass-group" id="passwordInput">
                                            <input type="password" name='password' value={data.password} onChange={onHandleChange} className="form-control pass-input" placeholder="Enter your password" />
                                            <span className="toggle-password feather-eye" />
                                        </div>
                                        <InputError message={errors.password} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">Confirm Password</label>
                                        <div className="pass-group" id="passwordInput">
                                            <input type="password" name='password_confirmation' value={data.password_confirmation} onChange={onHandleChange} className="form-control pass-input" placeholder="Enter your password" />
                                            <span className="toggle-password feather-eye" />
                                        </div>
                                        <InputError message={errors.password} />
                                    </div>
                                    <div className="forgot">
                                        <span>
                                            <Link className="forgot-link" href={route('login')}>Proceed to Login</Link>
                                        </span>
                                    </div>
                                    <div className="d-grid">        
                                        <Button type='submit' loading={processing} >Reset Password</Button>
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
