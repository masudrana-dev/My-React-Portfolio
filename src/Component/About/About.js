import React from 'react';
import { Fade } from 'react-reveal';
import img from '../../img-01.JPG'
import './About.css'


const About = () => {
    return (
        <Fade cascade>
            <div className='flex justify-center text-white details-part mt-20 md:mt-40 '>
                <div className='mr-5  w-[300px] md:w-auto'>
                    <img src={img} alt="" />
                </div>
                <div className="details ">
                    <h1>Hello , I am Masud Rana</h1> <br />
                    <p className='details-text'>My name is Masud Rana .
                        I am now studing in CSE under National University Bagladesh. Now I am a learner of programming hero . I want to be a full stacki developer .</p>
                </div>
            </div>
        </Fade>
    );
};

export default About;