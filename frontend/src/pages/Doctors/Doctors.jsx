import React from 'react';
import DoctorCard from './../../components/Doctors/DoctorCard';
import { doctors } from './../../assets/data/doctors';

const Doctors = () => {
    return (
        <>
            <section>
                <div className='bg-[#fff9ea]'>
                    <div className='container text-center'>
                        <h2 className='heading'>Find a Doctor</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Doctors;