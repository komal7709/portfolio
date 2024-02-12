import Image from 'next/image'
import React from 'react'
import hero from '../public/hero-image.png'

const Hero = () => {
    return <>
        <div id='home' className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
            {/* Content Section */}
            <div className='px-14 sm:mt-10 md:mt-10 lg:mt-0 mb-8 md:mb-0'>
                <h1 className='text-sky-500 font-semibold'>Hey There 👋 I am</h1>
                <h1 className='text-5xl my-2 font-bold'>Daniel Jack</h1>
                <h1 className='font-normal my-4 text-xl'> <span className='font-extralight'>Professional</span> Graphic Designer</h1>
                <h1 className='text-base text-gray-400 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aenean interdum consequat convallis.</h1>

                <div className='flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-8'>
                    <button className="btn btn-primary rounded-full">Contact Me</button>
                    <button className="btn btn-neutral rounded-full">Learn More</button>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative lg:right-0 md:right-0">
                {/* Half circular background */}
                <div className="bg-sky-500 rounded-ee-full h-96 w-[100%] absolute bottom-0 -right-64 rotate-180 transform -translate-x-1/2"></div>

                {/* Image */}
                <Image className='relative z-10 bottom-0 md:right-0 md:bottom-auto' src={hero} alt="Hero Image" />
            </div>
        </div>
    </>
}

export default Hero