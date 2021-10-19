import React from 'react';
import './Header.css';
import { Link as NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const {user, logout} = useAuth();

    const toggleMenu = () => {
        document.getElementById('nav').classList.toggle('show');    
    }


    return (
        <div className='header text-light py-3 sticky-top'>
            <div className='container d-flex align-items-center justify-content-between'>
                <h1 className="fs-1">
                    <i className="fa fa-heart text-danger"></i> MS Hospital
                </h1>
                <div className='menu'>
                    <h1 onClick={toggleMenu} className='me-2'><i class="fas fa-bars"></i></h1>
                </div>
                <nav id='nav'>
                    <NavLink className='text-white text-decoration-none fs-5 ms-4' to='/home'>Home</NavLink>
                    {/* <NavLink activeStyle={activeStyle} className='text-white text-decoration-none fs-5 ms-4' to='/services'>Services</NavLink> */}
                    <NavLink className=' text-white text-decoration-none fs-5 ms-4' to='/about'>About</NavLink>
                    <NavLink className=' text-white text-decoration-none fs-5 ms-4' to='/departments'>Departments</NavLink>
                    <NavLink className=' text-white text-decoration-none fs-5 ms-4' to='/treatment'>Get Treatment</NavLink>
                    {
                        user.email && 
                        <span className="text-light fs-5 ms-4">Signed in as: <span className="fw-bold text-primary">{user.displayName}</span> </span>
                    }
                    { user.email?
                        <button className=' btn mb-1 ms-4 p-0' onClick={logout}>
                            <NavLink className='text-danger text-decoration-none fs-5' to='/home'>Logout</NavLink>    
                        </button>
                        :
                        <NavLink className='text-white text-decoration-none fs-5 ms-4' to='/login'>Login</NavLink>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Header;