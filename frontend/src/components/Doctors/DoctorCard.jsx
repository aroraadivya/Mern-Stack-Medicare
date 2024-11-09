import React from 'react'

const DoctorCard = ({doctor}) => {

  const {name, avgRating, totalrating, photo, specialization, totalPatients, hospital} = doctor;
  
  return (
    <div className='p-3 lg:p-5'>
      <div>
        <img src={photo} className='w-full' alt=''></img>
      </div>
    </div>
  )
}

export default DoctorCard;
