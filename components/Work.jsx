import Image from 'next/image'
import React from 'react'
import p1 from '@/public/1.jpg'
import p2 from '@/public/2.jpg'
import p3 from '@/public/3.jpg'
import p4 from '@/public/4.jpg'

const Work = () => {
    return <>
        <div id='work' className='px-14 py-14'>
            <div className='text-center'>
                <h1 className='font-bold text-blue-500 text-lg'>Creative Portfolios</h1>
                <h1 className='text-5xl font-bold my-4'>Recent Works</h1>
                <h1 className='font-semibold text-gray-400 my-4'>There are many variations of passages of Lorem Ipsum available but <br /> the majority have suffered alteration in some form.</h1>
            </div>

            <div className='flex justify-center gap-3 py-10'>
                <button className="btn btn-ghost focus:ring focus:ring-primary px-8">All</button>
                <button className="btn btn-ghost focus:ring focus:ring-primary">Web Design</button>
                <button className="btn btn-ghost focus:ring focus:ring-primary">Graphics</button>
                <button className="btn btn-ghost focus:ring focus:ring-primary">App</button>
            </div>


            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <Image src={p1} alt="Image 1" className="w-full h-auto rounded-lg" />
                        <div className='p-4'>
                            <h1 className='font-bold text-xl my-2 hover:text-blue-500 cursor-pointer'>Startup landing page</h1>
                            <h1 className='text-gray-400 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</h1>
                        </div>
                    </div>
                    <div className="mb-4">
                        <Image src={p2} alt="Image 2" className="w-full h-auto rounded-lg" />
                        <div className='p-4'>
                            <h1 className='font-bold text-xl my-2 hover:text-blue-500 cursor-pointer'>Job portal landing page</h1>
                            <h1 className='text-gray-400 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</h1>
                        </div>
                    </div>
                    <div className="mb-4">
                        <Image src={p3} alt="Image 3" className="w-full h-auto rounded-lg" />
                        <div className='p-4'>
                            <h1 className='font-bold text-xl my-2 hover:text-blue-500 cursor-pointer'>SaaS landing page</h1>
                            <h1 className='text-gray-400 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</h1>
                        </div>
                    </div>
                    <div className="mb-4">
                        <Image src={p4} alt="Image 4" className="w-full h-auto rounded-lg" />
                        <div className='p-4'>
                            <h1 className='font-bold text-xl my-2 hover:text-blue-500 cursor-pointer'>Business & corporate template</h1>
                            <h1 className='text-gray-400 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</h1>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </>
}

export default Work