import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import DoctorCard from '../../components/Doctors/DoctorCard';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';

const MyBookings = () => {

    const {data:appointments} = useFetchData(`${BASE_URL}`);

  return (
    <div>
        MyBookings;
    </div>
  )
}

export default MyBookings
