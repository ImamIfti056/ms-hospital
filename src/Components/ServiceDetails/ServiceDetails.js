import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('/myServices.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(error => console.log(error))
    },[services])

    let service = services.find(s => s.id == serviceId);

    return (
        <div className='container py-5'>
            <div className="card w-50 mx-auto p-2">
                <div>
                    <img src={service?.img} alt="service-img" className="img-fluid w-100" />
                </div>
                <div className="card-text py-5 text-center">
                    <h3 className='page-title mb-3'>{service?.name}</h3>
                    <p>{service?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;