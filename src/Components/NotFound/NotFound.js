import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-25 mx-auto my-5 py-5'>
            <h1 className="text-danger text-center py-2 my-5">404! Page Not Found</h1>
            <Link to='/'><button className="btn btn-primary text-center mx-auto w-100">Go to Home</button></Link>
        </div>
    );
};

export default NotFound;