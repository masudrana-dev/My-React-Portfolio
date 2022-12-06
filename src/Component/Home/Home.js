import React from 'react';
import { Slide } from 'react-reveal';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'

const Home = () => {
    return (
        <div className='text-white'>
            <Slide left>
                <h1 className='font-bold text-6xl mt-20 md:mt-60'>MASUD <span className='text-orange-500'>RANA</span></h1>
            </Slide >
            <h5 className=' text-3xl text-gray-300 mt-10'>Creative
                <span className='font-bold text-white ml-3'>
                    <Typical
                        steps={['Developer', 500,
                            ' Desinger', 1000,
                            'UI/UX Desinger', 1000,
                            'Front-end-Developer', 1000
                        ]}
                        loop={10}
                        wrapper="b"
                    />
                </span></h5>
            <Link className='btn bg-orange-500 mt-10' to={'/login'}>Get in touch</Link>
        </div>
    );
};

export default Home;