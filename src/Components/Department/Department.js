import React from 'react';
import './Department.css';

const Department = (props) => {
    const {img, name} = props.department;
    return (
        <div className='dept mx-auto'>
            <h4>{name}</h4>
            <hr />
            <div>
                <img src={img} className='img-fluid' alt="department-img" />
            </div>
        </div>
    );
};

export default Department;