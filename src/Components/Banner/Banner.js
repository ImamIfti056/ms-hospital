import React from 'react';
import './Banner.css';
import bannerImg from '../../doctor.png';
import {Link} from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner container'>
            <div className="d-lg-flex align-items-center justify-content-between pt-5 mt-4">
            <div className="banner-left">
                <h1 className='banner-text mb-4'>Get Best Treatment, Get Best Result</h1>
                <p className='text-secondary fs-4'>A home that HEALS you.</p>
                <Link to='/departments'><button className="btn banner-btn">Visit Us</button></Link>
            </div>
            <div className="banner-img">
                <img className='img-fluid' src={bannerImg} alt="banner-img" />
            </div>
            </div>
        </div>
    );
};

export default Banner;