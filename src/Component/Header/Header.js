import React from 'react';
import { Link } from 'react-router-dom'
import "./Header.css"
// import auth from '../../firebase-init'
// import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

const Header = () => {
    // const [user] = useAuthState(auth)
    // const [signOut, loading, error] = useSignOut(auth);
    // const handleSignOut = () => {
    //     signOut(auth)
    // }
    return (
        <nav className='py-10 px-20'>
            <div className='flex text-center md:justify-between'>
                <div className='logo text-3xl font-bold text-white hidden md:block'>

                    <h1 className=''>MASUD <span className="text-orange-500">RANA</span></h1>

                </div>
                <div className='font-bold text-xl menu text-white '>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/skill'>Skill</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className="sub-btn text-white bg-orange-500 hidden md:block">
                    {/* {
                        user ?
                            <h1 className='font-bold' onclick={handleSignOut}>Sign Out</h1>
                            :
                            <h1 className='font-bold'><Link to='/login'>Login</Link></h1>
                    } */}
                    <h1 className='font-bold'><Link to='/login'>Login</Link></h1>
                </div>
            </div>
        </nav>
    );
};

export default Header;