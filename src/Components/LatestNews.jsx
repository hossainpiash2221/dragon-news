import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-200 p-2'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1 ' >Latest</p>
           <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
            <Link to='/news'>
           piash Lorem ipsum dolor sit amet consectetur </Link>
            <Link to='/news'>
           kabbo Lorem ipsum dolor sit amet consectetur </Link>
            <Link to='/news'>
         amjad   Lorem ipsum dolor sit amet </Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;