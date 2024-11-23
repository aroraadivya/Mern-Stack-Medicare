import React from 'react';
import {avatar} from '../../assets/images/avatar-icon.png';

const Feedback = () => {
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All reviews(272)</h4>

        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img className='w-full' src={avatar} alt=''/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
