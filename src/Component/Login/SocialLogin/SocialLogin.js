import React from 'react';
import Google from '../../../Images/Social/google-logo-9808.png'
import Facebook from '../../../Images/Social/Facebook.png'
import Github from '../../../Images/Social/Github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase_ini';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, error1] = useSignInWithGithub(auth);

    let errorElement;

    if (error || error1) {
        errorElement = <div>
            <p className='text-white'>Error: {error?.message}</p>
        </div>
    }
    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{ height: '2px' }}></div>
                <p className='mt-2 px-2'>or</p>
                <div className='bg-primary w-50' style={{ height: '2px' }}></div>
            </div>
            <div className='button-style  w-50 d-block mx-auto'>
                {errorElement}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50  d-block mx-auto my-2 d-flex justify-content-center  '>
                    <img style={{ width: '30px' }} src={Google} alt="" />
                    <span className='px-2'>Google Sign in</span>
                </button>
                <button className='btn btn-info w-50  d-block mx-auto my-2 d-flex justify-content-center   '>
                    <img style={{ width: '30px' }} src={Facebook} alt="" />
                    <span className='px-2'>Facebook Sign in</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50  d-block mx-auto d-flex justify-content-center '>
                    <img style={{ width: '30px' }} src={Github} alt="" />
                    <span className='px-2'>Github Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;