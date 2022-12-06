import React from 'react';
import { Fade } from 'react-reveal';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import './Registration.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate(" ")

    const navigteLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <Fade cascade>
            <div className='register-form bg-slate-500 text-white mx-auto rounded p-3'>
                <h1 className='font-semibold text-xl mb-2 '>Plese Register</h1>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" placeholder='Enter your name' className='rounded p-2' /> <br />
                    <input type="email" name="email" placeholder='Enter your email' className='rounded p-2' /> <br />
                    <input type="password" name="password" placeholder='Enter you password' className='rounded p-2' /> <br />
                </form>
                <button type='submit' className='submit'>Submit</button>
                <p>Already Registered ? <Link to='/login' onclick={navigteLogin}>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </Fade>
    );
};

export default Registration;