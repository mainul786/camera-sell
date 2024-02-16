import React from 'react';
import banner from '../../../assest/banner.jpg';

const Banner = () => {
    return (
        <div className='text-white' style={{backgroundImage:`url(${banner})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <h1 className='text-8xl p-8 font-bold'>Sell your Camera</h1>
            <p className='text-2xl p-8'>We buy all types of photography and video equipment, computers, audio gear and musical instruments, optics, drones and much more! We accept older models, newer generations, and everything in between. Just find your item and describe its condition to get a quote.</p>
        </div>
    );
};

export default Banner;