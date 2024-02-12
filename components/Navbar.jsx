import Link from 'next/link';
import React from 'react';
// import resume from '@/pablic/Resume.pdf';
import { BsList } from "react-icons/bs";

const Navbar = () => {

    return (
        <div className="navbar bg-slate-200 px-4">
            {/* Navbar start */}
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Portfolio</a>
            </div>
            {/* download cv btn start  */}
            <a  href='../resume.pdf' className='p-4 rounded-md bg-sky-500 text-white hidden lg:inline lg-px-14'>pdf</a>
            {/* download cv btn end  */}

            {/* Navbar center */}
            <div className="navbar-center">
                <div className='flex gap-2 sm:gap-2 lg:gap-16 text-base '>
                    <Link href='/#home' className='hover:text-blue-600 cursor-pointer font-semibold hidden lg:inline'>Home</Link>
                    <Link href='/#about' className='hover:text-blue-600 cursor-pointer font-semibold hidden lg:inline'>About</Link>
                    <Link href='/#skills' className='hover:text-blue-600 cursor-pointer font-semibold hidden lg:inline'>Skills</Link>
                    <Link href='/#work' className='hover:text-blue-600 cursor-pointer font-semibold hidden lg:inline'>Work</Link>
                    <Link href='/#resume' className='hover:text-blue-600 cursor-pointer font-semibold hidden lg:inline'>Resume</Link>
                    <Link href='/contact' className='hover:text-blue-600 cursor-pointer font-semibold hidden lg:inline'>Contact</Link>
                </div>
            </div>

            {/* Navbar end */}
            <div className="navbar-end">
                {/* Download CV button (visible on large screens) */}
                <button className="btn bg-sky-500 text-white hidden lg:inline lg:px-14">Download CV</button>

                {/* Menu icon (visible on medium and small screens) */}
                <h1 className='lg:hidden sm:inline'>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"><BsList size={30} /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href='/' className='btn btn-ghost'>Home</Link></li>
                            <li><Link href='/about' className='btn btn-ghost'>About</Link></li>
                            <li><Link href='/' className='btn btn-ghost'>Skills</Link></li>
                            <li><Link href='/' className='btn btn-ghost'>Work</Link></li>
                            <li><Link href='/' className='btn btn-ghost'>Resume</Link></li>
                            <li><Link href='/' className='btn btn-ghost'>Contact</Link></li>
                        </ul>
                    </div>
                </h1>
            </div>
        </div>
    );
}

export default Navbar;
