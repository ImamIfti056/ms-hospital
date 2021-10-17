import React from 'react';

const Banner = () => {
    return (
        <div className='vh-100'>
            <div className="container text-center p-5">
                <h1 className="fs-1">
                    HealthCare
                </h1>
                <input className='form-control' type="text" placeholder='Enter anything' />
                <br />
                <button className="btn btn-primary">Click</button>
            </div>
        </div>
    );
};

export default Banner;