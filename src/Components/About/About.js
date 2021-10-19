import React from 'react';
import './About.css';
import aboutImg from '../../about.jpg';

const About = () => {
    return (
        <div className='container'>
            <div className="d-lg-flex align-items-center justify-content-between pt-5">
            <div>
                <h2 className='page-title mb-5 fw-bold'>About US</h2>
                <p className='fs-5'>
                    No matter where you are or how busy your life gets, <br />
                    you can talk to one of our many friendly and knowledgable doctors<br />
                    online at a time that works with your schedule
                </p>
            </div>
            <div className="about-img">
                <img src={aboutImg} alt="about-img" className="img-fluid" />
            </div>
            </div>
        </div>
    );
};

export default About;