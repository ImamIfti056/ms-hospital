import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-dark text-light py-3'>
            <div className='container d-flex align-items-center justify-content-between'>
                <h1 className="fs-1">
                    HealthCare
                </h1>
                <nav>
                    <Link className='text-white text-decoration-none fs-4 ms-4' to='/home'>Home</Link>
                    <Link className='text-white text-decoration-none fs-4 ms-4' to='/services'>Services</Link>
                    <Link className='text-white text-decoration-none fs-4 ms-4' to='/about'>About</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;