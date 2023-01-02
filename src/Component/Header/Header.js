import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../firebase_ini';
import "./Header.css"

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSingout = () => {
        signOut(auth);
    }
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
                    <Link to='/gallery'> Gallery</Link>
                </div>
                <div className="sub-btn text-white bg-orange-500 hidden md:block">
                    {
                        user ?
                            <button className='font-bold' onClick={handleSingout}>Sign Out</button>
                            :
                            <h1 className='font-bold'><Link to='/login'>Login</Link></h1>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Header;