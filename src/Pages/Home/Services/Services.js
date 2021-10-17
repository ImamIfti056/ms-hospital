import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {

    const [services, setServices] = useState({});

    useEffect( () => {
        fetch('./myServices.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='container text-center'>
            <h1 className='fs-1 my-5'>
                Our Services
            </h1>
            <div className="row g-3 mb-5">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;