import React from 'react';
import { useState } from 'react';

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
    }

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
                        <input type='email' placeholder='Enter your email address' name='email' value={FormData.email} onChange={handleInputChange} />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;