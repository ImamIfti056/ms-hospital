import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';
import './GetTreatment.css';

const GetTreatment = () => {

    const [message, setMessage] = useState('');

    const {user} = useAuth();
    let name = user.displayName;
    let email = user.email;

    const submitForm = () => {
        setMessage('Form Submitted!');
    }

    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2 className='text-primary my-5 text-center'>Patients Information</h2>    
                <hr />
                <h4 className='mt-5 mb-4'><span className="fw-bold">Patients Name: </span>&nbsp;{name}</h4>
                <h4 className='mb-4'><span className="fw-bold">Email: </span>&nbsp;{email}</h4>

                <h4 className='mb-3'><span className="fw-bold">Choose a Department: </span></h4>
                <select class="form-select mb-3">
                    <option selected>Orthopaedic</option>
                    <option>Cardiology</option>
                    <option>Dental Surgery</option>
                    <option>Neurology</option>
                    <option>Gynecology</option>
                    <option>Anesthetics</option>
                    <option>Ear, Nose and Throat</option>
                </select>

                <h4 className='mb-3'><span className="fw-bold">Patients Problem: </span></h4>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Describe your problem...</label>
                </div>

                <h4 className='mb-3'><span className="fw-bold">Choose a Date: </span></h4>
                <input type="date" name="date"/>
                <div className="text-center text-success fs-5">{message}</div>
                <div className="my-5">
                    <button onClick={submitForm} className="w-25 btn banner-btn">Submit</button>
                </div>
                <div className='my-3 text-center'>
                <p>New Patient? &nbsp;<Link to="/register" className="fs-6 text-primary">Create New Account</Link></p>
            </div>
            </div>
        </div>
    );
};

export default GetTreatment;