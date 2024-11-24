import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [FormData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    };

    return (
        <section className='px-5 lg:px-0'>
            <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
                <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                    Hello! <span className='text-primaryColor'>
                        Welcome
                    </span> Back
                </h3>

                <form className='py-4 md:py-0'>
                    <div className='mb-5'>
                        <input 
                        type='email'
                        placeholder='Enter your email address'
                        name='email'
                        value={FormData.email}
                        onChange={handleInputChange} 
                        className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required />

                        <div className='mb-5'>
                            <input
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={FormData.password}
                                onChange={handleInputChange}
                                className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required />
                        </div>

                        <div className='mt-7'>
                            <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                                Login
                            </button>
                        </div>

                        <p className='mt-5 text-textColor text-center'>
                            Don't have an account?{" "}
                            <Link to="/register" className='text-primaryColor font-medium ml-1'>
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;