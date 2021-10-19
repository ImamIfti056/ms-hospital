import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id, name, img, description} = props.service;
    return (
        <div className='col-lg-4 col-12 p-2 service'>
            <div className='mb-4'>
                <img className='img-fluid' src={img} alt="service-img" />
            </div>
            <div className='px-3'>
                <h3 className='page-title'>{name}</h3>
                <p>{description}</p>
                <Link to={`/servicedetails/${id}`}><button className="btn service-btn mt-3 mb-1">Details</button></Link>
            </div>
        </div>
    );
};

export default Service;