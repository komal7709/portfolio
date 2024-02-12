"use client"
import { addContact } from '@/lib/actions'
import React from 'react'


const Contact = () => {
    return <>
        <div id='contact'>
            <div className="text-center">
                <h1 className='font-bold text-xl my-4 text-blue-500'>Contact With Me</h1>
                <h1 className='text-3xl font-bold my-4 sm:text-3xl lg:text-5xl'>Have an Project in Mind?</h1>
                <h1 className='text-gray-400 font-semibold'>There are many variations of passages of Lorem Ipsum available</h1>
                <h1 className='text-gray-400 font-semibold'> but  the majority have suffered alteration in some form.</h1>
            </div>
            <form action={addContact} >


                <div className='p-6 sm:p-10 md:px-16 lg:px-32 xl:px-48'>
                    <div className='flex flex-col lg:flex-row gap-6 my-4'>
                        <input name='fname' type="text" placeholder="Enter Your Name" className="input input-bordered w-full focus:ring focus:ring-primary lg:w-1/2 my-2 lg:my-0" />
                        <input name='compnay' type="text" placeholder="Company (Optional)" className="input input-bordered w-full focus:ring focus:ring-primary lg:w-1/2 my-2 lg:my-0" />
                    </div>
                    <div className='flex flex-col lg:flex-row gap-6 my-4'>
                        <input name='email' type="text" placeholder="Enter Your Email Here" className="input input-bordered w-full focus:ring focus:ring-primary lg:w-1/2 my-2 lg:my-0" />
                        <input name='mobile' type="text" placeholder="Phone Number" className="input input-bordered w-full focus:ring focus:ring-primary lg:w-1/2 my-2 lg:my-0" />
                    </div>
                    <div>
                        <textarea name='messge' className="textarea textarea-bordered w-full h-28 my-4 lg:my-4 focus:ring focus:ring-primary" placeholder="Tell me about your project"></textarea>
                    </div>

                </div>

                <div className='text-center pb-11'>
                    <button type='submit' className="btn btn-primary rounded-full text-white px-10">Contact me</button>
                </div>
            </form>

        </div>
    </>
}

export default Contact