import React from 'react';
import signupImg from '../assets/images/signup.gif';

const Signup = () => {
    return (
        <section className='px-5 xl:px-0'>
            <div className='max-w-[1170px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* image box */}
                    <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
                        <figure className='rounded-l-lg'>
                            <img src={signupImg} alt='' className='w-full rounded-l-lg'/>
                        </figure>
                    </div>

                    {/* Sign Up form */}
                    <div className='rounded-l-lg lg:pl-16 py-10'>
                        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                            Create an <span className='text-primaryColor'>Account</span>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;