import React from 'react';

const Service = (props) => {
    const {name, img, description} = props.service;
    return (
        <div className='col-lg-4 col-12 border border-1 p-3'>
            <div className='mb-4'>
                <img className='img-fluid img-thumbnail' src={img} alt="service-img" />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
            <button className="btn btn-warning">Details</button>
        </div>
    );
};

export default Service;