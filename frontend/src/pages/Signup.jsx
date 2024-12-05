// import React from 'react';
// import signupImg from '../assets/images/signup.gif';
// import avatar from '../assets/images/doctor-img01.png';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import uploadImageToCloudinary from '../utils/uploadCloudinary';
// import { BASE_URL } from '../config';
// import { toast } from 'react-toastify';
// import HashLoader from 'react-spinners/HashLoader';

// const Signup = () => {

//     const [selectedFile, setSelectedFile] = useState(null);
//     const [previewURL, setPreviewURL] = useState("");
//     const [loading, setLoading] = useState(false);

//     const [FormData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         photo: '',
//         gender: '',
//         role: 'patient'
//     });

//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         setFormData({
//             ...FormData,
//             [e.target.name]: e.target.value
//         })
//     };

//     const handleFileInputChange = async (event) => {
//         const file = event.target.files[0];

//         const data = await uploadImageToCloudinary(file);

//         setPreviewURL(data.url);
//         setSelectedFile(data.url);
//         setFormData({ ...FormData, photo: data.url });

//         // later will use cloudinary to upload image
//     };

//     const submitHandler = async event => {

//         event.preventDefault();
//         setLoading(true);

//         try {
//             const res = await fetch(`${BASE_URL}/auth/register`, {
//                 method: 'post',
//                 Headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(FormData)
//             });

//             const { message } = await res.json();

//             if (!res.ok) {
//                 throw new Error(message);
//             }

//             setLoading(false);
//             toast.success(message);
//             navigate('/login');

//         } catch (err) {
//             toast.error(err.message);
//             setLoading(false);
//         }
//     };

//     return (
//         <section className='px-5 xl:px-0'>
//             <div className='max-w-[1170px] mx-auto'>
//                 <div className='grid grid-cols-1 lg:grid-cols-2'>
//                     {/* image box */}
//                     <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
//                         <figure className='rounded-l-lg'>
//                             <img src={signupImg} alt='' className='w-full rounded-l-lg' />
//                         </figure>
//                     </div>

//                     {/* Sign Up form */}
//                     <div className='rounded-l-lg lg:pl-16 py-10'>
//                         <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
//                             Create an <span className='text-primaryColor'>Account</span>
//                         </h3>

//                         <form onSubmit={submitHandler}>
//                             <div className='mb-5'>
//                                 <input
//                                     type='text'
//                                     placeholder='Full Name'
//                                     name='name'
//                                     value={FormData.name}
//                                     onChange={handleInputChange}
//                                     className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required />
//                             </div>

//                             <div className='mb-5'>
//                                 <input
//                                     type='email'
//                                     placeholder='Enter your email address'
//                                     name='email'
//                                     value={FormData.email}
//                                     onChange={handleInputChange}
//                                     className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required />
//                             </div>

//                             <div className='mb-5'>
//                                 <input
//                                     type='password'
//                                     placeholder='Password'
//                                     name='password'
//                                     value={FormData.password}
//                                     onChange={handleInputChange}
//                                     className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required />
//                             </div>

//                             <div className='mb-5 flex items-center justify-between'>
//                                 <label className='text-headingColor font-bold text-[16px] leading-7' >
//                                     Are you a:
//                                     <select name='role'
//                                         value={FormData.role}
//                                         onChange={handleInputChange}
//                                         className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
//                                         <option value="patient">Patient</option>
//                                         <option value="doctor">Doctor</option>
//                                     </select>
//                                 </label>

//                                 <label className='text-headingColor font-bold text-[16px] leading-7' >
//                                     Are you a:
//                                     <select name='Gender'
//                                         value={FormData.gender}
//                                         onChange={handleInputChange}
//                                         className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
//                                         <option value="">Select</option>
//                                         <option value="Male">Male</option>
//                                         <option value="Female">Female</option>
//                                         <option value="Other">Other</option>
//                                     </select>
//                                 </label>
//                             </div>

//                             <div className='mb-5 flex items-center gap-3'>
//                                 {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
//                                     <img src={avatar} alt='' className='w-full rounded-full ' />
//                                 </figure>}

//                                 <div className='relative w-[130px] h-[50px]'>
//                                     <input
//                                         type='file'
//                                         name='photo'
//                                         id='customFile'
//                                         onChange={handleFileInputChange}
//                                         accept='.jpg, .png'
//                                         className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer ' />

