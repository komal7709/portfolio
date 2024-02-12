import React from 'react'
import { RiUserSearchFill } from "react-icons/ri";


const Skills = () => {
    return <>
        <div id='skills' className='py-20 px-14'>
            <div className="text-center">
                <h1 className='font-bold text-lg my-4 text-blue-500'>What I Offer?</h1>
                <h1 className='text-5xl font-bold my-4'>My Skills</h1>
                <h1 className='text-gray-400 font-semibold'>There are many variations of passages of Lorem Ipsum available</h1>
                <h1 className='text-gray-400 font-semibold'> but  the majority have suffered alteration in some form.</h1>
            </div>


            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-4 sm:py-8 md:py-12 lg:py-14'>
                <div className="group card bg-base-100 shadow-xl py-8 hover:bg-blue-500 hover:text-white">
                    <figure>
                        <span className='group-hover:bg-white group-hover:text-blue-500 p-3 sm:p-4 bg-blue-500 text-white rounded-full'><RiUserSearchFill size={40} /></span>
                    </figure>
                    <div className="card-body text-center">
                        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-xl'>User Research</h1>
                        <h1 className='text-sm sm:text-base md:text-lg lg:text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula vel in.</h1>
                    </div>
                </div>


                <div className="group card bg-base-100 shadow-xl py-8 hover:bg-blue-500 hover:text-white">
                    <figure>
                        <span className='group-hover:bg-white group-hover:text-blue-500 p-3 sm:p-4 bg-blue-500 text-white rounded-full'><RiUserSearchFill size={40} /></span>
                    </figure>
                    <div className="card-body text-center">
                        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-xl'>User Research</h1>
                        <h1 className='text-sm sm:text-base md:text-lg lg:text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula vel in.</h1>
                    </div>
                </div>


                <div className="group card bg-base-100 shadow-xl py-8 hover:bg-blue-500 hover:text-white">
                    <figure>
                        <span className='group-hover:bg-white group-hover:text-blue-500 p-3 sm:p-4 bg-blue-500 text-white rounded-full'><RiUserSearchFill size={40} /></span>
                    </figure>
                    <div className="card-body text-center">
                        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-xl'>User Research</h1>
                        <h1 className='text-sm sm:text-base md:text-lg lg:text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula vel in.</h1>
                    </div>
                </div>


                <div className="group card bg-base-100 shadow-xl py-8 hover:bg-blue-500 hover:text-white">
                    <figure>
                        <span className='group-hover:bg-white group-hover:text-blue-500 p-3 sm:p-4 bg-blue-500 text-white rounded-full'><RiUserSearchFill size={40} /></span>
                    </figure>
                    <div className="card-body text-center">
                        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-xl'>User Research</h1>
                        <h1 className='text-sm sm:text-base md:text-lg lg:text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula vel in.</h1>
                    </div>
                </div>

            </div>

        </div>
    </>
}

export default Skills