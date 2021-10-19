import React from 'react';

const Department = (props) => {
    const {img, name} = props.department;
    return (
        <div className='col-lg-3 col-12 border border-1 rounded bg-light 
        
         p-3'>
        <div className='mb-4'>
            <img className='img-fluid' src={img} alt="service-img" />
        </div>
        <h3>{name}</h3>
        <p>{}</p>
        {/* <button className="btn btn-warning">Details</button> */}
    </div>
    );
};

export default Department;