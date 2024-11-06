import React from 'react';

const Works = () => {
    return (
        <div name='projects' className='w-full min-h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl mt-10 font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Projects
                    </p>
                    <p className='py-6 text-2xl '>Check out some of my most recent work</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundColor: '#f2e9e4' }}
                        className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div relative transform transition-transform duration-300 hover:scale-105'
                    >
                        {/* Default Title */}
                        <div
                            className='absolute text-center text-2xl font-bold text-[#2c2d47] tracking-wider group-hover:opacity-0 transition-opacity duration-300'>
                            Face Mask Detection
                        </div>
                        {/* Hover Effects */}
                        <div
                            className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col transition-opacity duration-300 p-4'>
                            <span className='text-lg font-bold text-white tracking-wider text-center'>
                                Face Mask Detection using YOLO11 and Streamlit
                            </span>
                            <p className='text-center mt-2 text-black'>This application uses YOLO11 to detect face masks in images
                                😷</p>
                            <div className='pt-3 text-center'>
                                <a href='https://face-mask-det.streamlit.app/' target="_blank">
                                    <button
                                        className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/ateebkhan96/Face-Mask-Detection' target="_blank">
                                    <button
                                        className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundColor: '#f2e9e4' }}
                        className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div relative transform transition-transform duration-300 hover:scale-105'
                    >
                        {/* Default Title */}
                        <div
                            className='absolute text-center text-2xl font-bold text-[#2c2d47] tracking-wider group-hover:opacity-0 transition-opacity duration-300'>
                            Hand Tracking
                        </div>
                        {/* Hover Effects */}
                        <div
                            className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col transition-opacity duration-300 p-4'>
                            <span className='text-lg font-bold text-white tracking-wider text-center'>
                                Hand Tracking using MediaPipe
                            </span>
                            <p className='text-center mt-2 text-black'>Real-time Hand detection and tracking using Mediapipe and
                                OpenCV.</p>
                            <div className='pt-3 text-center'>
                                {/*<a href='/'>*/}
                                {/*  <button*/}
                                {/*      className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>*/}
                                {/*    Demo*/}
                                {/*  </button>*/}
                                {/*</a>*/}
                                <a href='https://github.com/ateebkhan96/HandTracking' target="_blank">
                                    <button
                                        className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundColor: '#f2e9e4' }}
                        className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div relative transform transition-transform duration-300 hover:scale-105'
                    >
                        {/* Default Title */}
                        <div
                            className='absolute text-center text-2xl font-bold text-[#2c2d47] tracking-wider group-hover:opacity-0 transition-opacity duration-300'>
                            Bird Classification (using CNN)
                        </div>
                        {/* Hover Effects */}
                        <div
                            className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col transition-opacity duration-300 p-4'>
                            <span className='text-lg font-bold text-white tracking-wider text-center'>
                                Bird Classification using Convolutional Neural Network (CNN)
                            </span>
                            <p className='text-center mt-2 text-black'>This project attempts to classify the 6 categories of birds
                                using Convolutional Neural Network</p>
                            <div className='pt-3 text-center'>
                                <a href='https://github.com/ateebkhan96/Bird-Classification-CNN' target='_blank'>
                                    <button
                                        className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Other one */}
                    <div
                        style={{ backgroundColor: '#f2e9e4' }}
                        className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div relative transform transition-transform duration-300 hover:scale-105'
                    >
                        {/* Default Title */}
                        <div
                            className='absolute text-center text-2xl font-bold text-[#2c2d47] tracking-wider group-hover:opacity-0 transition-opacity duration-300'>
                            Oil Spill Analysis
                        </div>
                        {/* Hover Effects */}
                        <div
                            className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col transition-opacity duration-300 p-4'>
                            <span className='text-lg font-bold text-white tracking-wider text-center'>
                                Oil Spill Analysis
                            </span>
                            <p className='text-center mt-2 text-black'>This projects does Exploratory Data Analysis on Oil Spill
                                Data</p>
                            <div className='pt-3 text-center'>
                                {/*<a href='/'>*/}
                                {/*  <button*/}
                                {/*      className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>*/}
                                {/*    Demo*/}
                                {/*  </button>*/}
                                {/*</a>*/}
                                <a href='https://www.kaggle.com/code/ateebkhan/oil-spill-analysis/notebook' target="_blank">
                                    <button
                                        className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*END*/}
                    <div
                        style={{ backgroundColor: '#f2e9e4' }}
                        className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div relative transform transition-transform duration-300 hover:scale-105'
                    >
                        {/* Default Title */}
                        <div
                            className='absolute text-center text-2xl font-bold text-[#2c2d47] tracking-wider group-hover:opacity-0 transition-opacity duration-300'>
                            Text Recognition
                        </div>
                        {/* Hover Effects */}
                        <div
                            className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col transition-opacity duration-300 p-4'>
                            <span className='text-lg font-bold text-white tracking-wider text-center'>
                                Text Detection and Recognition using EasyOCR
                            </span>
                            <p className='text-center mt-2 text-black'>This project attempts a simple implementation of text detection
                                and recognition using the EasyOCR library.</p>
                            <div className='pt-3 text-center'>
                                {/*<a href='/'>*/}
                                {/*  <button*/}
                                {/*      className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>*/}
                                {/*    Demo*/}
                                {/*  </button>*/}
                                {/*</a>*/}
                                <a href='https://github.com/ateebkhan96/Text-Detection-and-Recognition-using-EasyOCR' target="_blank">
                                    <button
                                        className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End */}
                    <div
                        style={{ backgroundColor: '#f2e9e4' }}
                        className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div relative transform transition-transform duration-300 hover:scale-105'
                    >
                        {/* Default Title */}
                        <div
                            className='absolute text-center text-2xl font-bold text-[#2c2d47] tracking-wider group-hover:opacity-0 transition-opacity duration-300'>
                            Python (Flask) Login Site
                        </div>
                        {/* Hover Effects */}
                        <div
                            className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col transition-opacity duration-300 p-4'>
                            <span className='text-lg font-bold text-white tracking-wider text-center'>
                                Login site using Python and MySQL
                            </span>
                            <p className='text-center mt-2 text-black'>Using Python-Flask and MySQL to create a simple register, login and dashbord web application</p>
                            <div className='pt-3 text-center'>
                                {/*<a href='/'>*/}
                                {/*  <button*/}
                                {/*      className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>*/}
                                {/*    Demo*/}
                                {/*  </button>*/}
                                {/*</a>*/}
                                <a href='https://github.com/ateebkhan96/Python-Login-Site' target="_blank">
                                    <button
                                        className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-gray-900 font-bold text-lg hover:bg-cyan-600 transition-colors duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End */}
                </div>
            </div>
        </div>
    )
        ;
};

export default Works;
