import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';

const Departments = () => {

    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch('./myDepartments.JSON')
        .then(res => res.json())
        .then(data => setDepartments(data))
        .catch(error => console.log(error))
    }, [])
    console.log(departments)
    return (
        <div className='container text-center'>
          <h1 className='fs-1 my-5'>
                Our Departments
            </h1>
            <div className="row g-3 mb-5">
            {
                departments.map(department => <Department
                key={department.id}
                department={department}
                ></Department>)
            }
            </div>  
        </div>
    );
};

export default Departments;