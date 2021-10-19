import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {

    // states
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');
    const[message, setMessage] = useState('');
    const[isLoading, setIsLoading] = useState(true);

    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    // console.log('came from', location.state?.from);

    const auth = getAuth();

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            // console.log(result.user);
            setError('');
            setMessage('Login Successful!');
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
        
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
        .finally(() => setIsLoading(false))
    }
    // reset password
    const handleResetPassword = (e) => {
        e.preventDefault();
        setMessage('Reset link sent to your email');
        sendPasswordResetEmail(auth ,email)
        .then(result => {})
        .catch(error => setError(error.message))
    }

    return (
        <div className='login container'>
            <h2 className='my-5 text-center page-title'>Login</h2>
            <hr />
            <form className='w-50 mx-auto mt-5'  onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fs-3">Email Address</label>
                    <input onBlur={handleEmail} type="email" className="form-control" placeholder='Your email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label fs-3">Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" placeholder='Your password' />
                </div>
                <div className="text-danger">{error}</div>
                <div className="text-success fs-5">{message}</div>
                <div className='mt-4 mx-auto w-50'>
                    <input type="submit" value='Login' className='btn btn-login banner-btn w-100' />
                </div>
                <div className='res mt-4 mx-auto w-25'>
                    <button onClick={handleResetPassword} className="res w-100 btn-sm btn btn-outline-danger">Reset Password</button>
                </div>
            </form>
            <div className="mt-5 w-50 mx-auto">
                <button onClick={handleGoogleLogin} className="btn btn-outline-primary w-100">Continue with Google</button>
            </div>
            <div className='my-3 text-center'>
                <p>New User? &nbsp;<Link to="/register" className="fs-6 text-primary">Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;