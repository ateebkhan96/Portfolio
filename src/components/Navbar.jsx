import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill, BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[40px] rounded-b-full flex justify-center items-center px-4 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-900 opacity-90 text-gray-300
        shadow-lg  hover:shadow-yellow-100/70 duration-500 z-50'>
            {/* Menu */}
            <ul className='hidden md:flex gap-x-8 text-white text-[18px]'>
                <li>
                    <Link className={`hover:text-[#FFB6C1]`} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={`hover:text-[#FFB6C1]`} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link className={`hover:text-[#FFB6C1]`} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link className={`hover:text-[#FFB6C1]`} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
            </ul>
            {/* Three Lines */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul
                className={
                    !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;