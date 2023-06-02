
import { Carousel } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mb-20 '>
        <div className="lg:h-screen h-96 ">
            
                <div className="flex h-full items-center justify-center bg-[url('https://vsthemes.org/uploads/posts/2018-05/1582030854_marvel-vs-dc_vsthemes_ru-23.webp')] bg-cover bg-center dark:bg-gray-700 dark:text-white ">
                    <div className=' bg-[#05445E]/30 backdrop-brightness-75 p-5 w-full h-full flex  justify-center items-center flex-col'>
                        <h1 className='text-white text-2xl md:text-5xl font-bold '>Find Awesome Action Figure Collections Here</h1> <br />
                        <center><Link to="/AllToys"><button className='bg-blue lg:px-6 lg:py-3 p-2 rounded font-medium border-2 bg-blue-600 hover:bg-cyan-500 text-white  '>Explore!</button></Link></center>
                    </div>
                </div>
                
                
          
        </div>
    </div>
    );
};

export default Banner;