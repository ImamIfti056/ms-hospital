import React from 'react';
import './WorkHour.css';

const WorkHour = () => {
    return (
        <div className='work-hour text-white py-5'>
            <div className="container py-5">
                <div className="row gx-5">
                <div className="left col-lg-6 col-12 pe-5">
                    <h2 className='mb-4 fw-bold'><i className="far text-danger fa-clock"></i> Working Hours</h2>
                    <p className='mb-4 fs-5 text-white'>Check our working hours of a week, excluding goverment holidays.</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <h5>Monday - Friday</h5>
                        <h5>8.30AM - 10.00PM</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <h5>Saturday - Sunday</h5>
                        <h5>10.00AM - 9.00PM</h5>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <h2 className='mb-4 fw-bold'><i class="fas text-danger fa-user-md"></i> Doctors Availability</h2>
                    <p className='mb-4 fs-5 text-white'>You can also contact our doctors via email no matter where you are.</p>
                    <button className="btn btn-danger">Meet Our Doctors</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WorkHour;