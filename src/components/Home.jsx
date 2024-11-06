import React from "react";
import { HiArrowNarrowRight, HiArrowRight } from "react-icons/hi";
import me from '../assets/me.png'
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
import { Link } from "react-scroll";
import { CgFileDocument } from "react-icons/cg";

const Home = () => {
    const iconSize = 25;
    const containerSize = 'w-11 h-11';
    return (
        <div name='home' className="h-screen w-full">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 ">
                <div className="flex flex-col justify-center h-full">
                    <div className="flex flex-col sm:flex-row mt-14 items-center sm:items-baseline text-3xl md:text-7xl sm:text-5xl font-bold text-white">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl">Hi <span className="wave-animation -ml-4 mr-0 mx-2 img waving hand">👋</span>, I'm</h2>
                        <h2 className='name-title text-5xl md:text-8xl sm:text-5xl ml-5 hover:text-yellow-400'>Ateeb Khan</h2>
                    </div>
                    <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center text-gray-500 py-4">
                        Machine Learning Engineer
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-gray-500 py-4 -mt-4">
                        Mahrashtra, India
                    </p>
                    {/* Social Icons */}
                    <div className='flex mt-4 justify-center items-center space-x-4 mb-4'>
                        <a className={`flex justify-center items-center ${containerSize} hover:scale-150  duration-300 bg-blue-600 rounded-full`}
                            href='https://www.linkedin.com/in/ateebk/' target="_blank"
                            title='LinkedIn'>
                            <FaLinkedin size={iconSize} className='text-gray-300' />
                        </a>
                        <a className={`flex justify-center items-center ${containerSize} hover:scale-150 duration-300 bg-[#333333] rounded-full`}
                            href='https://github.com/ateebkhan96' target="_blank"
                            title='GitHub'>
                            <FaGithub size={iconSize} className='text-gray-300' />
                        </a>
                        <a className={`flex justify-center items-center ${containerSize} hover:scale-150 duration-300 bg-[#6fc2b0] rounded-full`}
                            href="mailto:ateebkhan669+port@gmail.com" target="_blank"
                            title='Email'>
                            <HiOutlineMail size={iconSize} className='text-gray-300' />
                        </a>
                        <a
                            className={`flex justify-center items-center ${containerSize} rounded-full hover:scale-150 duration-300 bg-[#565f69]`}
                            href='https://drive.google.com/file/d/1ur-2CbSvvI0pZeXeQW4zO-bN_F-d5VhX/view?usp=sharing/' target='_blank'
                            title='Resume' // This attribute adds the tooltip
                        >
                            {/*<BsFillPersonLinesFill size={iconSize} className='text-gray-300'/>*/}
                            <CgFileDocument size={iconSize} className='text-gray-300' />
                        </a>


                    </div>


                    {/*About Me*/}
                    <div className='flex justify-center mt-4'>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            About Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Home;