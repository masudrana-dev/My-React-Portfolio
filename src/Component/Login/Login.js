import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin/SocialLogin';
import { Fade } from 'react-reveal';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase_ini';
import { useRef } from 'react';
import Loading from '../Loading/Loading';

const Login = () => {
    const emailRef = useRef(" ");
    const passwordRef = useRef(' ');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/home';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigateRegister = event => {
        navigate('/registor')
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <div>
            <p className='text-white'>error:{error?.message}</p>
        </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
        console.log(email, password)
    }
    return (
        <Fade cascade>
            <div className='bg-slate-500 w-50 mx-auto p-5 text-white register-form'>
                <h1 className='text-center text-xl font-bold mb-3'>Please Login</h1>
                <Form className=' mx-auto' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    {errorElement}
                    <Button type="submit" className='btn btn-primary'>
                        Submit
                    </Button>
                    <SocialLogin></SocialLogin>
                </Form>

                <p className=''>New to Genius Car ? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            </div>
        </Fade>

    );
};

export default Login;