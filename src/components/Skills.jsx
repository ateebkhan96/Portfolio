import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";

import python from '../assets/icons8-python.svg';
import js from '../assets/icons8-javascript.svg';
import tf from '../assets/icons8-tensorflow.svg';
import keras from '../assets/Keras.svg';
import pytorch from '../assets/icons8-pytorch.svg';
import numpy from '../assets/icons8-numpy.svg';
import cv2 from '../assets/icons8-opencv.svg';
import sql from '../assets/mysql-original-wordmark.svg';
import flask from '../assets/flask.svg';
import django from '../assets/django.svg';

import st from '../assets/streamlit-logo-primary-colormark-darktext.png';
import bi from '../assets/icons8-power-bi-2021.svg';
import rt from '../assets/1174949_js_react js_logo_react_react native_icon.svg';
import html from '../assets/icons8-html.svg';
import css from '../assets/icons8-css.svg';
import pandas from '../assets/icons8-pandas.svg';
import docker from '../assets/icons8-docker.svg';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>Skills</p>
                    <p className='py-4 text-2xl text-center'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                </div>

                {/* Skills Icons */}
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4'>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={python} alt="Python" title='Python' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={js} alt="JavaScript" title='JavaScript' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={tf} alt="Tensorflow" title='Tensorflow' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-11 h-11 hover:scale-150 duration-300' src={keras} alt="Keras" title='Keras' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={pytorch} alt="PyTorch" title='PyTorch' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 bg-white rounded-2xl hover:scale-150 duration-300' src={sql} alt="MySQL" title='MySQL' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 invert hover:scale-150 duration-300' src={flask} alt="Flask" title='Flask' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={django} alt="Django" title='Django' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={numpy} alt="Numpy" title='Numpy' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={cv2} alt="OpenCV" title='OpenCV' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={pandas} alt="Pandas" title='Pandas' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={docker} alt="Docker" title='Docker' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={bi} alt="Power BI" title='Power BI' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={html} alt="HTML" title='HTML' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={css} alt="CSS" title='CSS' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 h-12 hover:scale-150 duration-300' src={rt} alt="React" title='React' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-28 h-10 bg-white rounded-2xl hover:scale-150 duration-300' src={st} alt="Streamlit" title='Streamlit' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
