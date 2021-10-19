import React from 'react';
import './Banner.css';
import bannerImg from '../../doctor.png';
import {Link} from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-between pt-5">
            <div className="text-primary">
                <h1 className='banner-text mb-5'>Get Best Treatment, Get Best Result</h1>
                <Link to='/departments'><button className="btn banner-btn">Visit Us</button></Link>
            </div>
            <div className="banner-img img-fluid">
                <img src={bannerImg} alt="banner-img" />
            </div>
            </div>
        </div>
    );
};

export default Banner;