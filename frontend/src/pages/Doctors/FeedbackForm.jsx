import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

const FeedbackForm = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
    <form action=''>
        <div>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
                How would you like overall experience?*
            </h3>

            <div>
                {[...Array(5).keys()].map((_, index)=> {
                    index += 1;

                    return(
                        <button key={index} type='button' onClick={()=>setRating(index)}>
                            <span>
                                <AiFillStar />
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    </form>
  );
};

export default FeedbackForm;
