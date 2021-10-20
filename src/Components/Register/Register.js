import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    // states
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[user, setUser] = useState({});
    const[error, setError] = useState('');
    const[message, setMessage] = useState('');

    const auth = getAuth();
    const {signInUsingGoogle} = useAuth();

    // handling items
    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    // email verification
    const verifyEmail = () => {
        setMessage('Verification email is sent to your email address');
        sendEmailVerification(auth.currentUser)
        .then(result => console.log(result))
    }

    // handle registration
    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('form submitted');
        // console.log(name, email, password);
        // password strength validation
        if(password.length < 6){
            setMessage('');
            setError('*Password should be at least 6 characters long*');
            return;
        }
        if(!/(?=.*[!#$%&? "])/.test(password)){
            setMessage('');
            setError('*Password should contain at least one special character(!,?,#,&,$,%)');
            return;
        }
        // creating new user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setError('');
            // console.log(result.user);
            verifyEmail();
            setUserName(result.user);
        })
        .catch(error => {
            // console.log(error.message);
            setError(error.message);
        });

    }

    // updating information
    const setUserName = (user) => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => {
            // console.log(user.displayName)
        })
        .catch(error => {
            // console.log(error.message);
            setError(error.message);
        })
    }

    return (
        <div className='container'>
            <h2 className='my-5 text-center page-title'>Create New Account</h2>
            <hr />
            <form className='w-50 mx-auto mt-5' onSubmit={handleRegister}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-3">Name</label>
                    <input onBlur={handleName} type="text" className="form-control" placeholder='Your name' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fs-3">Email Address</label>
                    <input onBlur={handleEmail} type="email" className="form-control" placeholder='Your email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label fs-3">Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" placeholder='Password' required />
                </div>
                <div className="text-danger">{error}</div>
                <div className="text-success fs-5">{message}</div>
                    <div className='mt-4 w-50 mx-auto'>
                    <input type="submit" value='Submit' className='btn-login btn banner-btn w-100' />
                </div>
                <p className="text-secondary text-center mt-2">By continuing you are agreeing with our <u className="text-primary">terms &amp; conditions.</u></p>
            </form>
            <div className="mt-4 w-50 mx-auto">
                <button onClick={signInUsingGoogle} className="btn btn-outline-primary w-100">Continue with Google</button>
            </div>
            <div className='my-3 text-center'>
                <Link to="/login" className="fs-6 text-primary">Already have an account?</Link>
            </div>
        </div>
    );
};

export default Register;