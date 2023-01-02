import React from 'react';
import img01 from '../../Images/Personal/img-01.JPG'
// import img02 from '../../Images/Personal/img-02.JPG'
// import img03 from '../../Images/Personal//man-01.png'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='text-white'>
            {/* <div class="img-container">
                <img src={img01} alt="" class="img" />
            </div> */}

            <div class="img-animation my-10">
                <div class="mainImg">
                    <img src={img01} alt="" class="img" />
                </div>
            </div>
            <div class="img-animation">
                <div class="mainImg">
                    <img src={img01} alt="" class="img" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;