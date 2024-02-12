import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const About = () => {
    return <>
        <div id='about' className='px-14 flex flex-col sm:flex-col md:flex-col lg:flex-row lg:gap-20 py-8 sm:py-8 md:py-32'>
            <div className='lg:w-1/2 sm:mb-8 md:mb-8'>
                <h1 className='text-2xl text-blue-600 font-bold'>ABOUT ME</h1>
                <h1 className='text-5xl font-bold my-4'>Better design, <br /> better experience</h1>
                <h1 className='text-gray-400 text-base font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, <br />malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.</h1>
            </div>

            <div className='lg:w-1/2 mt-12 lg:mt-0 '>
                <h1 className='text-3xl font-bold mb-5'>Connect With Me</h1>
                <h1 className='text-gray-400 text-base font-semibold mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. <br /> Vestibulum sit amet urna placerat, tempor soloa <br /> demanium testi lor Aliq lorem vitae semper tempor.</h1>
                <h1 className='flex gap-6'>
                    <span className=' text-gray-400 border-gray-300 border-2 rounded-full bg-white p-2 '><FaFacebook size={24} /></span>
                    <span className=' text-gray-400 border-gray-300 border-2 rounded-full bg-white p-2 '><FaTwitter size={24} /></span>
                    <span className=' text-gray-400 border-gray-300 border-2 rounded-full bg-white p-2 '><FaLinkedin size={24} /></span>
                    <span className=' text-gray-400 border-gray-300 border-2 rounded-full bg-white p-2 '><FaYoutube size={24} /></span>
                </h1>
            </div>
        </div>


    </>
}

export default About