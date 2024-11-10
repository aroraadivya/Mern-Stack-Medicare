import React from 'react';
import { fags } from './../../assets/data/fags';
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
        {FaqList.map((item,index)=> <FaqItem item={item} key={index}/>)}
    </ul>
  )
}

export default FaqList;