//                                     <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer
//                                      ' >
//                                         Upload Photo
//                                     </label>
//                                 </div>
//                             </div>

//                             <div className='mt-7'>
//                                 <button disabled={loading && true} type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
//                                     {loading ? <HashLoader size={35} color='#ffffff'/> : 'SignUp'}
//                                 </button>
//                             </div>

//                             <p className='mt-5 text-textColor text-center'>
//                                 Already have an account?
//                                 <Link to="/login" className='text-primaryColor font-medium ml-1'>
//                                     Login
//                                 </Link>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Signup;


import React, { useState } from 'react';
import signupImg from '../assets/images/signup.gif';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Signup = () => {
    const [previewURL, setPreviewURL] = useState('');
    const [loading, setLoading] = useState(false);
    const [genderError, setGenderError] = useState(''); // Add state for gender error

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photo: '',
        gender: '',
        role: 'patient',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileInputChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        try {
            const data = await uploadImageToCloudinary(file);
            if (data?.url) {
                setPreviewURL(data.url); // Update preview
                setFormData({ ...formData, photo: data.url }); // Set photo in formData
            } else {
                throw new Error('Failed to retrieve image URL');
            }
        } catch (error) {
            console.error('Image upload error:', error);
            toast.error('Failed to upload image. Please try again.');
        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        setGenderError(''); // Reset gender error before submission

        // Validate form data
        if (!formData.name || !formData.email || !formData.password || !formData.photo || !formData.gender) {
            if (!formData.gender) {
                setGenderError('Gender is required'); // Set error if gender is not selected
            }
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await res.json();

            if (!res.ok) {
                throw new Error(responseData.message || 'Something went wrong');
            }

            toast.success(responseData.message || 'Registration successful!');
            navigate('/login');
        } catch (err) {
            console.error('Signup Error:', err.message || err);
            toast.error(err.message || 'Internal Server Error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='px-5 xl:px-0'>
            <div className='max-w-[1170px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* Image Box */}
                    <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
                        <figure className='rounded-l-lg'>
                            <img src={signupImg} alt='' className='w-full rounded-l-lg' />
                        </figure>
                    </div>

                    {/* Signup Form */}
                    <div className='rounded-l-lg lg:pl-16 py-10'>
                        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                            Create an <span className='text-primaryColor'>Account</span>
                        </h3>

                        <form onSubmit={submitHandler}>
                            <div className='mb-5'>
                                <input
                                    type='text'
                                    placeholder='Full Name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                                    required
                                />
                            </div>

                            <div className='mb-5'>
                                <input
                                    type='email'
                                    placeholder='Enter your email address'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                                    required
                                />
                            </div>

                            <div className='mb-5'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                                    required
                                />
                            </div>

                            <div className='mb-5 flex items-center justify-between'>
                                <label className='text-headingColor font-bold text-[16px] leading-7'>
                                    Role:
                                    <select
                                        name='role'
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                                        <option value='patient'>Patient</option>
                                        <option value='doctor'>Doctor</option>
                                    </select>
                                </label>

                                <label className='text-headingColor font-bold text-[16px] leading-7'>
                                    Gender:
                                    <select
                                        name='gender'
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                                        <option value=''>Select</option>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                        <option value='other'>Other</option>
                                    </select>
                                </label>
                                {genderError && <p className="text-red-500 text-sm">{genderError}</p>} {/* Show error message */}
                            </div>

                            <div className='mb-5 flex items-center gap-3'>
                                {previewURL && (
                                    <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                                        <img
                                            src={previewURL}
                                            alt='Uploaded preview'
                                            className='w-full h-full rounded-full object-cover'
                                        />
                                    </figure>
                                )}

                                <div className='relative w-[130px] h-[50px]'>
                                    <input
                                        type='file'
                                        name='photo'
                                        id='customFile'
                                        onChange={handleFileInputChange}
                                        accept='.jpg, .png'
                                        className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                                    />
                                    <label
                                        htmlFor='customFile'
                                        className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                                        Upload Photo
                                    </label>
                                </div>
                            </div>

                            <div className='mt-7'>
                                <button
                                    disabled={loading}
                                    type='submit'
                                    className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                                    {loading ? <HashLoader size={35} color='#ffffff' /> : 'SignUp'}
                                </button>
                            </div>

                            <p className='mt-5 text-textColor text-center'>
                                Already have an account?
                                <Link to='/login' className='text-primaryColor font-medium ml-1'>
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
