import React from 'react';
import signupImg from '../assets/images/signup.gif';
import avatar from '../assets/images/doctor-img01.png';

const Signup = () => {
    return (
        <section className='px-5 xl:px-0'>
            <div className='max-w-[1170px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* image box */}
                    <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
                        <figure className='rounded-l-lg'>
                            <img src={signupImg} alt='' className='w-full rounded-l-lg' />
                        </figure>
                    </div>

                    {/* Sign Up form */}
                    <div className='rounded-l-lg lg:pl-16 py-10'>
                        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                            Create an <span className='text-primaryColor'>Account</span>
                        </h3>

                        <form>
                            <div className='mb-5'>
                                <input
                                    type='text'
                                    placeholder='Full Name'
                                    name='name'
                                    value=''
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required />
                            </div>

                            <div className='mb-5'>
                                <input
                                    type='email'
                                    placeholder='Enter your email address'
                                    name='email'
                                    value=''
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required />
                            </div>

                            <div className='mb-5'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    value=''
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required />
                            </div>

                            <div className='mb-5 flex items-center justify-between'>
                                <label className='text-headingColor font-bold text-[16px] leading-7' >
                                    Are you a:
                                    <select name='role' className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                                        <option value="patient">Patient</option>
                                        <option value="doctor">Doctor</option>
                                    </select>
                                </label>

                                <label className='text-headingColor font-bold text-[16px] leading-7' >
                                    Are you a:
                                    <select name='Gender' className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </label>
                            </div>

                            <div className='mb-5 flex items-center gap-3'>
                                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                                    <img src={avatar} alt='' className='w-full rounded-full '/>
                                </figure>

                                <div>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;