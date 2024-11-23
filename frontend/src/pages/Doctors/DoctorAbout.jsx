import React from 'react';
import { formateDate } from '../../utils/formateDate';

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
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                          <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate("09-13-2014")} - {formateDate("09-13-2016")}</span>

                        <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                    </div>
                      <p className='text-[16px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>
                </li>

                  <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                      <div>
                          <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate("07-04-2010")} - {formateDate("09-13-2014")}</span>

                          <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                      </div>
                      <p className='text-[16px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>
                  </li>
            </ul>
        </div>

        <div>
            
        </div>
    </div>
  );
};

export default DoctorAbout;
