import Link from 'next/link';
import React from 'react'
import { RxCaretLeft } from "react-icons/rx";
import details from '@/public/details.jpg'
import Image from 'next/image';
import Footer from '@/components/Footer';
import { FaFileAlt } from "react-icons/fa";



const Details = () => {
    return <>
        <div className='px-14 py-10'>
            <div className='flex justify-between py-10 flex-col lg:flex-row'>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>Portfolio Details Page</h1>
                    <h1 className='text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.</h1>
                </div>
                <div className='flex items-center gap-2 mt-10 lg:mt-0'>
                    <Link href='/' className='hover:text-blue-500 cursor-pointer text-gray-400'>Home</Link>
                    <span><RxCaretLeft /></span>
                    <span className='text-blue-500'>Portfolio Details</span>
                </div>
            </div>

            <div>
                <div className='flex flex-col lg:flex-row md:flex-row sm:flex-col'>

                    <div className='w-full lg:w-[65%]'>
                        <Image src={details} />
                        <h1 className='text-3xl font-bold my-6'>Professional graphics design</h1>
                        <p className='text-gray-400 font-semibold'>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                        </p>

                        <p className='text-gray-400 font-semibold my-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet. Ligula ullamcorper proin libero nunc consequat interdum varius. Quam pellentesque nec nam.
                        </p>


                        <div>
                            <h1 className='text-3xl font-bold'><span className='text-blue-500'>01.</span> Marketing solutions</h1>
                            <ul className='list-disc text-blue-500 px-6 font-semibold text-xl'>
                                <li>
                                    <h1 className='text-lg text-gray-400 font-semibold mt-10'>Consectetur adipiscing elit in voluptate velit.</h1>
                                </li>
                                <li>
                                    <h1 className='text-lg text-gray-400 font-semibold my-5'>Mattis vulputate cupidatat.
                                    </h1>
                                </li>
                                <li>
                                    <h1 className='text-lg text-gray-400 font-semibold my-5'>Vulputate enim nulla aliquet porttitor odio pellentesque</h1>
                                </li>
                                <li>
                                    <h1 className='text-lg text-gray-400 font-semibold my-5'>
                                        Ligula ullamcorper malesuada proin
                                    </h1>
                                </li>
                            </ul>

                            <h1 className='text-gray-400 text-lg font-semibold'>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                            </h1>


                            <h1 className='text-3xl font-bold my-10'><span className='text-blue-500'>02.</span>Branding solutions
                            </h1>

                            <p className='text-gray-400 text-lg font-semibold'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit door telium sieat amet.
                            </p>

                        </div>
                    </div>

                    <div className='w-full lg:w-[35%] mx-auto lg:ml-10 mt-10 lg:mt-0'>
                        <div className='w-full py-6 px-6 lg:px-16 lg:py-8 rounded-xl bg-blue-100 hover:scale-95'>
                            <h1 className='text-2xl font-bold mb-4'>Project Info</h1>
                            <div className='px-4'>
                                <p className='text-gray-500 mb-4'>Branding, Design</p>
                                <p className='text-gray-500 mb-4'>June 21, 2024</p>
                                <p className='text-gray-500 mb-4'>Business, Consulting</p>
                                <p className='text-gray-500 mb-4'>www.yoursite.com</p>
                                <p className='text-gray-500 mb-4'>New York, USA</p>
                            </div>
                        </div>

                        <div className='w-full py-6 mt-10 px-6 lg:px-16 lg:py-8 rounded-xl bg-blue-100 hover:scale-95'>
                            <h1 className='text-2xl font-bold mb-4'>Downoad Files</h1>
                            <button className="btn bg-blue-500 hover:bg-blue-500 text-white w-full my-4 "><FaFileAlt />main-project-file.zip</button>
                            <button className="btn bg-blue-500 hover:bg-blue-500 text-white w-full my-4"><FaFileAlt />design-file.zip</button>
                        </div>

                    </div>

                </div>
            </div>

        </div>


        <div>
            <Footer />
        </div>
    </>
}

export default Details