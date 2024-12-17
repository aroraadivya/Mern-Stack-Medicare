import React from 'react';
import userImg from '../../assets/images/doctor-img01.png';

const Myaccount = () => {
  return (
    <div className='max-w-[1170] px-5 mx-auto'>

      <div className='grid md:grid-cols-3 gap-10'>

        <div className='pb-[50px] px-[30px] rounded-md'>
          <div className='flex items-center justify-center'>
            <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
              <img src={userImg} alt='' className='w-full h-full' />
            </figure>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Myaccount;
