import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const {name, img, specialist} = props.doctor;
    return (
        <div className='doct mx-auto'>
            <div>
                <img src={img} alt="doctor-img" />
            </div>
            <div className="doct-text">
                <h4>{name}</h4>
                <p className='text-white'>Specialist at: <span>{specialist}</span> </p>
            </div>
        </div>
    );
};

export default Doctor;