import React from 'react'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Muhbir Rahman</span>
            </h3>

            <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet, cumque expedita soluta deleniti quis atque, ducimus esse, tempora consequuntur corrupti repellendus alias eum voluptatum? Repudiandae iusto blanditiis id consequatur!</p>
        </div>

        <div className='mt-12'>
            <h3>Education</h3>
        </div>
    </div>
  );
};

export default DoctorAbout;
