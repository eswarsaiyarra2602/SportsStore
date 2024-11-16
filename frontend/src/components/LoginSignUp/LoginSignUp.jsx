import React, { useState } from 'react';

export const LoginSignUp = () => {
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '75vh', marginTop: '60px' }}>
            <div
                className="rounded w-100 w-md-75 w-lg-50 mx-auto p-3"
                style={{
                    background: 'linear-gradient(180deg, #66c2ff 0%, #1a8cff 60%)',
                    color: 'white',
                    maxWidth: '500px',
                }}
            >
                <h2 className="text-center fw-bold mb-3" style={{ fontSize: '1.5rem' }}>
                    {isLogin ? 'Login to Your Account' : 'Create Your Account'}
                </h2>
                <form className="bg-white text-dark p-3 rounded shadow">
                    {!isLogin && (
                        <div className="mb-2">
                            <label htmlFor="username" className="form-label fw-semibold">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                    )}
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label fw-semibold">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label fw-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="mb-2">
                            <label
                                htmlFor="confirmPassword"
                                className="form-label fw-semibold"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                    )}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-dark fw-bold mb-3  my-2"
                            style={{ borderRadius: '50px', padding: '10px', width: '35%' }}
                        >
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </div>
                    <p className="text-center mb-0">
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                        <button
                            type="button"
                            className="btn btn-link fw-bold"
                            style={{ color: '#1a8cff', padding: 0 }}
                            onClick={toggleForm}
                        >
                            {isLogin ? 'Sign up' : 'Login'}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};