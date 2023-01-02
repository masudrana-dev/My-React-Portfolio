import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import './Registration.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';
import { Button } from 'react-bootstrap';
import Loading from '../Loading/Loading';

const Registration = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate(" ")

    const navigateLogin = () => {
        navigate('/login')
    }

    let errorElement;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <div>
            <p className='text-yellow-400'>Error:{error?.message}</p>
        </div>
        console.log(error);
    }
    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <Fade cascade>
            <div className='register-form bg-slate-500 text-white mx-auto rounded p-3'>
                <h1 className='font-semibold text-xl mb-2 '>Please Register</h1>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id='' placeholder='Enter your name' className=' text-black  rounded p-2' /> <br />
                    <input type="email" name="email" id='' placeholder='Enter your email' className=' text-black rounded p-2' required /> <br />
                    <input type="password" name='password' id='' placeholder='Enter your password' className='text-black rounded p-2' required />
                    <input onClick={() => setAgree(!agree)} type="checkbox" id='terms' name='terms' />
                    <label
                        className={`ps-2 ${agree ? ' ' : 'text-danger'}`}
                        htmlFor="terms">Accept all terms and condition of Genius Car</label> <br></br>
                    <Button disabled={!agree} type='submit'>submit</Button>
                </form>
                {errorElement}
                <p>Already Registered ? <Link to='/login' onclick={navigateLogin}>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </Fade>
    );
};

export default Registration;