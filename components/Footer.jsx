import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";





const Footer = () => {
    return <>
        <div  className='bg-blue-950 text-white py-20 px-6'>
            <div className='flex flex-col lg:flex-row sm:flex-col md:flex-col justify-evenly'>
                <div>
                    <h1 className='text-5xl font-bold mb-4'>Let's Talk!</h1>
                    <h1 className='text-2xl font-bold text-gray-400 mb-4'>Contact Info</h1>
                    <h1 className='text-gray-300 my-1 flex items-center gap-4'>
                        <TfiEmail />
                        vp461365@gmail.com
                    </h1>
                    <h1 className='text-gray-300 my-1 flex items-center gap-4'>
                        <CiLocationOn />
                        12 Hilton St, Manchester M1 1JF
                    </h1>
                    <h1 className='text-gray-300 mt-1 mb-4 flex items-center gap-4'>
                        <FaPhoneAlt />
                        +91 8080038540
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl font-bold mb-6'>What I Do?</h1>
                    <h1 className='text-gray-300 my-2'>The Studio</h1>
                    <h1 className='text-gray-300 my-2'>Sponsoring</h1>
                    <h1 className='text-gray-300 my-2'>Newsletter</h1>
                    <h1 className='text-gray-300 mt-2 mb-4'>Contact Us</h1>
                </div>

                <div>
                    <h1 className='text-xl font-bold mb-6'>News</h1>
                    <h1 className='text-gray-300 my-2'>Hot Stuff</h1>
                    <h1 className='text-gray-300 my-2'>Perfect Place</h1>
                    <h1 className='text-gray-300 my-2'>Vintage</h1>
                    <h1 className='text-gray-300 mt-2 mb-4'>Products</h1>
                </div>

                <div>
                    <h1 className='text-xl font-bold mb-6'>Quick Links</h1>
                    <h1 className='text-gray-300 my-2'>Style</h1>
                    <h1 className='text-gray-300 my-2'>Health</h1>
                    <h1 className='text-gray-300 my-2'>Relationship</h1>
                    <h1 className='text-gray-300 mt-2 mb-4'>Legal & Privacy</h1>
                </div>
            </div>

            <div>
                <hr className='border-blue-900 py-4' />
                <div className='flex justify-center gap-4'>
                    <span className='bg-gray-400 text-blue-950  rounded-full p-2'><FaFacebookF /></span>
                    <span className='bg-gray-400 text-blue-950  rounded-full p-2'><CiTwitter /></span>
                    <span className='bg-gray-400 text-blue-950  rounded-full p-2'><IoLogoInstagram /></span>
                    <span className='bg-gray-400 text-blue-950  rounded-full p-2'><FaLinkedinIn /></span>
                </div>
                <h1 className='text-center mt-3 text-gray-400'>All rights reserved by © Vishal.</h1>
            </div>

        </div>
    </>
}

export default Footer