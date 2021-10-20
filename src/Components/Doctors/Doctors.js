import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./myDoctors.JSON')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[doctors])

    return (
        <div className='container my-5'>
            <h1 className="page-title text-center my-5">Meet Our Doctors</h1>
            <hr />
            <div className="d-flex align-items-center justify-content-center flex-wrap">
                {
                    doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;