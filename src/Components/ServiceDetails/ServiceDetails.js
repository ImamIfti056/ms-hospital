import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('/myServices.json')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(error => console.log(error.message))
    },[services])

    let service = services.find(s => s.id == serviceId);

    return (
        <div className='container my-5'>
            <div className="row g-3 align-items-center">
                <div className='col-lg-6 col-12'>
                    <img src={service?.img} alt="" className="img-fluid" />
                </div>
                <div className='col-lg-6 col-12 text-center'>
                    <h2 className="text-danger mb-3">{service?.name}</h2>
                    <p className='fs-4'>{service?.description}</p>
                    <u className="text-primary">Read more...</u>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;